// demo function
function logArgs(args) {
  var a = 1
  console.log(args)
}

var functionString = logArg.tostring();

var consoleLogExample = $("#ex1");

var formattedExample = $("<pre>");

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)
