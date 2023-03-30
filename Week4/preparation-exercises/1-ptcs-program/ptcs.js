export const modules = [
    { name: "html-css", displayName: "HTML/CSS" },
    { name: "javascript", displayName: "JavaScript" },
    { name: "browsers", displayName: "Browsers" },
    { name: "using-apis", displayName: "Using APIs" },
    { name: "node", displayName: "Node.js" },
    { name: "databases", displayName: "Databases" },
    { name: "react", displayName: "React" },
    { name: "project", displayName: "Project" },
  ];
  
  export const classes = [
    {
      name: "cohort1",
      startDate: "23-3-2022",
      active: false,
      graduationDate: "7-11-2022",
    },
    {
      name: "cohort2",
      startDate: "28-5-2022",
      active: false,
      graduationDate: "7-11-2022",
    },
    {
      name: "cohort3",
      startDate: "2-9-2022",
      active: true,
      currentModule: "react",
    },
    {
      name: "cohort4",
      startDate: "14-11-2022",
      active: true,
      currentModule: "using-apis",
    },
    {
      name: "cohort5",
      startDate: "5-1-2022",
      active: true,
      currentModule: "javascript",
    },
  ];
  
  export const students = [
    { name: "Fede", class: "cohort2", gitHubName: "fedefu", graduated: false },
    { name: "Tjebbe", class: "cohort1", gitHubName: "Tjebbee", graduated: true },
    { name: "Rob", class: "cohort3", gitHubName: "robvk", graduated: false },
    {
      name: "Wouter",
      class: "cohort4",
      gitHubName: "wouterkleijn",
      graduated: false,
    },
  ];
  
  export const mentors = [
    {
      name: "Stan",
      canTeach: ["javascript", "browsers", "using-apis"],
      nowTeaching: "javascript",
    },
    {
      name: "Andrew",
      canTeach: ["using-apis", "node"],
    },
    {
      name: "Stuart",
      canTeach: ["react"],
      nowTeaching: "react",
    },
    {
      name: "Luke",
      canTeach: ["javascript", "using-apis"],
    },
    {
      name: "Chloe",
      canTeach: ["html/css/git", "javascript", "node"],
    },
    {
      name: "Sue",
      canTeach: ["browsers", "using-apis", "node"],
    },
  ];
  