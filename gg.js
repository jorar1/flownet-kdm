// flownet-kdm/index.js
const flows = [
  { from: "EGY", to: "DEU", value: 1000, type: "payment" },
  { from: "DEU", to: "EGY", value: 1000, type: "goods" }
];

function optimizeFlow(flows) {
  const net = {};
  flows.forEach(f => {
    net[f.from] = (net[f.from] || 0) + f.value;
    net[f.to] = (net[f.to] || 0) - f.value;
  });
  const balanced = Object.values(net).every(v => v === 0);
  return { balanced, fee: balanced ? 20 : 0 };
}

console.log(optimizeFlow(flows)); // { balanced: true, fee: 20 }
