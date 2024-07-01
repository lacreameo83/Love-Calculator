const yourName = document.getElementById("yourName");
const hisName = document.getElementById("hisName");
const submit =document.getElementById("submit");
const output =document.getElementById("outPut");
const ClearAll =document.getElementById("ClearAll");


function display(yourName1 , hisName1){

const random =Math.floor(Math.random()* 100) + 1;
 if ( document.getElementById("yourName").value == "" && document.getElementById("hisName").value == "" ){
   return (`Sorry input valid Data`)
}
else if (random >= 70) {
   return (`${yourName1} and ${hisName1}Your Love  ${random}% very is high`)
}else if (random > 40 || random === 70 ){
  return  (`${yourName1} and ${hisName1} Your  Love ${random}%  Normal`)
}

else {
return (`${yourName1} and ${hisName1} Your Love ${random}% Not Strong`)

}


 }

 

submit.addEventListener("click",(e)=> {
    e.preventDefault();
 let your =  document.getElementById("yourName").value
 let  his =  document.getElementById("hisName").value

    output.textContent = display(your , his);

})

ClearAll.addEventListener("click",(e)=>{
e.preventDefault();
output.textContent = "";
yourName.value = "";
hisName.value = "";
})
