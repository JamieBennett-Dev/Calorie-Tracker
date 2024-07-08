let calories = 0,
  fat = 0,
  carbohydrates = 0,
  protein = 0;

let caloriesValue = document.getElementById('calories_details').value;
calories = parseFloat(caloriesValue);

let fatValue = document.getElementById('fat_details').value;
fat = parseFloat(fatValue);

let carbohydratesValue = document.getElementById('carbohydrates_details').value;
carbohydrates = parseFloat(carbohydratesValue);

let proteinValue = document.getElementById('protein_details').value;
protein = parseFloat(proteinValue);

// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
Chart.defaults.global.defaultFontColor = '#000000';
Chart.defaults.global.defaultFontFamily = 'Sarabun, sans-serif';

// Horizontal Bar Chart - Macronutrients breakdown
const ctxBarChart = document.getElementById('myBarChart');
const myBarChart = new Chart(ctxBarChart, {
  type: 'horizontalBar',
  data: {
    labels: ['Fat', 'Carbs', 'Protein'],
    datasets: [
      {
        data: [fat, carbohydrates, protein],
        backgroundColor: ['#FF6347', '#FFD700', '#4682B4'],
        borderColor: ['#7A1200', '#8F7900', '#224058'], // Darker shades of the background colors for contrast
        borderWidth: 3, // Adjust the width of the border as needed
        barPercentage: 1,
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
      display: false,
      position: 'bottom',
      fullWidth: true,
      labels: {
        boxWidth: 10,
        padding: 50,
      },
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: true,
            drawTicks: true,
            drawOnChartArea: false,
          },
          ticks: {
            fontColor: '#000000',
            fontSize: 12,
            fontFamily: 'Sarabun, sans-serif', // Add this line to set the font family
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: true,
            drawTicks: false,
            tickMarkLength: 5,
            drawBorder: false,
          },
          ticks: {
            padding: 5,
            beginAtZero: true,
            fontColor: '#000000',
            fontSize: 11,
            min: 0,
            max: 100,
            maxTicksLimit: 10,
            padding: 10,
            // Include a 'g' in the ticks
            callback: function (value, index, values) {
              return value + 'g';
            },
          },
          scaleLabel: {
            display: true,
            padding: 10,
            fontColor: '#000000',
            fontSize: 15,
            fontStyle: 700,
            labelString: 'Macronutrients (g) per 100g',
          },
        },
      ],
    },
    tooltips: {
      enabled: false,
    },
  },
});