google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {

  var barData = google.visualization.arrayToDataTable([
    ['Day', "Don't know", 'Know'],
    ['Wr_01 ', 13217, 32315],
    ['Wr_03 ', 36017, 9515],
    ['Wr_06 ', 30573, 14959],
    ['Wr_09 ', 36297, 9235],
    ['Wr_011 ', 27538, 17994],

  ]);

  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['cornflowerblue', 'tomato'],
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

<!-- 두번째 -->

var barData = google.visualization.arrayToDataTable([
  ['Day',  'Sum', {role: 'style'}, {role:'annotation'}],
  // ['None Response', 528, 'color: green', '0'],
  ['Less than HS + None Response',  5616,'color: yellow','1' ],
  ['High School', 16835,'color: crimson','2' ],
  ['University', 15227, 'color: purple','3' ],
  ['Graduate', 7854, 'color: turquoise', '4'],

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
    duration: 1200,
    easing: 'out',
    startup: true
  }
};
// draw bar chart twice so it animates
var barChart1 = new google.visualization.ColumnChart(document.getElementById('bar-chart1'));
//barChart.draw(barZeroData, barOptions);
barChart1.draw(barData, barOptions);
}
