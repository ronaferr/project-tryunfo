import React from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;
    let elemento;
    if (hasTrunfo) {
      elemento = <p>Você já tem um Super Trunfo em seu baralho</p>;
    } else {
      elemento = (
        <label htmlFor="tryunfo">
          Super Tryunfo
          <input
            id="tryunfo"
            data-testid="trunfo-input"
            type="checkbox"
            name="cardTrunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
        </label>);
    }
    return (
      <div className="forms">
        <form className="campos" onSubmit={ onSaveButtonClick }>
          <fieldset>
            <label htmlFor="name">
              Nome
              <input
                id="name"
                data-testid="name-input"
                type="text"
                name="cardName"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="descrição">
              Descrição
              <br />
              <textarea
                id="descrição"
                data-testid="description-input"
                name="cardDescription"
                value={ cardDescription }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="attr1">
              Atributo1
              <input
                id="attr1"
                data-testid="attr1-input"
                type="number"
                name="cardAttr1"
                value={ cardAttr1 }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="attr2">
              Atributo2
              <input
                id="attr2"
                data-testid="attr2-input"
                type="number"
                name="cardAttr2"
                value={ cardAttr2 }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="attr3">
              Atributo3
              <input
                id="attr3"
                data-testid="attr3-input"
                type="number"
                name="cardAttr3"
                value={ cardAttr3 }
                onChange={ onInputChange }
              />
            </label>
            <label htmlFor="img">
              Imagem
              <input
                id="img"
                data-testid="image-input"
                type="text"
                name="cardImage"
                value={ cardImage }
                onChange={ onInputChange }
              />
            </label>
            Raridade
            <select
              id="raridade"
              data-testid="rare-input"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
            <br />
            { elemento }
            <br />
            <button
              data-testid="save-button"
              type="submit"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
};

Form.defaultProps = {
  cardName: <p>Sem valor</p>,
  cardDescription: <p>Sem valor</p>,
  cardAttr1: <p>Sem valor</p>,
  cardAttr2: <p>Sem valor</p>,
  cardAttr3: <p>Sem valor</p>,
  cardImage: <p>Sem valor</p>,
  cardRare: <p>Sem valor</p>,
  cardTrunfo: <p>Sem valor</p>,
  hasTrunfo: <p>Sem valor</p>,
  isSaveButtonDisabled: <p>Sem valor</p>,
  onInputChange: <p>Sem valor</p>,
  onSaveButtonClick: <p>Sem valor</p>,
};

export default Form;
