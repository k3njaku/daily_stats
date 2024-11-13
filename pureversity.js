document.addEventListener('DOMContentLoaded', function () {
    const tableSections = document.querySelectorAll('.table-section');
    const chartSection = document.querySelector('.chart-section');

    // Function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate tables and charts when they come into view
    function animateOnScroll() {
        tableSections.forEach(section => {
            if (isInViewport(section)) {
                section.classList.add('visible');
            }
        });
        if (isInViewport(chartSection)) {
            chartSection.classList.add('visible');
            // Render the charts once the section is in view
            createActivityChart();
            createSuccessChart();
            // Remove event listener after charts are created to avoid redundant calls
            window.removeEventListener('scroll', animateOnScroll);
        }
    }

    // Initial call to check visibility on page load
    animateOnScroll();

    // Add scroll event listener to animate elements when scrolled into view
    window.addEventListener('scroll', animateOnScroll);
});

// Function to create the Activity Chart with delay animations
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
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',
                // Delay animation for each dataset to achieve a progressive rise effect
                delay: (context) => context.dataIndex * 300,
            }
        }
    });
}

// Function to create the Success Chart with delay animations
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
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',
                // Delay animation for each dataset to achieve a progressive rise effect
                delay: (context) => context.dataIndex * 300,
            }
        }
    });
}
