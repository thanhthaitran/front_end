# HTML + Javascript Exercise

### Knowledge round-up
- **Javascript**
1. What are the differences between a variable that is: `null`, `undefined`?
  - In JavaScript `undefined` is a variable that has been declared but no value exists and is a type of itself ‘undefined’.
  - `null` is "nothing". It is supposed to be something that doesn't exist. `null` is a value of a variable and is a type of object.
2. What is `use strict`? what are the advantages and disadvantages to using it?
  * This statement indicates that the code should be executed in “strict mode”. It is only declared at the beginning of a function/script.Strict mode will help save developers from errors they didn’t even know that existed in their code.
  * Advantages:
  -  It will catch common coding errors, which will throw exceptions.
  - When vulnerable actions are performed, it throws errors.
  - It will show,let us know and disable the features that are poorly coded.
  * Disadvantages:
  - It will not allow us to use the “with” statement. This statement will causes security and performance problems.
  - It will not allow us to use the “arguments.caller” property, due to security concernsWe do not have an alternate to this property, but we can hard code an additional parameter.
3. What are the differences between `==` and `===`? Write an example for each case (if any)?
  `==` checks for equality in values but not the type and `===` checks for both type and value
  Example:
  ```javascript
      null === undefined // false
      null == undefined // true
      null === null // true
  ```
4. What is different between declaration: `var`, `const` and `let`?
  `const` is a signal that the identifier won’t be reassigned.
  `let`, is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in, which is not always the entire containing function.
  `var` is now the weakest signal available when you define a variable in JavaScript. The variable may or may not be reassigned, and the variable may or may not be used for an entire function, or just for the purpose of a block or loop.

### Playground
1. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

  ```javascript
  function sum(x,y) {
    if (x === y) {
      return 3 * (x + y);
    } 
    return (x + y);
  }
  console.log(sum(2,8));
  console.log(sum(8,8));
  ```
2. Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

  ```javascript
  function subtrac(a) {
    if (a > 19) {
      return 3 * (a - 19);
    }
    return (19 - a);
  }
  console.log(subtrac(22,19));
  console.log(subtrac(12,19));
  ```
3. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 3.

  ```javascript
  function contr(str) {
    let result = [];
    let n = 0;
    for (let i = 0; i < 10; i++) {
      let c = str.replace("*", i);
      if (c % 3 == 0) {
        result[n] = c;
        n++;
      }
    }
    return result;
  }
  ```
4. A masked number is a string that consists of digits and one asterisk (*) that should be replaced by exactly one digit. Given a masked number find all the possible options to replace the asterisk with a digit to produce an integer divisible by 6.

  ```javascript
  function contr(str) {
    let result = [];
    let n = 0;
    for (let i = 0; i < 10; i++) {
      let c = str.replace("*", i);
      if (c % 6 == 0) {
        result[n] = c;
        n++;
      }
    }
    return result;
  }
  ```