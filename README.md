#  Blackjack Game (React)

##  Description

This project is a web-based Blackjack game built using React.
The player competes against a dealer following standard Blackjack rules.

The project demonstrates component-based architecture, state management, and UI logic handling in a modern React application.

---

##  Features

*  Full Blackjack game logic (Hit / Stand / Game Over)
*  Player vs Dealer gameplay
*  Cookie consent popup (GDPR compliant)
*  Auto-generated documentation (JSDoc)
*  Storybook UI component documentation
*  Modular React components structure

---

##  Technologies Used

* React
* JavaScript (ES6+)
* CSS
* Storybook
* JSDoc
* LocalStorage (for cookies / consent)

---

##  Project Structure

```
src/
 ├── components/   # UI components (PlayerHand, DealerHand, Modal)
 ├── pages/        # Application pages (GamePage, StartPage, etc.)
 ├── hooks/        # Game logic (useBlackjack)
 ├── store/        # State management
```

---

##  Installation & Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run the project

```bash
npm start
```

### 3. Run Storybook

```bash
npm run storybook
```

### 4. Generate documentation

```bash
npx jsdoc -d docs src
```

---

##  GDPR & Cookies

This project uses a cookie consent popup to comply with GDPR requirements.
User preferences are stored in localStorage.

---

##  Documentation

Project documentation is generated using JSDoc and available in the `/docs` folder.

---

##  Author

**Anastasiia Polishchuk**

---

##  License

This project is licensed under the MIT License.
See the LICENSE file for more details.

---

##  Links

* Documentation: `/docs`
* Storybook: локальний запуск через `npm run storybook`
