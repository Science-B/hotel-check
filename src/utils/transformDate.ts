export function transformDate(dateString: string): string {
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const date = new Date(dateString);
	return date.toLocaleDateString('ru-RU', options).replace('г.', '');
}
