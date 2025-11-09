document.addEventListener('DOMContentLoaded', () => {
  const stack = document.querySelector('.card-stack');
  const cards = document.querySelectorAll('.photo-card');

  stack.addEventListener('click', () => {
    const topCard = stack.firstElementChild;
    topCard.classList.add('moving');
    setTimeout(() => {
      topCard.classList.remove('moving');
      stack.appendChild(topCard);
    }, 500);
  });
});
