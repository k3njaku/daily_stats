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
                    data: [1071, 581], 
                    backgroundColor: '#4a148c'
                },
                { 
                    label: 'Connected', 
                    data: [332, 136], 
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
                    anchor: 'center',
                    align: 'center',
                    color: 'white',
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
                    max: 1200, // Adjusted to match the chart
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
                    data: [10, 11], 
                    backgroundColor: '#4dd0e1' 
                },
                { 
                    label: 'Showups', 
                    data: [7, 6], 
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
                    align: 'start', // Align labels below the top edge of the bar
                    font: {
                        weight: 'bold',
                        size: 12
                    },
                    color: 'black',
                    formatter: (value) => value
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
                    max: 12, // Increased to add space at the top of the chart
                },
            },
        },
        plugins: [ChartDataLabels] // Enable the plugin for data labels
    });
}


