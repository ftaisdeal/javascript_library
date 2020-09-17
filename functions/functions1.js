// Example of use of default parameters

function defaultParameters(text, code = '[no code included]') {
  console.log('The text: ' + text + '\nThe code: ' + code)
}

defaultParameters('some text');