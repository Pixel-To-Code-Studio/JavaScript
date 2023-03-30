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
  
  export const cohorts = [
    {
      name: "cohort1",
      startDate: "23-3-2021",
      active: false,
      graduationDate: "7-11-2021",
    },
    {
      name: "cohort2",
      startDate: "28-5-2021",
      active: false,
      graduationDate: "7-11-2021",
    },
    {
      name: "cohort3",
      startDate: "2-9-2021",
      active: true,
      currentModule: "react",
    },
    {
      name: "cohort4",
      startDate: "14-11-2021",
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
    { name: "Luke", cohort: "cohort2", gitHubName: "LukeAshton", graduated: false },
    { name: "Chloe", cohort: "cohort1", gitHubName: "Chloe96", graduated: true },
    { name: "Jed", cohort: "cohort3", gitHubName: "Jed20", graduated: false },
    {
      name: "Peter",
      cohort: "cohort4",
      gitHubName: "PeterParker",
      graduated: false,
    },
  ];
  
  export const mentors = [
    {
      name: "Stuart",
      canTeach: ["javascript", "browsers", "using-apis"],
      nowTeaching: "javascript",
    },
    {
      name: "Amy",
      canTeach: ["using-apis", "node"],
    },
    {
      name: "Yasmin",
      canTeach: ["react"],
      nowTeaching: "react",
    },
    {
      name: "Alin",
      canTeach: ["javascript", "using-apis"],
    },
    {
      name: "Doug",
      canTeach: ["html/css/git", "javascript", "node"],
    },
    {
      name: "Norrie",
      canTeach: ["browsers", "using-apis", "node"],
    },
  ];
  