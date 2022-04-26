import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cardsSalvos: [],
      cardsFiltrados: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.filtrarCard = this.filtrarCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      const {
        cardName, cardDescription, cardAttr1, cardAttr2,
        cardAttr3, cardImage,
      } = this.state;
      const somaAtributos = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);
      const maxValue = 210;
      const max = 90;
      const min = 0;
      if (
        cardName.length > 0
      && cardDescription.length > 0
      && parseInt(cardAttr1, 10) >= min
      && parseInt(cardAttr1, 10) <= max
      && parseInt(cardAttr2, 10) >= min
      && parseInt(cardAttr2, 10) <= max
      && parseInt(cardAttr3, 10) >= min
      && parseInt(cardAttr3, 10) <= max
      && somaAtributos <= maxValue
      && cardImage.length > 0
      ) {
        this.setState({
          isSaveButtonDisabled: false,
        });
      } else {
        this.setState({
          isSaveButtonDisabled: true,
        });
      }
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const data = this.state;
    this.setState((prev) => ({
      cardsSalvos: [...prev.cardsSalvos, data],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  }

  removeCard(cardRemove) {
    this.setState((prevState) => ({
      cardsSalvos: prevState.cardsSalvos.filter(
        (cards) => cards.cardName !== cardRemove.cardName,
      ),
    }));
  }

  filtrarCard(event) {
    event.preventDefault();
    this.setState({
      cardsFiltrados: event.target.value,
    });
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      isSaveButtonDisabled, cardsSalvos, cardsFiltrados,
    } = this.state;
    const filtro = cardsSalvos.filter((cardsSavo) => cardsSavo.cardName
      .includes(cardsFiltrados));
    return (
      <section className="page">
        <h1>Tryunfo</h1>
        <section className="addCard">
          <Form
            onInputChange={ this.onInputChange }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ cardsSalvos.some((card) => card.cardTrunfo === true) }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <h2>Cards Salvos</h2>
        <section className="cardsSalvos">
          <div className="filtro">
            <h3>Filtro de cartas</h3>
            <input
              type="text"
              data-testid="name-filter"
              placeholder="Busque o nome da Card"
              onChange={ this.filtrarCard }
            />
          </div>
          <div className="cardsList">
            {filtro.map((card) => (
              <div key={ card.cardName }>
                <Card
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  type="button"
                  className="btnDelete"
                  onClick={ () => this.removeCard(card) }
                >
                  Excluir
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
    );
  }
}

export default App;
