import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/login-page/login-page"
import { MainPage } from "./pages/main-page"

export default function App() {
	
	return (
	<>
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/" element={<MainPage />}/>
		</Routes>
	</>
	)
}
