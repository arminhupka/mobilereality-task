import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyle from './style/GlobalStyle'
import theme from './style/theme'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
