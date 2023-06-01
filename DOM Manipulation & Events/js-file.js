const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey I'm red!";
redParagraph.style.color = "red";

container.appendChild(redParagraph);

const blueHeader = document.createElement("h3");
blueHeader.textContent = "I'm a blue h3!";
blueHeader.style.color = "blue";

container.appendChild(blueHeader);

const div = document.createElement("div");
div.setAttribute(
  "style",
  "border-style: solid; background-color: pink; border-color: black;"
);

const divHeader = document.createElement("h1");
divHeader.textContent = "I'm in a div!";

div.appendChild(divHeader);

const divParagraph = document.createElement("p");
divParagraph.textContent = "ME TOO!";

div.appendChild(divParagraph);

container.appendChild(div);
