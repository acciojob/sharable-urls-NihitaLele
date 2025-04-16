// Get elements
const button = document.getElementById('button');
const urlDisplay = document.getElementById('url');

button.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent form submission

  // Get values
  const name = document.getElementById('name').value.trim();
  const year = document.getElementById('year').value.trim();

  // Base URL
  let url = 'https://localhost:8080/';

  // Build query parameters
  const params = new URLSearchParams();

  if (name) {
    params.append('name', name);
  }

  if (year) {
    params.append('year', year);
  }

  // Update the URL display
  if ([...params].length > 0) {
    url += '?' + params.toString();
  }

  urlDisplay.textContent = url;
});
