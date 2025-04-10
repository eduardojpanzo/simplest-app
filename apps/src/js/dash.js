const modalOverlay = document.querySelector(".modal-overlay");

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && isModalOpen()) {
    closeModal();
  }
});
function getResumeData() {
  const categoryMap = new Map(categoryData.map((cat) => [cat.id, cat.name]));
  const countMap = new Map();

  for (const item of tableBodyData) {
    const name = categoryMap.get(item.categoryId);
    if (!name) continue;

    countMap.set(name, (countMap.get(name) || 0) + 1);
  }

  const result = Array.from(countMap.entries()).map(([name, qtd]) => ({
    name,
    qtd,
  }));

  return result;
}
function createNewUpload() {
  modalOverlay.querySelector(".modal-content").innerHTML = `
    Criar New upload!
  `;

  openModal();
}

function handleGoToOwnerSite() {
  window.open("https://eduardojpanzo.vercel.app", "_blank");
}

function toggleTheme() {
  document.querySelector("html").classList.toggle("dark");
}

function openModal() {
  modalOverlay.classList.add("open");
}

function closeModal() {
  modalOverlay.classList.remove("open");
}

function isModalOpen() {
  return modalOverlay.classList.contains("open");
}

function setMenuItems() {
  document.querySelector(".menu-items").innerHTML = `
   <li class="item" onclick="mountInitialDashContent()">
      <i class="fas fa-home"></i>
      <span>Painel</span>
    </li>`;
  categoryData.map((item) => {
    document.querySelector(".menu-items").innerHTML += `
        <li class="item" onclick="${item.goTo}">
            ${item.icon}
            <span>${item.name}</span>
        </li>
    `;
  });
}

function mountSideBar() {
  document.querySelector(".user-content").innerHTML = userContentInner;
  document.querySelector(".switch-theme").innerHTML = toggleThemeInner;
  setMenuItems();
}

function mountInitialDashContent() {
  selectMenuItem(0);

  const resume = getResumeData();

  document.querySelector(".main-content .content").innerHTML = `
   <div class="dash-top">
      <h1>Dashboard</h1>
        <p>Relatórios de todos os dados guardados</p>
    </div>
    <div class="dash-resume">
      ${resume
        .map(
          (item) => `
          <div class="dash-resume-item">
            <strong class="name">${item.name}</strong>
            <span class="value">${item.qtd}</span>
          </div>`
        )
        .join("")}
    </div>`;
}

function mountTable(bodydata) {
  document.querySelector(".main-content .content").innerHTML = `
   <div class="filter-input">
      <i class="fas fa-search"></i>
      <input type="search" name="search" id="search" placeholder="Search" />

      <select name="type" id="type">
        <option value="last">Last Upload</option>
        <option value="firt">Firt Upload</option>
        <option value="name">Name</option>
        <option value="Size">Size</option>
      </select>
    </div>

    <div class="table">
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Upload At</th>
            <th>Kind</th>
            <th>Size</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  `;

  bodydata.map((item) => {
    document.querySelector(".table tbody").innerHTML += `
        <tr  data-key="${item.id}">
            <td>${item.name}</td>
            <td>${item.ext}</td>
            <td>${item.size}</td>
            <td>${item.uploadAt}</td>
        </tr>
    `;
  });
}

function handleMountBodyData(number) {
  selectMenuItem(number);
  mountTable(tableBodyData.filter((item) => item.categoryId === number));
}

function selectMenuItem(number) {
  const items = document.querySelectorAll(".menu-items .item");
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === number) {
      item.classList.add("active");
    }
  });
}

function initialDash() {
  mountSideBar();
  mountInitialDashContent();
}

initialDash();
