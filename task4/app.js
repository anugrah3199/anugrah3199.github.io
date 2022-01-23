const chart1 = document.getElementById("chart1")
const chart2 = document.getElementById("chart2")

let xArray = [10000, 8000, 4000, 2000, 1500];
let yArray = ["Everett", "Seattle", "Lynwood", "bothell", "Mulkieo", "Edmonds"];

let data = [{
    x: { xArray, title: "Revenue of November" },
    y: yArray,
    type: "bar",
    orientation: "h",
    marker: { color: "#05AA6C" }
}];

let layout1 = { title: "", xaxis: { title: "Revenue for November" } }

Plotly.newPlot(chart1, data, layout1);
Plotly.newPlot(chart2, data, layout1);