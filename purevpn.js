document.addEventListener('DOMContentLoaded', function () {
    createActivityChart();
    createSuccessChart();
});

function createActivityChart() {
    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sophia', 'Amar'],
            datasets: [
                { label: 'Calls', data: [492, 283], backgroundColor: '#4a148c' },
                { label: 'Connected', data: [132, 61], backgroundColor: '#9575cd' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'Activities', font: { size: 18, weight: 'bold' } },
            },
            scales: {
                y: { beginAtZero: true, max: 600 },
            }
        }
    });
}

function createSuccessChart() {
    const ctx = document.getElementById('successChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Sophia', 'Amar'],
            datasets: [
                { label: 'Appointments', data: [6, 3], backgroundColor: '#4dd0e1' },
                { label: 'Showups', data: [5, 0], backgroundColor: '#8bc34a' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'Success', font: { size: 18, weight: 'bold' } },
            },
            scales: {
                y: { beginAtZero: true, max: 6 },
            }
        }
    });
}