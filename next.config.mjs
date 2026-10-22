/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // --- Old Squarespace artist pages (root-level → /artists/slug) ---
      { source: "/craig-brown", destination: "/artists/craig-brown", permanent: true },
      { source: "/one-eyed-jon", destination: "/artists/one-eyed-jon", permanent: true },
      { source: "/krystian-schneider", destination: "/artists/krystian-schneider", permanent: true },
      { source: "/adam-defiglio", destination: "/artists/adam-defiglio", permanent: true },
      { source: "/tony-vyeda", destination: "/artists/tony-vyeda", permanent: true },
      { source: "/tony-j-vyeda", destination: "/artists/tony-vyeda", permanent: true },
      { source: "/abbie-fitzpatrick", destination: "/artists/abbie-fitzpatrick", permanent: true },
      { source: "/brad-delay", destination: "/artists/brad-delay", permanent: true },
      { source: "/mishka", destination: "/artists/mishka", permanent: true },
      { source: "/blane", destination: "/artists/blane", permanent: true },

      // --- Old Squarespace artists who are no longer at the shop ---
      { source: "/tyson-arndt", destination: "/artists", permanent: true },
      { source: "/joe-larralde", destination: "/artists", permanent: true },
      { source: "/joel-d", destination: "/artists", permanent: true },
      { source: "/jonathan-vallee", destination: "/artists", permanent: true },
      { source: "/lisa-marie", destination: "/artists", permanent: true },

      // --- Old WordPress-era artist pages ---
      { source: "/bradley-delay", destination: "/artists/brad-delay", permanent: true },
      { source: "/craig-browns-tattoos", destination: "/artists/craig-brown", permanent: true },
      { source: "/jesse-cone", destination: "/artists", permanent: true },
      { source: "/jessi-lawsons-tattoos", destination: "/artists", permanent: true },
      { source: "/claes-tattoos", destination: "/artists", permanent: true },

      // --- Old HTML artist pages (WordPress era) ---
      { source: "/brad_tattoo.html", destination: "/artists/brad-delay", permanent: true },
      { source: "/craig_tattoo.html", destination: "/artists/craig-brown", permanent: true },
      { source: "/jesse_tattoo.html", destination: "/artists", permanent: true },
      { source: "/dylan_tattoo.html", destination: "/artists", permanent: true },
      { source: "/tyson_tattoo.html", destination: "/artists", permanent: true },

      // --- Old Squarespace GWYG blog posts → single GWYG page ---
      { source: "/get-what-you-get-tattoos", destination: "/get-what-you-get", permanent: true },
      { source: "/get-what-you-get-tattoos/:path*", destination: "/get-what-you-get", permanent: true },
      { source: "/get-what-you-get/:path+", destination: "/get-what-you-get", permanent: true },

      // --- Old page paths ---
      { source: "/home", destination: "/", permanent: true },
      { source: "/location-and-contact", destination: "/contact", permanent: true },
      { source: "/historic-the-studio", destination: "/about", permanent: true },
      { source: "/the-red-herring-project", destination: "/about", permanent: true },
      { source: "/search", destination: "/", permanent: true },
      { source: "/theshop", destination: "/about", permanent: true },
      { source: "/bornweirdbook.html", destination: "/about", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },

      // --- Old feed/blog URLs ---
      { source: "/blog", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/atom.xml", destination: "/", permanent: true },
      { source: "/index.xml", destination: "/", permanent: true },
      { source: "/feeds/:path*", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
