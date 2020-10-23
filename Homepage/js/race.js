google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {

// BEGIN PIE CHART

  // pie chart data
  var pieData = google.visualization.arrayToDataTable([
    ['Race', 'Count'],
    ['Indigenous Australian',   53],
    ['Arab',   351],
    ['Native American',    548],
    ['Black',  2168],
    ['Other',  4330],
    ['Asian',  6834],
    ['White',  31248],
  ]);
  // pie chart options
  var pieOptions = {
    backgroundColor: 'transparent',
    pieHole: 0.4,
    colors: [
              "olivedrab",
              "forestgreen",
              "tomato",
              "crimson",
              "purple",
              "turquoise",
              "cornflowerblue",
              "orange",
              "navy",
              "gray"],
    pieSliceText: 'value',
    tooltip: {
      text: 'percentage'
    },
    fontName: 'Open Sans',
    chartArea: {
      width: '100%',
      height: '94%'
    },
    legend: {
      textStyle: {
        fontSize: 13
      }
    }
  };
  // draw pie chart
  var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
  pieChart.draw(pieData, pieOptions);

<!-- 두번째 파이차트-->

  var pieData = google.visualization.arrayToDataTable([
    ['Race', 'Count'],
    ['Asian',  6834],
    ['Black',       2168],
    ['Other',        5282],
    ['White',        31248],
  ]);
  // pie chart options
  var pieOptions = {
    backgroundColor: 'transparent',
    pieHole: 0.4,
    colors: [
              "turquoise",
              "crimson",
              "purple",
              "cornflowerblue",
              "purple",
              "turquoise",
              "cornflowerblue",
              "orange",
              "navy",
              "gray"],
    pieSliceText: 'value',
    tooltip: {
      text: 'percentage'
    },
    fontName: 'Open Sans',
    chartArea: {
      width: '100%',
      height: '94%'
    },
    legend: {
      textStyle: {
        fontSize: 13
      }
    }

  };
  // draw pie chart
  var pieChart1 = new google.visualization.PieChart(document.getElementById('pie-chart1'));
  pieChart1.draw(pieData, pieOptions);


<!--final bar chart-->

// actual bar chart data
var barData = google.visualization.arrayToDataTable([
  // ['Other','White', [{role : 'annotation'}]],
  ['race',  'count', {role: 'style'},{role:'annotation'}],
  ['Other',      14284, 'color: purple', 'Other'],
  ['White',       31248, 'color: cornflowerblue', 'White'],

]);

// set bar chart options
var barOptions = {
  focusTarget: 'category',
  backgroundColor: 'transparent',
  colors: ["turquoise"],
  // colors: ["blue"],
  fontName: 'Open Sans',
  chartArea: {
    left: 50,
    top: 10,
    width: '100%',
    height: '70%'
  },
  bar: {
    groupWidth: '80%'
  },

  hAxis: {
    textStyle: {
      fontSize: 11
    }
  },
  vAxis: {
    minValue: 0,
    maxValue: 1500,
    baselineColor: '#DDD',
    gridlines: {
      color: '#DDD',
      count: 4
    },
    textStyle: {
      fontSize: 11
    }
  },
  legend: {
    position: 'bottom',
    textStyle: {
      fontSize: 12
    }
  },
  animation: {
    duration: 1000,
    easing: 'out',
    startup: true
  }
};
// draw bar chart twice so it animates
var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
//barChart.draw(barZeroData, barOptions);
barChart.draw(barData, barOptions);
}
