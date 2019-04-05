
const { response } = require(__base + 'app/helpers/responseHelper');

module.exports = (app) => {
	app.use(response)
}