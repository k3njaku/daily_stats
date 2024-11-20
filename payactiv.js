const ctx = document.getElementById('activitiesChart').getContext('2d');

const config = {
    type: 'bar',
    data: {
        labels: [
            "MM_Nikolai Noronha", "MM_Moiz Sheraz", "MM_Nigel Gill", "MM_Shane Samson", 
            "ENT_Muhammad Wajahat", "MM_Ali Saqlain", "MM_Shahmir Shah", "SMB_Usman Amin",
            "MM_Tahir Yaqoob", "ENT_Matthew Noor", "ENT_Jaish Yousaf", "ENT_Shiraz Iqbal",
            "ENT_Samuel Bhatti", "ENT_Shahwaiz Alam", "MM_Anthony Dsouza"
        ],
        datasets: [
            {
                label: 'Calls',
                data: [1162, 1116, 1019, 934, 916, 907, 856, 833, 772, 723, 722, 661, 642, 548, 492],
                backgroundColor: 'blue'
            },
            {
                label: 'Connected',
                data: [8, 3, 3, 4, 1, 7, 10, 10, 3, 1, 1, 3, 10, 3, 2],
                backgroundColor: 'darkgreen'
            },
            {
                label: 'Emails Sent',
                data: [550, 411, 207, 783, 877, 837, 629, 2296, 700, 182, 175, 179, 262, 286, 536],
                backgroundColor: 'gold'
            },
            {
                label: 'Emails Opened',
                data: [57, 36, 19, 4, 80, 66, 46, 361, 0, 24, 25, 12, 19, 23, 62],
                backgroundColor: 'lightgreen'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Activities'
            },
            datalabels: {
                anchor: 'end', // Position labels at the end of the bar
                align: 'top', // Align labels at the top
                color: 'black', // Color of the labels
                font: {
                    size: 10 // Font size for the labels
                },
                formatter: (value) => {
                    return value; // Display the value of the bar
                }
            }
        },
        scales: {
            x: {
                type: 'category',
                ticks: {
                    callback: function (value) {
                        const label = this.getLabelForValue(value);
                        const parts = label.split('_');
                        const firstLine = parts.slice(0, 2).join(' ');
                        const secondLine = parts.slice(2).join(' ');
                        return `${firstLine}\n  ${secondLine}`;
                    },
                    autoSkip: false,
                    maxRotation: 70, // Rotate labels by 70 degrees
                    minRotation: 45
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.5)', // Darker gridline color
                    lineWidth: 2 // Thicker gridlines
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(0, 0, 0, 0.5)', // Darker gridline color
                    lineWidth: 2 // Thicker gridlines
                }
            }
        }
    },
    plugins: [ChartDataLabels] // Register the data labels plugin
};

console.log('Chart initialization starts.');
new Chart(ctx, config);
console.log('Chart initialized successfully.');
