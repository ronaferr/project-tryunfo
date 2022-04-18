import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
    } = this.props;
    return (
      <section className="contanierCard">
        <div className="subContanier">
          <h1 data-testid="name-card">
            {cardName}
          </h1>
          <img
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p className="info" data-testid="description-card">
            {cardDescription}
          </p>
          <p className="attr" data-testid="attr1-card">
            Attr 1................................
            {cardAttr1}
          </p>
          <p className="attr" data-testid="attr2-card">
            Attr 2................................
            {cardAttr2}
          </p>
          <p className="attr" data-testid="attr3-card">
            Attr 3................................
            {cardAttr3}
          </p>
          <span data-testid="rare-card">{cardRare}</span>
          { cardTrunfo
            ? <p className="trunfo" data-testid="trunfo-card">Super Trunfo</p>
            : <p> </p>}
        </div>
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
