window.onload = function() {
  fetch('/api/ip')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip-address').textContent = `Your server's IP address is: ${data.ip}`;
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
      document.getElementById('ip-address').textContent = 'Error fetching IP address.';
    });
  // Fetch current date
  fetch('/api/date')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('current-date').textContent = data.date;
                })
                .catch(error => {
                    console.error('Error fetching current date:', error);
                    document.getElementById('current-date').textContent = 'Error fetching current date.';
                });
};

