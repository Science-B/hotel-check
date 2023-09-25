export function formatPrice(price: number): string {
	const roundedPrice = Math.ceil(price);
	let formattedPrice = roundedPrice.toString();

	formattedPrice = formattedPrice.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

	return formattedPrice;
}
