google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {

  // actual bar chart data
  var barData = google.visualization.arrayToDataTable([
    ['Age',  '10 / 20 30 / 40 50 / other'],
    ['0',      14215],
    ['1',       21948],
    ['2',        7940],
    ['3',        1429],

  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ["turquoise"],
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
      duration: 1200,
      easing: 'out',
			startup: true
    }
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);

<!-- 두번째 -->

var barData = google.visualization.arrayToDataTable([
  ['Day',  '10 / Other'],

  ['0',       31317],
  ['1',       14215],


]);
// set bar chart options
var barOptions = {
  focusTarget: 'category',
  backgroundColor: 'transparent',
  colors: [ 'tomato'],
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
var barChart1 = new google.visualization.ColumnChart(document.getElementById('bar-chart1'));
//barChart.draw(barZeroData, barOptions);
barChart1.draw(barData, barOptions);


// BEGIN PIE CHART

  // pie chart data
  var pieData = google.visualization.arrayToDataTable([
    ['Age', 'Count'],
    ['10s',   115],
    ['20s',   134],
    ['30s',    111],
    ['40s',  78],
    ['50s',  59],
    ['60s',  26],
    ['+70s',      5],
  ]);
  // pie chart options
  var pieOptions = {
    backgroundColor: 'transparent',
    pieHole: 0.4,
    colors: [ "cornflowerblue",
              "olivedrab",
              "orange",
              "tomato",
              "crimson",
              "purple",
              "turquoise",
              "forestgreen",
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
}
