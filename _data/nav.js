// Site navigation, read by _includes/partials/header.njk for both the desktop bars and the
// mobile menu. A section's `items` are links ({ label, href }) or dropdowns ({ label, links })
// or grouped dropdowns ({ label, groups: [{ label, links }] }).

const DOCS = "https://docs.spiderrockconnect.com/";

export default {
  docs: DOCS,
  docsSearch: `${DOCS}search/`,

  // Utility bar (top strip), right-aligned.
  utility: [
    { label: "Leadership", href: "/about-us/" },
    { label: "Careers", href: "/careers/" },
    { label: "News", href: "/updates/" },
    { label: "Contact", href: "/contact-us/" },
  ],

  // Main bar. `section` matches the first segment of the page URL.
  main: [
    { label: "Home", href: "/", section: "home" },
    { label: "Trading Platform", href: "/platform/", section: "platform" },
    { label: "Brokerage Services", href: "/exs/", section: "exs" },
    { label: "Data & Analytics", href: "/data/", section: "data" },
  ],

  // Section sub-nav strip. The first item is the section's home.
  sections: {
    platform: {
      home: { label: "Platform", href: "/platform/" },
      items: [
        { label: "Our Platform", links: [
          { label: "Order Management", href: "/platform/routing-algos/" },
          { label: "Risk Management", href: "/platform/risk-management/" },
          { label: "Options Analytics", href: "/platform/analytics-framework/" },
          { label: "Compliance Layer", href: "/platform/compliance-layer/" },
        ] },
        { label: "Tools & APIs", links: [
          { label: "Trading Tools", href: "/platform/gui-tools/" },
          { label: "Platform APIs", href: "/platform/srse/" },
          { label: "FIX Gateway", href: "/platform/fix-gateway/" },
        ] },
        { label: "News", href: "/updates/" },
        { label: "Contact", href: "/contact-us/" },
      ],
    },
    exs: {
      home: { label: "EXS Home", href: "/exs/" },
      items: [
        { label: "SpiderRock ATS", href: "/exs/ats/" },
        { label: "Regulatory", links: [
          { label: "Quarterly Order Reports", href: "/exs/regulatory/" },
        ] },
        { label: "Legal", links: [
          { label: "Legal Disclaimers", href: "/exs/legal-disclaimers/" },
          { label: "Privacy Statement", href: "/exs/privacy-statement/" },
          { label: "Terms of Use", href: "/exs/website-terms-of-use/" },
        ] },
        { label: "Documentation", href: `${DOCS}docs/next/SpiderRockConnectATS/SpiderRockConnectATS/`, external: true },
        { label: "Contact", href: "/contact-us/" },
      ],
    },
    data: {
      home: { label: "Data Home", href: "/data/" },
      items: [
        // Dividend Forecast and European Data are placeholder pages, hidden until they have content.
        { label: "Featured Products", links: [
          { label: "MLink API", href: "/data/spiderstream-market-data-api/" },
          { label: "Volatility Database (VOL2G)", href: "/data/historical-data-analytics/vol2g/" },
        ] },
        { label: "Product Offerings", wide: true, groups: [
          { label: "Real-Time Data", links: [
            { label: "Market Data Feeds", href: "/data/stocks-options-futures/" },
            { label: "Options Analytics", href: "/data/options-analytics/" },
          ] },
          { label: "Historical Data", links: [
            { label: "Options, Greeks & Stock Prices", href: "/data/historical-data-analytics/options-greeks-stock-prices/" },
            { label: "Option Features Dataset", href: "/data/option-features-dataset/" },
          ] },
          { label: "Volatility", links: [
            { label: "Volatility Surfaces", href: "/data/historical-data-analytics/volatility-surfaces/" },
            { label: "Volatility Database (VOL2G)", href: "/data/historical-data-analytics/vol2g/" },
          ] },
          { label: "MLink API", links: [
            { label: "SpiderStream / MLink API", href: "/data/spiderstream-market-data-api/" },
            { label: "Options Pricing Tool", href: "/data/options-pricing-tool/" },
          ] },
        ] },
        { label: "Resources", links: [
          { label: "Market Data Partners", href: "/data/market-data-partners/" },
          { label: "News & Events", href: "/data/updates/" },
          { label: "AWS & Infrastructure", href: "/data/aws-infrastructure/" },
        ] },
        { label: "Contact", href: "/contact-us/" },
      ],
    },
  },
};
