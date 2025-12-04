import { useState, useEffect } from 'react';

const createDeck = () => {
  const deck = [];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]; // 10: валет, дама, король
  for (let i = 0; i < 4; i++) {
    deck.push(...values);
  }
  return shuffle(deck);
};

const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export const useBlackjack = () => {
  const [deck, setDeck] = useState(createDeck());
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const newDeck = [...deck];
    const player = [newDeck.pop(), newDeck.pop()];
    const dealer = [newDeck.pop()];
    setPlayerCards(player);
    setDealerCards(dealer);
    setDeck(newDeck);
  }, []);

  const getTotal = (cards) => {
    let sum = cards.reduce((a, b) => a + b, 0);
    let aceCount = cards.filter((c) => c === 11).length;
    while (sum > 21 && aceCount > 0) {
      sum -= 10;
      aceCount--;
    }
    return sum;
  };

  const hit = () => {
    if (!isPlayerTurn || result) return;
    const newDeck = [...deck];
    const newCard = newDeck.pop();
    const newPlayerCards = [...playerCards, newCard];
    setPlayerCards(newPlayerCards);
    setDeck(newDeck);
    if (getTotal(newPlayerCards) > 21) {
      endGame(newPlayerCards, dealerCards);
    }
  };

  const stand = () => {
    setIsPlayerTurn(false);
    let newDeck = [...deck];
    let dealerNewCards = [...dealerCards];
    while (getTotal(dealerNewCards) < 17) {
      const card = newDeck.pop();
      dealerNewCards.push(card);
    }
    setDealerCards(dealerNewCards);
    setDeck(newDeck);
    endGame(playerCards, dealerNewCards);
  };

  const endGame = (player, dealer) => {
    const playerTotal = getTotal(player);
    const dealerTotal = getTotal(dealer);

    if (playerTotal > 21) setResult('Програв');
    else if (dealerTotal > 21) setResult('Виграв');
    else if (playerTotal > dealerTotal) setResult('Виграв');
    else if (playerTotal < dealerTotal) setResult('Програв');
    else setResult('Нічия');
  };

  return {
    playerCards,
    dealerCards,
    isPlayerTurn,
    result,
    hit,
    stand,
    getTotal
  };
};
