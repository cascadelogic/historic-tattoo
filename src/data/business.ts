export const business = {
  name: "Historic Tattoo",
  legalName: "Historic Tattoo",
  foundingYear: 2008,
  tagline: "Portland's home of traditional American tattooing since 2008.",

  phone: "(503) 236-3440",
  phoneRaw: "+15032363440",
  phoneHref: "tel:5032363440",
  email: "historictattoo@gmail.com",

  address: {
    street: "2001 SE 50th Ave",
    city: "Portland",
    state: "OR",
    zip: "97215",
    full: "2001 SE 50th Ave, Portland, OR 97215",
    neighborhood: "SE Portland, near SE Division",
  },

  geo: {
    lat: 45.5056,
    lng: -122.6082,
  },

  hours: {
    display: "Open Daily, 11am – 7pm",
    short: "11am–7pm",
    open: "11:00",
    close: "19:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  },

  social: {
    instagram: "https://www.instagram.com/historictattoo/",
    instagramHandle: "@historictattoo",
    yelp: "https://www.yelp.com/biz/historic-tattoo-portland",
    google: "https://maps.google.com/?q=Historic+Tattoo+Portland",
    wordpress: "https://historictattoopdx.wordpress.com/",
  },

  maps: {
    directions: "https://maps.google.com/?q=2001+SE+50th+Ave,+Portland,+OR+97215",
    embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.123!2d-122.6082!3d45.5056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a0a3d3b5c2ab%3A0x8e1f2e3d4c5b6a7!2sHistoric%20Tattoo!5e0!3m2!1sen!2sus!4v1700000000000",
  },

  reviews: {
    google: {
      rating: 4.8,
      count: 309,
      url: "https://maps.google.com/?q=Historic+Tattoo+Portland",
    },
    yelp: {
      rating: 4.5,
      count: 86,
      url: "https://www.yelp.com/biz/historic-tattoo-portland",
    },
    total: 395,
  },

  url: "https://historictattoo.com",
  logo: "https://historictattoo.com/logo.png",
} as const;
