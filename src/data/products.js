// Import all product images
import img1 from "../assets/imgs/products/1.jpg";
import img2 from "../assets/imgs/products/2.jpg";
import img3 from "../assets/imgs/products/3.jpg";
import img4 from "../assets/imgs/products/4.jpg";
import img5 from "../assets/imgs/products/5.jpg";
import img6 from "../assets/imgs/products/6.jpg";
import img7 from "../assets/imgs/products/7.jpg";
import img8 from "../assets/imgs/products/8.jpg";
import img9 from "../assets/imgs/products/9.jpg";
import img10 from "../assets/imgs/products/10.jpg";
import img11 from "../assets/imgs/products/11.jpg";
import img12 from "../assets/imgs/products/12.jpg";
import img13 from "../assets/imgs/products/13.jpg";
import img14 from "../assets/imgs/products/14.jpg";
import img15 from "../assets/imgs/products/15.jpg";
import img16 from "../assets/imgs/products/16.jpg";
import img17 from "../assets/imgs/products/17.jpg";
import img18 from "../assets/imgs/products/18.jpg";
import img19 from "../assets/imgs/products/19.jpg";
import img20 from "../assets/imgs/products/20.jpg";

export const products = [
  {
    id: 101,
    name: "Amigurumi Black Cat Charm",
    price: 14.99,
    originalPrice: 19.0,
    category: "textiles",
    description:
      "Handmade crochet black cat charm with big eyes and a cute green sprout. Perfect as a keychain or phone accessory.",
    longDescription:
      "This adorable amigurumi black cat charm is crocheted by hand using soft yarn and detailed stitching. It features large yellow eyes, tiny pink ears, and a small green sprout on its head. Attached securely to a metal clasp, it makes a perfect accessory for phones, bags, or keychains. Lightweight, durable, and irresistibly cute — an ideal gift for cat lovers and crochet enthusiasts.",
    images: [img1, img1, img1],
    artisan: {
      id: 31,
      name: "Tiny Paws Studio",
      bio: "Amigurumi artist specializing in miniature animal charms",
      location: "Barcelona, Spain",
      avatar: "https://i.pravatar.cc/150?img=31",
    },
    stock: 22,
    rating: 4.9,
    reviewCount: 18,
    featured: true,
    tags: ["crochet", "amigurumi", "keychain", "cat", "kawaii"],
    dimensions: "2 x 1.5 inches (without chain)",
    materials: "Cotton yarn, polyester filling, metal clasp",
  },
  {
    id: 102,
    name: "Crochet Mini Monstera Plant",
    price: 23.5,
    originalPrice: 29.0,
    category: "textiles",
    description:
      "Mini crochet monstera plant in a small pot. Adds greenery to any space without watering.",
    longDescription:
      "This charming handmade monstera plant is crocheted with fine cotton yarn, featuring the iconic split leaves that make the monstera so beloved. Each leaf is individually crafted and attached to a flexible stem placed in a crocheted pot. Perfect for desks, shelves, or gifts — a zero-maintenance way to bring a touch of nature indoors.",
    images: [img2, img2, img2],
    artisan: {
      id: 32,
      name: "Leaf & Loop",
      bio: "Crochet artist creating realistic miniature plants",
      location: "Austin, TX, USA",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    stock: 14,
    rating: 4.9,
    reviewCount: 24,
    featured: true,
    tags: ["crochet", "mini-plant", "monstera", "home-decor"],
    dimensions: "3 x 2 inches",
    materials: "Cotton yarn, polyester filling",
  },
  {
    id: 103,
    name: "Crochet Pinecone Autumn Set",
    price: 28.0,
    originalPrice: 34.0,
    category: "textiles",
    description:
      "Set of colorful crochet pinecones with pumpkins and acorns. Perfect for autumn seasonal décor.",
    longDescription:
      "A beautiful handcrafted set of crochet pinecones in warm fall colors — brown, orange, yellow, and cream — accompanied by miniature pumpkins and acorns. Each pinecone is carefully crocheted to mimic natural texture and shape. Ideal for autumn or Thanksgiving decoration, table centerpieces, or cozy home accents. Durable and reusable year after year.",
    images: [img3, img3, img3],
    artisan: {
      id: 33,
      name: "Autumn Yarn Works",
      bio: "Fiber artist crafting seasonal crochet decorations",
      location: "Madrid, Spain",
      avatar: "https://i.pravatar.cc/150?img=33",
    },
    stock: 12,
    rating: 4.8,
    reviewCount: 31,
    featured: true,
    tags: ["crochet", "pinecone", "autumn", "home-decor", "handmade"],
    dimensions: "2.5 x 2 inches each, set of 7 pieces",
    materials: "Cotton yarn, acrylic fiber",
  },
  {
    id: 104,
    name: "Pinecone Hedgehog Figurine",
    price: 19.99,
    originalPrice: 25.0,
    category: "mixed-materials",
    description:
      "Adorable hedgehog figurine made with a natural pinecone and handmade details. Perfect woodland décor piece.",
    longDescription:
      "This cute hedgehog combines natural pinecone scales for its body with handcrafted details made of natural fibers and small wooden pieces. The face features tiny bead eyes, a fuzzy nose, and a sweet smile. Each one is slightly unique due to natural materials. A lovely accent for autumn displays, rustic home décor, or as a charming gift for nature lovers.",
    images: [img4, img4, img4],
    artisan: {
      id: 34,
      name: "Wood & Wool Studio",
      bio: "Craft studio blending natural materials with handmade design",
      location: "Portland, OR, USA",
      avatar: "https://i.pravatar.cc/150?img=34",
    },
    stock: 17,
    rating: 4.9,
    reviewCount: 27,
    featured: true,
    tags: ["pinecone", "hedgehog", "nature", "decor", "handcrafted"],
    dimensions: "3 x 2.5 inches",
    materials: "Natural pinecone, wood fiber, felt, glue",
  },
  {
    id: 105,
    name: "Bohemian Macrame Leaf Bracelet",
    price: 18.5,
    originalPrice: 24.0,
    category: "jewelry",
    description:
      "Handwoven macrame bracelet with leaf pattern in earthy tones. Adjustable and nature-inspired design.",
    longDescription:
      "This stunning macrame bracelet features an intricate chevron leaf pattern woven with earthy greens, browns, and beige cords. The design mimics the beauty of nature with its layered, textured appearance. Finished with braided edges and an adjustable sliding knot closure for the perfect fit. Each bracelet is meticulously handcrafted, making it a unique piece of wearable art.",
    images: [img5, img5, img5],
    artisan: {
      id: 35,
      name: "Earth & Thread Co.",
      bio: "Creating nature-inspired macrame jewelry and accessories",
      location: "Valencia, Spain",
      avatar: "https://i.pravatar.cc/150?img=35",
    },
    stock: 28,
    rating: 4.7,
    reviewCount: 42,
    featured: false,
    tags: ["macrame", "bracelet", "bohemian", "jewelry", "handwoven"],
    dimensions: "Adjustable 6-9 inches, 1.5 inches wide",
    materials: "Waxed cotton cord, natural dyes",
  },
  {
    id: 106,
    name: "Mystical Raven Wall Hanging",
    price: 89.0,
    originalPrice: 115.0,
    category: "textiles",
    description:
      "Dramatic black macrame raven wall art with glowing eyes. Statement piece for gothic or mystical home décor.",
    longDescription:
      "This striking macrame wall hanging depicts a majestic raven with outstretched wings, crafted entirely from black cord. The intricate knotting creates texture and depth, mimicking feathers and creating a powerful silhouette. The raven's eyes glow with white accents, adding an ethereal quality. Long fringe flows from the wings and body, creating dramatic movement. A bold statement piece perfect for those who appreciate dark aesthetics, gothic décor, or nature-inspired art.",
    images: [img6, img6, img6],
    artisan: {
      id: 36,
      name: "Shadow & String Studio",
      bio: "Specializing in dramatic macrame art and dark aesthetic designs",
      location: "Seville, Spain",
      avatar: "https://i.pravatar.cc/150?img=36",
    },
    stock: 5,
    rating: 5.0,
    reviewCount: 19,
    featured: true,
    tags: ["macrame", "wall-hanging", "raven", "gothic", "statement-piece"],
    dimensions: "24 x 36 inches",
    materials: "Black macrame cord, wooden dowel",
  },
  {
    id: 107,
    name: "Artisan Leather Feather Keychains",
    price: 16.99,
    originalPrice: 22.0,
    category: "leather",
    description:
      "Collection of handcrafted leather feather keychains with unique tribal and skull designs.",
    longDescription:
      "These distinctive leather feather keychains are individually crafted and hand-painted with tribal patterns, featuring metal skull embellishments and decorative beads. Each piece has its own personality - from brown tribal stripes to black skull designs with gold accents. Made from genuine leather with durable metal clasps, they make perfect gifts or personal accessories for bags, keys, or as decorative charms.",
    images: [img7, img7, img7],
    artisan: {
      id: 37,
      name: "Wild Spirit Leather",
      bio: "Creating bohemian leather accessories with tribal influences",
      location: "Seattle, WA, USA",
      avatar: "https://i.pravatar.cc/150?img=37",
    },
    stock: 24,
    rating: 4.8,
    reviewCount: 36,
    featured: false,
    tags: ["leather", "keychain", "feather", "tribal", "accessories"],
    dimensions: "4-5 inches long",
    materials: "Genuine leather, metal charms, beads, paint",
  },
  {
    id: 108,
    name: "Celestial Moon Necklace",
    price: 34.99,
    originalPrice: 42.0,
    category: "jewelry",
    description:
      "Mystical crescent moon pendant with floral details and black crystal drop. Handcrafted polymer clay jewelry.",
    longDescription:
      "This enchanting crescent moon necklace is handcrafted from polymer clay, featuring delicate cream flowers with gold-green vines climbing up the moon's curve. Tiny star details and a golden crescent accent add celestial charm. A faceted black crystal dangles from the moon's tip, catching the light beautifully. Suspended from a gold chain with star charms, this piece blends nature and night sky magic. Perfect for moon lovers and those drawn to mystical aesthetics.",
    images: [img8, img8, img8],
    artisan: {
      id: 38,
      name: "Lunar Garden Jewelry",
      bio: "Crafting celestial-inspired polymer clay jewelry",
      location: "San Francisco, CA, USA",
      avatar: "https://i.pravatar.cc/150?img=38",
    },
    stock: 15,
    rating: 4.9,
    reviewCount: 44,
    featured: true,
    tags: ["jewelry", "necklace", "celestial", "moon", "polymer-clay"],
    dimensions: "Pendant: 2 inches, Chain: 18 inches",
    materials: "Polymer clay, gold-plated chain, crystal",
  },
  {
    id: 109,
    name: "Fire Dragon Pendant",
    price: 42.0,
    originalPrice: 52.0,
    category: "jewelry",
    description:
      "Striking black and orange lava dragon necklace. Hand-sculpted with glowing ember effect.",
    longDescription:
      "This magnificent dragon pendant is hand-sculpted from polymer clay, featuring a coiled serpentine design with intricate scale textures. The matte black body is accented with bright orange details that mimic glowing lava or embers, creating a dramatic fire-breathing effect. The dragon's piercing orange eyes and sharp wings add to its fierce appearance. Suspended from a black cord with a gold bail, this statement piece is perfect for fantasy lovers and those who appreciate mythical creature art.",
    images: [img9, img9, img9],
    artisan: {
      id: 39,
      name: "Dragon's Forge Studio",
      bio: "Sculpting fantasy creatures and mythical jewelry",
      location: "Portland, OR, USA",
      avatar: "https://i.pravatar.cc/150?img=39",
    },
    stock: 8,
    rating: 5.0,
    reviewCount: 31,
    featured: true,
    tags: ["jewelry", "dragon", "pendant", "fantasy", "sculpture"],
    dimensions: "Pendant: 3 x 2 inches",
    materials: "Polymer clay, black cord, metal bail",
  },
  {
    id: 110,
    name: "Whimsical Floral Curtain Garland",
    price: 64.99,
    originalPrice: 78.0,
    category: "textiles",
    description:
      "Colorful crochet flower garland strands. Perfect for window decoration, room divider, or photo backdrop.",
    longDescription:
      "Transform any space into a blooming garden with this enchanting set of crochet flower garlands. Each strand features hand-crocheted flowers in vibrant pinks, purples, reds, oranges, and whites, interspersed with green leaves along vine-like stems. The flowers vary in shape and size, creating natural dimension and charm. Perfect for decorating windows, creating room dividers, photo backdrops, or adding a whimsical bohemian touch to any space. Set includes 8-10 strands.",
    images: [img10, img10, img10],
    artisan: {
      id: 40,
      name: "Blossom & Yarn",
      bio: "Creating joyful crochet home décor inspired by gardens",
      location: "Madrid, Spain",
      avatar: "https://i.pravatar.cc/150?img=40",
    },
    stock: 6,
    rating: 4.9,
    reviewCount: 27,
    featured: true,
    tags: ["crochet", "garland", "flowers", "home-decor", "bohemian"],
    dimensions: "Each strand 48-60 inches long",
    materials: "Cotton yarn in various colors",
  },
  {
    id: 111,
    name: "Woodland Creature Collection",
    price: 21.99,
    originalPrice: 28.0,
    category: "mixed-materials",
    description:
      "Handcrafted woodland animal figurines made with natural pinecones. Each piece is unique and full of character.",
    longDescription:
      "This delightful woodland creature is handcrafted using natural pinecones, felt, and other organic materials. Each figurine has its own personality and slight variations due to the natural materials used. The careful attention to detail brings these forest friends to life, from their tiny eyes to their textured bodies. Perfect for nature-themed nurseries, woodland décor, or as a special gift for animal lovers.",
    images: [img11, img11, img11],
    artisan: {
      id: 34,
      name: "Wood & Wool Studio",
      bio: "Craft studio blending natural materials with handmade design",
      location: "Portland, OR, USA",
      avatar: "https://i.pravatar.cc/150?img=34",
    },
    stock: 13,
    rating: 4.8,
    reviewCount: 22,
    featured: false,
    tags: ["woodland", "animal", "figurine", "nature", "handcrafted"],
    dimensions: "3-4 inches",
    materials: "Natural pinecone, felt, wood, non-toxic glue",
  },
  {
    id: 112,
    name: "Rustic Natural Material Bundle",
    price: 25.0,
    originalPrice: 32.0,
    category: "mixed-materials",
    description:
      "Assorted natural craft materials including pinecones, acorns, and seasonal elements.",
    longDescription:
      "A curated collection of natural materials perfect for DIY crafts, seasonal decorations, or nature displays. This bundle includes natural pinecones of various sizes, acorns with caps, and other woodland treasures. Ideal for crafters, teachers, or anyone who loves working with natural materials. Each bundle is unique and reflects the beauty of nature's offerings.",
    images: [img12, img12, img12],
    artisan: {
      id: 41,
      name: "Nature's Bounty Co.",
      bio: "Collecting and curating natural materials for crafters",
      location: "Bilbao, Spain",
      avatar: "https://i.pravatar.cc/150?img=41",
    },
    stock: 20,
    rating: 4.6,
    reviewCount: 15,
    featured: false,
    tags: ["natural", "materials", "pinecone", "craft-supplies", "woodland"],
    dimensions: "Varies, assorted pieces",
    materials: "Natural pinecones, acorns, dried elements",
  },
  {
    id: 113,
    name: "Mixed Artisan Craft Set",
    price: 29.99,
    originalPrice: 38.0,
    category: "mixed-materials",
    description:
      "Curated collection of handmade items and craft materials. Perfect for DIY enthusiasts.",
    longDescription:
      "This versatile craft set brings together a variety of handmade items and materials, perfect for those who love creating or collecting unique artisan pieces. Each bundle is thoughtfully curated to include different textures, colors, and materials. Great for gift-giving, personal projects, or starting your handmade collection.",
    images: [img13, img13, img13],
    artisan: {
      id: 42,
      name: "Artisan Mix Collective",
      bio: "Curating diverse handmade goods from local artisans",
      location: "Austin, TX, USA",
      avatar: "https://i.pravatar.cc/150?img=42",
    },
    stock: 18,
    rating: 4.5,
    reviewCount: 28,
    featured: false,
    tags: ["mixed", "bundle", "craft", "assorted", "handmade"],
    dimensions: "Bundle includes 6-8 items",
    materials: "Various handmade materials",
  },
  {
    id: 114,
    name: "Artisan Sampler Collection",
    price: 32.5,
    originalPrice: 40.0,
    category: "mixed-materials",
    description:
      "Sample collection of various handcrafted items showcasing different techniques and materials.",
    longDescription:
      "Explore the diversity of handmade crafts with this sampler collection. Each set includes items representing different craft techniques - from weaving to polymer work, from natural materials to fiber arts. Perfect for those who want to experience a variety of artisan work or are looking for unique gift items. Every collection is slightly different, ensuring a unique experience.",
    images: [img14, img14, img14],
    artisan: {
      id: 43,
      name: "Crafters United",
      bio: "Collaborative group showcasing diverse craft traditions",
      location: "Barcelona, Spain",
      avatar: "https://i.pravatar.cc/150?img=43",
    },
    stock: 12,
    rating: 4.7,
    reviewCount: 34,
    featured: false,
    tags: ["sampler", "variety", "handmade", "collection", "artisan"],
    dimensions: "Varies by collection",
    materials: "Mixed artisan materials",
  },
  {
    id: 115,
    name: "Handcrafted Variety Pack",
    price: 27.99,
    originalPrice: 35.0,
    category: "mixed-materials",
    description:
      "Assorted handmade items perfect for gifts, crafts, or personal collection.",
    longDescription:
      "This variety pack brings together an eclectic mix of handcrafted treasures. Each pack is designed to surprise and delight with its diverse selection of items made by skilled artisans. From small decorative pieces to functional accessories, this collection showcases the breadth of handmade craftsmanship. Ideal for gift-giving or treating yourself to a curated surprise.",
    images: [img15, img15, img15],
    artisan: {
      id: 44,
      name: "Variety Makers Guild",
      bio: "Bringing together diverse handmade creations",
      location: "Valencia, Spain",
      avatar: "https://i.pravatar.cc/150?img=44",
    },
    stock: 16,
    rating: 4.6,
    reviewCount: 21,
    featured: false,
    tags: ["variety", "mixed", "gift", "assorted", "surprise"],
    dimensions: "Pack includes 5-7 pieces",
    materials: "Various handmade materials",
  },
  {
    id: 116,
    name: "Eclectic Craft Bundle",
    price: 35.0,
    originalPrice: 44.0,
    category: "mixed-materials",
    description:
      "Unique bundle of handcrafted items representing different artistic styles and techniques.",
    longDescription:
      "Dive into the world of handmade artistry with this eclectic bundle. Carefully selected to showcase different craft techniques and artistic styles, this collection is perfect for those who appreciate variety and uniqueness. Each bundle tells a story of skilled craftsmanship and creative expression. Great for collectors, gift-givers, or anyone looking to add handmade charm to their life.",
    images: [img16, img16, img16],
    artisan: {
      id: 45,
      name: "Eclectic Arts Studio",
      bio: "Celebrating diversity in handmade arts and crafts",
      location: "Madrid, Spain",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    stock: 10,
    rating: 4.8,
    reviewCount: 26,
    featured: false,
    tags: ["eclectic", "bundle", "artistic", "diverse", "unique"],
    dimensions: "Bundle varies",
    materials: "Mixed craft materials",
  },
  {
    id: 117,
    name: "Artisan Discovery Box",
    price: 38.99,
    originalPrice: 48.0,
    category: "mixed-materials",
    description:
      "Curated discovery box filled with handmade surprises from local artisans.",
    longDescription:
      "Open a treasure chest of handmade wonders with this artisan discovery box. Each box is thoughtfully curated to include a variety of handcrafted items that showcase the talents of local artisans. From decorative pieces to wearable art, from natural materials to textile crafts - every box offers a unique journey through the world of handmade goods. Perfect for those who love surprises and supporting artisan communities.",
    images: [img17, img17, img17],
    artisan: {
      id: 46,
      name: "Discovery Crafts Co.",
      bio: "Curating surprise collections from talented makers",
      location: "Portland, OR, USA",
      avatar: "https://i.pravatar.cc/150?img=46",
    },
    stock: 14,
    rating: 4.9,
    reviewCount: 38,
    featured: true,
    tags: ["discovery", "box", "curated", "surprise", "variety"],
    dimensions: "Box: 8 x 8 x 4 inches",
    materials: "Various handcrafted items",
  },
  {
    id: 118,
    name: "Heritage Craft Sampler",
    price: 31.5,
    originalPrice: 39.0,
    category: "mixed-materials",
    description:
      "Sample collection showcasing traditional and contemporary handcraft techniques.",
    longDescription:
      "This heritage sampler bridges the gap between traditional craftsmanship and contemporary design. Each collection includes items made using time-honored techniques as well as modern interpretations of classic crafts. Perfect for those interested in craft history, cultural artistry, or simply appreciating the evolution of handmade goods. A wonderful educational gift or personal collection starter.",
    images: [img18, img18, img18],
    artisan: {
      id: 47,
      name: "Heritage Hands Collective",
      bio: "Preserving traditional crafts while embracing innovation",
      location: "San Francisco, CA, USA",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    stock: 11,
    rating: 4.7,
    reviewCount: 29,
    featured: false,
    tags: ["heritage", "traditional", "sampler", "cultural", "craft"],
    dimensions: "Varies by collection",
    materials: "Mixed traditional and modern materials",
  },
  {
    id: 119,
    name: "Maker's Choice Collection",
    price: 33.99,
    originalPrice: 42.0,
    category: "mixed-materials",
    description:
      "Handpicked selection of artisan favorites. Each collection reflects the maker's personal style.",
    longDescription:
      "Let the artisans surprise you with their personal favorites! This maker's choice collection includes pieces that the craftspeople themselves are most proud of or currently excited about. It's a chance to receive items that truly represent the heart and soul of handmade work. Each collection is unique and reflects the current creative energy of the artisan community.",
    images: [img19, img19, img19],
    artisan: {
      id: 48,
      name: "Makers Circle",
      bio: "Artisan cooperative sharing their favorite creations",
      location: "Seattle, WA, USA",
      avatar: "https://i.pravatar.cc/150?img=48",
    },
    stock: 13,
    rating: 4.8,
    reviewCount: 32,
    featured: false,
    tags: ["makers-choice", "artisan-pick", "favorite", "unique", "special"],
    dimensions: "Varies, 6-8 items included",
    materials: "Artisan-selected materials",
  },
  {
    id: 120,
    name: "Signature Artisan Box",
    price: 44.99,
    originalPrice: 55.0,
    category: "mixed-materials",
    description:
      "Premium collection of signature handmade pieces from featured artisans. Curated for quality and uniqueness.",
    longDescription:
      "This premium signature collection represents the best of handmade artistry. Each box is carefully curated to include signature pieces from featured artisans - items that showcase exceptional skill, creativity, and attention to detail. From intricate fiber work to stunning jewelry, from natural materials to polymer art - every piece is chosen for its quality and uniqueness. Perfect for serious collectors or as a luxurious gift for someone special who appreciates fine handcrafted goods.",
    images: [img20, img20, img20],
    artisan: {
      id: 49,
      name: "Signature Collection Studio",
      bio: "Curating premium handmade pieces from master artisans",
      location: "Barcelona, Spain",
      avatar: "https://i.pravatar.cc/150?img=49",
    },
    stock: 7,
    rating: 5.0,
    reviewCount: 41,
    featured: true,
    tags: ["premium", "signature", "luxury", "curated", "collector"],
    dimensions: "Premium box, 8-10 select pieces",
    materials: "Premium artisan materials",
  },
];

// Mock reviews for products
export const reviews = {
  101: [
    {
      id: 1,
      userId: 201,
      userName: "Amira K.",
      rating: 5,
      date: "2024-10-10",
      comment:
        "This little cat charm is absolutely adorable! The quality is excellent and the details are so cute. My daughter loves it on her backpack!",
      helpful: 14,
    },
    {
      id: 2,
      userId: 202,
      userName: "Youssef B.",
      rating: 5,
      date: "2024-10-05",
      comment:
        "Perfect gift for a cat lover! The stitching is very well done and the sprout on top is hilarious. Highly recommend!",
      helpful: 8,
    },
  ],
  102: [
    {
      id: 3,
      userId: 203,
      userName: "Fatima L.",
      rating: 5,
      date: "2024-10-12",
      comment:
        "I love this mini monstera! It looks so realistic and adds the perfect touch of green to my desk. No watering needed!",
      helpful: 22,
    },
    {
      id: 4,
      userId: 204,
      userName: "Hassan M.",
      rating: 4,
      date: "2024-10-08",
      comment:
        "Really nice crochet work. The leaves are detailed and the pot is cute. Would have liked it slightly bigger, but still very happy with it.",
      helpful: 6,
    },
  ],
  103: [
    {
      id: 5,
      userId: 205,
      userName: "Layla A.",
      rating: 5,
      date: "2024-10-15",
      comment:
        "These pinecones are perfect for fall decorating! The colors are beautiful and they look great on my dining table. Very well made.",
      helpful: 19,
    },
  ],
  104: [
    {
      id: 6,
      userId: 206,
      userName: "Omar Z.",
      rating: 5,
      date: "2024-10-11",
      comment:
        "The hedgehog is so charming! Love that it uses real pinecones. It's a unique piece and makes a great gift. My mom was thrilled!",
      helpful: 11,
    },
  ],
  105: [
    {
      id: 7,
      userId: 207,
      userName: "Nadia F.",
      rating: 5,
      date: "2024-10-13",
      comment:
        "This macrame bracelet is stunning! The leaf pattern is so intricate and the colors are perfect. I wear it every day!",
      helpful: 15,
    },
    {
      id: 8,
      userId: 208,
      userName: "Karim S.",
      rating: 4,
      date: "2024-10-09",
      comment:
        "Beautiful bracelet with great craftsmanship. The adjustable closure works perfectly. Very happy with this purchase!",
      helpful: 9,
    },
  ],
  106: [
    {
      id: 9,
      userId: 209,
      userName: "Salma H.",
      rating: 5,
      date: "2024-10-14",
      comment:
        "WOW! This raven is absolutely stunning. It's a real statement piece and the quality is incredible. Worth every penny!",
      helpful: 18,
    },
    {
      id: 10,
      userId: 210,
      userName: "Mehdi A.",
      rating: 5,
      date: "2024-10-07",
      comment:
        "The detail on this piece is amazing. The glowing eyes give it such a mystical vibe. Everyone who visits asks about it!",
      helpful: 12,
    },
  ],
  107: [
    {
      id: 11,
      userId: 211,
      userName: "Zineb R.",
      rating: 5,
      date: "2024-10-16",
      comment:
        "These leather feather keychains are so unique! Each one has its own character. Great quality leather and the details are impressive.",
      helpful: 25,
    },
    {
      id: 12,
      userId: 212,
      userName: "Ahmed T.",
      rating: 5,
      date: "2024-10-12",
      comment:
        "Love the tribal designs and skull details. Very well made and the leather is high quality. Perfect accessory!",
      helpful: 16,
    },
  ],
  108: [
    {
      id: 13,
      userId: 213,
      userName: "Meryem B.",
      rating: 5,
      date: "2024-10-15",
      comment:
        "This moon necklace is magical! The floral details are so delicate and the crystal adds the perfect touch. I'm obsessed!",
      helpful: 21,
    },
    {
      id: 14,
      userId: 214,
      userName: "Rachid M.",
      rating: 5,
      date: "2024-10-10",
      comment:
        "Bought this for my girlfriend and she absolutely loves it. The craftsmanship is exceptional. Beautiful piece!",
      helpful: 13,
    },
  ],
  109: [
    {
      id: 15,
      userId: 215,
      userName: "Samira K.",
      rating: 5,
      date: "2024-10-17",
      comment:
        "This dragon pendant is EPIC! The lava effect looks so real and the detail is incredible. Fantasy jewelry at its finest!",
      helpful: 28,
    },
    {
      id: 16,
      userId: 216,
      userName: "Bilal N.",
      rating: 5,
      date: "2024-10-13",
      comment:
        "As a dragon lover, this is perfect! The sculpting is amazing and the color contrast is striking. Highly recommend!",
      helpful: 17,
    },
  ],
  110: [
    {
      id: 17,
      userId: 217,
      userName: "Imane Z.",
      rating: 5,
      date: "2024-10-14",
      comment:
        "These flower garlands transformed my space! They're so cheerful and beautifully made. Perfect for my bohemian room!",
      helpful: 14,
    },
    {
      id: 18,
      userId: 218,
      userName: "Said L.",
      rating: 4,
      date: "2024-10-11",
      comment:
        "Really pretty garlands with lovely flower variety. Used them for a photo backdrop and they looked amazing!",
      helpful: 8,
    },
  ],
  111: [
    {
      id: 19,
      userId: 219,
      userName: "Khadija P.",
      rating: 5,
      date: "2024-10-16",
      comment:
        "Absolutely adorable woodland creature! My daughter put it in her fairy garden and it looks magical. Great quality!",
      helpful: 10,
    },
    {
      id: 20,
      userId: 220,
      userName: "Youssef D.",
      rating: 5,
      date: "2024-10-12",
      comment:
        "Love that it's made with natural materials. Each one is unique which makes it special. Perfect gift for nature lovers!",
      helpful: 12,
    },
  ],
  112: [
    {
      id: 21,
      userId: 221,
      userName: "Leila M.",
      rating: 5,
      date: "2024-10-15",
      comment:
        "Perfect for my fall craft projects! Great variety of natural materials and everything arrived in perfect condition.",
      helpful: 7,
    },
  ],
  113: [
    {
      id: 22,
      userId: 222,
      userName: "Hamza R.",
      rating: 4,
      date: "2024-10-13",
      comment:
        "Nice variety of items. Good for someone who wants to try different crafts. Some pieces were better than others but overall satisfied.",
      helpful: 5,
    },
  ],
  114: [
    {
      id: 23,
      userId: 223,
      userName: "Sophia L.",
      rating: 5,
      date: "2024-10-16",
      comment:
        "Love this sampler! It's like getting a mini tour of different craft techniques. Great for gift-giving too!",
      helpful: 11,
    },
  ],
  115: [
    {
      id: 24,
      userId: 224,
      userName: "Malik K.",
      rating: 4,
      date: "2024-10-14",
      comment:
        "Fun variety pack! Got some interesting pieces. Would recommend for anyone who loves handmade surprises.",
      helpful: 6,
    },
  ],
  116: [
    {
      id: 25,
      userId: 225,
      userName: "Nora B.",
      rating: 5,
      date: "2024-10-17",
      comment:
        "This bundle exceeded my expectations! Every piece was unique and well-crafted. Great value for money!",
      helpful: 9,
    },
  ],
  117: [
    {
      id: 26,
      userId: 226,
      userName: "Tarek A.",
      rating: 5,
      date: "2024-10-15",
      comment:
        "The discovery box is amazing! Each item was a delightful surprise. Love supporting local artisans this way!",
      helpful: 14,
    },
    {
      id: 27,
      userId: 227,
      userName: "Yasmine H.",
      rating: 5,
      date: "2024-10-12",
      comment:
        "Best gift I've ever given myself! The curation is thoughtful and every piece is special. Highly recommend!",
      helpful: 10,
    },
  ],
  118: [
    {
      id: 28,
      userId: 228,
      userName: "Omar F.",
      rating: 5,
      date: "2024-10-16",
      comment:
        "Love learning about traditional crafts through this sampler. Beautiful mix of old and new techniques!",
      helpful: 8,
    },
  ],
  119: [
    {
      id: 29,
      userId: 229,
      userName: "Amina S.",
      rating: 5,
      date: "2024-10-14",
      comment:
        "The maker's choice concept is brilliant! Got some really special pieces that the artisans clearly put their heart into.",
      helpful: 12,
    },
  ],
  120: [
    {
      id: 30,
      userId: 230,
      userName: "Kamal Z.",
      rating: 5,
      date: "2024-10-17",
      comment:
        "This signature box is absolutely premium! Every single piece is museum-quality. Perfect for serious collectors!",
      helpful: 20,
    },
    {
      id: 31,
      userId: 231,
      userName: "Fatima R.",
      rating: 5,
      date: "2024-10-13",
      comment:
        "Worth every dirham! The quality is outstanding and the curation is impeccable. A true celebration of handmade artistry!",
      helpful: 15,
    },
  ],
};
