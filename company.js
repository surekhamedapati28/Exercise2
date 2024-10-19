
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [{
            label: 'Data',
            data: [15000, 21000, 20000, 18500, 24000, 26000, 0],    
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 3,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                
            }
        }
    }
});
