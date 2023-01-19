import React, { useState } from "react";

function Upload({ formData, setFormData }) {
  const file = formData.file;
  const [error, setError] = useState(false);

  const handleChangeUpload = (event) => {
    const selectedFile = event.target.files[0];
    const validFileTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (validFileTypes.includes(selectedFile.type)) {
      setFormData((prevData) => ({
        ...prevData,
        file: selectedFile.name,
      }));
      setError(false);
    } else {
      alert("Invalid file type. Please select a PDF, DOC, or DOCX file.");
      setError(true);
    }
  };

  return (
    <div className="steps">
      <h4> Step 3 : Add file </h4>
      <input
        className="col-lg-3 col-sm-12 col-12 form-control w-50 mb-5 mt-5"
        type="file"
        onChange={handleChangeUpload}
        accept=".pdf,.doc,.docx"
        required
      />
      {error ? (
        <p className="alert alert-danger  mb-3 ml-2">
          {" "}
          Invalid file type. Please select a PDF, DOC, or DOCX file
        </p>
      ) : (
        <span style={{ color: "green" }} className="alert-link">
          {file.name}
        </span>
      )}
    </div>
  );
}

export default Upload;
