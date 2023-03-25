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

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post("/gpt", async (req, res) => {
	try{
	console.log(req.body.q);
	completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{ role: "assistant", content: req.body.q }],
	});
	const completion_text = completion.data.choices[0].message.content;
	res.send({ val: completion_text });
	}
	catch(err){
		console.log(err);
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
