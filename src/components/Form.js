import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <fieldset>
          Nome
          <input data-testid="name-input" type="text" />
          Descrição
          <textarea data-testid="description-input" />
          Atributo1
          <input data-testid="attr1-input" type="number" />
          Atributo2
          <input data-testid="attr2-input" type="number" />
          Atributo3
          <input data-testid="attr3-input" type="number" />
          Imagem
          <input data-testid="image-input" type="text" />
          Raridade
          <select data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input data-testid="trunfo-input" type="checkbox" />
          Super Trybe Trunfo
        </fieldset>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
