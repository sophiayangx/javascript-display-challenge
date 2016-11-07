function logArgs(args) {
  var args = 1
  console.log(args)
}

var functionString = logArgs.tostring()

var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)
