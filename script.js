function openForm() {
  document.getElementById('popupForm').style.display = 'block';
}
function closeForm() {
  document.getElementById('popupForm').style.display = 'none';
}

function showCategory(category) {
  const container = document.getElementById('jersey-items');
  let html = '';

  if (category === 'cricket') {
    html = `
      <h3>Cricket Jerseys</h3>
      <img src="https://i.ibb.co/yNw6dRW/cricket.png" width="150"><br>
      <button class="order-btn" onclick="openForm()">Order Now</button>
    `;
  } else if (category === 'football') {
    html = `
      <h3>Football Jerseys</h3>
      <img src="https://i.ibb.co/R3vP99L/football.png" width="150"><br>
      <button class="order-btn" onclick="openForm()">Order Now</button>
    `;
  } else {
    html = `
      <h3>Our Own Designs</h3>
      <img src="https://i.ibb.co/LgDD4LM/custom.png" width="150"><br>
      <button class="order-btn" onclick="openForm()">Order Now</button>
    `;
  }

  container.innerHTML = html;
}

document.getElementById('orderForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Order submitted! ধন্যবাদ ❤️');
});
document.getElementById('popupOrder').addEventListener('submit', (e) => {
  e.preventDefault();
  closeForm();
  alert('Order confirmed!