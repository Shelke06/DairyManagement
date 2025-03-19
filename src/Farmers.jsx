import React, { useState } from "react";

function Farmers() {
  const [farmer, setFarmer] = useState({
    name: "",
    phone: "",
    milkQuantity: "",
    fat: "",
    snf: "",
  });

  const handleChange = (e) => {
    setFarmer({ ...farmer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Farmer Data:", farmer);
    alert("Farmer Registered Successfully!");
    setFarmer({ name: "", phone: "", milkQuantity: "", fat: "", snf: "" });
  };

  return (
    <div className="container mt-5">
      <h2>Farmer Registration</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Farmer Name</label>
          <input type="text" name="name" className="form-control" value={farmer.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" name="phone" className="form-control" value={farmer.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Milk Quantity (Liters)</label>
          <input type="number" name="milkQuantity" className="form-control" value={farmer.milkQuantity} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Fat (%)</label>
          <input type="number" name="fat" className="form-control" value={farmer.fat} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">SNF (%)</label>
          <input type="number" name="snf" className="form-control" value={farmer.snf} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Register Farmer</button>
      </form>
    </div>
  );
}

export default Farmers;
