document.addEventListener('DOMContentLoaded', function () {
    // Elements to animate
    const dailyTable = document.getElementById('daily-table');
    const monthlyTable = document.getElementById('monthly-table');
    const activityChartContainer = document.getElementById('chart-container-activity');
    const successChartContainer = document.getElementById('chart-container-success');

    // Array of elements to animate on scroll
    const elementsToAnimate = [dailyTable, monthlyTable, activityChartContainer, successChartContainer];

    // Check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Add visible class when elements are scrolled into view
    function animateOnScroll() {
        elementsToAnimate.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    }

    // Initial call and event listener for scroll animations
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Initialize both charts
    createActivityChart();
    createSuccessChart();
});

// Function to create the Activity Chart
function createActivityChart() {
    const ctx = document.getElementById('activityChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Hammad Faisal', 'Ali Murtaza', 'Ahmed Ali', 'Khuzaima Tahir', 'Amjad Baig'],
            datasets: [
                {
                    label: 'Calls',
                    data: [611, 453, 756, 59, 871],
                    backgroundColor: '#8A2BE2',
                    barThickness: 'flex',
                    barPercentage: 0.7,
                },
                {
                    label: 'Email',
                    data: [4770, 4973, 2745, 44, 170],
                    backgroundColor: '#FF6347',
                    barThickness: 'flex',
                    barPercentage: 0.7,
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
                        font: {
                            weight: 'bold' // Make legend labels bold
                        },
                        padding: 2
                    }
                },
                title: {
                    display: true,
                    text: 'Activity',
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                },
                datalabels: {
                    anchor: 'end', // Position at the end of the bar
                    align: 'top', // Align label outside or at the edge of the bar
                    color: 'black',
                    font: {
                        size: 12, // Set font size for readability
                        weight: 'bold' // Make labels bold
                    },
                    formatter: function(value, context) {
                        return value; // Show the value as is
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5000, // Adjusted to accommodate max email value
                    ticks: {
                        stepSize: 1000,
                        font: {
                            weight: 'bold' // Make y-axis labels bold
                        }
                    },
                    animations: {
                        y: {
                            duration: 1500,
                            from: 0,  // Start from the bottom
                        },
                    },
                },
                x: {
                    ticks: {
                        font: {
                            weight: 'bold' // Make x-axis labels bold
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',  // Smooth rising effect
            },
        },
        plugins: [ChartDataLabels] // Activate Chart.js Data Labels plugin
    });
}






// Function to create the Success Chart
function createSuccessChart() {
    const ctx = document.getElementById('successChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Hammad Faisal', 'Ali Murtaza', 'Ahmed Ali', 'Amjad Baig', 'Khuzaima Tahir'],
            datasets: [
                {
                    label: 'Sched Appt',
                    data: [9, 4, 1, 1, 1],
                    backgroundColor: '#FFD700',
                    barThickness: 'flex',
                    barPercentage: 0.7,
                },
                {
                    label: 'Showups',
                    data: [8, 3, 1, 0, 1],
                    backgroundColor: '#32CD32',
                    barThickness: 'flex',
                    barPercentage: 0.7,
                },
                {
                    label: 'Opp',
                    data: [4, 2, 0, 0, 0],
                    backgroundColor: '#228B22',
                    barThickness: 'flex',
                    barPercentage: 0.7,
                },
                {
                    label: 'No Shows',
                    data: [1, 0, 0, 0, 0],
                    backgroundColor: '#DC143C',
                    barThickness: 'flex',
                    barPercentage: 0.7,
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
                        font: {
                            weight: 'bold' // Make legend labels bold
                        }
                    }
                },
                title: {
                    display: true,
                    text: 'Success',
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    color: 'black',
                    font: {
                        size: 12,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    ticks: {
                        stepSize: 1,
                        font: {
                            weight: 'bold' // Make y-axis labels bold
                        }
                    },
                    animations: {
                        y: {
                            duration: 1500,
                            from: 0,
                        },
                    },
                },
                x: {
                    ticks: {
                        font: {
                            weight: 'bold' // Make x-axis labels bold
                        }
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',
            },
        },
        plugins: [ChartDataLabels]
    });
}



