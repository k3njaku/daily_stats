document.addEventListener('DOMContentLoaded', function () {
    const elements = [
        document.querySelector('.logo-container'),
        document.querySelectorAll('.table-section')[0],
        document.querySelectorAll('.table-section')[1],
        document.getElementById('activityChart').parentElement,
        document.getElementById('successChart').parentElement
    ];

    // Function to make elements visible one by one
    function showElementsInSequence(elements) {
        elements.forEach((element, index) => {
            element.classList.add('hidden'); // Add hidden class initially

            setTimeout(() => {
                element.classList.add('visible');
                element.classList.remove('hidden');
            }, index * 1000); // Delay each element by 1 second
        });
    }

    showElementsInSequence(elements);

    // Initialize charts only after their containers are visible
    setTimeout(createActivityChart, 3000); // 3s delay for the first chart
    setTimeout(createSuccessChart, 4000); // 4s delay for the second chart
});

function createActivityChart() {
    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Zuhaib', 'Babar'],
            datasets: [
                { label: 'Calls', data: [519, 562], backgroundColor: '#d32f2f' },
                { label: 'Emails', data: [552, 601], backgroundColor: '#e57373' },
                { label: 'Task', data: [700, 547], backgroundColor: '#ffcdd2' }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true, position: 'top' },
                title: { display: true, text: 'Dials', font: { size: 18, weight: 'bold' } },
            },
            scales: {
                y: { beginAtZero: true, max: 800 },
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
                { label: 'Appointments', data: [8, 4], backgroundColor: '#d32f2f' },
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
