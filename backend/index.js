const express = require("express");
const cors = require("cors");
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const app = express();
const port = 3000;
const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(cors());

app.post("/gpt", async (req, res) => {
	// res.setHeader("Access-Control-Allow-Origin", "*");
	// res.setHeader("Access-Control-Allow-Methods", "POST");
	// res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	console.log(req.body.q);
	completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{ role: "assistant", content: req.body.q }],
	});
	const completion_text = completion.data.choices[0].message.content;
	res.send({ val: completion_text });
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
