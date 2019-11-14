"use strict";
function download(data, filename, type) {
    const file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        const a = document.createElement("a"), url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        }, 0);
    }
}
function load() {
    console.log("hi");
    const input = document.getElementById("input");
    const trim = document.getElementById("trim");
    const randomizeButton = document.getElementById("randomize");
    const name = document.getElementById("name");
    const saveButton = document.getElementById("save");
    if (randomizeButton === null || input === null || trim === null || saveButton === null || name === null)
        throw new Error("something not found");
    name.value = "file.txt";
    randomizeButton.addEventListener("click", e => {
        const inputLinesNotSplit = input.value.split('\n');
        const inputLines = trim.checked ? inputLinesNotSplit.map(x => x.trim()) : inputLinesNotSplit;
        const length = inputLines.length;
        const outputLines = [];
        for (let i = 0; i < length; i++) {
            const randomLine = inputLines.splice(getRandomInt(0, inputLines.length - 1), 1)[0];
            console.log(i, length, inputLines.length, randomLine);
            outputLines.push(randomLine);
        }
        input.value = outputLines.join('\n');
    });
    saveButton.addEventListener("click", ev => {
        download(input.value, name.value, "text/plain");
    });
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
