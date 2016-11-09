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

var functionExample = $("#function-example")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

functionExample.html(formattedExample)

//function takes in function



//jquery
var button = $("#button").click(function() {
  console.log("Jquery Example");
});

$(document).ready(function() {
  $('div').mouseenter(function() {
    $(this).animate({
      height: '+=10px'
    });
  });
  $('div').mouseleave(function() {
    $(this).animate({
      height: '-=10px'
    }); 
  });
  $('div').click(function() {
    $(this).toggle(1000);
  }); 
});

var functionString = button.toString()

var buttonExample = $("#button")

var formattedExample = $("<pre>")

formattedExample.text(functionString)

buttonExample.html(formattedExample)
