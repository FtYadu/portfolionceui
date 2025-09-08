import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yadu",
  lastName: "Krishna",
  name: `Yadu Krishna`,
  role: "Multimedia Specialist & Content Creator",
  avatar: "/images/avatar.jpg",
  email: "ft.yaduwork@gmail.com",
  location: "Asia/Dubai", // Abu Dhabi, UAE
  languages: ["English", "Arabic", "Hindi", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on multimedia production, storytelling, and creative marketing</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/FtYadu",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/ftyadu",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://x.com/featyadu",
  },
  {
    name: "Vimeo",
    icon: "vimeo",
    link: "https://vimeo.com/ftyadu",
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://tiktok.com/@ftyadu",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting narratives that resonate and ignite engagement</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">GetGoated Branding</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/getgoated-brand-storytelling",
  },
  subline: (
    <>
      I'm Yadu, a multimedia specialist and startup owner based in Abu Dhabi, where I craft compelling narratives for businesses to thrive. Through digital landscapes, I build connections and ignite engagement with storytelling that transforms visions into compelling content.
      <br /> My passion lies in elevating brands through strategic content production, marketing, and digital storytelling.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Abu Dhabi, UAE`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://ftyadu.bio/contact",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Yadu Krishna is an Abu Dhabi-based multimedia specialist and startup owner with extensive experience in content production, marketing, and digital storytelling. As the founder of GetGoated, he specializes in transforming business visions into compelling narratives that drive engagement and growth across digital landscapes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "GetGoated (Founder & Creative Director)",
        timeframe: "2020 - Present",
        role: "Startup Owner & Creative Director",
        achievements: [
          <>
            Founded and scaled GetGoated, a creative agency specializing in digital marketing, content production, and brand storytelling across UAE and international markets.
          </>,
          <>
            Developed comprehensive content strategies for 100+ clients in hospitality, automotive, and technology sectors, achieving 300% average engagement increase.
          </>,
          <>
            Built strategic partnerships with major brands and agencies, establishing GetGoated as a leading creative consultancy in the MENA region.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "https://lh3.googleusercontent.com/d/12f3g8Ra9ioHT9Grptg_LtwMC_K7D0vUc",
            alt: "GetGoated Creative Direction Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance Content Creator",
        timeframe: "2018 - 2020",
        role: "Multimedia Specialist & Digital Marketer",
        achievements: [
          <>
            Created compelling visual narratives for diverse clients across UAE, specializing in digital marketing campaigns and content production.
          </>,
          <>
            Mastered storytelling techniques across video, photography, and digital platforms, establishing signature style focused on authentic brand connection.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education & Expertise",
    institutions: [
      {
        name: "Content Production & Digital Marketing",
        description: <>Specialized in multimedia production, digital marketing strategies, and brand storytelling through hands-on experience and industry collaborations across UAE market.</>,
      },
      {
        name: "Business Development & Entrepreneurship",
        description: <>Developed expertise in startup operations, client relationship management, and strategic business development through founding and scaling GetGoated in competitive MENA market.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Content Production & Digital Marketing",
        description: (
          <>Expertise in multimedia content creation, digital marketing campaigns, and social media strategy. Proficient in photography, videography, and content optimization for maximum engagement.</>
        ),
        tags: [
          {
            name: "Content Creation",
            icon: "camera",
          },
          {
            name: "Digital Marketing",
            icon: "marketing",
          },
          {
            name: "Social Media",
            icon: "social",
          },
        ],
        images: [
          {
            src: "https://lh3.googleusercontent.com/d/1Ry5eJf6QBIUac6Q0AzJvwtQmIJKfXCXN",
            alt: "Content production project",
            width: 16,
            height: 9,
          },
          {
            src: "https://lh3.googleusercontent.com/d/16ZL63UuU4z4Dc1LEgrFNMdTgRteVSbbP",
            alt: "Brand storytelling session",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Brand Strategy & Storytelling",
        description: (
          <>Specialized in developing authentic brand narratives, strategic business communication, and creating compelling visual stories that drive engagement and business growth.</>
        ),
        tags: [
          {
            name: "Brand Strategy",
            icon: "strategy",
          },
          {
            name: "Storytelling",
            icon: "storytelling",
          },
          {
            name: "Business Development",
            icon: "business",
          },
        ],
        images: [
          {
            src: "https://lh3.googleusercontent.com/d/1T7YuukIG6iM--i9UHUHM7aQFQ2IMET6e",
            alt: "Brand strategy consultation",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Insights on content creation, digital marketing, and entrepreneurship...",
  description: `Read what ${person.name} has been up to recently in content production, brand storytelling, and business development`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Content production, digital marketing, and brand storytelling projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Creative gallery – ${person.name}`,
  description: `A curated collection of content creation, photography, and multimedia work by ${person.name}`,
  // Images from actual portfolio work
  images: [
    {
      src: "https://lh3.googleusercontent.com/d/12f3g8Ra9ioHT9Grptg_LtwMC_K7D0vUc",
      alt: "Professional corporate content creation",
      orientation: "horizontal",
    },
    {
      src: "https://lh3.googleusercontent.com/d/16ZL63UuU4z4Dc1LEgrFNMdTgRteVSbbP",
      alt: "Lifestyle brand storytelling",
      orientation: "vertical",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1Ry5eJf6QBIUac6Q0AzJvwtQmIJKfXCXN",
      alt: "Automotive lifestyle content",
      orientation: "horizontal",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1T7YuukIG6iM--i9UHUHM7aQFQ2IMET6e",
      alt: "Family and lifestyle photography",
      orientation: "vertical",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1uA86cfEDYa8cGe4ooKh0hfN9wrkfHPP1",
      alt: "Adventure and travel content",
      orientation: "vertical",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1bo21jpwj-4_u5rsBooxy0B9WE3UFCXDp",
      alt: "Urban lifestyle photography",
      orientation: "horizontal",
    },
    {
      src: "https://lh3.googleusercontent.com/d/17fUwpVJTKzsPNSkld45Akr5CyWZfzy6G",
      alt: "Nature and outdoor content",
      orientation: "horizontal",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1GTa_ycRbvs7jEPVPFJ4LtWZfqourn1wR",
      alt: "Portrait and creative photography",
      orientation: "vertical",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1v9LaIyONgjV_k2YWjpn6-J5YeLJrdhLh",
      alt: "Cinematic sunset content",
      orientation: "horizontal",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1BypiB5bLfrRwy0ApTxx3kU9g5ygu8R8Z",
      alt: "Action and sports content",
      orientation: "vertical",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1FuiW8qs1K60DN6AEd3OdZ7f5T65JH6aM",
      alt: "Street and urban photography",
      orientation: "horizontal",
    },
    {
      src: "https://lh3.googleusercontent.com/d/1KO90KueDG_HQ1BjoFIWBXsgPrV_3Dv2t",
      alt: "Architectural and space content",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };