function load() {

	console.log("hi");

	const input = document.getElementById("input") as HTMLTextAreaElement;
	const trim = document.getElementById("trim") as HTMLInputElement;
	const randomizeButton = document.getElementById("randomize") as HTMLButtonElement;
	const name = document.getElementById("name") as HTMLInputElement;
	const saveButton = document.getElementById("save") as HTMLButtonElement;

	if(randomizeButton === null || input === null || trim === null || saveButton === null || name === null)
		throw new Error("something not found");

	name.value = "file.txt";

	randomizeButton.addEventListener("click", e => {

		const inputLinesNotSplit: string[] = input.value.split('\n');
		const inputLines: string[] = trim.checked ? inputLinesNotSplit.map(x => x.trim()) : inputLinesNotSplit;

		const length = inputLines.length;

		const outputLines: string[] = [];
		for (let i = 0; i < length; i++) {
			const randomLine = inputLines.splice(getRandomInt(0, inputLines.length - 1), 1)[0];
			console.log(i, length, inputLines.length, randomLine);
			outputLines.push(randomLine)
		}

		input.value = outputLines.join('\n');

	})

	saveButton.addEventListener("click", ev => {
		download(input.value, name.value, "text/plain")
	})

}

function getRandomInt(min: number, max: number) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}