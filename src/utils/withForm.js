import React, { useState } from "react";

const withForm = (Component) => {
  return (props) => {
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const { label } = props;
    const onSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setErrorMessage("");
      setSuccess(true);
      e.target.reset();
    };

    const onInvalid = () => {
      setErrorMessage(`Preencha os campos necesários.`);
    };

    const handleChangeInput = (input, value) => {
      setFormData({ ...formData, [input]: value });
      setSuccess(false);
    };
    return (
      <>
        <h2>{label}</h2>
        <Component
          {...props}
          setFormData={setFormData}
          onSubmit={onSubmit}
          handleChangeInput={handleChangeInput}
          onInvalid={onInvalid}
        />
        {success && <p className="success">Resposta enviada com sucesso!</p>}
        <p className="error">{errorMessage}</p>
        <hr />
      </>
    );
  };
};

export default withForm;
