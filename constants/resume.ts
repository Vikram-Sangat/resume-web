import yearsOfExperience from "./date";
import { PROFILE } from "./variables";

const Resume = {
  name: "Vikram Sangat",
  position: "Web full stack developer - React | Flutter | Python | Node.js",
  description: `With over ${yearsOfExperience()} years of expertise in developing Web Applications, Hybrid Mobile Applications and Backend Services. I manage product development lifecycle from design implementation to production deployment. Always looking for new opportunity to learn and experiment with new technologies and frameworks.`,
  profile: PROFILE,
  address: "Bangalore, India",
  github: "https://github.com/Vikram-Sangat",
  email: "v.sangat98@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vikram-sangat-4414854a/",
  mobile: "+91-9503415652",
  skills: [
    "Dart",
    "Django",
    "Elasticsearch",
    "Express",
    "Flutter",
    "MongoDB",
    "Node.js",
    "NextJS",
    "PostgreSQL",
    "Python",
    "React",
    "Redux",
    "RxJs",
    "Typescript",
  ],
  interests: ["Online Game", "Singing", "Photography", "Sports"],
  patents: [
    {
      link: "GB2572361A",
      title: "System and method for determining allocation of sales force",
    },
    {
      link: "USD870129S1",
      title: "Display screen with transitional graphical user interface",
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering, Computer Science",
      university: "Jhulelal Instutute Of technoloy,Nagpur",
      duration: "2008 - 2012",
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
};
export default Resume;
