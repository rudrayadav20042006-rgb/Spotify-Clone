# 🎵 Spotify Web Player Clone

A fully responsive, full-stack React application that perfectly replicates the Spotify Web Player interface. This project demonstrates modern frontend architecture, OAuth 2.0 authentication flows, and global state management.

## 🚀 Live Demo
> **[Click here to view the live app!](https://spotify-clone-rudra.web.app)**

## 🛠 Local Development
> **Local Server:** http://127.0.0.1:3000/

## 💻 Tech Stack
* **Frontend:** React.js (v16)
* **State Management:** React Context API (Custom Data Layer)
* **Styling:** CSS3, Flexbox, Material-UI (v4)
* **API/Network:** Spotify Web API (`spotify-web-api-js`), JSON Mocking

## ✨ Core Features
* **OAuth 2.0 Authentication:** Secure login flow bridging the app to Spotify's official servers to retrieve a temporary Access Token.
* **Global Data Vault:** Utilizes the React Context API (`useReducer` and `createContext`) to build a global Data Layer, avoiding prop-drilling and efficiently managing the user's session, playlists, and current playing track.
* **Dynamic API Fetching:** Pulls live user data (profile, playlists) directly from the Spotify API.
* **Network Fallback Architecture (Mock Data):** Engineered a robust data-mocking pipeline to bypass strict Spotify Premium 403 API blocks. This ensures the application interface remains fully populated and functional for UI/UX demonstration regardless of the authentication tier.
* **Native Audio Engine:** Integrates the HTML5 `<audio>` API to play actual 30-second track previews directly within the browser, managed via the global state to prevent overlapping audio.

## 🧠 Engineering Takeaways
Building this clone solidified my understanding of how massive, component-based applications handle data passing. By building a custom Data Layer instead of defaulting to Redux, I gained a much deeper understanding of React's native hooks. Additionally, handling the API 403 errors by injecting a mock database taught me how to unblock frontend development when backend servers (or paywalls) restrict data flow.

---
*Built by Rudra Narayan Yadav*
