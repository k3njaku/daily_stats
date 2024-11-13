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
                    data: [427, 378, 704, 63, 677],
                    backgroundColor: '#8A2BE2',
                    barThickness: 'flex',
                    barPercentage: 0.7,
                },
                {
                    label: 'Email',
                    data: [3862, 4109, 1936, 41, 170],
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
                },
                title: {
                    display: true,
                    text: 'Activity',
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 5000,
                    ticks: {
                        stepSize: 1000,
                    },
                    animations: {
                        y: {
                            duration: 1500,
                            from: 0,  // Start from the bottom
                        },
                    },
                },
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',  // Smooth rising effect
            },
        },
    });
}


// Function to create the Success Chart
function createSuccessChart() {
    const ctx = document.getElementById('successChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Hammad Faisal', 'Ali Murtaza', 'Ahmed Ali', 'Khuzaima Tahir', 'Amjad Baig'],
            datasets: [
                {
                    label: 'Sched Appt',
                    data: [7, 4, 1, 1, 1],
                    backgroundColor: '#FFD700',
                    barThickness: 'flex',
                    barPercentage: 0.7,
                },
                {
                    label: 'Showups',
                    data: [3, 2, 1, 1, 1],
                    backgroundColor: '#32CD32',
                    barThickness: 'flex',
                    barPercentage: 0.7,
                },
                {
                    label: 'Opp',
                    data: [2, 1, 0, 0, 0],
                    backgroundColor: '#228B22',
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
                },
                title: {
                    display: true,
                    text: 'Success',
                    font: {
                        size: 18,
                        weight: 'bold',
                    },
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 8,
                    ticks: {
                        stepSize: 1,
                    },
                    animations: {
                        y: {
                            duration: 1500,
                            from: 0,  // Start from the bottom
                        },
                    },
                },
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',  // Smooth rising effect
            },
        },
    });
}

