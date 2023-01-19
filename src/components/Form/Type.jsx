import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import * as api from "../../services/api";

function Type({ formData, setFormData }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    try {
      api.get("/types").then((response) => {
        console.log(response, "Actual api fake response");
        setOptions(["Article", "Client Report", "Monograf"]);
      });
    } catch (error) {
      alert("Error fetching data:", error);
    }
  }, []);

  const handleChangeDropdown = (event) => {
    setFormData({ ...formData, type: event.target.value });
  };
  return (
    <div className="steps ">
      <h4> Please Select the type</h4>
      <select
        style={{ backgroundColor: "white" }}
        className=" btn btn-outline dropdown-toggle-split w-50 dropdown d-lg-inline "
        value={formData.type}
        onChange={handleChangeDropdown}
      >
        {options.map((element, index) => {
          return <option key={index}>{element}</option>;
        })}
      </select>
    </div>
  );
}

export default Type;
