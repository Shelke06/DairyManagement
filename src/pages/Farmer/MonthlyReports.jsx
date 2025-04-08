import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { jsPDF } from 'jspdf';
import 'chart.js/auto';
import '../../styles/Farmer/MonthlyReports.css';

const MonthlyReports = () => {
  // Sample data for graphs
  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Milk Collection (Liters)',
        data: [1200, 1500, 1100, 1800, 1700, 1600],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'FAT (%)',
        data: [4.5, 4.6, 4.7, 4.8, 4.6, 4.7],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: true,
      },
      {
        label: 'SNF (%)',
        data: [8.5, 8.6, 8.4, 8.7, 8.5, 8.6],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ['Milk Sales', 'Bonuses', 'Other Income'],
    datasets: [
      {
        data: [70, 20, 10],
        backgroundColor: ['rgba(255, 206, 86, 0.6)', 'rgba(54, 162, 235, 0.6)', 'rgba(255, 99, 132, 0.6)'],
        borderColor: ['rgba(255, 206, 86, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  // Function to download the report as a PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Monthly Report', 10, 10);
    doc.text('Milk Collection (Liters):', 10, 20);
    doc.text('January: 1200', 10, 30);
    doc.text('February: 1500', 10, 40);
    doc.text('March: 1100', 10, 50);
    doc.text('April: 1800', 10, 60);
    doc.text('May: 1700', 10, 70);
    doc.text('June: 1600', 10, 80);
    doc.save('Monthly_Report.pdf');
  };

  return (
    <div>
      <h2>Monthly Report</h2>
      <p>Visualize your monthly trends and download detailed reports.</p>

      {/* Bar Chart */}
      <div className="chart-container">
        <h4>Milk Collection (Liters)</h4>
        <Bar data={barData} />
      </div>

      {/* Line Chart */}
      <div className="chart-container">
        <h4>FAT and SNF Trends</h4>
        <Line data={lineData} />
      </div>

      {/* Pie Chart */}
      <div className="chart-container">
        <h4>Income Distribution</h4>
        <Pie data={pieData} />
      </div>

      {/* Downloadable Report */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={downloadPDF}>
          Download Monthly Report as PDF
        </button>
      </div>
    </div>
  );
};

export default MonthlyReports;