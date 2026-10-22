import assert from "node:assert/strict";

const base = new URL(process.argv[2] || "http://127.0.0.1:3000");
assert(["127.0.0.1", "localhost"].includes(base.hostname), "Use a local production build");
const artists = ["abbie-fitzpatrick", "adam-defiglio", "blane", "brad-delay", "craig-brown", "krystian-schneider", "mishka", "one-eyed-jon", "tony-vyeda"];
let checks = 0;
async function get(path, status = 200, options = {}) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(15000), ...options });
  assert.equal(response.status, status, path);
  checks++;
  return response;
}
for (const path of ["/", "/about", "/artists", "/gallery", "/get-what-you-get", "/contact", "/faq", "/aftercare", "/privacy", "/tattoo-shop-portland", ...artists.map(slug => `/artists/${slug}`)]) {
  const html = await (await get(path)).text();
  assert.match(html, /<h1[ >]/, path);
  assert.doesNotMatch(html, /Application error: a server-side exception/, path);
}
const encodedArtist = await (await get("/artists/%63raig-brown")).text();
assert.match(encodedArtist, /Craig Brown/);
for (const slug of ["missing-artist", "craig%3Abrown", "craig%2Fbrown", "craig%25brown"]) await get(`/artists/${slug}`, 404);
const robots = await (await get("/robots.txt")).text();
assert.match(robots, /Content-Signal: search=yes, ai-input=yes, ai-train=yes/);
assert.match(await (await get("/llms.txt")).text(), /Historic Tattoo/);
assert.match(await (await get("/sitemap.xml")).text(), /artists\/craig-brown/);
const legacy = await get("/craig-brown", 308, { redirect: "manual" });
assert.equal(new URL(legacy.headers.get("location"), base).pathname, "/artists/craig-brown");
await get("/api/meta-events", 405);
const invalidEvent = await get("/api/meta-events", 400, { method: "POST", headers: { "Content-Type": "application/json" }, body: "{}" });
assert.deepEqual(await invalidEvent.json(), { error: "Missing required fields" });
const image = await get("/_next/image?url=%2Fhero%2Fshop-front.jpg&w=384&q=75", 200, { headers: { Accept: "image/avif,image/webp" } });
assert.match(image.headers.get("content-type"), /^image\/(avif|webp|jpeg)/);
assert((await image.arrayBuffer()).byteLength > 100);
console.log(`Production smoke passed: ${checks} HTTP checks, all nine artist pages, encoded/invalid slugs, image optimizer, metadata, redirects, and API validation.`);
