function logArgs(args) {
  var args = 1
  console.log(args)
}

var functionString = logArgs.toString()

var consoleLogExample = $("#console-log-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)

//function with argument
function perimeter(length, width) {
  console.log(length + length + width + width);
};

"\nperimeter(3,5)"

var functionString = perimeter.toString()

var consoleLogExample = $("#function-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)