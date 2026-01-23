import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BlogPostPayload {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  category?: string;
  tags?: string[];
  published?: boolean;
  webhook_secret?: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special chars
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Remove duplicate hyphens
    .trim();
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const webhookSecret = Deno.env.get("BLOG_WEBHOOK_SECRET");

    // Validate webhook secret - REQUIRED for security
    if (!webhookSecret) {
      console.error("BLOG_WEBHOOK_SECRET not configured");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Parse request body
    const payload: BlogPostPayload = await req.json();

    // Authenticate request with webhook secret
    if (!payload.webhook_secret || payload.webhook_secret !== webhookSecret) {
      console.error("Invalid or missing webhook secret in payload");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Validate required fields
    if (!payload.title || !payload.excerpt || !payload.content) {
      console.error("Missing required fields:", { 
        hasTitle: !!payload.title, 
        hasExcerpt: !!payload.excerpt, 
        hasContent: !!payload.content 
      });
      return new Response(
        JSON.stringify({ error: "Missing required fields: title, excerpt, content" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client with service role
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate slug if not provided
    const slug = payload.slug || generateSlug(payload.title);
    const timestamp = Date.now();
    const uniqueSlug = `${slug}-${timestamp}`;

    // Prepare blog post data
    const blogPostData = {
      title: payload.title,
      slug: uniqueSlug,
      excerpt: payload.excerpt,
      content: payload.content,
      cover_image: payload.cover_image || null,
      category: payload.category || "IA",
      tags: payload.tags || [],
      published: payload.published ?? true,
      published_at: payload.published ? new Date().toISOString() : null,
    };

    console.log("Creating blog post:", { title: blogPostData.title, slug: blogPostData.slug });

    // Insert blog post
    const { data, error } = await supabase
      .from("blog_posts")
      .insert(blogPostData)
      .select()
      .single();

    if (error) {
      console.error("Error inserting blog post:", error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Blog post created successfully:", data.id);

    return new Response(
      JSON.stringify({ success: true, data }),
      { status: 201, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
