const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Mahir Ahmed | Portfolio",
  description:
    "An ordinary guy who trying to learn Web Development and Video Editing",
  og: {
    title: "Mahir Portfolio",
    type: "website",
    url: "https://mahirsportfolio2.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Assalamualaikum!",
  sub: "Mahir Ahmed",
  resumeLink:
    "https://drive.google.com/file/d/1sAMkmhMMgj6jLVPW2tx6hxc8phHZD_ho/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "black",
      },
      profileLink: "https://github.com/Mahir-Ahmed-250",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/mahir-ahmed-zawad/",
    },
    {
      siteName: "Videos",
      iconifyClassname: "simple-icons:googledrive",
      style: {
        color: "#0F9D58",
      },
      profileLink:
        "https://drive.google.com/drive/folders/1B4Q9uA-4R42Mfix1qR3eV7g8y9BRVNGF",
    },
    {
      siteName: "Facebook",
      iconifyClassname: "simple-icons:facebook",
      style: {
        color: "#4267B2",
      },
      profileLink: "https://www.facebook.com/Xahin.Mahir/",
    },
    {
      siteName: "Expo",
      iconifyClassname: "simple-icons:expo",
      style: {
        color: "black",
      },
      profileLink: "https://expo.dev/@mahir_developer",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Firebase",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Render",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Video Editing",
      fileName: "DesignImg",
      skills: [
        "⚡ Create Sequence based video lessons from Raw footage",
        "⚡ Edit Raw footages & attach titles",
        "⚡ Creating Eye catching contents",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Premier Pro",
          fontAwesomeClassname: "simple-icons:adobepremierepro",
          style: {
            color: "#412848",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "Here Some of my Projects",
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Internship Team Member",
        subtitle: "Institute of Global Professionals",
        date: "September 2022 - present",
        content: [
          "Build MERN Stack websites with Team members.",
          "Write scalable codes and learn MERN structure.",
          "Develop Bug free and user friendly websites.",
        ],
      },
      {
        title: "Junior Frontend Developer",
        subtitle: "Global Skills Development Agency",
        date: "March 2022 - April 2022",
        content: [
          "Fixing existing projects styles with css and bootstrap.",
          "Creating Landing pages for new promotions.",
          "Support other team members in IT sections.",
        ],
      },
      {
        title: "Video Editor",
        subtitle: "Esho Shikhi Ltd",
        date: "Oct 2020 - March 2021",
        content: [
          "Create Sequence based video lessons from Raw footage.",
          "Help Team members for creating better video lessons.",
          "Error Checking.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Bachelor (honors) of Science: Mathematics",
          subtitle: "Bangladesh University",
          date: "2017 - 2021",
          content: ["Iqbal Road, Mohammadpur, Dhaka"],
        },
        {
          title: "Higher Secondary Certificate [HSC]",
          subtitle: "Tejgaon College",
          date: "2013 - 2015",
          content: ["Indira Road, Tejgaon, Dhaka"],
        },
        {
          title: "Secondary Secondary Certificate [SSC]",
          subtitle: "Mohammadpur Govt High School",
          date: "2006 - 2013",
          content: ["Humayan Road, Mohammadpur, Dhaka"],
        },
      ],
    },

    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Design & Constriction Agency Website",
          subtitle: "www.studiospacejam.com",
          content: [
            "Studio Space Jam, the consultancy unit of Space Jam Design & Constriction, is a full service architectural firm located in Dhaka, Bangladesh since 2013.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Complete Web Development",
      subtitle: "Programming Hero",
      logo_path: "ph.png",
      certificate_link:
        "https://drive.google.com/file/d/1MUF-uD6cduh9v6j9LxCXp26rzhMD03BY/view",
      alt_name: "PH",
      color_code: "#ffff",
    },
    {
      title: "Community Level Volunteer Training Programme",
      subtitle: "Bangladesh Fire Service & Civil Defence",
      logo_path: "fire.png",
      certificate_link:
        "https://drive.google.com/file/d/1MFeFUGP8VC1NmFqjSaedr1YETIatG6SB/view",
      alt_name: "BFSCD",
      color_code: "#ffff",
    },
    {
      title: "Responsive Web Design",
      subtitle: "freeCodeCamp.org",
      logo_path: "freecode.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/fcc46cdde8f-39ea-4f06-94d4-c3b899948084/responsive-web-design",
      alt_name: "freeCodeCamp",
      color_code: "#ffff",
    },
    {
      title: "Python for Beginners",
      subtitle: "sololearn",
      logo_path: "solo.png",
      certificate_link: "https://www.sololearn.com/Certificate/CT-CKJSJF3K/png",
      alt_name: "sololearn",
      color_code: "#ffff",
    },
    {
      title: "Web Development with HTML and CSS for Beginners",
      subtitle: "Alison",
      logo_path: "Alison.png",
      certificate_link:
        "https://alison.com/certification/check/$2y$10$.AnS0hazfvv0w6W21KfNUucl8YX6Z2fxKwNQcbzw4XAv9xAU6921K",
      alt_name: "Alison",
      color_code: "#ffff",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "Feel free to contact with me, i'll reply within 24 hours inshaAllah!",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dhaka Uddan, Mohammadpur, Dhaka",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+8801515668345",
  },
};

//contact icons
const socialMediaLinks = [];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  certifications,
  resumeleft,
  resumeright,
};
