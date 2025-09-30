import React from "react";
import "./PricingPlansSection.css";

const plans = [
  {
    color: "green",
    title: "Basic Package",
    price: "₹7,999/month",
    subtitle: "Best for startups & local businesses",
    features: [
        "9 Grid Posts",
        "3 Reels",
      "Google My Business (GMB) Setup",
      "Social Media Marketing (SMM) Setup",
      "Local SEO",
      "4 Custom Graphics",
      "Google Ads (excluding ad budget)",
      "Website Creation (chargeable separately)",
    ],
    addOns: [],
  },
  {
    color: "yellow",
    title: "Premium Package",
    price: "₹15,999/month (₹12,000 for 1st Month)",
    subtitle: "Perfect for growing brands",
    features: [
      "24 Grid Posts",
      "6 Reels",
      "1 Influencer Reel",
      "Social Media Marketing – ₹4,999/-",
      "Performance Marketing – ₹3,999/-",
      "Performance Marketing (Meta Ads + Google Ads) (excluding ad budget)",
    ],
    addOns: [
      "Influencer Marketing – ₹999/-",
      "Advanced SEO – ₹2,999/-",
      "Google My Business – ₹999/-",
    ],
  },
  {
    color: "red",
    title: "Pro Package",
    price: "₹20,999/month (₹18,000 for 1st Month)",
    subtitle: "Ideal for established businesses & aggressive growth",
    features: [
      "30 Grid Posts",
      "12 Reels",
      "30 Story Posts",
      "Social Media Marketing – ₹9,999/-",
      "Performance Marketing – ₹2,999/-",
      "Performance Marketing (Meta Ads + Google Ads) (excluding ad budget)",
    ],
    addOns: [
      "Influencer Marketing – ₹2,999/-",
      "Advanced SEO – ₹2,999/-",
      "Google My Business – ₹1,999/-",
    ],
  },
];

const PricingPlansSection = () => (
  <section className="pricing-section">
    <h2>💼 DigiYuddh Pricing Plans</h2>
    <p>📊 Choose the Right Plan for Your Business Growth</p>
    <div className="plans-container">
      {plans.map((plan, idx) => (
        <div className={`plan-card ${plan.color}`} key={plan.title}>
          <h3>{plan.title}</h3>
          <div className="plan-price">{plan.price}</div>
          <div className="plan-subtitle">{plan.subtitle}</div>
          <ul className="plan-features">
            {plan.features.map((feature) => (
              <li key={feature}>✔ {feature}</li>
            ))}
          </ul>
          {plan.addOns.length > 0 && (
            <div className="plan-addons">
              <strong>Add-ons:</strong>
              <ul>
                {plan.addOns.map((addon) => (
                  <li key={addon}>➕ {addon}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default PricingPlansSection;
