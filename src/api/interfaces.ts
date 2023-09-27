export interface HotelState {
	hotels: Hotel[];
	isLoading: boolean;
	error?: string;
}

export interface Hotel {
	location: Location;
	priceAvg: number;
	pricePercentile: PricePercentile;
	hotelName: string;
	stars: number;
	locationId: number;
	hotelId: number;
	priceFrom: number;
}

interface Location {
	country: string;
	geo: Geolocation;
	state?: null;
	name: string;
}

interface Geolocation {
	lon: string;
	lat: string;
}

interface PricePercentile {
	'3': number;
	'10': number;
	'35': number;
	'50': number;
	'75': number;
	'99': number;
}

export interface slidersState {
	sliders: string[];
}

export interface FavoritesState {
	favorites: Hotel[];
}

export interface SearchParamsState {
	city: string;
	checkIn: string;
	checkOut: string;
}

export interface HotelSearchParams {
	city: string;
	checkIn: string;
	checkOut: string;
}
