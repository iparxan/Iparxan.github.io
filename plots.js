console.log(data);

// Trace1 for the Greek Data
var trace1={
    x:data.map(d=>d.pair),
    y:data.map(d=>d.greekSearchResults),
    name: "GreekGods",
    type: "bar"
};

// Trace 2 for the Roman Data
var trace2={
    x:data.map(d=>d.pair),
    y:data.map(d=>d.romanSearchResults),
    name: "RomanGods",
    type: "bar"
};

// Combining both traces

Plotly.newPlot("plot", [trace1,trace2])
// Apply the group barmode to the layout


// Render the plot to the div tag with id "plot"
