import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Yadu",
  lastName: "Krishnan K S",
  name: `Yadu Krishnan K S`,
  role: "Multimedia Specialist & AI Enthusiast",
  avatar: "/images/avatar.jpg",
  email: "ft.yaduwork@gmail.com",
  location: "Asia/Dubai", // Abu Dhabi, UAE
  languages: ["English", "Arabic", "Hindi", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on multimedia production and AI automation</>,
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
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/971565820545",
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
  headline: <>Crafting cinematic experiences with AI-powered creativity</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">SFC Group Rebrand</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/sfc-group-hospitality-rebrand",
  },
  subline: (
    <>
      I'm Yadu, a multimedia specialist based in Abu Dhabi, where I create cinematic content for hospitality, automotive, and corporate brands. I combine traditional storytelling with cutting-edge AI tools to deliver exceptional visual experiences.
      <br /> After hours, I experiment with AI automation and build creative workflows.
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
    link: "https://calendly.com/ftyadu",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Yadu is an Abu Dhabi-based multimedia specialist with over 6 years of experience creating cinematic content for hospitality, automotive, and corporate brands. He combines traditional storytelling techniques with cutting-edge AI tools to deliver exceptional visual experiences at unprecedented speed and quality.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance Multimedia Specialist",
        timeframe: "2018 - Present",
        role: "Senior Multimedia Producer & AI Specialist",
        achievements: [
          <>
            Delivered 500+ projects for hospitality, automotive, and corporate clients across UAE and internationally, maintaining 98% client satisfaction rate.
          </>,
          <>
            Pioneered AI automation workflows that reduced post-production time by 60% while maintaining cinematic quality standards.
          </>,
          <>
            Built custom AI agents for media organization, client communication, and workflow automation, handling 70% of routine operations automatically.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/sfc-group/cover-01.jpg",
            alt: "SFC Group Hospitality Rebrand Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Various Production Houses",
        timeframe: "2016 - 2018",
        role: "Video Editor & Motion Graphics Designer",
        achievements: [
          <>
            Mastered traditional video editing and motion graphics, working on documentaries, commercials, and branded content.
          </>,
          <>
            Developed expertise in color grading and cinematic storytelling techniques that became the foundation of my signature style.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies & Certifications",
    institutions: [
      {
        name: "Self-Directed Learning",
        description: <>Specialized in multimedia production, cinematography, and AI automation through intensive hands-on practice and industry workshops.</>,
      },
      {
        name: "AI & Automation Certifications",
        description: <>Completed advanced courses in AI workflow automation, machine learning applications in media, and custom agent development.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Video Production & Editing",
        description: (
          <>Mastery of Sony FX3/FX30 cameras paired with vintage cine lenses. Expert in DaVinci Resolve and Premiere Pro for cinematic post-production.</>
        ),
        tags: [
          {
            name: "Sony FX3",
            icon: "camera",
          },
          {
            name: "DaVinci Resolve",
            icon: "video",
          },
          {
            name: "Premiere Pro",
            icon: "adobe",
          },
        ],
        images: [
          {
            src: "/images/projects/automotive/cover-02.jpg",
            alt: "Automotive cinematography project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/hospitality/cover-03.jpg",
            alt: "Hospitality video production",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AI Automation & Workflow Optimization",
        description: (
          <>Building custom AI agents with GPT-4, Claude, and Stable Diffusion. Expertise in n8n for workflow automation and LangFlow for visual AI development.</>
        ),
        tags: [
          {
            name: "GPT-4",
            icon: "openai",
          },
          {
            name: "n8n",
            icon: "automation",
          },
          {
            name: "Stable Diffusion",
            icon: "ai",
          },
        ],
        images: [
          {
            src: "/images/projects/ai-workflow/cover-04.jpg",
            alt: "AI automation setup",
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
  title: "Insights on multimedia production and AI automation...",
  description: `Read what ${person.name} has been up to recently in AI automation and multimedia production`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Multimedia and AI automation projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Creative gallery – ${person.name}`,
  description: `A curated collection of cinematography and multimedia work by ${person.name}`,
  // Images from various projects
  // These are placeholder images, will be replaced with your actual work
  images: [
    {
      src: "/images/gallery/corporate-1.jpg",
      alt: "Corporate video production",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hospitality-1.jpg",
      alt: "Hospitality cinematography",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/automotive-1.jpg",
      alt: "Automotive showcase",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/events-1.jpg",
      alt: "Event coverage",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/commercial-1.jpg",
      alt: "Commercial production",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/corporate-2.jpg",
      alt: "Corporate branding",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/hospitality-2.jpg",
      alt: "Luxury hospitality",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/automotive-2.jpg",
      alt: "Dynamic automotive",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };