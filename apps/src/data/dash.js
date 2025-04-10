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

const uploadFormModalInner = `
  <form class="form-upload" onsubmit="handleUploadFile(event)">
    <div class="control-form">
      <label for="fileType">Selecione o tipo de arquivo:</label>
      <select id="fileType" onchange="handleDefineTypeFile(event)">
        <option selected disabled value="">Selecione um tipo</option>
        <option value="image">Imagem</option>
        <option value="document">Documento</option>
        <option value="audio">Audio</option>
        <option value="video">Vídeo</option>
      </select>
    </div>

    <div class="control-form">
      <label for="fileInput">Selecione um arquivo:</label>
      <input type="file" id="fileInput">
    </div>

    <div class="control-form">
      <button type="submit">Guardar</button>
    </div>
  </form>
`;

const categoryData = [
  {
    id: 1,
    name: "Images",
    slug: "image",
    icon: `<i class="fas fa-images"></i>`,
    goTo: "handleMountBodyData(1)",
  },
  {
    id: 2,
    name: "Documents",
    slug: "document",
    icon: `<i class="fas fa-file-alt"></i>`,
    goTo: "handleMountBodyData(2)",
  },
  {
    id: 3,
    name: "Audio",
    slug: "audio",
    icon: `<i class="fas fa-music"></i>`,
    goTo: "handleMountBodyData(3)",
  },
  {
    id: 4,
    name: "Video",
    slug: "video",
    icon: `<i class="fas fa-video"></i>`,
    goTo: "handleMountBodyData(4)",
  },
  {
    id: 5,
    name: "Others",
    slug: "",
    icon: `<i class="fas fa-file"></i>`,
    goTo: "handleMountBodyData(5)",
  },
];

let tableBodyData = [
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
