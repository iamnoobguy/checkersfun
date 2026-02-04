import React from "https://esm.sh/react@18"

export default function Square({ dark, children, onClick }) {
  return React.createElement(
    "div",
    {
      onClick,
      style: {
        width: 60,
        height: 60,
        background: dark ? "#444" : "#ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    children
  )
}