// Centralized site configuration.
// Update contact details, navigation, and the enrollment link here as LDTA confirms more information.

export const siteConfig = {
  orgName: "LDTA",
  fullName: "Leisure Delite Travel Academy",
  tagline: "Explore • Learn • Lead",
  logo: "/images/ldta-logo.png",

  contact: {
    name: "Candi Jordan",
    email: "candashiapolk@gmail.com",
    // Please verify this number against LDTA's current contact information before launch.
    phone: "+16155437842",
    phoneDisplay: "(615) 543-7842",
  },

  // TODO (LDTA): Replace with the official enrollment / registration link once confirmed.
  // Until then, the "Get Enrollment Information" buttons route families to the Contact section.
  enrollmentUrl: "#contact",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About LDTA", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Camps & Activities", href: "#fall-camp" },
    { label: "For Parents", href: "#parents" },
    { label: "Contact", href: "#contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
