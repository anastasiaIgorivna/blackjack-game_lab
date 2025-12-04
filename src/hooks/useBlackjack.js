import { useState } from 'react';

const generateCard = () => {
  const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]; // Туз як 11
  return cards[Math.floor(Math.random() * cards.length)];
};

export const useBlackjack = () => {
  const [playerCards, setPlayerCards] = useState([generateCard(), generateCard()]);
  const [dealerCards, setDealerCards] = useState([generateCard()]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [result, setResult] = useState(null);

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
    const newCards = [...playerCards, generateCard()];
    setPlayerCards(newCards);
    if (getTotal(newCards) > 21) {
      endGame(newCards, dealerCards);
    }
  };

  const stand = () => {
    setIsPlayerTurn(false);
    let dealerNewCards = [...dealerCards];
    while (getTotal(dealerNewCards) < 17) {
      dealerNewCards.push(generateCard());
    }
    setDealerCards(dealerNewCards);
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
