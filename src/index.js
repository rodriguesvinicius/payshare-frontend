import React from "react";
import ReactDOM from "react-dom";
import './global.css';
import App from "./App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
            primary: {  
                main: "#2d2d2d" 
            },
            secondary: {
                main: "#1CDC6E"
            }            
    },
})

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
