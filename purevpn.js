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
                { 
                    label: 'Calls', 
                    data: [615, 184], 
                    backgroundColor: '#4a148c'
                },
                { 
                    label: 'Connected', 
                    data: [376, 88], 
                    backgroundColor: '#9575cd'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { 
                    display: true, 
                    position: 'top'
                },
                title: { 
                    display: true, 
                    text: 'Activities', 
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
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Dials',
                        font: { weight: 'bold', size: 14 }
                    },
                    beginAtZero: true,
                    max: 800, // Adjusted to match the chart
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
            labels: ['Sophia', 'Amar'],
            datasets: [
                { 
                    label: 'Appointments', 
                    data: [7, 10], 
                    backgroundColor: '#4dd0e1' 
                },
                { 
                    label: 'Showups', 
                    data: [9, 3], 
                    backgroundColor: '#8bc34a' 
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
                    max: 8, // Adjusted to match the data
                },
            },
        },
        plugins: [ChartDataLabels] // Enable the plugin for data labels
    });
}

