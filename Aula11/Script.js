let API = "https://jsonplaceholder.typicode.com/posts";

const btnComponent = document.getElementById("btn");
const content = document.getElementById("content");

let ajax = null;

btnComponent.addEventListener("click", () => {
	if (window.XMLHttpRequest) {
		ajax = new XMLHttpRequest();
	} else {
		ajax = new ActiveXObject("Msxml2.XMLHTTP");
	}
	
	ajax.open("GET", API, true);
	
	ajax.send(null);
	
	ajax.onreadystatechange = () => {
		if (ajax.readyState === 2) {
			console.log("Headers received");
		}
	
		if (ajax.readyState === 3) {
			console.log("Loading response");
		}
	
		if (ajax.readyState === 4 && ajax.status === 200) {
			let data = JSON.parse(ajax.responseText);
			data.forEach((item, i) => {
				const div = document.createElement("div");

				div.id="card"+i;

				div.innerHTML = `
				<b>${item.title}</b>
				<p>${item.body}</p>
				<hr/ >
				`

				content.append(div);
			})
		}
	};
})