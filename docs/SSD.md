# System Specification Document (SSD)

## 1. Introduction

The Blackjack Game is a web-based application developed using React.
The system allows a user to play Blackjack against a computer-controlled dealer following standard Blackjack rules.

---

## 2. Purpose

The purpose of the system is to provide an interactive and user-friendly Blackjack game experience directly in the browser.

---

## 3. System Overview

The application is implemented as a frontend React application with component-based architecture.

Main technologies:

* React
* JavaScript
* CSS
* Storybook
* JSDoc

---

## 4. System Architecture

The project uses a modular architecture.

### Main modules:

* `components/` — reusable UI components
* `pages/` — application pages
* `hooks/` — game logic and state handling
* `store/` — application state management

---

## 5. Functional Requirements

### FR-1 Start Game

The system shall allow the user to start a new Blackjack game.

### FR-2 Player Actions

The user shall be able to perform actions:

* Hit
* Stand

### FR-3 Dealer Logic

The dealer shall automatically perform actions according to Blackjack rules.

### FR-4 Winner Detection

The system shall determine the winner at the end of the game.

### FR-5 Cookie Consent

The system shall display a GDPR cookie consent popup.

---

## 6. Non-Functional Requirements

* The application should run in modern web browsers.
* The user interface should be responsive.
* The system should provide fast interaction without page reloads.

---

## 7. User Flow

1. User opens the application.
2. User starts a new game.
3. Cards are distributed.
4. User performs actions.
5. Dealer performs actions.
6. System displays the game result.

---

## 8. Documentation

The project includes:

* JSDoc documentation
* Storybook component documentation
* README documentation
