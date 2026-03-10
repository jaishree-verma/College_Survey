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

  const academicData = {
    labels: ["Admission", "Infrastructure", "Teacher-Student Coordination"],
    datasets: [
      {
        data: [stats.admission, stats.infrastructure, stats.coordination],
        backgroundColor: ["#007bff", "#28a745", "#ffc107"],
        borderColor: "#fff",
        borderWidth: 2,
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
        borderColor: "#fff",
        borderWidth: 2,
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
      "Teacher-Student Coordination",
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
          gradient.addColorStop(0, "#007bff");
          gradient.addColorStop(1, "#00c6ff");
          return gradient;
        },
        borderRadius: 6,
      },
    ],
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1, // smaller pies
    plugins: { legend: { position: "bottom" } },
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false, // allow full width
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Survey Queries by Topic" },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="result-wrapper">
      <h1 className="result-title">Survey Results</h1>

      <div className="result-pies">
        <div className="pie-container">
          <h2 >Academic & Administration</h2>
          <Pie data={academicData} options={pieOptions} />
        </div>
        <div className="pie-container">
          <h2>Campus Life</h2>
          <Pie data={campusData} options={pieOptions} />
        </div>
      </div>

      <div className="bar-container">
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
}
