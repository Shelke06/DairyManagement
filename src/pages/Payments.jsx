import React from 'react';
import { jsPDF } from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Payments.css';

const Payments = () => {
  // Sample payment data
  const paymentHistory = [
    { date: '2025-04-01', amount: '₹1500', method: 'Bank Transfer', status: 'Completed' },
    { date: '2025-04-10', amount: '₹2000', method: 'UPI', status: 'Pending' },
    { date: '2025-04-15', amount: '₹1800', method: 'Cash', status: 'Completed' },
    { date: '2025-04-20', amount: '₹2200', method: 'Bank Transfer', status: 'Completed' },
  ];

  // Calculate total earnings
  const totalEarnings = paymentHistory.reduce((total, payment) => {
    if (payment.status === 'Completed') {
      return total + parseInt(payment.amount.replace('₹', ''));
    }
    return total;
  }, 0);

  // Function to download payment report as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('Payment Report', 10, 10);
    doc.text('Date       Amount       Method       Status', 10, 20);
    paymentHistory.forEach((payment, index) => {
      doc.text(
        `${payment.date}       ${payment.amount}       ${payment.method}       ${payment.status}`,
        10,
        30 + index * 10
      );
    });
    doc.text(`Total Earnings: ₹${totalEarnings}`, 10, 30 + paymentHistory.length * 10);
    doc.save('Payment_Report.pdf');
  };

  return (
    <div className="payments-page">
      <h2>Payments</h2>
      <p>View your payment history and download detailed reports.</p>

      {/* Total Earnings */}
      <div className="total-earnings">
        <h4>Total Earnings: ₹{totalEarnings}</h4>
      </div>

      {/* Payment History Table */}
      <div className="card">
        <div className="card-body">
          <h4>Payment History</h4>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Method</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                  <td>{payment.method}</td>
                  <td
                    className={
                      payment.status === 'Completed' ? 'text-success' : 'text-warning'
                    }
                  >
                    {payment.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Download Report Button */}
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={downloadPDF}>
          Download Payment Report as PDF
        </button>
      </div>
    </div>
  );
};

export default Payments;