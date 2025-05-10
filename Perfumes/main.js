// script.js
document.getElementById("showMessage").addEventListener("click", function() {
  alert("Thank you for your interest, we will contact you as soon as possible to complete the order.");
});
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function () {
    const name = this.getAttribute('data-name');
    alert(`This perfume has been selected:${name}`);
  });
});