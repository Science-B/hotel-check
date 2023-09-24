import { useEffect } from "react"
import { useAppDispatch, useHotels } from "./hooks/hooks"
import { MainPage } from "./pages/main-page"

import { loadHotelsList } from "./redux/hotelsSlice"


export default function App() {
	const dispatch = useAppDispatch()
	const hotels = useHotels()
	useEffect(() => {
dispatch(loadHotelsList({city: 'Moscow', checkIn: '2023-09-24', checkOut: '2023-09-25'}))
	},[])
	console.log('hotels', hotels)
	return (
		<MainPage/>
	)
}
