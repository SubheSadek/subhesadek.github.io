/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Subhe Sadek",
  title: "Hi all, I'm Sadek",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with PHP / Laravel / Node / Javascript / Vue.js / React.js and some other cool libraries and frameworks."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/subhesadek",
  linkedin: "",
  gmail: "subhesadek89990@gmail.com",
  gitlab: "",
  facebook: "https://www.facebook.com/profile.php?id=100022978537652",
  medium: "",
  stackoverflow: "https://stackoverflow.com/users/17228661/md-sadik",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Followed best practices for code development, testing, and deployment"),
    emoji(
      "⚡ Integration of third party services such as Firebase / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "digitalocean",
      fontAwesomeClassname: "fab fa-digital-ocean"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University",
      logo: require("./assets/images/nu.png"),
      subHeader: "Bachelor of Business Administration (BBA)",
      duration: "February 2016 - June 2021",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Govt. Haraganga College",
      logo: require("./assets/images/haraganga.png"),
      subHeader: "Higher Secondary Certificate(HSC)",
      duration: "January 2013 - February 2015",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Assistant Web Developer",
      company: "Itmedicus",
      companylogo: require("./assets/images/itmedicus.jpg"),
      date: "JANUARY 2022 - PRESENT",
      desc: "Responsibility : ",
      descBullets : [
        "Create web applications from scratch.",
        "Mentored junior developers and provided technical support to team members.",
        "Coordinate with the App developers & QA team.",
        "Design, develop, and maintain the server-side components of the applications.",
        "Deploy project in the DigitalOcean Nginx server.",
        "Test and optimize application performance.",
      ]
    },
    {
      role: "Jr. Software Developer",
      company: "Appifylab",
      companylogo: require("./assets/images/appifylab.jpeg"),
      date: "DECEMBER 2020 - DECEMBER 2021",
      desc: "Responsibility : ",
      descBullets: [
        "Contributed to the design and development of custom web applications using Laravel, Vue.js and React.js.",
        "Followed best practices for code development, testing, and deployment.",
        "Participated in code reviews and collaborated with senior developers to resolve technical issues.",
        "Continued to learn and grow in the field through on-the-job training and mentorship.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/project_banner/divine9.png"),
      projectName: "Divine 9 Connections (Social platform)",
      projectDesc: "Used adonis.js, nuxt.js, socket.io, mysql,stripe payment. Users can share post, Make comment, ceate like, Chat and etc.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://divine9connections.com"
        }
      ]
    },
    {
      image: require("./assets/images/project_banner/scrapabill.png"),
      projectName: "Scrapabill (Social platform)",
      projectDesc: "Used Adonis .js, nuxt.js, mysql, socket.io, stripe and etc. Can share post, Make comment, ceate like, create bill and etc.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://scrapabill.com"
        }
      ]
    },
    {
      image: require("./assets/images/project_banner/scorebee.webp"),
      projectName: "Scorebee Api (Cricket scoring app)",
      projectDesc: "Used laravel, pusher, sanctum authentication and etc.. Can score live match, show statistics, show player insights like cricheros app.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.scorebee.scorebee&hl=en&gl=US"
        }
      ]
    },
    {
      image: require("./assets/images/project_banner/osb.png"),
      projectName: "OSB App Api (Doctor's Association App)",
      projectDesc: "Used laravel, Vue (admin panel), Sanctum Auth, SSL payment gateway and Firebase verification. Can score live match, show statistics, show player insights like cricheros app.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://play.google.com/store/apps/details?id=com.scorebee.scorebee&hl=en&gl=US"
        }
      ]
    },
    {
      image: require("./assets/images/project_banner/grossemart.png"),
      projectName: "Grossemart (eCommerce site)",
      projectDesc: "Grossemart is an awesome eCommerce website with latest features. Used Laravel, Vue.js, Stripe Payment,SMS Service",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.grossemart.com"
        }
      ]
    },
    {
      image: require("./assets/images/project_banner/notepac.png"),
      projectName: "Note PAC (A Community App)",
      projectDesc: "Used Laravel, Firestore realtime database and Vue.js. Can assign task to each other can create group task as well.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://notepac.app"
        }
      ]
    },
    {
      image: require("./assets/images/project_banner/ninza_express.png"),
      projectName: "Ninja Express (Courier Service)",
      projectDesc: "Used Laravel, React, Docker,PosgreSQL and other cool framworks.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ninjaexpressbd.com"
        }
      ]
    },
    {
      image: require("./assets/images/project_banner/delivery_service.png"),
      projectName: "Paris Delivery Service",
      projectDesc: "Paris Delivery is an food delivery blog site. Used html, css, bootstrap and smtp server.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.parisdeliverys.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com",
  default_bio : "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
