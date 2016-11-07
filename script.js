// demo function
function logArgs(args) {
  var a = 1
  console.log(args)
}

var functionString = args.tostring();

var consoleLogExample = $("#console-log-example");

var formattedExample = $("<pre>");

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)
