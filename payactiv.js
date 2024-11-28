// Payactiv.js - Updated with modular chart handling

const activitiesChartContainer = document.getElementById('activitiesChartContainer');
const successChartContainer = document.getElementById('successChartContainer');

let activitiesChart, successChart;

// Function to create the Activities Chart
function createActivitiesChart() {
    const ctx = document.getElementById('activitiesChart').getContext('2d');
    activitiesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [
                "MM_Nigel Gill", "MM_Nikolai Noronha", "MM_Moiz Sheraz",
                "MM_Ali Saqlain", "MM_Shane Samson", "ENT_Muhammad Wajahat",
                "MM_Shahmir Shah", "MM_Tahir Yaqoob", "SMB_Usman Amin",
                "ENT_Matthew Noor", "ENT_Jaish Yousaf", "ENT_Shiraz Iqbal",
                "ENT_Samuel Bhatti", "MM_Anthony Dsouza", "ENT_Shahwaiz Alam",
                "MM_Bilal Ahmed Qureshi", "MM_Muhammad Hamza"
            ],
            datasets: [
                {
                    label: 'Calls',
                    data: [1823, 1711, 1633, 1599, 1509, 1451, 1416, 1347, 1305, 1154, 1148, 1061, 1035, 878, 876, 640, 487],
                    backgroundColor: '#FF4500',
                },
                {
                    label: 'Connected',
                    data: [13, 15, 11, 15, 9, 12, 6, 4, 24, 3, 4, 27, 19, 6, 9, 24, 10],
                    backgroundColor: '#1E90FF',
                },
                {
                    label: 'Emails Sent',
                    data: [324, 917, 588, 1201, 1275, 1294, 952, 1507, 3644, 527, 601, 369, 742, 674, 413, 63, 284],
                    backgroundColor: 'gold',
                },
                {
                    label: 'Emails Opened',
                    data: [29, 104, 67, 93, 84, 101, 92, 112, 644, 86, 66, 40, 68, 80, 34, 12, 57],
                    backgroundColor: 'lightgreen',
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Activities',
                    font: {
                        size: 18,
                        weight: 'bold',
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: 'black',
                    font: {
                        weight: 'normal',
                    },
                    formatter: function (value) {
                        return value;
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            weight: 'bold'
                        },
                        autoSkip: false,
                        maxRotation: 70,
                        minRotation: 45
                    },
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

// Function to create the Success Chart
function createSuccessChart() {
    const ctx = document.getElementById('successChart').getContext('2d');
    successChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["SMB_Usman Amin", "ENT_Samuel Bhatti", "ENT_Shiraz Iqbal", "MM_Anthony Dsouza", "ENT_Muhammad Wajahat", "MM_Nikolai Noronha", "MM_Shahmir Shah", "ENT_Shahwaiz Alam", "MM_Tahir Yaqoob", "MM_Ahmed Sarwaich", "MM_Ali Saqlain", "MM_Bilal Ahmed Qureshi", "ENT_Jaish Yousaf", "ENT_Matthew Noor", "MM_Moiz Sheraz", "MM_Muhammad Hamza", "MM_Nigel Gill", "MM_Shane Samson",],
            datasets: [
                {
                    data: [10, 8, 5, 6, 1, 7, 6, 5, 4, 2, 5, 2, 2, 4, 1, 4,],
                    backgroundColor: '#4285F4',
                    borderColor: 'rgba(136,136,136,0.5)',
                    label: "Scheduled App"
                },

                {
                    data: [9, 6, 5, 7, 1, 4, 4, 3, 2, 1, 4, 2, 1, 3,],
                    backgroundColor: '#93C47D',
                    borderColor: '#aaaaaa',
                    label: "Showups"
                },

                {
                    data: [4, 2, 2, 1, 1, 1, 1, 1, 1,],
                    backgroundColor: '33840e',
                    borderColor: '#9b59b6',
                    label: "Opps"
                },

                {
                    data: [],
                    backgroundColor: '#f1c40f',
                    borderColor: '#f1c40f',
                    label: "Closed Won"
                },

                {
                    data: [2, 1, 2, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 2, 1,],
                    backgroundColor: '#FF0000',
                    borderColor: '#bdc3c7',
                    label: "No Show"
                },
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Success Metrics',
                    font: {
                        size: 18,
                        weight: 'bold',
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    color: 'black',
                    font: {
                        weight: 'bold',
                    },
                    formatter: function (value) {
                        return value;
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        font: {
                            weight: 'bold'
                        },
                        autoSkip: false,
                        maxRotation: 70,
                        minRotation: 45,
                    },
                },
                y: {
                    beginAtZero: true,
                    max: 16,
                    ticks: {
                        font: {
                            weight: 'bold'
                        }
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

// Observer for visibility and animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'activitiesChartContainer' && !activitiesChart) {
                createActivitiesChart();
            } else if (entry.target.id === 'successChartContainer' && !successChart) {
                createSuccessChart();
            }
        }
    });
}, { threshold: 0.2 });

// Attach observer to chart containers
[activitiesChartContainer, successChartContainer].forEach(container => {
    observer.observe(container);
});
