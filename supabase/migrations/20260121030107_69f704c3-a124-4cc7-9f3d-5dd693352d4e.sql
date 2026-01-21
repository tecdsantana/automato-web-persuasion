-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Service role can manage blog posts" ON public.blog_posts;

-- Note: Edge functions using the service role key bypass RLS entirely,
-- so we don't need a permissive policy for service role operations