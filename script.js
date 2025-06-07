// Global Temperature Chart
new Chart(document.getElementById("tempChart"), {
  type: 'line',
  data: {
    labels: ["2000", "2005", "2010", "2015", "2020", "2024"],
    datasets: [{
      label: "Global Temperature Rise (°C)",
      data: [0.42, 0.48, 0.61, 0.85, 1.02, 1.12],
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2
    }]
  }
});

// CO₂ Levels Chart
new Chart(document.getElementById("co2Chart"), {
  type: 'bar',
  data: {
    labels: ["2000", "2005", "2010", "2015", "2020", "2024"],
    datasets: [{
      label: "CO₂ Levels (ppm)",
      data: [370, 380, 390, 400, 412, 420],
      backgroundColor: "rgba(54,162,235,0.6)"
    }]
  }
});

// Sea Level Chart
new Chart(document.getElementById("seaChart"), {
  type: 'line',
  data: {
    labels: ["2000", "2005", "2010", "2015", "2020", "2024"],
    datasets: [{
      label: "Sea Level Rise (mm)",
      data: [10, 25, 40, 55, 70, 85],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 2
    }]
  }
});
