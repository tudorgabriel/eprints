import React, { useState } from "react";
import Details from "./Details";
import Type from "./Type";
import Upload from "./Upload";
import Confirmation from "./Confirmation";
import "../Form/Form.css";
import * as api from "../../services/api";

function ParentForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "Article",
    title: "",
    abstract: "",
    authors: [],
    file: "",
  });
  const disabledNextButton = step == 1 && formData.authors < 1 ? true : false;
  const prevStepHandler = () => {
    setStep(step - 1);
  };

  const finalApiSubmit = async () => {
    try {
      const response = await api.post("/eprints", formData);
      if (response.status == 201) {
        setStep(0);
        setFormData({
          type: "Article",
          title: "",
          abstract: "",
          authors: [],
          file: "",
        });
      }
    } catch (error) {
      alert("Errrrror");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setStep(step + 1);
    if (step == 2) {
      setStep(step + 1);
    }
    if (step == 3) {
      finalApiSubmit();
    }
  };

  const stepDisplay = () => {
    if (step == 0) {
      return <Type formData={formData} setFormData={setFormData} />;
    } else if (step == 1) {
      return <Details formData={formData} setFormData={setFormData} />;
    } else if (step == 2) {
      return <Upload formData={formData} setFormData={setFormData} />;
    } else {
      return <Confirmation formData={formData} />;
    }
  };

  return (
    <div className="main-component form-group col-sm-12-w-100">
      <h1> eprints form </h1>
      <form onSubmit={submitHandler}>
        <section className="form -section ">{stepDisplay()}</section>
        <button
          className="col-lg-3 col-sm-12  btn btn-outline-primary mx-auto d-block "
          type="submit"
          disabled={disabledNextButton}
        >
          {step === 3 ? "Submit" : step === 3 ? "Try Again" : "Next"}
        </button>
        {step !== 0 && step !== 3 && (
          <button
            className="col-lg-3 col-sm-12 col-xs-12  btn btn-outline-primary mx-auto d-block  "
            type="button"
            onClick={prevStepHandler}
          >
            Prev Step
          </button>
        )}
      </form>
    </div>
  );
}

export default ParentForm;
