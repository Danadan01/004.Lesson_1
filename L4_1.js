const stringNum1 = prompt("What's your first number?");
const stringNum2 = prompt("What's your second number?");
const num1 = Number.parseInt(stringNum1);
const num2 = Number.parseInt(stringNum2);

const sum = num1 + num2;
const diff = num1 - num2;
const multiply = num1 * num2;
const division = num1 / num2;

alert(`Користувач ввів ${num1} і ${num2}:
${num1}+${num2}=${sum}
${num1}-${num2}=${diff}
${num1}*${num2}=${multiply}
${num1}/${num2}=${division}`)





