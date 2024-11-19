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
                { 
                    label: 'Calls', 
                    data: [564, 696], 
                    backgroundColor: '#d32f2f'
                },
                { 
                    label: 'Emails', 
                    data: [552, 620], 
                    backgroundColor: '#e57373'
                },
                { 
                    label: 'Task', 
                    data: [700, 657], 
                    backgroundColor: '#ffcdd2'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    display: true, 
                    position: 'top',
                    labels: {
                        font: { weight: 'bold' }
                    }
                },
                title: { 
                    display: true, 
                    text: 'Dials', 
                    font: { size: 18, weight: 'bold' }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    font: {
                        weight: 'bold'
                    },
                    formatter: (value) => value // Display the value directly on the bars
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'SDR',
                        font: { weight: 'bold', size: 14 }
                    },
                    ticks: {
                        font: { weight: 'bold' }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Dials',
                        font: { weight: 'bold', size: 14 }
                    },
                    ticks: {
                        font: { weight: 'bold' }
                    },
                    beginAtZero: true,
                    max: 800,
                },
            },
        },
        plugins: [ChartDataLabels] // Enable the plugin for data labels
    });
}





function createSuccessChart() {
    const ctx = document.getElementById('successChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Zuhaib', 'Babar'],
            datasets: [
                { 
                    label: 'Appointments', 
                    data: [13, 4], 
                    backgroundColor: '#d32f2f'
                },
                { 
                    label: 'Showups', 
                    data: [8, 2], 
                    backgroundColor: '#ffcdd2'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    display: true, 
                    position: 'top',
                    labels: {
                        font: { weight: 'bold' }
                    }
                },
                title: { 
                    display: true, 
                    text: 'Success', 
                    font: { size: 18, weight: 'bold' }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    font: {
                        weight: 'bold'
                    },
                    formatter: (value) => value // Display the value directly on the bars
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Team Members',
                        font: { weight: 'bold', size: 14 }
                    },
                    ticks: {
                        font: { weight: 'bold' }
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Metrics',
                        font: { weight: 'bold', size: 14 }
                    },
                    ticks: {
                        font: { weight: 'bold' }
                    },
                    beginAtZero: true,
                    max: 12, // Adjusted to fit the highest value
                },
            },
        },
        plugins: [ChartDataLabels] // Enable the plugin for data labels
    });
}

