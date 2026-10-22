export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface Artist {
  name: string;
  slug: string;
  days: string;
  ig: string;
  igHandle: string;
  email: string | null;
  specialty: string;
  bio: string;
  photo: string | null;
  portfolio: PortfolioImage[];
}

export const artists: Artist[] = [
  {
    name: "Craig Brown",
    slug: "craig-brown",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/craigbrowntattoo/",
    igHandle: "@craigbrowntattoo",
    email: "craigbrowntattoo@gmail.com",
    specialty: "Traditional American, Japanese, Sign Painting",
    bio: "Craig Brown is a multidisciplinary artist and the proud owner of Historic Tattoo, a cornerstone of the Portland tattoo scene. With an impressive 25-year career as a tattooer, Craig has established himself as a true master of the craft. His deep roots in the Pacific Northwest have shaped an artistic perspective that is both expansive and distinctly his own.\n\nOver his extensive career, Craig has cultivated a passion for pushing creative boundaries. He excels in the abstraction of traditional tattoo imagery, bringing a fresh, modern twist to classic concepts. His expertise also shines in Japanese-style tattooing and any design that incorporates a humorous or clever element, showcasing his versatility and unique artistic voice.\n\nBeyond tattooing, Craig is a world-class sign painter, with his iconic hand-painted signs gracing establishments throughout Portland and beyond.",
    photo: "/portfolio/craig-brown/headshot.jpg",
    portfolio: [
      { src: "/portfolio/craig-brown/01.jpg", alt: "Traditional American tattoo by Craig Brown at Historic Tattoo Portland Oregon" },
      { src: "/portfolio/craig-brown/02.jpg", alt: "Bold traditional flash tattoo by Craig Brown in SE Portland" },
      { src: "/portfolio/craig-brown/03.jpg", alt: "Classic American traditional tattoo by Craig Brown at Historic Tattoo Portland" },
      { src: "/portfolio/craig-brown/04.jpg", alt: "Traditional American tattoo work by Craig Brown, Portland OR tattoo artist" },
      { src: "/portfolio/craig-brown/05.jpg", alt: "Vibrant traditional tattoo by Craig Brown at Historic Tattoo SE Portland" },
      { src: "/portfolio/craig-brown/06.jpg", alt: "Custom traditional design by Craig Brown, owner of Historic Tattoo Portland" },
      { src: "/portfolio/craig-brown/07.jpg", alt: "Traditional tattoo by Craig Brown at Historic Tattoo Portland" },
      { src: "/portfolio/craig-brown/08.jpg", alt: "Bold American traditional tattoo by Craig Brown SE Portland" },
      { src: "/portfolio/craig-brown/09.jpg", alt: "Custom traditional tattoo by Craig Brown at Historic Tattoo Portland OR" },
      { src: "/portfolio/craig-brown/10.jpg", alt: "Traditional American tattoo work by Craig Brown Portland Oregon" },
      { src: "/portfolio/craig-brown/11.jpg", alt: "Classic traditional tattoo by Craig Brown at Historic Tattoo SE Portland" },
      { src: "/portfolio/craig-brown/12.jpg", alt: "Traditional flash tattoo by Craig Brown at Historic Tattoo Portland" },
    ],
  },
  {
    name: "One Eyed Jon",
    slug: "one-eyed-jon",
    days: "Tue – Sat",
    ig: "https://www.instagram.com/one_eyed_jon/",
    igHandle: "@one_eyed_jon",
    email: null,
    specialty: "Traditional American",
    bio: "One Eyed Jon is a veteran traditional tattoo artist at Historic Tattoo in Portland. Books never closed — Jon delivers bold, clean traditional work with a sharp eye for classic composition and rich color palettes that stand the test of time.",
    photo: "/portfolio/one-eyed-jon/headshot.jpg",
    portfolio: [
      { src: "/portfolio/one-eyed-jon/01.jpg", alt: "Traditional dagger and rose tattoo by One Eyed Jon at Historic Tattoo Portland" },
      { src: "/portfolio/one-eyed-jon/02.jpg", alt: "Bold eagle tattoo by One Eyed Jon in SE Portland Oregon" },
      { src: "/portfolio/one-eyed-jon/03.jpg", alt: "Classic ship and anchor tattoo by One Eyed Jon at Historic Tattoo" },
      { src: "/portfolio/one-eyed-jon/04.jpg", alt: "Traditional snake and skull tattoo by One Eyed Jon Portland" },
    ],
  },
  {
    name: "Krystian Schneider",
    slug: "krystian-schneider",
    days: "Tue, Wed, Fri, Sat",
    ig: "https://www.instagram.com/krystian.tat2/",
    igHandle: "@krystian.tat2",
    email: null,
    specialty: "Bold, Colorful Traditional",
    bio: "When Krystian's not busy slingin' bold, colorful tattoos at Historic Tattoo, you can catch him cannonballing into a summer swim, dancing like nobody's watching to some bangin' techno, or hopping on a plane chasing his next adventure. Walk-ins welcome or DM for appointments.",
    photo: "/portfolio/krystian-schneider/headshot.jpg",
    portfolio: [
      { src: "/portfolio/krystian-schneider/01.jpg", alt: "Bold colorful traditional tattoo by Krystian Schneider at Historic Tattoo Portland" },
      { src: "/portfolio/krystian-schneider/02.jpg", alt: "Traditional American tattoo by Krystian Schneider SE Portland Oregon" },
      { src: "/portfolio/krystian-schneider/03.jpg", alt: "Vibrant traditional flash piece by Krystian Schneider at Historic Tattoo" },
      { src: "/portfolio/krystian-schneider/04.jpg", alt: "Classic traditional tattoo by Krystian Schneider Portland tattoo artist" },
      { src: "/portfolio/krystian-schneider/05.jpg", alt: "Colorful traditional American tattoo by Krystian Schneider at Historic Tattoo Portland" },
      { src: "/portfolio/krystian-schneider/06.jpg", alt: "Traditional tattoo work by Krystian Schneider at Historic Tattoo SE Portland" },
    ],
  },
  {
    name: "Adam DeFiglio",
    slug: "adam-defiglio",
    days: "Fri – Mon",
    ig: "https://www.instagram.com/acdpdx/",
    igHandle: "@acdpdx",
    email: "Adamdefiglio@gmail.com",
    specialty: "Classic Traditional",
    bio: "Tattooing since 2019, Adam specializes in classic designs that resonate with people and age well over time. His work features heavy saturation, rock-solid lines, and a deep respect for the roots of American tattooing. Available Friday through Monday for walk-ins and appointments.",
    photo: "/portfolio/adam-defiglio/headshot.jpg",
    portfolio: [
      { src: "/portfolio/adam-defiglio/01.jpg", alt: "Classic traditional tattoo by Adam DeFiglio at Historic Tattoo Portland Oregon" },
      { src: "/portfolio/adam-defiglio/02.jpg", alt: "Bold traditional flash by Adam DeFiglio at Historic Tattoo SE Portland" },
      { src: "/portfolio/adam-defiglio/03.jpg", alt: "American traditional tattoo by Adam DeFiglio Portland tattoo shop" },
      { src: "/portfolio/adam-defiglio/04.jpg", alt: "Heavy saturation traditional tattoo by Adam DeFiglio at Historic Tattoo Portland" },
      { src: "/portfolio/adam-defiglio/05.jpg", alt: "Classic American traditional design by Adam DeFiglio, SE Portland tattoo artist" },
      { src: "/portfolio/adam-defiglio/06.jpg", alt: "Traditional flash tattoo by Adam DeFiglio at Historic Tattoo Portland OR" },
    ],
  },
  {
    name: "Tony J. Vyeda",
    slug: "tony-vyeda",
    days: "Sat – Tue",
    ig: "https://www.instagram.com/tbonetat2/",
    igHandle: "@tbonetat2",
    email: null,
    specialty: "American Traditional, Black & Grey",
    bio: "Tony Vyeda isn't just a tattoo artist; he's a master craftsman with over a decade of dedicated experience. His journey began in 2013 at San Francisco's Goldfields Tattoo, and by 2023, he had officially earned his \"gold tooth\" — a mark of a decade of mastery in the tattoo world.\n\nTony's distinctive approach is rooted in classic American traditional styles, viewed through a modern lens. He's renowned for his ability to work with remarkable speed, a technique he naturally developed because, as he puts it, \"working fast helps me pull incredibly clean lines. It wasn't intentional, but the clarity it brought to my work became an integral part of my style.\" This unique method ensures a flawless application whether he's creating bold, vibrant color pieces or striking black and grey designs.\n\nBeyond the studio, Tony channels his creativity into woodworking, explores Portland on his scooter, and cherishes time with his dogs and partner.",
    photo: "/portfolio/tony-vyeda/headshot.jpg",
    portfolio: [
      { src: "/portfolio/tony-vyeda/01.jpg", alt: "Traditional rose and banner tattoo by Tony J. Vyeda at Historic Tattoo Portland" },
      { src: "/portfolio/tony-vyeda/02.jpg", alt: "Bold eagle and shield tattoo by Tony Vyeda in SE Portland" },
      { src: "/portfolio/tony-vyeda/03.jpg", alt: "Classic snake tattoo by Tony J. Vyeda at Historic Tattoo Portland Oregon" },
      { src: "/portfolio/tony-vyeda/04.jpg", alt: "Traditional dagger and heart tattoo by Tony Vyeda Portland" },
    ],
  },
  {
    name: "Abbie Fitzpatrick",
    slug: "abbie-fitzpatrick",
    days: "Sun – Tue",
    ig: "https://www.instagram.com/abbiefitz__/",
    igHandle: "@abbiefitz__",
    email: "abigailefitz@gmail.com",
    specialty: "Custom & Flash, Traditional American",
    bio: "Hey! I'm an art school drop-out from New York. I've been tattooing for over 16 years now, and I still find ways to love it more and more. I believe tattooing is truly magical for many reasons, but in large part because it brings us together! I enjoy learning from and connecting with my clients as much as the actual act of tattooing.\n\nI'm pretty evenly split introvert/extrovert, so I'm more than happy to chat and keep you distracted, or shut my yap and allow us both to quietly focus and find our flow — lemme know! I have helicopter mom energy and I really like making sure you're as comfy as possible.\n\nI perform to the best of my abilities when I'm fully trusted, while still keeping communication open and easy between us. I'm happy making your custom dreams come true, or tattooing flash. Mild or wild — big tattoo or small — I'm truly at my proudest when I know I've sent a client out the door feeling happier in their own skin.",
    photo: "/portfolio/abbie-fitzpatrick/headshot.jpg",
    portfolio: [
      { src: "/portfolio/abbie-fitzpatrick/01.jpg", alt: "Traditional tattoo by Abbie Fitzpatrick at Historic Tattoo Portland Oregon" },
      { src: "/portfolio/abbie-fitzpatrick/02.jpg", alt: "Custom tattoo by Abbie Fitzpatrick at Historic Tattoo SE Portland" },
      { src: "/portfolio/abbie-fitzpatrick/03.jpg", alt: "Traditional American tattoo by Abbie Fitzpatrick Portland tattoo artist" },
      { src: "/portfolio/abbie-fitzpatrick/04.jpg", alt: "Bold traditional design by Abbie Fitzpatrick at Historic Tattoo Portland" },
      { src: "/portfolio/abbie-fitzpatrick/05.jpg", alt: "Classic American traditional tattoo by Abbie Fitzpatrick SE Portland" },
      { src: "/portfolio/abbie-fitzpatrick/06.jpg", alt: "Traditional flash tattoo by Abbie Fitzpatrick at Historic Tattoo Portland OR" },
      { src: "/portfolio/abbie-fitzpatrick/07.jpg", alt: "Traditional tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
      { src: "/portfolio/abbie-fitzpatrick/08.jpg", alt: "Custom American traditional tattoo by Abbie Fitzpatrick SE Portland" },
      { src: "/portfolio/abbie-fitzpatrick/09.jpg", alt: "Bold traditional design by Abbie Fitzpatrick at Historic Tattoo Portland OR" },
      { src: "/portfolio/abbie-fitzpatrick/10.jpg", alt: "Traditional American tattoo work by Abbie Fitzpatrick Portland Oregon" },
      { src: "/portfolio/abbie-fitzpatrick/11.jpg", alt: "Classic traditional tattoo by Abbie Fitzpatrick at Historic Tattoo SE Portland" },
      { src: "/portfolio/abbie-fitzpatrick/12.jpg", alt: "Traditional flash tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
    ],
  },
  {
    name: "Brad Delay",
    slug: "brad-delay",
    days: "Thu – Sun",
    ig: "https://www.instagram.com/bdelay/",
    igHandle: "@bdelay",
    email: "tattoodelay@gmail.com",
    specialty: "Traditional American",
    bio: "Brad Delay has been tattooing at Historic Tattoo since the shop first opened in 2008, making him one of Portland's most seasoned traditional American tattoo artists. With nearly two decades at Historic Tattoo, Brad brings an unmatched depth of experience to every piece — bold lines, rich color, timeless designs built to last. Available Thursday through Sunday for walk-ins and appointments.",
    photo: "/portfolio/brad-delay/01.jpg",
    portfolio: [
      { src: "/portfolio/brad-delay/02.jpg", alt: "Bold traditional flash by Brad Delay at Historic Tattoo SE Portland" },
      { src: "/portfolio/brad-delay/03.jpg", alt: "Classic American traditional tattoo by Brad Delay Portland tattoo artist" },
      { src: "/portfolio/brad-delay/04.jpg", alt: "Traditional American design by Brad Delay at Historic Tattoo Portland OR" },
      { src: "/portfolio/brad-delay/05.jpg", alt: "Timeless traditional tattoo by Brad Delay at Historic Tattoo SE Portland" },
      { src: "/portfolio/brad-delay/06.jpg", alt: "Traditional flash tattoo by Brad Delay at Historic Tattoo Portland Oregon" },
    ],
  },
  {
    name: "Mishka",
    slug: "mishka",
    days: "Thu – Sun",
    ig: "https://www.instagram.com/mishkatraditional/",
    igHandle: "@mishkatraditional",
    email: null,
    specialty: "Traditional American",
    bio: "Mishka is a tattoo artist at Historic Tattoo in Portland, available Thursday through Sunday. Reach out via Instagram to book a session and see their latest work.",
    photo: "/portfolio/mishka/01.jpg",
    portfolio: [
      { src: "/portfolio/mishka/02.jpg", alt: "Bold traditional tattoo by Mishka at Historic Tattoo SE Portland" },
      { src: "/portfolio/mishka/03.jpg", alt: "Traditional flash tattoo by Mishka at Historic Tattoo Portland" },
      { src: "/portfolio/mishka/04.jpg", alt: "Classic American traditional tattoo by Mishka Portland tattoo artist" },
      { src: "/portfolio/mishka/05.jpg", alt: "Traditional tattoo work by Mishka at Historic Tattoo SE Portland Oregon" },
      { src: "/portfolio/mishka/06.jpg", alt: "Traditional American design by Mishka at Historic Tattoo Portland OR" },
    ],
  },
  {
    name: "Blane",
    slug: "blane",
    days: "Sat – Tue",
    ig: "https://www.instagram.com/the.glass.altar/",
    igHandle: "@the.glass.altar",
    email: null,
    specialty: "Traditional American",
    bio: "Blane is a tattoo artist at Historic Tattoo in Portland, available Saturday through Tuesday. Follow on Instagram to see their portfolio and message to schedule your next tattoo.",
    photo: "/portfolio/blane/01.jpg",
    portfolio: [
      { src: "/portfolio/blane/02.jpg", alt: "Bold traditional tattoo by Blane at Historic Tattoo SE Portland" },
      { src: "/portfolio/blane/03.jpg", alt: "Traditional flash tattoo by Blane at Historic Tattoo Portland" },
      { src: "/portfolio/blane/04.jpg", alt: "Classic American traditional tattoo by Blane Portland tattoo artist" },
      { src: "/portfolio/blane/05.jpg", alt: "Traditional tattoo work by Blane at Historic Tattoo SE Portland Oregon" },
      { src: "/portfolio/blane/06.jpg", alt: "Traditional American design by Blane at Historic Tattoo Portland OR" },
    ],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}

export function getArtistsWithPortfolios(): Artist[] {
  return artists.filter((a) => a.portfolio.length > 0);
}
