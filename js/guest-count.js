const minusBtns = document.querySelectorAll(".minus-btn");
const plusBtns = document.querySelectorAll(".plus-btn");

minusBtns.forEach((btnPlus) => {
  btnPlus.addEventListener("click",function(e){
      let result = e.target.nextElementSibling;
      let minusBtn = result.previousElementSibling;
    if(result.value > 1){
        result.value--;
    } else{
        console.log(result.value);
        minusBtn.classList.add('inactive');
        result.value = 0;
    }
  })
})
plusBtns.forEach((btnPlus) => {
  btnPlus.addEventListener("click",function(e){
    let result = e.target.previousElementSibling;
    result.value++;
    let minusBtn = result.previousElementSibling;
    minusBtn.classList.remove('inactive');
  })
})