// ---instead of set interval we can change data object to localStorage and then put a onChange listener to localStorage
// setTimeout(() => {
//look into chrome.storage api as an alt to localStorage
// let interval = setInterval(() => {
// 	chrome.runtime.sendMessage({ name: "get_data" }, (response) => {
// 		console.log("received user data", response);
// 		document.querySelector("#test").innerText = response["gptResponse"];
// 	});
// }, 100);

// chrome;
// }, 1000);
