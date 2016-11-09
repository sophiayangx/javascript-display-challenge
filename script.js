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

var call = "\nperimeter(3,5)"

var functionString = perimeter.toString() + call

var consoleLogExample = $("#function-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

consoleLogExample.html(formattedExample)

//function takes in function



//jquery
$("#button").click(function() {
  console.log("hihi");
});

