import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Diego",
  lastName: "Carvallo",
  name: `Diego Carvallo`,
  role: "CTO & Co-Founder",
  avatar: "/images/avatar.jpg",
  email: "diego@carvallo.io",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dccakes",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/diego-carvallo/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Pickle</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Visit Pickle
        </Text>
      </Row>
    ),
    href: "https://www.withpickle.com",
  },
  subline: (
    <>
      I'm a Technical Leader bridging complex systems with business outcomes. As CTO and co-founder at{" "}
      <strong>Pickle</strong>, I'm building healthcare-focused recruitment tools.
      <br /> I specialize in enterprise architecture, data platforms, and AI implementation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/diego-carvallo-cks2rp/30-minute-consultation",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Diego is a CTO, Enterprise Architect and Data Strategist passionate about translating technical complexity into tangible business value. With experience spanning enterprise architecture, data platforms, and AI implementation, he specializes in designing systems that deliver measurable results. From architecting data platforms powering £9M products to leading enterprise digital transformations for global financial institutions, Diego bridges complex technical systems with strategic business outcomes.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Pickle",
        timeframe: "Aug 2023 - Present",
        role: "Chief Technology Officer, Co-Founder",
        achievements: [
          <>
            Leading the development of a healthcare-focused recruitment platform, decreasing hiring times by over 28%.
          </>,
          <>
            Designed and implemented a modular, cloud-native architecture using Azure Container Apps and CI/CD pipelines ensuring scalability, security, and rapid deployment.
          </>,
          <>
            Created the platform's initial architecture vision and roadmap, aligning technical design with business objectives and long-term growth targets.
          </>,
        ],
        images: [],
      },
      {
        company: "Arca Blanca | Artefact UK",
        timeframe: "Jul 2021 - Dec 2023",
        role: "Enterprise & Data Architect",
        achievements: [
          <>
            Led the design and build of a new data platform to power a £9M product leveraging graph databases and Azure Cloud, leading team of 12.
          </>,
          <>
            Architected and implemented an automated data ingestion pipeline with advanced transformation capabilities, achieving $3M in operational savings.
          </>,
          <>
            Introduced Infrastructure as Code (IaC) strategy using Terraform and Terragrunt to enable long-term scaling of client applications.
          </>,
        ],
        images: [],
      },
      {
        company: "CapitOx",
        timeframe: "Oct 2020 - Aug 2021",
        role: "Project Leader",
        achievements: [
          <>
            Led team of 4 in extensive market analysis to identify European foreign markets for product expansion.
          </>,
          <>
            Developed short and long-term pricing strategy for new financial savings product for FTSE100 Bank.
          </>,
        ],
        images: [],
      },
      {
        company: "Southern Nuclear",
        timeframe: "Jun 2017 - Sep 2020",
        role: "Nuclear Engineer (I, II, and III)",
        achievements: [
          <>
            Automated routine operational processes using FORTRAN and Python, reducing costs by approximately $20,000 USD per year.
          </>,
          <>
            Developed robust project management tools including custom Python libraries and VBA programs to decrease human performance errors and improve schedule adherence.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Oxford",
        description: <>MBA (2020-2021)</>,
      },
      {
        name: "Georgia Institute of Technology",
        description: <>MS Data Analytics (2018-2020)</>,
      },
      {
        name: "Georgia Institute of Technology",
        description: <>BS Nuclear & Radiological Engineering (2012-2017)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Enterprise Architecture & Data Platforms",
        description: (
          <>Designing scalable technical ecosystems and robust data systems that transform raw information into actionable business insights.</>
        ),
        tags: [
          {
            name: "Data Architecture",
            icon: "database",
          },
          {
            name: "Azure",
            icon: "azure",
          },
          {
            name: "AWS",
            icon: "aws",
          },
        ],
        images: [],
      },
      {
        title: "Full-Stack Development & DevOps",
        description: (
          <>Building modern applications with Next.js, Python, and cloud-native architectures. Implementing Infrastructure as Code with Terraform and CI/CD pipelines.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
      },
      {
        title: "AI/ML Implementation",
        description: (
          <>Pragmatic approaches to implementing artificial intelligence and machine learning in enterprise business contexts, with focus on LLMs and data-driven solutions.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "AI/ML",
            icon: "brain",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
