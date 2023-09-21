import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './redux/store.ts'
import App from './App.tsx'

import './global.scss'

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<App />
	</Provider>,
)
