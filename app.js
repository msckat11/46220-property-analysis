// const url = ""

// d3.json(url).then(function(data) {
//     console.log(data)
// });

// initialize the page with a default plot 
    var oneHundreds = [];
    var twoHundreds = [];
    var threeHundreds = [];
    var fourHundreds = [];
    var fiveHundreds = [];
    var sixHundreds = [];
    var eightHundreds = [];
function init() {
    
    var groups = ["100's", "200's", "300's", "400's", "500's", "600's", "800's"]
    
    // read in the data 
    d3.csv("static/csv/new_names.csv").then(function(data) {
        console.log(data);
        // convert the column from string to integer
        data.forEach(function(d){ d['propertyclasscode'] = +d['propertyclasscode']});
    
            for (var i = 0; i < data.length; i++) {
                var code = data[i].propertyclasscode;
        
                if(code >= 100 && code < 200){
                    oneHundreds.push(code);
                }
                if(code >= 200 && code < 300){
                    twoHundreds.push(code);
                }
                if(code >= 300 && code < 400) {
                    threeHundreds.push(code);
                }
                if(code >= 400 && code < 500) {
                    fourHundreds.push(code);
                }
                if(code >= 500 && code < 600) {
                    fiveHundreds.push(code);
                }
                if(code >= 600 && code < 700) {
                    sixHundreds.push(code);
                }
                if(code >= 800 && code < 900) {
                    eightHundreds.push(code);
                }
        
              }

        var bars = [oneHundreds.length, twoHundreds.length, threeHundreds.length, fourHundreds.length, fiveHundreds.length, 
                sixHundreds.length, eightHundreds.length];
                
        var trace1 = {
            type: "bar",
            x: groups,
            y: bars,
          };
          var plotData = [trace1];
      
          var layout = {
            title: {
              text:'46220 Property Class Code Analysis',
              font: {
                family: 'fantasy',
                size: 24
              },
            },
            xaxis: {
              title: {
                text: 'Property Class Code',
                font: {
                  family: 'fantasy',
                  size: 18,
                  color: '#7f7f7f'
                }
              },
            },
            yaxis: {
              title: {
                text: 'Count',
                font: {
                  family: 'fantasy',
                  size: 18,
                  color: '#7f7f7f'
                }
              }
            }
        }
        // plot bar graph 
        Plotly.newPlot("bar", plotData, layout);
    });
}

console.log(oneHundreds.count)
// function to change plot based on dropdown choice 
d3.selectAll("#selDataset").on("change", updatePlotly);

// function to update the graph via the dropwdown 
function updatePlotly() {
    // use d3 to select the dropdown menu 
    var dropdownMenu = d3.select("#selDataset");
    // assign the value of the dropdown menu to variable 
    var dataset = dropdownMenu.property("value");

    // initialize the arrays to be used 
    var x = []
    var y = []
    var dataArray;

    if (dataset === "one") {
        // x = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110];
        // y = oneHundreds.count;
        dataArray = oneHundreds;
    }

    if (dataset === "two") {
        // x = [200]
        // y = twoHundreds.count;
        dataArray = twoHundreds;
    }
    if (dataset === "three") {
        // x = [320, 330, 345, 350, 360, 370, 380, 385, 390, 398, 399]
        // y = threeHundreds.count;
        dataArray = threeHundreds;
    }
    if (dataset === "four") {
        // x = [419, 422, 425, 429, 431, 442, 444, 447, 454, 480, 481, 499];
        // y = fourHundreds.count;
        dataArray = fourHundreds;
    }
    if (dataset === "five") {
        // x = [500, 501, 505, 510, 511, 520, 521, 530, 540, 550, 599];
        // y = fiveHundreds.count;
        dataArray = fiveHundreds;
    }
    if (dataset === "six") {
        // x = [600, 610, 620, 630, 640, 650, 660, 670, 680, 686];
        // y = sixHundreds.count;
        dataArray = sixHundreds;
    }
    if (dataset === "eight") {
        // x = [800, 805, 810, 815, 820, 830, 840, 850, 860, 870, 875];
        // y = eightHundreds.count;
        dataArray = eightHundreds;
    }

    var results = countOccurrences(dataArray);
    x = results[0];
    y = results[1];

    // restyle the graph based on the dropdown selection 
    Plotly.restyle("bar", "x", [x]);
    Plotly.restyle("bar", "y", [y]);


    }
init();

function countOccurrences(arr) {
  var a = [], b = [], prev;
  
  arr.sort();
  for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] !== prev ) {
          a.push(arr[i]);
          b.push(1);
      } else {
          b[b.length-1]++;
      }
      prev = arr[i];
  }
  
  return [a, b];
}

// pull in data for sidewalks - for fun 
// read in the data 

var yesSidewalks = []
var noSidewalks = []

d3.csv("new_names.csv").then(function(data) {
    console.log(data)

    for (var i = 0; i < data.length; i++) {
        var sidewalk = data[i].sidewalks;

        if(sidewalk == "Y"){
            yesSidewalks.push(sidewalk);
        }

        if(sidewalk == "N") {
            noSidewalks.push(sidewalk);
        }
    }
});

// bar chart using chart.js
var ctx = document.getElementById('myChart').getContext('2d');
          var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ['Y', 'N'],
              datasets: [{
                label: 'Are there sidewalks?',
                data: [1, 1505],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                  'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });

          
