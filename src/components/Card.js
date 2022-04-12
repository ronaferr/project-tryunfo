import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <section>
        <h1 data-testid="name-card">
          {cardName}
        </h1>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <span data-testid="rare-card">{cardRare}</span>
        { cardTrunfo
          ? <p data-testid="trunfo-card">Super Trunfo</p>
          : <p data-testid="trunfo-card"> </p>}
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

Card.defaultProps = {
  cardName: <p>Sem valor</p>,
  cardDescription: <p>Sem valor</p>,
  cardAttr1: <p>Sem valor</p>,
  cardAttr2: <p>Sem valor</p>,
  cardAttr3: <p>Sem valor</p>,
  cardImage: <p>Sem valor</p>,
  cardRare: <p>Sem valor</p>,
  cardTrunfo: <p>Sem valor</p>,
};

export default Card;
