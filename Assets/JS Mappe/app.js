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


 document.addEventListener('DOMContentLoaded', () => {
      const stack = document.querySelector('.card-stack');
      if (!stack) {
        console.error('card-stack ikke fundet i DOM - check HTML.');
        return;
      }

      // klik for at bladre
      stack.addEventListener('click', () => {
        const topCard = stack.querySelector('.photo-card'); // det første child
        if (!topCard) return;

        // debug
        // console.log('Bladrer kort:', topCard);

        // tilføj moving-klassen så animation kører
        topCard.classList.add('moving');

        // efter animationen flytter vi kortet bagest i DOM'en
        setTimeout(() => {
          topCard.classList.remove('moving');

          // Append mover kort til slut — nu vil nth-child regler opdatere lagene
          stack.appendChild(topCard);
        }, 520); // matcher transitiontiden i CSS
      });

      // valgfrit: keyboard navigation (venstre/højre)
      document.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowRight' || ev.key === ' ') {
          stack.click();
        }
      });
    });