export function getCurrentDate(): string {
	const today = new Date();
	const year = today.getFullYear();
	const month = String(today.getMonth() + 1).padStart(2, '0'); // Плюс 1, так как месяцы в JavaScript начинаются с 0
	const day = String(today.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
}
