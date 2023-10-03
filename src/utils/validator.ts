export function validator(
	data: { [key: string]: any },
	config: { [key: string]: { [key: string]: any } },
): { [key: string]: string } {
	const errors: { [key: string]: string } = {};

	function validate(
		validateMethod: string,
		data: any,
		config: { [key: string]: any },
	) {
		let statusValidate;

		switch (validateMethod) {
			case 'isRequired': {
				if (typeof data === 'boolean') {
					statusValidate = !data;
				} else {
					statusValidate = data.trim() === '';
				}
				break;
			}
			case 'min': {
				statusValidate = data.length < config.value;
				break;
			}
			case 'сyrillic': {
				const cyrillicRegExp = /^[A-Za-z0-9]+$/;
				statusValidate = !cyrillicRegExp.test(data);
				break;
			}
			case 'specials': {
				const specialsErgExp = /^[а-яА-ЯёЁa-zA-Z]*$/;
				statusValidate = !specialsErgExp.test(data);
				break;
			}
		}

		if (statusValidate) return config.message;
	}

	for (const fieldName in data) {
		for (const validateMethod in config[fieldName]) {
			const error = validate(
				validateMethod,
				data[fieldName],
				config[fieldName][validateMethod],
			);

			if (error && !errors[fieldName]) {
				errors[fieldName] = error;
			}
		}
	}

	return errors;
}
