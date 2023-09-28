export function getHotelString(count: number): string {
	const countStr = count.toString();
	const lastDigit = countStr.slice(-1);
	const penultimateDigit = countStr.slice(-2, -1);

	if (lastDigit === '1' && penultimateDigit !== '1') {
		return `${count} отель`;
	} else if (
		(lastDigit === '2' || lastDigit === '3' || lastDigit === '4') &&
		penultimateDigit !== '1'
	) {
		return `${count} отеля`;
	} else {
		return `${count} отелей`;
	}
}
