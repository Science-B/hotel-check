import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { setupStore } from './redux/store.ts'
import App from './App.tsx'

import './global.scss'

const { store, persistor } = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter>
			<PersistGate persistor={persistor} loading={null}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>
)
