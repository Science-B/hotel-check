export function generateRate(rate: number): boolean[] {
	const starsArr = [false, false, false, false, false];
	return starsArr.map((el, index) => {
		return el ? false : index + 1 <= rate;
	});
}
