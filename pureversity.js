// pureversity.js

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

    // Apply styling to Total rows after a slight delay to ensure tables are rendered
    setTimeout(styleTotalRows, 2000);
});

/**
 * Function to style rows containing 'Total' by adding the 'total-row' class
 */
function styleTotalRows() {
    // Select all tables with the class 'report-table'
    const tables = document.querySelectorAll('.report-table');

    tables.forEach(table => {
        // Iterate through each row in the table body
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            const firstCell = row.querySelector('td');
            if (firstCell && firstCell.textContent.trim().toLowerCase() === 'total') {
                // Add the 'total-row' class to the entire row
                row.classList.add('total-row');

                // Optional: Modify the row content if needed
                // Example: Update cell values as per your requirement
                // Uncomment and adjust the following lines if you want to modify the total row
                /*
                row.innerHTML = `
                    <td>Total</td>
                    <td>292</td>
                    <td>166</td>
                    <td>257</td>
                    <td>1</td>
                `;
                */
            }
        });
    });
}

function createActivityChart() {
    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Babar', 'Zuhaib'],
            datasets: [
                { 
                    label: 'Calls', 
                    data: [141, 151], 
                    backgroundColor: '#d32f2f'
                },
                { 
                    label: 'Emails', 
                    data: [87, 79], 
                    backgroundColor: '#e57373'
                },
                { 
                    label: 'Task', 
                    data: [78, 179], 
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
                    anchor: 'center',
                    align: 'center',
                    color: 'yellow',
                    font: {
                        weight: 'bold',
                        size: 20
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
                        font: { weight: 'bold' },
                        stepSize: 500
                    },
                    beginAtZero: true,
                    max: 1500,
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
            labels: ['Babar', 'Zuhaib'],
            datasets: [
                { 
                    label: 'Appointments', 
                    data: [1, 0], 
                    backgroundColor: '#d32f2f'
                },
                { 
                    label: 'Showups', 
                    data: [0, 0], 
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
                    anchor: 'center',
                    align: 'center',
                    color: 'yellow',
                    font: {
                        weight: 'bold',
                        size: 20                        
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
                        font: { weight: 'bold' },
                        stepSize: 4
                    },
                    beginAtZero: true,
                    max: 20, // Adjusted to fit the highest value
                },
            },
        },
        plugins: [ChartDataLabels] // Enable the plugin for data labels
    });
}
