/*
 +-----------------------------------------------------------+
 | Module Name: RESPONSE HELPER                               |
 | Module Purpose: Manage the general functions              |
 | Author: Manuraj.M                                         |
 +-----------------------------------------------------------+
*/

const response = (req, res, next) => {

	res.message = (message) => {

		// if (typeof message === 'string') {
		// 	let i18n = req.app.get('i18n');
		// 	res.responseMessage = message ? i18n.t(message) : ''
		// }
		res.responseMessage = message;
		return res;
	};

	res.success = (data) => {
		let message = res.responseMessage;
		res.send({
			message,
			data
		});
	};

	res.failure = (e) => {
		const message = (e.message) ? e.message : e;
		const pattern = {
			error: {
				message: message,
				code: res.statusCode,
			}
		};
		res.send(pattern);
	};

	next();
}

module.exports = {
	response
}