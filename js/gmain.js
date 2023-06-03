const glossaryItems = document.querySelectorAll(".glossary-item");
const form = document.querySelector(".search-glossary");

// Begin searching glossary when user types in form
form.addEventListener("keydown", () => {
  const query = document.querySelector("#search").value;

  // Filter glossary items. Check if term or description contains query input
  [...glossaryItems].filter((item) => {
    if (
      item.children[0].innerText.toLowerCase().includes(query.toLowerCase()) ||
      item.children[1].innerText.toLowerCase().includes(query.toLowerCase())
    ) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
});

// Prevent page refresh if form submitted
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
