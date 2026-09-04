import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = path.join(process.cwd(), "public/images");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

type Job = { name: string; size: string; prompt: string };

const STYLE =
  "professional architectural photography, warm inviting boutique hotel aesthetic, golden hour natural light, rich detail, high quality, photorealistic, shallow depth of field";

const jobs: Job[] = [
  {
    name: "hero-facade.png",
    size: "1536x768",
    prompt: `Exterior facade of a charming three-story boutique hotel in Ghana West Africa, mint sage green walls, white colonial-style cylindrical columns, black metal balcony railings, arched ground-floor porch, gabled roof, lush tropical palms around it, dusk twilight sky with warm lights glowing from windows, ${STYLE}`,
  },
  {
    name: "room-standard.png",
    size: "1344x768",
    prompt: `Cozy standard hotel room interior, warm neutral tones with purple accent cushions, comfortable queen bed with crisp white linens, wooden headboard, bedside lamps glowing softly, small window with sheer curtains, ${STYLE}`,
  },
  {
    name: "room-deluxe.png",
    size: "1344x768",
    prompt: `Elegant deluxe hotel room interior, plush king bed with layered bedding, deep purple and cream tones, accent armchair, hardwood floor, large window with garden view, modern reading lamps, ${STYLE}`,
  },
  {
    name: "room-suite.png",
    size: "1344x768",
    prompt: `Spacious hotel suite interior, separate seating area with sofa and coffee table, king bed in background, warm purple and beige palette, elegant drapery, chandelier, refined luxury, ${STYLE}`,
  },
  {
    name: "room-vip.png",
    size: "1344x768",
    prompt: `Luxurious VIP hotel suite, opulent king bed, dark wood furnishings, deep purple velvet headboard, gold accents, floor-to-ceiling windows with city view, ambient lighting, premium boutique luxury, ${STYLE}`,
  },
  {
    name: "room-executive.png",
    size: "1344x768",
    prompt: `Modern executive hotel room, sleek king bed, work desk with chair, minimalist decor with purple accent wall, contemporary lighting, city skyline through window, business traveler comfort, ${STYLE}`,
  },
  {
    name: "room-family.png",
    size: "1344x768",
    prompt: `Welcoming family hotel room, two queen beds with colorful cushions, child-friendly bright warm decor, sitting nook, large window, cheerful and comfortable, ${STYLE}`,
  },
  {
    name: "event-garden.png",
    size: "1344x768",
    prompt: `Beautiful outdoor event garden at a boutique hotel, manicured lawn, white chairs arranged in rows under floral arch, fairy string lights overhead, lush greenery and palms, wedding ceremony setup at dusk, ${STYLE}`,
  },
  {
    name: "conference-hall.png",
    size: "1344x768",
    prompt: `Modern hotel conference hall, rows of comfortable chairs facing a presentation stage with large screen, elegant purple accent lighting, professional AV setup, carpeted floor, ambient lighting, ${STYLE}`,
  },
  {
    name: "restaurant.png",
    size: "1344x768",
    prompt: `Elegant hotel restaurant interior, set dining tables with white linens and purple napkins, warm pendant lighting, large windows, wooden floors, plants, intimate fine dining ambiance, ${STYLE}`,
  },
  {
    name: "dish-local.png",
    size: "1024x1024",
    prompt: `Gourmet West African Ghanaian dish plated elegantly, jollof rice with grilled chicken and fried plantain, garnished with herbs, on a white ceramic plate, dark moody background, fine dining food photography, ${STYLE}`,
  },
  {
    name: "dish-continental.png",
    size: "1024x1024",
    prompt: `Continental breakfast platter, croissants, fresh fruit, eggs, bacon, coffee, elegantly arranged on marble table, bright morning light, fine dining food photography, ${STYLE}`,
  },
  {
    name: "dish-grill.png",
    size: "1024x1024",
    prompt: `Grilled seafood platter with prawns, fish fillet, lemon and herbs, elegant plating on dark slate plate, dramatic lighting, fine dining food photography, ${STYLE}`,
  },
  {
    name: "gallery-lobby.png",
    size: "1344x768",
    prompt: `Inviting hotel lobby interior, reception desk, comfortable lounge seating with purple accent chairs, marble floors, tropical plants, warm chandelier lighting, boutique charm, ${STYLE}`,
  },
  {
    name: "gallery-courtyard.png",
    size: "1344x768",
    prompt: `Tropical hotel courtyard, swimming pool with turquoise water, sun loungers, palm trees, sage green building facade in background, blue sky, midday, ${STYLE}`,
  },
  {
    name: "about-building.png",
    size: "1344x768",
    prompt: `Wide architectural view of a charming mint green three-story boutique hotel building in Ghana, white columns, black railings, arched porch, surrounded by tropical landscaping, daytime, ${STYLE}`,
  },
  {
    name: "news-1.png",
    size: "1344x768",
    prompt: `Hotel grand opening celebration, ribbon cutting at hotel entrance with staff, warm festive atmosphere, boutique hotel facade in background, ${STYLE}`,
  },
  {
    name: "news-2.png",
    size: "1344x768",
    prompt: `Elegant outdoor wedding reception setup in a hotel event garden, round tables with floral centerpieces, string lights at dusk, romantic ambiance, ${STYLE}`,
  },
  {
    name: "news-3.png",
    size: "1344x768",
    prompt: `Corporate conference event at hotel, business professionals networking in a bright modern conference hall, ${STYLE}`,
  },
  {
    name: "video-poster.png",
    size: "1536x768",
    prompt: `Aerial drone view of a boutique hotel property in Ghana at golden hour, mint green building with white columns, tropical gardens, swimming pool, warm sunset light, ${STYLE}`,
  },
];

async function main() {
  const zai = await ZAI.create();
  let done = 0;
  for (const job of jobs) {
    const outPath = path.join(OUT, job.name);
    if (fs.existsSync(outPath)) {
      done++;
      console.log(`[${done}/${jobs.length}] skip (exists): ${job.name}`);
      continue;
    }
    try {
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size as any,
      });
      const b64 = res.data[0].base64;
      fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
      done++;
      console.log(`[${done}/${jobs.length}] ok: ${job.name}`);
    } catch (e: any) {
      console.error(`[${done}/${jobs.length}] FAIL ${job.name}: ${e.message}`);
    }
  }
  console.log("IMAGE_GEN_DONE");
}

main().catch((e) => {
  console.error("FATAL", e);
  process.exit(1);
});
