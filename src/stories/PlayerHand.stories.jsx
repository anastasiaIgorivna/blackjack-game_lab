import PlayerHand from "../components/PlayerHand";

export default {
  title: "Game/PlayerHand",
  component: PlayerHand,
};

export const Empty = {
  args: {
    cards: [],
  },
};

export const Small = {
  args: {
    cards: ["A♠", "10♦"],
  },
};

export const Big = {
  args: {
    cards: ["A♠", "10♦", "7♥", "K♣"],
  },
};