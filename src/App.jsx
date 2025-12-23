import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

function App() {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Product A", "Product B", "Product C", "Product D"],
        datasets: [
          {
            label: "Monthly Sales ($k)",
            data: [42, 55, 38, 72],
            backgroundColor: "rgba(54, 162, 235, 0.85)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 2,
            borderRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          title: {
            display: true,
            text: "Monthly Sales Performance",
            color: "#1f2937",
            font: { size: 18, weight: "bold" },
          },
          legend: {
            position: "bottom",
            labels: {
              color: "#374151",
              font: { size: 12 },
            },
          },
        },

        layout: {
          padding: 20,
        },

        scales: {
          x: {
            ticks: { color: "#374151", font: { size: 12 } },
            grid: { display: false },
          },
          y: {
            beginAtZero: true,
            ticks: { color: "#374151" },
            grid: { color: "rgba(156, 163, 175, 0.2)" },
          },
        },
      },
    });

    chartRef.current = chart;
    return () => chart.destroy();
  }, []);

  return (
    <div style={{ maxWidth: 750, margin: "40px auto" }}>
      <div
        style={{
          height: 420,
          background: "#f9fafb",
          borderRadius: 10,
          padding: 20,
        }}
      >
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
}

export default App;
