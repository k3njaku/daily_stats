<script>
  // A placeholder function. This can be used later to define more chart options.
  function MoreChartOptions() {}

  // Data for the chart, including labels and multiple datasets.
  var ChartData = {
    labels: [
      "SDR", "MM_Nigel Gill", "MM_Nikolai Noronha", "MM_Moiz Sheraz",
      "MM_Ali Saqlain", "MM_Shane Samson", "ENT_Muhammad Wajahat",
      "MM_Shahmir Shah", "MM_Tahir Yaqoob", "SMB_Usman Amin",
      "ENT_Matthew Noor", "ENT_Jaish Yousaf", "ENT_Shiraz Iqbal",
      "ENT_Samuel Bhatti", "MM_Anthony Dsouza", "ENT_Shahwaiz Alam",
      "MM_Bilal Ahmed Qureshi", "MM_Muhammad Hamza"
    ], // Names shown on the x-axis.

    datasets: [
      {
        data: [1823, 1711, 1633, 1599, 1509, 1451, 1416, 1347, 1305, 1154, 1148, 1061, 1035, 878, 876, 640, 487],
        // Data for the number of calls made by each person.
        backgroundColor: '#3498db', // Color of the bars for this dataset (blue).
        borderColor: 'rgba(136,136,136,0.5)', // Border color of the bars.
        label: "Calls" // Label for this dataset in the legend.
      },
      {
        data: [13, 15, 11, 15, 9, 12, 6, 4, 24, 3, 4, 27, 19, 6, 9, 24, 10],
        // Data for the number of calls successfully connected.
        backgroundColor: '#2ecc71', // Color of the bars (green).
        borderColor: '#aaaaaa', // Border color of the bars.
        label: "Connected" // Label for this dataset in the legend.
      },
      {
        data: [324, 917, 588, 1201, 1275, 1294, 952, 1507, 3644, 527, 601, 369, 742, 674, 413, 63, 284],
        // Data for the number of emails sent.
        backgroundColor: '#9b59b6', // Color of the bars (purple).
        borderColor: '#9b59b6', // Border color of the bars.
        label: "Emails Sent" // Label for this dataset in the legend.
      },
      {
        data: [29, 104, 67, 93, 84, 101, 92, 112, 644, 86, 66, 40, 68, 80, 34, 12, 57],
        // Data for the number of emails opened.
        backgroundColor: '#f1c40f', // Color of the bars (yellow).
        borderColor: '#f1c40f', // Border color of the bars.
        label: "Emails Opened" // Label for this dataset in the legend.
      }
    ]
  };

  // Configuration options for the chart.
  ChartOptions = {
    responsive: false, // The chart will not adjust size automatically to its container.
    layout: {
      padding: { top: 12, left: 12, bottom: 12 } // Adds padding inside the chart area.
    },
    scales: {
      xAxes: [
        {
          gridLines: { borderDash: [] } // Appearance of grid lines on the x-axis (no dashes).
        }
      ],
      yAxes: [
        {
          gridLines: { borderDash: [] } // Appearance of grid lines on the y-axis (no dashes).
        }
      ]
    },
    plugins: {
      datalabels: {
        display: true, // Show data labels directly on the chart.
        font: {
          style: 'bold' // Style for the data labels.
        }
      }
    },
    legend: {
      labels: {
        generateLabels: function (chart) {
          // Generate labels for each dataset in the legend.
          return chart.data.datasets.map(function (dataset, i) {
            return {
              text: dataset.label, // Text for the label (e.g., "Calls", "Connected").
              lineCap: dataset.borderCapStyle, // Line cap style (unused here).
              lineDash: [], // No dash styling for the lines.
              lineDashOffset: 0, // No offset for dashes.
              lineJoin: dataset.borderJoinStyle, // Line join style (unused here).
              fillStyle: dataset.backgroundColor, // Fill color for the legend box.
              strokeStyle: dataset.borderColor, // Border color for the legend box.
              lineWidth: dataset.pointBorderWidth, // Line width (unused here).
              lineDash: dataset.borderDash // Dash style for the legend line.
            };
          });
        }
      }
    },
    title: {
      display: true, // Show the title of the chart.
      text: 'Chart Title', // Title text.
      fontColor: '#3498db', // Title font color (blue).
      fontSize: 32, // Title font size.
      fontStyle: 'bold' // Title font style.
    },
    elements: {
      arc: {}, // Configuration for arcs (unused here).
      line: {}, // Configuration for lines (unused here).
      rectangle: {
        borderWidth: 3 // Border width for bars.
      }
    },
    tooltips: {
      // Configuration for tooltips when hovering over the chart (empty for default).
    },
    hover: {
      mode: 'nearest', // Highlight the nearest element when hovering.
      animationDuration: 400 // Animation duration when hovering (in milliseconds).
    }
  };

  // Function call to render the chart using the provided data and options.
  // Arguments:
  // - `ChartData`: Data for the chart (labels and datasets).
  // - `ChartOptions`: Configuration options for the chart.
  // - `"chart-01"`: The ID of the HTML element where the chart will be displayed.
  // - `"bar"`: Type of chart to draw (a bar chart in this case).
  DrawTheChart(ChartData, ChartOptions, "chart-01", "bar");
</script>
