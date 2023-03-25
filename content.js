let searchBar = document.querySelector("div[jsname='gLFyf']");

if (searchBar) {
	let children = searchBar.children;
	console.log(children[children.length - 1].value);

	let flexCont = document.getElementById("rcnt");
	newDiv = document.createElement("div");
	newDiv.style.width = "var(--rhs-width)";
	newDiv.style.background = "#000";
	newDiv.style.borderRadius = "10px";
	newDiv.style.flex = "0 auto";

	headingH1 = document.createElement("h1");
	headingH1.innerText = "ChatGPT Response";
	headingH1.style.color = "#f5f5f5";
	headingH1.style.fontWeight = "bolder";
	headingH1.style.padding = "15px";

	responseP = document.createElement("p");
	responseP.innerText = "Loading...";
	responseP.style.color = "#f5f5f5";
	responseP.style.padding = "0 15px 15px 15px";

	newDiv.appendChild(headingH1);
	newDiv.appendChild(responseP);

	newDiv.style.marginBottom = "15px";
	console.log(flexCont.children.length);
	if (flexCont.children.length === 1) {
		let contDiv = document.createElement("div");
		contDiv.style.width = "var(--rhs-width)";
		contDiv.style.marginLeft = "var(--rhs-margin)";
		contDiv.appendChild(newDiv);
		flexCont.appendChild(contDiv);
	} else {
		console.log(flexCont.children[1]);
		flexCont.children[flexCont.children.length - 1].insertBefore(
			newDiv,
			flexCont.children[flexCont.children.length - 1].firstChild
		);
	}

	chrome.runtime.sendMessage(
		{ name: "update_g_search", value: children[children.length - 1].value },
		(response) => {
			console.log("received user data", response);
		}
	);
	let interval = setInterval(() => {
		chrome.runtime.sendMessage({ name: "get_data", value: "" }, (response) => {
			// 3. Got an asynchronous response with the data from the service worker
			console.log("received user data", response);
			try {
				if (response["g-search"] == children[children.length - 1].value) {
					responseP.innerText = response.gptResponse;
					clearInterval(interval);
				}
			} catch (error) {}
		});
	}, 500);
}
