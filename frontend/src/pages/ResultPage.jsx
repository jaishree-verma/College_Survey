
import { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import "./ResultPage.css";

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ResultPage() {
  const [stats, setStats] = useState({
    canteen: 12,
    admission: 8,
    infrastructure: 15,
    hostel: 10,
    extracurricular: 6,
    sports: 9,
    environment: 11,
    coordination: 7,
  });

  // Example backend fetch
  useEffect(() => {
    // fetch("/api/stats")
    //   .then((res) => res.json())
    //   .then((data) => setStats(data))
    //   .catch((err) => console.error("Error fetching stats:", err));
  }, []);

  const academicTotal = stats.admission + stats.infrastructure + stats.coordination;
  const campusTotal =
    stats.canteen +
    stats.hostel +
    stats.extracurricular +
    stats.sports +
    stats.environment;

  const academicData = {
    labels: ["Admission", "Infrastructure", "Teacher-Student Coordination"],
    datasets: [
      {
        data: [stats.admission, stats.infrastructure, stats.coordination],
        backgroundColor: ["#007bff", "#cf8ee6ff", "#ffc107"],
        borderColor: "#000000ff",
        borderWidth: 1,
      },
    ],
  };

  const campusData = {
    labels: ["Canteen", "Hostel", "Extracurricular", "Sports", "Environment"],
    datasets: [
      {
        data: [
          stats.canteen,
          stats.hostel,
          stats.extracurricular,
          stats.sports,
          stats.environment,
        ],
        backgroundColor: ["#dc3545", "#17a2b8", "#6f42c1", "#fd7e14", "#20c997"],
        borderColor: "#000000ff",
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: [
      "Canteen",
      "Admission",
      "Infrastructure",
      "Hostel",
      "Extracurricular",
      "Sports",
      "Environment",
      "Feedback",
    ],
    datasets: [
      {
        label: "Number of Queries",
        data: [
          stats.canteen,
          stats.admission,
          stats.infrastructure,
          stats.hostel,
          stats.extracurricular,
          stats.sports,
          stats.environment,
          stats.coordination,
        ],
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "#0095ffff");
          gradient.addColorStop(1, "#3dbe80ff");
          return gradient;
        },
        borderRadius: 0,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    plugins: { legend: { position: "bottom" } },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Survey Queries by most requests : Live Result Updates Data" },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="result-wrapper">
      <h1 className="result-title">Response Live Results</h1>

      <div className="result-pies">
        <div className="pie-container">
          <h2 style={{ fontWeight: 700 }}>Academic & Administration</h2>

          <Pie data={academicData} options={pieOptions} />
        </div>

        {/* Middle dynamic box */}
        <div className="summary-box">
          <h2 style={{ color: "black" }}>Live Response Summary</h2>
          <p><strong>Academic Queries:</strong> {academicTotal}</p>
          <p><strong>Campus Queries:</strong> {campusTotal}</p>
          {/* <p><strong>College Environment Queries:</strong> {campusTotal}</p> */}
          <p><strong>Total Queries:</strong> {academicTotal + campusTotal}</p>
          <br />
          <p> <i>Result updates with every live request and response recieved and sent respectively.</i></p>
        </div>

        <div className="pie-container">
          <h2 style={{ fontWeight: 700 }}>Campus Life</h2>
          <Pie data={campusData} options={pieOptions} />
        </div>
      </div>

      <div className="bar-container">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}
