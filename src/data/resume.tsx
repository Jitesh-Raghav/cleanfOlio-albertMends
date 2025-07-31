import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Jitesh Raghav",
  initials: "JK",
  url: "https://jiteshraghav.vercel.app/",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Final year undergrad student at Army Institute of Technology, Pune. Very active on Twitter.",
  summary:
    //"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
    "[Full-stack developer](/#about) experienced in [Spring Boot, Java, React, and Next.js](/#skills). My background includes [full time SDE roles, opensource contributions, internships, freelance work, a ton of personal projects. ](/#)and a range of courses and [certifications](/#hackathons) to deepen my expertise.",
     avatarUrl: "/me.png",
  skills: [
    "Java", 
    "C++",
    "Spring Boot",
    "REST",
    "JavaScript",
    "React",
    "Redux",
    "Next.js",
    "TypeScript",
    "Tailwind",
    "Git",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "SQL",
    "Redis",
    "GraphQL",
    "Kafka",
    "Rabbit MQ",
    "AWS",
    "Linux",
    "WebSockets",
    "Ffmpeg",
    "HLD",
    "LLD",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "jkr18042001@gmail.com",
    tel: "7999573249",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Jitesh-Raghav",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jitesh-raghav-6541a924a/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/okayjitesh",
        icon: Icons.x,

        navbar: true,
      },
      Resume: {
        name: "Jitesh Resume",
        url: "https://drive.google.com/file/d/1HWsg3TqlGALl1mfoWZhkm2UqNesQrPdq/view?usp=sharing",
        icon: Icons.Resume,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
 {
      company: "Western Union",
      href: "https://li.me/",
      badges: [],
      location: "Hybrid",
      title: "Software Engineer 1",
      logoUrl: "/wu.png",
      start: "Jan 2025",
      end: "Present",
      description:
        "Worked on developing backend microservices with Java, Spring Boot, REST APIs, and databases, while assisting in integration, testing and CI/CD deployments." },
    {
      company: "Open Source Contributor",
      href: "https://li.me/",
      badges: [],
      location: "Remote",
      title: "Active Contributor to Community Projects",
      logoUrl: "/os.png",
      start: "Oct 2023",
      end: "Present",
      description:
        "Regularly contribute to open-source projects, focusing on Java, Spring Boot, Next.js etc. Contributions include bug fixes, new feature implementations, and code optimization across various repositories. Collaborate with global developers, enhancing code quality and fostering continuous learning within the open-source community"
      },
         {
      company: "ViragVigyan",
      href: "https://www.viragvigyan.com/",
      badges: [],
      location: "Remote",
      title: "Full Stack developer",
      logoUrl: "/vv.jpg",
      start: "Dec 2024",
      end: "Jun 2025",
      description:
      "Built a full-stack warehouse management dashboard with Spring Boot, React, and MySQL, enabling real-time inventory and order tracking. Developed a movie website with dynamic search and filtering features. Contributed across frontend and backend, optimized APIs, and followed agile practices."},
    {
      company: "Upwork",
      href: "https://www.upwork.com/freelancers/~01fdf6a38198f395a4",
      badges: [],
      location: "Remote",
      title: "Freelance Software Engineeer",
      logoUrl: "/atomic.png",
      start: "Dec 2023",
      end: "Jan 2025",
      description:
       "Developed and deployed full-stack applications using Java, Spring Boot, React, and Next.js for diverse clients. Delivered tailored software solutions by gathering requirements, managing timelines, and adapting to client feedback, all while ensuring high-quality, scalable results."
       },
    // {
    //   company: "Shopify",
    //   badges: [],
    //   href: "https://shopify.com",
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/shopify.svg",
    //   start: "January 2021",
    //   end: "April 2021",
    //   description:
    //     "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    // },
    {
      company: "Nexus Software",
      href: "https://www.nexussoft.com/",
      badges: [],
      location: "Remote",
      title: "Java Developer Intern",
      logoUrl: "/nvidia.png",
      start: "Jan 2024",
      end: "Apr 2024",
      description:
       "Collaborated on backend development projects, building and optimizing APIs using Java and Spring Boot. Contributed to codebase maintenance, debugging, and implementing new features. Gained experience in agile development and hands-on exposure to production-level code, enhancing software quality and performance."
    },
 
    // {
    //   company: "Splunk",
    //   href: "https://splunk.com",
    //   badges: [],
    //   location: "San Jose, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/splunk.svg",
    //   start: "January 2019",
    //   end: "April 2019",
    //   description:
    //     "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    // },
    
    // {
    //   company: "Hacktober Fest 2024",
    //   href: "https://github.com/Jitesh-Raghav",
    //   badges: [],
    //   location: "Remote",
    //   title: "Contributed to Opensource",
    //   logoUrl: "/mitremedia.png",
    //   start: "Oct 2024",
    //   end: "Nov 2024",
    //   description:
    //    "Participated in Hacktoberfest 2024, contributing to open-source projects by fixing bugs, improving documentation, and adding new features. Enhanced coding skills while collaborating within the open-source community."  },
  ],
  education: [
    // {
    //   school: "Buildspace",
    //   href: "https://buildspace.so",
    //   degree: "s3, s4, sf1, s5",
    //   logoUrl: "/buildspace.jpg",
    //   start: "2023",
    //   end: "2024",
    // },
    {
      school: "Army Institute of Technology, Pune",
      href: "https://www.aitpune.com/",
      degree: "Bachelor of Engineering, Elctronics and Telecommunication",
      logoUrl: "/ait.jpeg",
      start: "2021",
      end: "2025",
    },
    // {
    //   school: "Wilfrid Laurier University",
    //   href: "https://wlu.ca",
    //   degree: "Bachelor's Degree of Business Administration (BBA)",
    //   logoUrl: "/laurier.png",
    //   start: "2016",
    //   end: "2021",
    // },
    // {
    //   school: "International Baccalaureate",
    //   href: "https://ibo.org",
    //   degree: "IB Diploma",
    //   logoUrl: "/ib.png",
    //   start: "2012",
    //   end: "2016",
    // },
  ],
  projects: [

    {
      title: "NotMedium",
      href: "https://notmedium.blog",
      dates: "June 2025",
      active: true,
      description:
        "A dashboard to access the tech/engineering blogs of all the major tech companies in one place.",
      technologies: [
        "Next.js",  
        "Typescript",
        "Tailwind CSS", 
        "Shadcn",
        "Lucide Icons",
        "Email.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://notmedium.blog",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/NotMedium",
          icon: <Icons.github className="size-3" />,
        },
      ],
       image: "/nomed.PNG",
      video:
        "",
    },
    {
      title: "Memic",
      href: "https://memic-five.vercel.app",
      dates: "July 2025",
      active: true,
      description:
        "An open-source tool for creating viral memes with the help of thousands of trending meme templates from all over the internet.",
      technologies: [
        "Next.js",  
        "Typescript",
        "Tailwind CSS", 
        "React Motion",
        "Zustand",
        "HTML5Canvas",
      ],
      links: [
        {
          type: "Website",
          href: "https://memic-five.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/memic",
          icon: <Icons.github className="size-3" />,
        },
      ],
       image: "/memdk.PNG",
      video:
        "",
    },
   
    {
      title: "CramIt",
      href: "https://cram-it-rouge.vercel.app",
      dates: "March 2025 - March 2025",
      active: true,
      description:
        "An open-source tool for creating AI-driven, short-form videos. Choose templates, character voices, and generate stunning videos instantly with a simple prompt.",
      technologies: [
        "Next.js",  
        "Typescript",
        "Tailwind CSS", 
        "Shadcn",
        "Supabase",
        "Prisma",
        "OAuth"
      ],
      links: [
        {
          type: "Website",
          href: "https://cram-it-rouge.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav",
          icon: <Icons.github className="size-3" />,
        },
      ],
       image: "",
      video:
        "/cramit.mp4",
    },
    {
      title: "GoRoam",
      href: "https://goroam.vercel.app",
      dates: "April 2025 - April 2025",
      active: true,
      description:
        "An open-source tool for creating AI-driven, short-form videos. Choose templates, character voices, and generate stunning videos instantly with a simple prompt.",
      technologies: [
        "React",  
        "Typescript",
        "Tailwind CSS", 
        "NextAuth.js",
        "Supabase",
        "Prisma"
      ],
      links: [
        {
          type: "Website",
          href: "https://goroam.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav",
          icon: <Icons.github className="size-3" />,
        },
      ],
       image: "",
      video:
        "/goro.mp4",
    },
    {
      title: "KwikReels",
      href: "https://kwik-reels.vercel.app",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "An open-source tool for creating AI-driven, short-form videos. Choose templates, character voices, and generate stunning videos instantly with a simple prompt.",
      technologies: [
        "Next.js",  
        "Typescript",
        "Tailwind CSS", 
        "Inngest",
        "Firebase",
        "ConvexDb",
      ],
      links: [
        {
          type: "Website",
          href: "https://kwik-reels.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/BigYikes.js",
          icon: <Icons.github className="size-3" />,
        },
      ],
       image: "",
      video:
        "/kwik.mp4",
    },
    {
      title: "PrepSlay",
      href: "https://prepslay.vercel.app",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "An open-source tool for creating AI-driven, short-form videos. Choose templates, character voices, and generate stunning videos instantly with a simple prompt.",
      technologies: [
        "React",  
        "Javascript",
        "Tailwind CSS", 
        "Vapi",
        "Supabase",
        "OAuth",
        "Play.ht",
        "Deepgram",
        "Openrouter",
      ],
      links: [
        {
          type: "Website",
          href: "https://prepslay.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/BigYikes.js",
          icon: <Icons.github className="size-3" />,
        },
      ],
       image: "",
      video:
        "/prep.mp4",
    },
    {
      title: "Synos",
      href: "",
      dates: "Upcoming",
      active: true,
      description:
       "A metaverse based meeting website.",
          technologies: [
        "COMING SOON"
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "synos.mp4",
    },
    {
      title: "BigYikes.js",
      href: "https://bigyikes-js.vercel.app/",
      dates: "Nov 2024 - Dec 2024",
      active: true,
      description:
        "An open-source tool for creating AI-driven, short-form videos. Choose templates, character voices, and generate stunning videos instantly with a simple prompt.",
      technologies: [
        "React",  
        "Typescript",
        "Tailwind CSS", 
        "Aceternity UI",
        "GPT API",
        "ElevenLabs API",
        "Ffmpeg"
      ],
      links: [
        {
          type: "Website",
          href: "https://bigyikes-js.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/BigYikes.js",
          icon: <Icons.github className="size-3" />,
        },
      ],
       image: "",
      video:
        "/big.mp4",
    },
    {
      title: "Drawscribe.io",
      href: "https://drawscribe-io.vercel.app/",
      dates: "Aug 2024 - Oct 2024",
      active: true,
      description:
     "Drawscribe.io is an interactive drawing and guessing game built with WebSocket, Spring Boot, and React, offering real-time multiplayer fun for users to showcase creativity and guessing skills.",
        technologies: [
        "Spring Boot",
        "React",
        "Tailwind CSS",
        "Web Sockets",
        "Howler.js",
       "DiceBear",
        "Fabric.js"
      ],
      links: [
        {
          type: "Website",
          href: "https://drawscribe-io.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/DrawScribe.io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/draw.mp4",
    },
    {
      title: "Chirper-X",
      href: "https://chirper-x.vercel.app/home",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Chirper-X is a micro-blogging app with 200+ active users, offering multimedia posts, user profiles, and subscription upgrades to boost engagement.",
      technologies: [
        "JWT","Java","Spring Boot", 
        "React", 
        "Redux", 
        "Tailwind CSS", 
        "MUI",
        "MySQL",
        "Cloudinary"
      ],
      links: [
        {
          type: "Website",
          href: "https://chirper-x.vercel.app/home",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/Chirper-X-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:"/chirp.mp4",
    },

    {
      title: "Blitzkrieg",
      href: "https://blitzkrieg-beryl.vercel.app/",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "A cloud IDE built with React, CodeMirror, Tailwind, and Judge0. It enables real-time code execution, syntax highlighting, and supports multiple languages for seamless coding directly in the browser.",
      technologies: [
        "React", "Redux","Tailwind CSS", "Code Mirror", "Judge0",
      ],
      links: [
        {
          type: "Website",
          href: "https://blitzkrieg-beryl.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/Blitzkrieg",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blitz.png",
       video: "",
    },
    {
      title: "minuteURL",
      href: "https://minute-url.vercel.app/",
      dates: "Nov 2023",
      active: true,
      description:
       "A URL shortening website which provides quick, easy-to-use link shortening, analytics tracking, and custom URL options, making link management efficient and accessible.",     
        technologies: [
          "HTML", "CSS", "JavaScript", "Spring Boot", "MySQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://minute-url.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/MinuteURL-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
       video: "url.mp4",
    },
    {
      title: "ProAssign",
      href: "https://proassign.vercel.app/",
      dates: "Feb 2024",
      active: true,
      description:
      "A project and bug management platform where users can create projects, assign tasks, invite collaborators, and track progress. Includes real-time chat for seamless team communication.",      technologies: [
        "React", "Redux", "Tailwind CSS", "Shadcn UI", "Spring Boot", "MySQL", "Razorpay",
      ],
      links: [
        {
          type: "Website",
          href: "https://proassign.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/ProAssign-FE",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/nn.mp4",
    },
    {
      title: "DocHouse",
      href: "https://chromewebstore.google.com/detail/dochouse/bfiklficoamhlojcefkjaeamidnlbgbj?authuser=0&hl=en-GB",
      dates: "April 2024",
      active: true,
      description:
     "Built a Chrome extension converting 7+ file types to PDF, processing files daily. Optimized with Spring Boot, cutting processing time by 30% using Apache POI and PDFBox, with 100+ installs.",
         technologies: [
          "HTML", "CSS", "JavaScript","Apache POI", "JODConvertor", "Spring Boot"
      ],
      links: [
        {
          type: "Website",
          href: "https://chromewebstore.google.com/detail/dochouse/bfiklficoamhlojcefkjaeamidnlbgbj?authuser=0&hl=en-GB",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/DocHouse-ChromeExtension",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "doc.mp4",
    },
    {
      title: "NetflixGPT",
      href: "https://netflix-gpt-zeta-swart.vercel.app/",
      dates: "April 2024",
      active: true,
      description:
    "A movie recommendation website that generates tailored movie lists based on user prompts, offering quick suggestions for any mood or genre.",    technologies: [
          "HTML", "CSS", "JavaScript","Apache POI", "JODConvertor", "Spring Boot"
      ],
      links: [
        {
          type: "Website",
          href: "https://netflix-gpt-zeta-swart.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/Netflix-GPT",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/netf.mp4",
    },
    {
      title: "Reserv",
      href: "https://github.com/Jitesh-Raghav/Ticket-Booking-Concurrent",
      dates: "April 2024",
      active: true,
      description:
       "A Movie Ticket Booking website with transaction isolation to manage concurrent seat bookings and prevent race conditions. Features include user authentication, movie listings, and booking.",  technologies: [
         "HTML", "CSS", "JavaScript", "Spring Boot","Spring Security", "Maven","Swagger", "JWT", "Spring Data JPA"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chromewebstore.google.com/detail/dochouse/bfiklficoamhlojcefkjaeamidnlbgbj?authuser=0&hl=en-GB",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/Ticket-Booking-Concurrent",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ticket.png",
      video:
        "",
    },
    {
      title: "Multithreaded WebServer",
      href: "https://github.com/Jitesh-Raghav/Multithreaded-WebServer",
      dates: "April 2024",
      active: true,
      description:
    "Its a High-performance HTTP server utilizing multithreading for concurrent client connections. Features robust request handling, optimized resource allocation, and scalable architecture.",    technologies: [
          "Java", "JMeter"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://chromewebstore.google.com/detail/dochouse/bfiklficoamhlojcefkjaeamidnlbgbj?authuser=0&hl=en-GB",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/Multithreaded-WebServer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "server.mp4",
    },
    {
      title: "FarMore",
      href: "https://farmore.vercel.app/",
      dates: "April 2024",
      active: true,
      description:
    "A crop management platform that recommends ideal crops for optimal yield based on weather, temperature, soil type, and rainfall, supporting efficient and sustainable farming." ,       technologies: [
          "React", "Raspberry Pi", "Sensors", "WeatherAPIs"
      ],
      links: [
        {
          type: "Website",
          href: "https://farmore.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jitesh-Raghav/AgriMaster",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "farm.mp4",
    },
   
  ],
  hackathons: [
    {
      title: "Java-Zero to First Job",
      dates: "June, 2023",
      location: "Udemy",
      description:
        "Learned and implemented core Java concepts, advanced Java topics, and Java 8 features, including exception handling, collections, and multithreading.",
      image:
        "/java.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Spring 6 and Spring Boot 3",
      dates: "Oct, 2023",
      location: "Udemy",
      description:
        "Gained expertise in Spring 6 and Spring Boot 3, focusing on building RESTful APIs, dependency injection, and application configuration..",
      image:
        "/spring.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Building real time REST APIs",
      dates: "Nov, 2023",
      location: "San Francisco, California",
      description:
        "Explored the principles of REST architecture, learned to create real-time APIs, and implemented a Blog application.",
      icon: "public",
      image:
        "/rest.png",
      links: [],
    },
    {
      title: "Microservices and Spring Cloud",
      dates: "Feb, 2024",
      location: "Udemy",
      description:
        "Studied microservices architecture and Spring Cloud, focusing on building scalable applications, service discovery, and API gateways.",
      image:
        "/micro.png",
      // links: [
      //   {
      //     title: "Github",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/cryptotrends/cryptotrends",
      //   },
      // ],
    },
    {
      title: "Namaste JavaScript",
      dates: "Jan, 2024",
      location: "NamasteDev",
      description:
        "Acquired foundational and advanced JavaScript skills, including ES6 features, asynchronous programming, and DOM manipulation techniques.",
         image:
        "/js.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      // links: [
      //   {
      //     title: "Devpost",
      //     icon: <Icons.globe className="h-4 w-4" />,
      //     href: "https://devpost.com/software/my6footprint",
      //   },
      //   {
      //     title: "ML",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/my6footprint-machine-learning",
      //   },
      //   {
      //     title: "iOS",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/CarbonWallet",
      //   },
      //   {
      //     title: "Server",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/Wallet6/wallet6-server",
      //   },
      // ],
    },
    {
      title: "Namaste React",
      dates: "Jan, 2024 - March, 2024",
      location: "Namaste Dev",
      image:
        "/react.png",
      description:
        "Learned React fundamentals, including components, state management, hooks, and routing, while building interactive web applications.",  
      // links: [
      //   {
      //     title: "Organization",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/ethdocnet",
      //   },
      // ],
    },
    {
      title: "Next.js 15 Course",
      dates: "Sept, 2024",
      location: "freeCodeCamp",
      description:
        "Studied Next.js 15 features, including server-side rendering, static site generation, and API routes for building performant web applications.",
      image:
        "/next.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      // links: [
      //   {
      //     title: "Streamer Source",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/justinmichaud/htn2017",
      //   },
      //   {
      //     title: "Client Source",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/dillionverma/RTSPClient",
      //   },
      // ],
    },
    {
      title: "AWS Certified Cloud Practitioner",
      dates: "July, 2024",
      location: "freeCodeCamp",
      description:
        "Explored AWS core services, including EC2, S3, and Lambda, while learning to deploy and manage scalable cloud applications.", image:
        "/aws.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      // links: [
      //   {
      //     title: "Source",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/ShareShip/ShareShip",
      //   },
      //   {
      //     title: "Site",
      //     icon: <Icons.globe className="h-4 w-4" />,
      //     href: "https://share-ship.herokuapp.com/",
      //   },
      // ],
    },
    {
      title: "DevOps course",
      dates: "Oct, 2024",
      location: "freeCodeCamp",
      description:
       "Gained knowledge in DevOps practices, including CI/CD pipelines, infrastructure as code, and containerization using Docker.",     image:
        "/devops.webp",
      // links: [
      //   {
      //     title: "Source",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/nsagirlfriend/nsagirlfriend",
      //   },
      // ],
    },
    {
      title: "System Design for Beginners",
      dates: "May, 2024",
      location: "freeCodeCamp",
      description:
       "Learned system design principles, focusing on scalable architecture, database design, and performance optimization for software systems.",      image:
        "/sys.jpeg",
      win: "1st Place Winner",
      // links: [
      //   {
      //     title: "Article",
      //     icon: <Icons.globe className="h-4 w-4" />,
      //     href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
      //   },
      //   {
      //     title: "Source",
      //     icon: <Icons.github className="h-4 w-4" />,
      //     href: "https://github.com/TinySamosas/",
      //   },
      // ],
    },



    // {
    //   title: "McGill AI for Social Innovation Hackathon",
    //   dates: "June 17th - 18th, 2017",
    //   location: "Montreal, Quebec",
    //   description:
    //     "Developed realtime facial microexpression analyzer using AI",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
    //   links: [],
    // },
    // {
    //   title: "Open Source Circular Economy Days Hackathon",
    //   dates: "June 10th, 2017",
    //   location: "Toronto, Ontario",
    //   description:
    //     "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
    //   win: "1st Place Winner",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/genecis",
    //     },
    //   ],
    // },
    // {
    //   title: "Make School's Student App Competition 2017",
    //   dates: "May 19th - 21st, 2017",
    //   location: "International",
    //   description: "Improved PocketDoc and submitted to online competition",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
    //   win: "Top 10 Finalist | Honourable Mention",
    //   links: [
    //     {
    //       title: "Medium Article",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
    //     },
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
    // {
    //   title: "SpaceApps Waterloo",
    //   dates: "April 28th - 30th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/earthwatch",
    //     },
    //   ],
    // },
    // {
    //   title: "MHacks 9",
    //   dates: "March 24th - 26th, 2017",
    //   location: "Ann Arbor, Michigan",
    //   description:
    //     "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/threejs-planes",
    //     },
    //   ],
    // },
    // {
    //   title: "StartHacks I",
    //   dates: "March 4th - 5th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
    //   win: "1st Place Winner",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-ionic",
    //     },
    //     {
    //       title: "Source (Server)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/recipic-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "QHacks II",
    //   dates: "February 3rd - 5th, 2017",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed a mobile game which enables city-wide manhunt with random lobbies",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
    //   mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
    //   links: [
    //     {
    //       title: "Source (Mobile)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/human-huntr-react-native",
    //     },
    //     {
    //       title: "Source (API)",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/mattBlackDesign/human-huntr-rails",
    //     },
    //   ],
    // },
    // {
    //   title: "Terrible Hacks V",
    //   dates: "November 26th, 2016",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed a mock of Windows 11 with interesting notifications and functionality",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
    //     },
    //   ],
    // },
    // {
    //   title: "Portal Hackathon",
    //   dates: "October 29, 2016",
    //   location: "Kingston, Ontario",
    //   description:
    //     "Developed an internal widget for uploading assignments using Waterloo's portal app",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
    //   links: [
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/UWPortalSDK/crowmark",
    //     },
    //   ],
    // },
  ],
} as const;






