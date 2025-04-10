const userContentInner = `
  <div class="user-img">
    <img src="https://github.com/eduardojpanzo.png" alt="user" />
  </div>
  <div class="user-info">
    <span>@eduardojpanzo</span>
  </div>
  <div class="user-link">
    <i class="fas fa-link"></i>
  </div>
`;

const toggleThemeInner = `
  <div>
    <i class="fas fa-sun sun"></i>
    <i class="fas fa-moon moon"></i>
  </div>
  <div>
    <span class="sun">Light</span>
    <span class="moon">Dark</span>
  </div>
`;

const categoryData = [
  {
    id: 1,
    name: "Images",
    icon: `<i class="fas fa-images"></i>`,
    goTo: "handleMountBodyData(1)",
  },
  {
    id: 2,
    name: "Documents",
    icon: `<i class="fas fa-file-alt"></i>`,
    goTo: "handleMountBodyData(2)",
  },
  {
    id: 3,
    name: "Audio",
    icon: `<i class="fas fa-music"></i>`,
    goTo: "handleMountBodyData(3)",
  },
  {
    id: 4,
    name: "Video",
    icon: `<i class="fas fa-video"></i>`,
    goTo: "handleMountBodyData(4)",
  },
  {
    id: 5,
    name: "Others",
    icon: `<i class="fas fa-file"></i>`,
    goTo: "handleMountBodyData(5)",
  },
];

const tableBodyData = [
  {
    id: 1,
    name: "city",
    ext: "PNG image",
    size: "156 KB",
    uploadAt: "10-01-2021",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Day 1333 App dashbords",
    ext: "InVision Studio",
    size: "2 MB",
    uploadAt: "10-01-2022",
    categoryId: 1,
  },
  {
    id: 3,
    name: "plus_icon",
    ext: "SVG",
    size: "22 KB",
    uploadAt: "10-01-2022",
    categoryId: 1,
  },
  {
    id: 4,
    name: "Flow",
    ext: "mp4",
    size: "2 MB",
    uploadAt: "10-01-2022",
    categoryId: 4,
  },
  {
    id: 5,
    name: "Americano",
    ext: "mp4",
    size: "2 MB",
    uploadAt: "10-01-2022",
    categoryId: 4,
  },
  {
    id: 6,
    name: "Beats",
    ext: "mp3",
    size: "3 MB",
    uploadAt: "10-01-2022",
    categoryId: 3,
  },
  {
    id: 7,
    name: "Day top",
    ext: "mp3",
    size: "3 MB",
    uploadAt: "10-01-2022",
    categoryId: 3,
  },
  {
    id: 8,
    name: " dashbords",
    ext: "docx",
    size: "2 MB",
    uploadAt: "10-01-2022",
    categoryId: 2,
  },
  {
    id: 9,
    name: "plus_icon",
    ext: "doc",
    size: "22 KB",
    uploadAt: "10-01-2022",
    categoryId: 2,
  },
  {
    id: 10,
    name: "modd",
    ext: "jar",
    size: "22 KB",
    uploadAt: "10-01-2022",
    categoryId: 5,
  },
];
