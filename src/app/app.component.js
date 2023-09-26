// create dupe
document.querySelector(".dupe").addEventListener("click", (e) => {
  // Clone the first card
  const firstCard = document.querySelector(".card");
  const clonedCard = firstCard.cloneNode(true);
  // Append the cloned card to the wrapper
  document.querySelector(".wrapper").appendChild(clonedCard);
  //delete dupe
  document.querySelector(".delete-dupe").addEventListener("click", (e) => {
    document.querySelector(".wrapper").removeChild(clonedCard);
  });
});
//change color
document.querySelector(".color-change").addEventListener("click", (e) => {
  document.querySelector(".card").classList.toggle("colorChanged");
});
//change title
document.querySelector(".title-change").addEventListener("click", (e) => {
  document.querySelector(".card h2").textContent = "Something Else";
});
