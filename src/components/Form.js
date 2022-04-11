import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, /* hasTrunfo, */
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <fieldset>
          Nome
          <input
            data-testid="name-input"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
          Descrição
          <textarea
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          Atributo1
          <input
            data-testid="attr1-input"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          Atributo2
          <input
            data-testid="attr2-input"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          Atributo3
          <input
            data-testid="attr3-input"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          Imagem
          <input
            data-testid="image-input"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
          Raridade
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input
            data-testid="trunfo-input"
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
        </fieldset>
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
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
  /* hasTrunfo: PropTypes.bool, */
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
  /* hasTrunfo: <p>Sem valor</p>, */
  isSaveButtonDisabled: <p>Sem valor</p>,
  onInputChange: <p>Sem valor</p>,
  onSaveButtonClick: <p>Sem valor</p>,
};

export default Form;
