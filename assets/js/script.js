var buttons = $('button');
var rect = $('.rectangle');
$(buttons[0]).click(function(){
  var plus = rect.height()+10;
  (plus > 100) ? plus = 10 : plus;
  rect.height(plus)
})
$(buttons[1]).click(function(){
  rect.css('background-color', 'green')
})
$(buttons[2]).click(function(){
  rect.css('background-color', '')
})
$(buttons[3]).click(function(){
  rect.hide()
})
$(buttons[4]).click(function(){
  rect.show()
})
