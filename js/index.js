const display = document.querySelector('.calculator .display'); // посилання на дисплей
 document.querySelectorAll(' .numbers button')
  .forEach(numbers => numbers.addEventListener('click' , numbersPressed)); // кнопка натиснута

   function numbersPressed(ev){
display.value += ev.target.innerText; // кнопка на яку ми нажали показує на дисплей(target )
   }

document.querySelectorAll('.operation button')
.forEach(operation => operation.addEventListener('click', operationPressed));

function operationPressed(ev){
    display.value += ev.target.innerText;
}

 document.querySelectorAll('.equal')
 .forEach(equal => equal.addEventListener('click', equalPressed));
  function equalPressed(){
      display.value = eval(display.value);
  }
document.querySelectorAll('.reset')
.forEach(reset => reset.addEventListener('click', resetPressed));
  function resetPressed(){
      display.value = ' ';
 }
