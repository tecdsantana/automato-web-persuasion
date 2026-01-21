-- Create blog_posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  cover_image TEXT,
  category TEXT NOT NULL DEFAULT 'IA',
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (published posts only)
CREATE POLICY "Anyone can view published blog posts" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Create policy for service role to insert/update (for edge function)
CREATE POLICY "Service role can manage blog posts" 
ON public.blog_posts 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Create index for faster slug lookups
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Create index for published posts ordering
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published, published_at DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_blog_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_blog_updated_at();