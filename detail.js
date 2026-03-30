// Database konten proyek
const projectData = {
  "pik-r": {
    title: "PIK-R SMAN 1 Mengwi",
    desc: "Pusat Informasi dan Konseling Remaja (PIK-R) adalah wadah pembinaan dan pelayanan bagi remaja yang dibentuk untuk memberikan informasi, edukasi, serta layanan konseling...",
    img: "url-gambar-pikr.jpg",
    features: [
      "Menghadirkan informasi komprehensif",
      "Menampilkan deretan prestasi",
      "Susunan kepengurusan organisasi",
    ],
    demo: "https://demo-pikr.com",
    github: "https://github.com/user/pikr",
  },
  "whatsapp-clone": {
    title: "WhatsApp Clone",
    desc: "Proyek ini adalah replika visual dari antarmuka aplikasi WhatsApp yang dibangun menggunakan...",
    img: "url-gambar-wa.jpg",
    features: ["Real-time chatting", "Responsive UI", "Dark Mode Support"],
    demo: "#",
    github: "#",
  },
};

// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("project");

// Tampilkan data sesuai ID
if (projectData[projectId]) {
  const data = projectData[projectId];
  document.getElementById("proj-title").innerText = data.title;
  document.getElementById("proj-desc").innerText = data.desc;
  document.getElementById("proj-img").src = data.img;
  document.getElementById("proj-demo").href = data.demo;
  document.getElementById("proj-github").href = data.github;

  const featureList = document.getElementById("proj-features");
  data.features.forEach((f) => {
    featureList.innerHTML += `<li class="flex items-start gap-3"><span class="text-blue-500">•</span> ${f}</li>`;
  });
}
