import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

const from = document.querySelector("from");
const chatContainer = document.querySelector("#chat_container");

let loadInterval;

function loader(element) {
	element.textContent = "";

	loadInterval = setInterval(() => {
		element.textContent += ".";

		if (element.textContent === "....") {
			element.textContent = "";
		}
	}, 300);
}
