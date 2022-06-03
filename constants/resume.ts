import yearsOfExperience from "./date";
import { PROFILE } from "./variables";

export const Resume = {
  name: "Vikram Sangat",
  position: "Senior UI Enginner - React | Flutter | Python | Node.js",
  description: `
  I am a full-stack web developer at DMart Labs. With over 5 years of experience in corporate and 2 years of experience in freelancing. My technical work spans front-end architecture, hybrid mobile application development, and backend services. I also actively manage the front-end team's software development process. In the past, I have worked on web applications and data processing pipelines. I am keen to explore interesting roles in broad areas of web and backend development.`,
  profile: PROFILE,
  address: "Bangalore, India",
  gravatar:"https://www.gravatar.com/avatar/7384e1fc27b2c82cc01ab728f681f326",
  github: "https://github.com/Vikram-Sangat",
  email: "v.sangat98@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vikram-sangat-4414854a/",
  mobile: "+91-9503415652",
  languages: ["Python", "Javascript", "HTML", "CSS", "Dart", "PHP", "C#"],
  frameworks: [
    "D3.js",
    "Django",
    "Express",
    "Flutter",
    "Node.js",
    "NextJS",
    "React",
    "Redux",
    "RxJs",
    "Typescript",
  ],
  databases: ["Elasticsearch", "MongoDB", "PostgreSQL", "MySQL"],
  tools: ["Visual Studio Code", "Android Studio", "Postman", "git"],
  patents: [
    {
      link: "GB2572361A",
      url: "https://patents.google.com/patent/GB2572361A",
      title: "System and method for determining allocation of sales force",
    },
    {
      link: "USD870129S1",
      url: "https://patents.google.com/patent/USD870129S1",
      title: "Display screen with transitional graphical user interface",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering, Computer Science",
      university: "Jhulelal Institute Of Technology, Nagpur",
      duration: "2008 - 2012",
    },
    {
      degree: "Master of Technology, CS and IT",
      university: "Vishwakarma Institute of Technology, Pune",
      duration: "2013 - 2015 (Completed coursework)",
    },
  ],
  certifications: [
    {
      title: "Certified Blockchain Developer",
      issuer: "Blockchain Council",
      link: "https://www.credential.net/56729257-fa68-446f-a156-11b6de00f5e4#gs.9q3r7k",
    },
  ],
  awards: [
    {
      title: "Jedi Knight for versatile performance",
      issuer: "Innoplexus Consulting Services Pvt Ltd",
    },
    {
      title: "Mentored in PyCamp 2K17",
      issuer: "PyCamp 2K17 - Nagpur",
    },
  ],
  experience: [
    {
      title: "Senior UI engineer",
      company: "Visa",
      duration: [new Date(2021, 11, 13), new Date()],
      isCurrent: true,
      area: "Bangalore, India",
      techStack: ["React", "Redux", "Single-SPA", "RxJx"],
      description: "",
      tasks: ["Managed frontend team and all inhouse application development"],
    },
    {
      title: "Web full stack developer",
      company: "DMart Labs (Avenue Supermarkets Ltd)",
      duration: [new Date(2019, 9, 1), new Date(2021, 10, 25)],
      area: "Bangalore, India",
      techStack: [
        "React",
        "Redux",
        "Single-SPA",
        "RxJx",
        "Flutter",
        "Material-UI",
      ],
      description: "",
      tasks: [
        "Managed frontend team and all inhouse application development",
        "Implemented micro frontend with Single SPA architecture and react child application",
        "Created application development SDK and Component libraries to reduce application development time by 50%",
        "Created framework library which provides common API for network calls, notifications and other useful features to all child applications for micro-frontend",
        "Created a Hybrid mobile application using Flutter and React",
      ],
    },
    {
      title: "Software Engineer",
      company: "Innoplexus Consulting Services Pvt Ltd",
      duration: [new Date(2017, 10, 1), new Date(2019, 9, 1)],
      area: "Pune, India",
      description: "",
      techStack: [
        "React",
        "Node.js",
        "Django",
        "Express",
        "Elasticsearch",
        "MongoDB",
        "Python",
      ],
      tasks: [
        "Lead team of 2 - 3 developers to create client-facing dashboards using React and D3",
        "Created API services from scratch using Express, Django, Elasticsearch and MongoDB",
        "Created query builder SDK for DaaS platform using Typescript",
        "Created Dashboards and Analytical application for Patents analysis",
        "Created data processing pipelines for calculating  Simple and Extended patent family calculations and other parents related statistic with MongoDB and Pandas",
        "Assisted team with setting up backend structure using Django and Express",
      ],
    },
    {
      title: "CoFounder",
      company: "Pole8",
      duration: [new Date(2017, 5, 1), new Date(2017, 10, 1)],
      area: "Nagpur, India",
      techStack: [
        "Semantic UI",
        "Django",
        "PostgresSQL",
        "Leaflet",
        "JQuery",
        "Python",
      ],
      description:
        "Platform focused towards documentation in the infrastructure industry. Aimed to reduce monitoring overhead by providing geotagged insights from given data",
      tasks: [
        "Created Django application which helps in representing collection of coordinated on map using leaflet",
        "Worked on location clustering algorithm to cluster user images",
        "Created Android application which supports capturing geotagged images with use of hardware sensors for directions and Geo-location",
      ],
    },
    {
      title: "CoFounder",
      company: "Vritt",
      techStack: [
        "Semantic UI",
        "Django",
        "PostgresSQL",
        "Stanford-NER",
        "NLTK",
        "Polyglot",
        "JQuery",
        "Python",
      ],
      duration: [new Date(2016, 5, 1), new Date(2017, 5, 1)],
      area: "Nagpur, India",
      description:
        "Platform for automatically extracting and keywords from news and building news topical timelines to help keep track of interests of readers",
      tasks: [
        "Integrated NLP data processing libraries like Stanford NER, NLTK and polyglot with Django",
        "Created crawlers for curating data from various websites using RSS feeds and Crawling",
        "Created a website using Django templates and CSS frameworks like Semantic UI",
      ],
    },
  ],
  projects: [
    {
      title: "A3 Ultimate Account Control Panel",
      company: "A3 Ultimate Games",
      link: "https://github.com/Vikram-Sangat/a3-ultimate-acp",
      techStack: ["Bootstrap", "MySql", "PHP", "MSSQL", "CodeIgniter"],
      tasks: [
        "Created platform to manage in-game purchases and account management via web application",
        "Integrated Paypal and PayU Money payment's services for in-game items purchase",
        "Created blogging system form players to share their experience with others players",
      ],
    },
    {
      title: "A3 Ultimate game client updater",
      company: "A3 Ultimate Games",
      link: "https://github.com/Vikram-Sangat/A3-Client-Updater",
      techStack: ["C#", "MD5"],
      tasks: [
        "Created client updated application for generating on the fly updates and new features to players.",
        "Integrated MD5 Checksum generation and validation for updating new patch files.",
      ],
    },
    {
      title: "Transwise",
      company: "Tiru Ghisewad - Transwise",
      link: "https://github.com/Vikram-Sangat/transwise-client-app",
      techStack: ["Bootstrap", "MySql", "PHP", "CodeIgniter"],
      tasks: [
        "Transwise is a platform for book rental cars as well as rent drivers.",
        "Integrated receipts tax calculations ,scheduling emails on each trip complete and printing.",
      ],
    },
  ],
};
const r = Resume;
export default r;
