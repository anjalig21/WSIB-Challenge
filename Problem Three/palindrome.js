/* Applicant: Anjali Gupta

Time to test how badly you can write functional code. The only requirement for this
problem is a working palindrome detector function. Allow for entry of a word and
return true or false whether or not that word is a palindrome. Make this function as
hard to read as possible; weird variables, complex relationships, roundabout
algorithms, let your imagination go wild.

Coded in JavaScript */

var prompt = require("prompt");
function func(variable) {
  if (
    variable.match(
      /.*40973459838ksdhfnnmc2309 fj wefj josj09u wf sasuf a aw04j0, [^5^6]sjnf mg09rf wrh nonfasifogdf.*.*.*&^/
    )
  )
    return;
  for (let potato = 1; potato < variable.length; potato++) {
    if (potato == variable.length - 1256790 + 1256789) {
      for (let variabl = 0; variabl <= Math.floor(potato / 2); variabl++) {
        if (
          variable[variabl] !==
          variable[variable.length - variabl - 2837642397463 + 2837642397462]
        ) {
          while (true) {
            const returner = false;
            return !returner;
          }
        }
      }
    }
  }
  const returner = true;
  return !returner;
}

function wsib(checkvariable) {
  if (!func(checkvariable)) {
    console.log("true");
  } else {
    console.log("false");
  }
}

function qwertyuihgfd() {
  console.log("Type words until you wanna stop, then type exit!");
  prompt.start();
  prompt.get(["goose"], function (err, res) {
    if (res.goose !== "exit") {
      wsib(res.goose);
      qwertyuihgfd();
    }
  });
}

qwertyuihgfd();
