import PriceCardsSection from "../../../../components/LandingPage/price/PriceCardsSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yadxy Pricing – Simple & Affordable Fee Tracking Plans for Tutors",
  description:
    "Choose the perfect Yadxy plan for your tuition classes. Affordable pricing for automated WhatsApp reminders, UPI payments, student management, and fee tracking.",
  keywords: [
    "yadxy pricing",
    "tuition fee tracker pricing",
    "fee management software cost",
    "coaching center software price",
    "automated fee reminder pricing",
    "tuition software subscription",
    "teacher fee tracking plans",
  ],

  alternates: {
    canonical: "https://yadxy.com/price",
  },

  openGraph: {
    title: "Yadxy Pricing – Simple & Affordable Fee Tracking Plans for Tutors",
    description:
      "Compare Yadxy plans and pick the best option for your coaching center or home tuition. Transparent pricing with powerful fee tracking features.",
    url: "https://yadxy.com/price",
    images: [
      {
        url: "https://yadxy.com/yadxy-social-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Yadxy pricing page for teachers and coaching centers",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yadxy Pricing – Simple & Affordable Fee Tracking Plans for Tutors",
    description:
      "Affordable plans for tutors and coaching centers. Access automated reminders, UPI payments, and fee tracking.",
    images: ["https://yadxy.com/yadxy-summary-large.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yadxy.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Pricing",
      item: "https://yadxy.com/price",
    },
  ],
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Yadxy Subscription Plans",
  description:
    "Affordable pricing for Yadxy tuition fee tracking software with automated reminders, UPI payments, and student management.",
  brand: {
    "@type": "Brand",
    name: "Yadxy",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5"
      },
      author: {
        "@type": "Person",
        name: "Verified User"
      }
    }
  ],
  offers: [
    {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      priceValidUntil: "2026-01-01",
      url: "https://yadxy.com/price",
      description: "Free plan for new tutors to try essential features.",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/ReturnNotPermitted"
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          name: "India"
        },
        doesNotShip: true
      }
    },
    {
      "@type": "Offer",
      price: "199",
      priceCurrency: "INR",
      priceValidUntil: "2026-01-01",
      url: "https://yadxy.com/price",
      description:
        "Premium plan with automated WhatsApp reminders, UPI payments, and fee management.",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/ReturnNotPermitted"
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          name: "India"
        },
        doesNotShip: true
      }
    }
  ],
};

const Price = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <section className="relative z-0 flex flex-col bg-[linear-gradient(to_bottom_right,#FFFFFF_0%,#E0ECFF_25%,#EAE2FF_50%,#F8E8DB_75%,#FFFFFF_100%)]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/image/noise.png')",
            backgroundSize: "128px",
            backgroundRepeat: "repeat",
          }}
        />
        <PriceCardsSection />
      </section>
    </>
  );
};

export default Price;
