// background event listeners go in this file
let data = {
	"g-search": "Loading...",
	gptResponse: "Loading...",
};
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
	console.log("this is idk");
	if (message.name === "update_g_search") {
		data.gptResponse = "Loading...";
		data["g-search"] = "Loading...";
		f = await fetch("http://localhost:3000/gpt", {
			method: "POST",
			headers: {
				Accept: "application.json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({ q: message.value }),
		});
		final = await f.json();
		console.log(final.val);
		data["gptResponse"] = final.val;
		data["g-search"] = message.value;
	} else if (message.name === "get_data") {
	}
	sendResponse(data);

	// }
});
