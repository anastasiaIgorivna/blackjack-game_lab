# Swagger API Documentation

## Base URL

```http
http://localhost:3000/api
```

---

# 1. Start New Game

## Endpoint

```http
GET /game/start
```

## Description

Starts a new Blackjack game and distributes cards.

## Response Example

```json
{
  "playerCards": ["A♠", "10♦"],
  "dealerCards": ["K♣", "?"],
  "status": "started"
}
```

---

# 2. Player Action

## Endpoint

```http
POST /game/action
```

## Description

Processes a player action during the game.

## Request Example

```json
{
  "action": "hit"
}
```

## Response Example

```json
{
  "playerCards": ["A♠", "10♦", "5♥"],
  "dealerCards": ["K♣", "?"],
  "status": "playing"
}
```

---

# Possible Actions

* `hit`
* `stand`
