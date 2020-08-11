import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider, createMuiTheme } from "@material-ui/core"

import App from "./App.js"
import * as serviceWorker from "./serviceWorker.js"
import "./index.css"

const theme = createMuiTheme({
    palette: {
        theme: "dark",
        type: "dark",

        background: {
            default: "#282833",
            paper: "#333340"
        },

        primary: {
            main: "#BB86FC",
            variant: "#3700B3"
        },

        secondary: {
            main: "#03DAC5",
            dark: "#336D6F"
        },

        error: {
            main: "#CF6679"
        }
    }
})

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()