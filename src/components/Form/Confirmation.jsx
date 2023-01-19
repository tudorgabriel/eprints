import React from "react";

function Confirmation({ formData }) {
  const { authors, file, type } = formData;

  return (
    <div className="steps">
      <h4> Congratulations, your eprints form was successfully processed! </h4>
      <h5>The following data was successfully proceed: </h5>
      <ul className="list-group list-group-flush mb-5 mx-auto w-50">
        <li className="list-group-item mb-2">Type: {type} </li>
        <li className="list-group-item mb-2">
          Authors: {authors.reduce((prev, curr) => [prev, ",", curr])}
        </li>
        <li className="list-group-item mb-2">File: {file} </li>
      </ul>
    </div>
  );
}

export default Confirmation;
