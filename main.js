const input = "14.5+2*3/5";

let oprStack = [];
let postFixStack = [];

const weight = {
  "/": 3,
  "*": 2,
  "+": 1,
  "-": 0,
};

let temp = "";
for (let i = 0; i < input.length; i++) {
  if (!isNaN(input[i]) || input[i] === ".") {
    temp += input[i];
  } else {
    postFixStack.push(temp);
    temp = "";
    if (oprStack.length > 0) {
      if (weight[oprStack[oprStack.length - 1]] >= weight[input[i]]) {
        postFixStack.push(oprStack.pop());
      }
    }
    oprStack.push(input[i]);
  }
}

if (temp !== "") postFixStack.push(temp);
while (oprStack.length !== 0) {
  postFixStack.push(oprStack.pop());
}

// final calculation

let solStack = [];
let i = 0;
while (i <= postFixStack.length - 1) {
  const current = postFixStack[i];

  console.log(solStack);
  if (!isNaN(current)) {
    solStack.push(current);
  } else {
    let b = +solStack.pop();
    let a = +solStack.pop();
    let sol = 0;

    switch (current) {
      case "+":
        sol = a + b;
        break;
      case "-":
        sol = a - b;
        break;
      case "*":
        sol = a * b;
        break;
      case "/":
        sol = a / b;
    }

    solStack.push(sol);
  }

  i++;
}

console.log(solStack);
