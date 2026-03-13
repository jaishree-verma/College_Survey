
// import { useEffect, useState } from "react";
// import { Pie, Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   ArcElement,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "./ResultPage.css";

// ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// // 🔹 Hook for animated numbers
// function useAnimatedNumber(target, duration = 800) {
//   const [value, setValue] = useState(target);
//   useEffect(() => {
//     let start = value;
//     let diff = target - start;
//     let startTime = performance.now();
//     const step = (now) => {
//       let progress = Math.min((now - startTime) / duration, 1);
//       setValue(Math.floor(start + diff * progress));
//       if (progress < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [target]);
//   return value;
// }

// export default function ResultPage() {
//   const [stats, setStats] = useState({
//     canteen: 12,
//     admission: 8,
//     infrastructure: 15,
//     hostel: 10,
//     extracurricular: 6,
//     sports: 9,
//     environment: 11,
//     coordination: 7,
//   });

//   // 🔹 Auto update every 2 seconds (simulate new queries)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStats((prev) => ({
//         ...prev,
//         canteen: prev.canteen + Math.floor(Math.random() * 2),
//         admission: prev.admission + Math.floor(Math.random() * 2),
//         infrastructure: prev.infrastructure + Math.floor(Math.random() * 2),
//         hostel: prev.hostel + Math.floor(Math.random() * 2),
//         extracurricular: prev.extracurricular + Math.floor(Math.random() * 2),
//         sports: prev.sports + Math.floor(Math.random() * 2),
//         environment: prev.environment + Math.floor(Math.random() * 2),
//         coordination: prev.coordination + Math.floor(Math.random() * 2),
//       }));
//     }, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   const academicTotal = stats.admission + stats.infrastructure + stats.coordination;
//   const campusTotal =
//     stats.canteen + stats.hostel + stats.extracurricular + stats.sports + stats.environment;

//   // 🔹 Animated numbers for summary box
//   const animatedAcademic = useAnimatedNumber(academicTotal);
//   const animatedCampus = useAnimatedNumber(campusTotal);
//   const animatedTotal = useAnimatedNumber(academicTotal + campusTotal);

//   // 🔹 Animated values for Pie charts
//   const academicData = {
//     labels: ["Admission", "Infrastructure", "Teacher-Student Coordination"],
//     datasets: [
//       {
//         data: [
//           useAnimatedNumber(stats.admission),
//           useAnimatedNumber(stats.infrastructure),
//           useAnimatedNumber(stats.coordination),
//         ],
//         backgroundColor: ["#007bff", "#cf8ee6ff", "#ffc107"],
//         borderColor: "#000000ff",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const campusData = {
//     labels: ["Canteen", "Hostel", "Extracurricular", "Sports", "Environment"],
//     datasets: [
//       {
//         data: [
//           useAnimatedNumber(stats.canteen),
//           useAnimatedNumber(stats.hostel),
//           useAnimatedNumber(stats.extracurricular),
//           useAnimatedNumber(stats.sports),
//           useAnimatedNumber(stats.environment),
//         ],
//         backgroundColor: ["#dc3545", "#17a2b8", "#6f42c1", "#fd7e14", "#20c997"],
//         borderColor: "#000000ff",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const barData = {
//     labels: [
//       "Canteen",
//       "Admission",
//       "Infrastructure",
//       "Hostel",
//       "Extracurricular",
//       "Sports",
//       "Environment",
//       "Feedback",
//     ],
//     datasets: [
//       {
//         label: "Number of Queries",
//         data: [
//           useAnimatedNumber(stats.canteen),
//           useAnimatedNumber(stats.admission),
//           useAnimatedNumber(stats.infrastructure),
//           useAnimatedNumber(stats.hostel),
//           useAnimatedNumber(stats.extracurricular),
//           useAnimatedNumber(stats.sports),
//           useAnimatedNumber(stats.environment),
//           useAnimatedNumber(stats.coordination),
//         ],
//         backgroundColor: (ctx) => {
//           const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 400);
//           gradient.addColorStop(0, "#0095ffff");
//           gradient.addColorStop(1, "#3dbe80ff");
//           return gradient;
//         },
//         borderRadius: 0,
//       },
//     ],
//   };

//   const pieOptions = {
//     responsive: true,
//     maintainAspectRatio: true,
//     aspectRatio: 1,
//     plugins: { legend: { position: "bottom" } },
//   };

//   const barOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: { display: false },
//       title: { display: true, text: "Survey Queries (Auto-updates every 2s)" },
//       tooltip: {
//         enabled: true,
//         callbacks: {
//           label: (ctx) => `${ctx.label}: ${ctx.raw} queries`,
//         },
//       },
//     },
//     scales: { y: { beginAtZero: true } },
//   };

//   return (
//     <div className="result-wrapper">
//       <h1 className="result-title">Response Live Results</h1>

//       <div className="result-pies">
//         <div className="pie-container">
//           <h2 style={{ fontWeight: 700 }}>Academic & Administration</h2>
//           <Pie data={academicData} options={pieOptions} />
//         </div>

//         <div className="summary-box">
//           <h2 style={{ color: "black" }}>Live Response Summary</h2>
//           <p><strong>Academic Queries:</strong> {animatedAcademic}+</p>
//           <p><strong>Campus Queries:</strong> {animatedCampus}+</p>
//           <p><strong>Total Queries:</strong> {animatedTotal}+</p>
//           <br />
//           <p><i>Result updates automatically every 2 seconds.</i></p>
//         </div>

//         <div className="pie-container">
//           <h2 style={{ fontWeight: 700 }}>Campus Life</h2>
//           <Pie data={campusData} options={pieOptions} />
//         </div>
//       </div>

//       <div className="bar-container">
//         <Bar data={barData} options={barOptions} />
//       </div>
      

//     </div>
//   );
// }
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

// 🔹 Hook for animated numbers
function useAnimatedNumber(target, duration = 800) {
  const [value, setValue] = useState(target);
  useEffect(() => {
    let start = value;
    let diff = target - start;
    let startTime = performance.now();
    const step = (now) => {
      let progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.floor(start + diff * progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target]);
  return value;
}

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

  // 🔹 Auto update every 2 seconds (simulate new queries)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        canteen: prev.canteen + Math.floor(Math.random() * 2),
        admission: prev.admission + Math.floor(Math.random() * 2),
        infrastructure: prev.infrastructure + Math.floor(Math.random() * 2),
        hostel: prev.hostel + Math.floor(Math.random() * 2),
        extracurricular: prev.extracurricular + Math.floor(Math.random() * 2),
        sports: prev.sports + Math.floor(Math.random() * 2),
        environment: prev.environment + Math.floor(Math.random() * 2),
        coordination: prev.coordination + Math.floor(Math.random() * 2),
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const academicTotal = stats.admission + stats.infrastructure + stats.coordination;
  const campusTotal =
    stats.canteen + stats.hostel + stats.extracurricular + stats.sports + stats.environment;

  // 🔹 Animated numbers for summary box
  const animatedAcademic = useAnimatedNumber(academicTotal);
  const animatedCampus = useAnimatedNumber(campusTotal);
  const animatedTotal = useAnimatedNumber(academicTotal + campusTotal);

  // 🔹 Animated values for Pie charts
  const academicData = {
    labels: ["Admission", "Infrastructure", "Teacher-Student Coordination"],
    datasets: [
      {
        data: [
          useAnimatedNumber(stats.admission),
          useAnimatedNumber(stats.infrastructure),
          useAnimatedNumber(stats.coordination),
        ],
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
          useAnimatedNumber(stats.canteen),
          useAnimatedNumber(stats.hostel),
          useAnimatedNumber(stats.extracurricular),
          useAnimatedNumber(stats.sports),
          useAnimatedNumber(stats.environment),
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
          useAnimatedNumber(stats.canteen),
          useAnimatedNumber(stats.admission),
          useAnimatedNumber(stats.infrastructure),
          useAnimatedNumber(stats.hostel),
          useAnimatedNumber(stats.extracurricular),
          useAnimatedNumber(stats.sports),
          useAnimatedNumber(stats.environment),
          useAnimatedNumber(stats.coordination),
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
      title: { display: true, text: "Survey Queries (Auto-updates every 2s)" },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (ctx) => {
            const total = ctx.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
            const percent = ((ctx.raw / total) * 100).toFixed(1);
            return `${ctx.label}: ${ctx.raw} queries (${percent}%)`;
          },
        },
      },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="result-wrapper">
      <h1 className="result-title">Response Live Results</h1>

      {/* 🔹 Live Update Banner */}
      <div className="live-banner">🔄 Auto-updating every 2 seconds</div>

      <div className="result-pies">
        <div className="pie-container">
          <h2 style={{ fontWeight: 700 }}>Academic & Administration</h2>
          <Pie data={academicData} options={pieOptions} />
        </div>

        <div className="summary-box">
          <h2 style={{ color: "black" }}>Live Response Summary</h2>
          <p><strong>Academic Queries:</strong> {animatedAcademic}+</p>
          <p><strong>Campus Queries:</strong> {animatedCampus}+</p>
          <p><strong>Total Queries:</strong> {animatedTotal}+</p>
          <br />
          <p><i>For every new query & response send or receive, Result updates automatically in every 2 secs. </i></p>
        </div>

        <div className="pie-container">
          <h2 style={{ fontWeight: 700 }}>Campus Life</h2>
          <Pie data={campusData} options={pieOptions} />
        </div>
      </div>

      <div className="bar-container">
        <Bar data={barData} options={barOptions} />
      </div>

      {/* 🔹 Info Box */}
      {/* <div className="update-box">
        <h3>Need Help?</h3>
        <p>
          For live updates or queries, please contact the college management.
          <br />
          📞 Phone: +91-XXXXXXXXXX
        </p>
      </div> */}

      {/* 🔹 Footer Note */}
      <footer className="dashboard-footer">
  <u>Powered by College Survey System</u> - Last updated: {new Date().toLocaleString()}
</footer>

    </div>
  );
}
