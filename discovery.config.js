
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'custom-theme',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: process.env.NEXT_PUBLIC_STORE_ID || "ecsonyb2cqa",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "USD",
      symbol: "$",
    },
    locale: "es-EC",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "ECU",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://ecsonyb2cqa.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/televisores%20y%20teatros%20en%20casa",
    search: "/s?q=Sony",
    pdp: "/xr-65x90l/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/xr-65x90l/p",
      collection: "/televisores%20y%20teatros%20en%20casa",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/xr-65x90l/p",
      collection: "/televisores%20y%20teatros%20en%20casa",
      collection_filtered: "/televisores%20y%20teatros%20en%20casa/?category-1=televisores%20y%20teatros%20en%20casa&brand=Sony&facets=category-1%2Cbrand%27",
      search: "/s?q=Sony",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://ecsonyb2cqa.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
