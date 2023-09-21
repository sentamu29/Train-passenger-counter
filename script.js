let increase = document.getElementById("demo")
let count =0;
let saveEl = document.getElementById("save-el")


function myIncrease() {
  count +=1;
  increase.innerText = count;
}
function saveMyData() {
  let text = "- " + count + " ";
  saveEl.textContent += text
   console.log(count);
  count = 0;
  increase.innerText = count;
}