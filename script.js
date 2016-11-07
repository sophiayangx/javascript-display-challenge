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
//function(arg1, arg2)
var perimeter = function(length, width) 
{
  console.log(length + length + width + width);
};

perimeter(3,5);