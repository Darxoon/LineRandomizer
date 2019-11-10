"use strict";
function load() {
    console.log("hi");
    const input = document.getElementById("input");
    const trim = document.getElementById("trim");
    const button = document.getElementById("randomize");
    if (button === null || input === null || trim === null)
        throw new Error("input or button not found");
    button.addEventListener("click", e => {
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
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
