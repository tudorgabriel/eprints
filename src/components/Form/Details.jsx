import React, { useState } from "react";
function Details({ formData, setFormData }) {
  const { authors, title, abstract } = formData;
  const [inputAuthors, setInputAuthors] = useState("");

  const handleTitleInput = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      title: event.target.value,
    }));
  };

  const handleAbstractInput = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      abstract: event.target.value,
    }));
  };

  const addAuthorsHandler = () => {
    if (inputAuthors < 1) {
      return;
    } else {
      setFormData((prevData) => ({
        ...prevData,
        authors: [...prevData.authors, inputAuthors],
      }));
      setInputAuthors("");
    }
  };

  const authorsInputHandler = (e) => {
    setInputAuthors(e.target.value);
  };

  return (
    <div className="steps">
      <h4> Step 2 : Details </h4>
      <textarea
        className="w-100 d-sm-block d-md-block form-control w-50 mb-4"
        onChange={handleTitleInput}
        type={"textarea"}
        placeholder={"Title"}
        value={title}
        required
      />
      <textarea
        className=" w-100 d-sm-block d-md-block form-control w-50 mb-4"
        onChange={handleAbstractInput}
        type={"textarea"}
        placeholder={"Abstract"}
        value={abstract}
        maxLength={50}
      />

      <div className="btn-group  w-100">
        <input
          className=" form-control w-50"
          onChange={authorsInputHandler}
          value={inputAuthors}
          placeholder={"Authors"}
          maxLength={50}
        />
        <button
          disabled={inputAuthors < 1}
          className="btn btn-secondary "
          type="button"
          onClick={addAuthorsHandler}
        >
          Add
        </button>
      </div>
      {authors.length < 1 && (
        <small className="w-100 sm-block d-md-block form-text text-muted mx-auto d-block w-25 mb-5">
          Add at least one author{" "}
        </small>
      )}

      <section className="authors-section">
        {authors.length > 0 && <h5> Added Authors </h5>}
        <ul className="w-50 d-sm-block d-md-block list-group  mb-5  w-50 mx-auto ">
          {authors.map((item, index) => (
            <li className="list-group-item primary mb-2" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Details;
