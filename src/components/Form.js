import React from "react";
import withForm from "../utils/withForm";

function Form({ onSubmit, onInvalid, handleChangeInput }) {
  return (
    <form onSubmit={onSubmit} onInvalid={onInvalid}>
      <label for="name">Nome:</label>
      <input
        type="text"
        placeholder="Insira seu nome"
        id="name"
        name="Nome"
        required
        onChange={(e) => handleChangeInput("name", e.target.value)}
      />

      <label for="name">Sobrenome:</label>
      <input
        type="text"
        placeholder="Insira seu sobrenome"
        id="lastname"
        name="Sobrenome"
        onChange={(e) => handleChangeInput("lastname", e.target.value)}
      />

      <label for="name">Idade:</label>
      <input
        type="number"
        name="Idade"
        id="age"
        required
        onChange={(e) => handleChangeInput("age", e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default withForm(Form);
