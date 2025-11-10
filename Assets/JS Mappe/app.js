function openTab(evt, tabName) {
  // Skjul alt tab-indhold
  const tabContent = document.querySelectorAll(".tab-content, .card-grid");
  tabContent.forEach(tab => tab.style.display = "none");

  // Fjern "active" fra alle tab-knapper
  const tabButtons = document.querySelectorAll(".tab-button");
  tabButtons.forEach(btn => btn.classList.remove("active"));

  // Vis det valgte tab
  const activeTab = document.getElementById(tabName);
  activeTab.style.display = "grid"; // behold grid-layout

  // Tilføj "active" klasse til den valgte knap
  evt.currentTarget.classList.add("active");
}
