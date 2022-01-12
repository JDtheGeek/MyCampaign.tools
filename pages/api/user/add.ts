export const add = async (req, res) => {
	if(!req.query.todo) {
			return res.status(400).send("todo parameter required.")
	}
	let todo = encodeURI(req.query.todo)

	const token = "AYYdASQgZDhkNThjYTUtMDY1Ni00ZjU1LWIyM2UtZDk4ZTMyMjI3MDc5ZTgyOGI3NzIxYzFiNGY4NGFlMmY2OGZhOWE1MDY1MmU="
	const url = `${process.env.REDIS_URL}/lpush/todo/` + todo + "?_token=" + token;

	return fetch(url)
			.then(r => r.json())
			.then(data => {
					let result = JSON.stringify(data.result)
					return res.status(200).json(result)
			})
}

export default add