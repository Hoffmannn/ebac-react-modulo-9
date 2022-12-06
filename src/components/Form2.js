import React from "react";
import withForm from "../utils/withForm";

function Form2({ onSubmit, onInvalid, handleChangeInput }) {
  return (
    <form onSubmit={onSubmit} onInvalid={onInvalid}>
      <label for="comochegou">Como chegou até aqui?</label>
      <select
        type="text"
        id="comochegou"
        required
        onChange={(e) => handleChangeInput("comochegou", e.target.value)}
      >
        <option value={null} selected disabled></option>
        <option value="ebac">Curso da EBAC</option>
        <option value="instagram">Instagram</option>
        <option value="amigo">Indicação de um amigo</option>
      </select>

      <label for="satisfaction">Está satisfeito?</label>
      <select
        type="text"
        id="satisfaction"
        required
        onChange={(e) => handleChangeInput("satisfaction", e.target.value)}
      >
        <option value="yes">Sim</option>
        <option value="no">Não</option>
      </select>

      <label for="score">Qual nota daria para nosso serviço?</label>
      <input
        type="number"
        name="score"
        id="score"
        min={0}
        max={5}
        required
        onChange={(e) => handleChangeInput("score", e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default withForm(Form2);
