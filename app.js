// const url = ""

// d3.json(url).then(function(data) {
//     console.log(data)
// });

// initialize the page with a default plot 
function init() {
    var oneHundreds = [];
    var twoHundreds = [];
    var threeHundreds = [];
    var fourHundreds = [];
    var fiveHundreds = [];
    var sixHundreds = [];
    var sevenHundreds = [];
    var eightHundreds = [];
    var nineHundreds = [];
    var thousands = [];
    
    var groups = ["100's", "200's", "300's", "400's", "500's", "600's", "700's", "800's", "900's", "1000's"]
    
    // read in the data 
    d3.csv("new_names.csv").then(function(data) {
        console.log(data);
    
            for (var i = 0; i < data.length; i++) {
                var code = data[i].property_class_code;
        
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
                if(code >= 700 && code < 800) {
                    sevenHundreds.push(code);
                }
                if(code >= 800 && code < 900) {
                    eightHundreds.push(code);
                }
                if(code >=900 && code < 1000) {
                    nineHundreds.push(code);
                }
                if(code >=1000) {
                    thousands.push(code);
                }
                // else 
                // console.log(code);
        
              }
        var bars = [oneHundreds.length, twoHundreds.length, threeHundreds.length, fourHundreds.length, fiveHundreds.length, 
                sixHundreds.length, sevenHundreds.length, eightHundreds.length, nineHundreds.length, thousands.length];
    
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
init();

