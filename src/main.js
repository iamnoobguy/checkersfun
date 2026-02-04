import React from "https://esm.sh/react@18"
import ReactDOM from "https://esm.sh/react-dom@18/client"
import App from "./app.js"

const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
)