export const links = {
  register: "/signup",
  dashboard: "/dashboard",
  verifyEmail: "/verifyEmail",
  browseJob: "/marketplace",
};

interface Links {
    name: string;
    href: string;
  }
  
  export const company: Links[] = [
    {
      name: "About",
      href: "",
    },
    {
      name: "Careers",
      href: "",
    },
    {
      name: "Support",
      href: "",
    },
    {
      name: "Privacy Policy",
      href: "",
    },
    {
      name: "Terms of Service",
      href: "",
    },
  ];
  
  export const resources: Links[] = [
    {
      name: "FAQs",
      href: "",
    },
    {
      name: "Webinars",
      href: "",
    },
    {
      name: "Community Forum",
      href: "",
    },
  ];
  
  export const clients: Links[] = [
    {
      name: "Find Artisan",
      href: "",
    },
    {
      name: "Post a Job",
      href: "",
    },
    {
      name: "Help Center",
      href: "",
    },
  ];
  
  export const artisans: Links[] = [
    {
      name: "Create a Profile",
      href: "",
    },
    {
      name: "Artisan Resources",
      href: "",
    },
    {
      name: "Browse Job Listings",
      href: "",
    },
  ];

export const footerLinks = [
  { name: "Resources", links: resources },
  { name: "Company", links: company },
];
