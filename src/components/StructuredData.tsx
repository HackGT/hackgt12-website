export const StructuredData = () => {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "HackGT 12",
    "description": "Georgia Tech's annual 36-hour hackathon where students from across the world come together for a weekend in the fall to create innovative projects that show off their creativity and passion for development.",
    "startDate": "2025-09-26T18:00:00-04:00",
    "endDate": "2025-09-28T18:00:00-04:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Georgia Institute of Technology",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Atlanta",
        "addressRegion": "GA",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "HexLabs",
      "email": "hello@hexlabs.org",
      "url": "https://hexlabs.org"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-07-21T00:00:00-04:00",
      "url": "https://hack.gt"
    },
    "image": "https://hack.gt/thumbnail.webp",
    "url": "https://hack.gt"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "HexLabs",
    "description": "HexLabs is a student-led, nonprofit organization that throws large-scale hackathons to spread the opportunity for innovation to high school and college students. We partner with companies to cultivate an environment of enrichment and growth for our participants to be able to learn new skills and use them to bring new ideas to life.",
    "url": "https://hexlabs.org",
    "email": "hello@hexlabs.org",
    "foundingLocation": {
      "@type": "Place",
      "name": "Georgia Institute of Technology"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HackGT 12",
    "description": "Official website for HackGT 12 - Georgia Tech's annual hackathon",
    "url": "https://hack.gt",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://hack.gt/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is HackGT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HackGT is HexLabs' free, 36-hour, annual hackathon where students from across the world come together for a weekend in the fall to create innovative projects that show off their creativity and passion for development."
        }
      },
      {
        "@type": "Question",
        "name": "When does registration open?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Registration opens July 21st! This year, we have 2 rounds of applications: early bird and regular."
        }
      },
      {
        "@type": "Question",
        "name": "It's my first hackathon. Should I apply?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Experience is not required. Hackathons are open creative and learning environments for everyone. If you are new to hackathons, the Emerging track may be for you!"
        }
      },
      {
        "@type": "Question",
        "name": "Did you say \"FREE\"?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES! Once you're on GT's campus, HackGT 12 is completely free to participants and mentors thanks to our sponsors. Free food, free swag, free vibes."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(eventSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </>
  );
};