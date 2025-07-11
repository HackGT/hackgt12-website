interface SEOMetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEOMetaTags = ({
  title = "HackGT 12",
  description = "This year, from September 26-28, we're hosting Georgia Tech's annual 36-hour hackathon, with over 1,500+ hackers from around the world.",
  image = "https://hack.gt/thumbnail.webp",
  url = "https://hack.gt",
  type = "website"
}: SEOMetaTagsProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="HackGT 12" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HackGT" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional meta tags */}
      <meta name="theme-color" content="#070045" />
      <link rel="canonical" href={url} />
    </>
  );
};