document.addEventListener('DOMContentLoaded', function () {
    createActivityChart();
    createSuccessChart();
});

function createActivityChart() {
    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Zuhaib', 'Babar'],
            datasets: [
                { label: 'Calls', data: [382, 473], backgroundColor: '#d32f2f' },
                { label: 'Emails', data: [424, 533], backgroundColor: '#e57373' },
                { label: 'Task', data: [513, 510], backgroundColor: '#ffcdd2' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'Dials', font: { size: 18, weight: 'bold' } },
            },
            scales: {
                y: { beginAtZero: true, max: 600 },
            },
        }
    });
}

function createSuccessChart() {
    const ctx = document.getElementById('successChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Zuhaib', 'Babar'],
            datasets: [
                { label: 'Appointments', data: [7, 3], backgroundColor: '#d32f2f' },
                { label: 'Showups', data: [5, 0], backgroundColor: '#ffcdd2' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'Success', font: { size: 18, weight: 'bold' } },
            },
            scales: {
                y: { beginAtZero: true, max: 8 },
            },
        }
    });
}
