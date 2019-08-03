function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`
    d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata

    `html("")?
    //<div id="sample-metadata" class="panel-body"></div>

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

sample = [];
ETHNICITY = [];
GENDER = [];
AGE = [];
LOCATION = [];
BBTYPE = [];
FREQW = [];

sample.forEach((button) => {
object.entries(button).forEach(([key, value]} => {
sample.push(value);
}});

// BONUS: Build the Gauge Chart
// buildGauge(data.WFREQ);
}

function buildCharts(sample) {

// @TODO: Use `d3.json` to fetch the sample data for the plots
d3.json(url).then(function(response) {
  console.log (response);

// @TODO: Build a Bubble Chart using the sample data

  var trace = {
  type: "scatter",
  mode: "lines",
  name: "Belly Button Types",
  x: response.map(data ==> data.user_input
    // i think i might need a variable variable here, like 'input' based 
    // on what the user is going to select? Maybe I'm overthinking this.
    // maybe it's OPTION? from down below? 
    ),
  y: response.map(data=> data.user_input),
  line: {
  color: "#17becf" }
  } ;
  var data = [trace];
  var layout = {
  title: "Belly Button Types",
  xaxis: { 
  type: "string"},
  yaxis: {
  autorange: true,
  type:"linear"
  }
  }
  };
  Plotly.plot("plot", data, layout);
  });
  }
  buildPlot();




    
    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
}

// Regrettebly, I am including the rick astley pie chart here. I'm not sure
// if it's the way I would do this or not. The other way I'd try it is below
// this truly thoughtless class example (which I'd modify to fit this
// exercise if I decided it was the way I'd do it/if it was the right way).
// def rick():
// lyrics = get_lyrics()
// labels, values = zip(*lyrics.items())
// # a new object pie with arrays of data for the pie
// # @TODO: Create a Plotly trace, 'data', to return to the client
// def pie():
// data = [{
// "labels": labels,
// "values": values,
// "type":"pie"
// }]
// return jsonify(data)
// if __name__ == "__main__":
// app.run(debug=True)


// this seems like a simpler way, but it's probably too simplistic for
// what we're attempting? Here's what I'd try to modify so it would work:

// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//   "ice tea", "rum & coke", "mai tai", "gin & tonic"],
// where X would be my AGE, GENDER, etc from above
// somewhere in here I think I'd have to call my top_10 slice from below
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
// where Y would be all the associated values for those elements from my 
// data set


//   var data = [trace1];
//   var layout = {
//   title: "'Pie' Chart"
//   xaxis: {title: "X LABEL"},
//   yaxis: {title: "Y LABEL"}
//   }
  

const topd_10 = names.slice(0, 10);
console.log(top_10);


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
