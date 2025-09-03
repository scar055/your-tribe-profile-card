// /* Stap 1: Selecteer de knop */
// let expandButton = document.querySelector(".profile-card-example-button");

// /* Stap 2: Wacht tot iemand op die knop klikt */
// expandButton?.addEventListener("click", function () {
//   /* Stap 3: Verander een class zodra iemand op die knop klikt */
//   document.body.classList.toggle("is-expanded");
// });

const card = document.querySelectorAll(".profile-card-example"); // select the card

document.addEventListener("mousemove", (e) => {
  const { clientX, clientY, innerWidth, innerHeight } = window;

  // Calculate the normalized position of the mouse in the browser window
  const xPercent = e.clientX / innerWidth - 0.5;
  const yPercent = e.clientY / innerHeight - 0.5;

  const moveX = xPercent * 50; // Adjust multiplier for horizontal intensity
  const moveY = yPercent * 50; // Adjust multiplier for vertical intensity

  // Update the box shadow dynamically for the card
  card.forEach((box) => {
    box.style.boxShadow = `${moveX}px ${moveY}px 10px rgba(255, 255, 255, 0.3)`;
  });
});
