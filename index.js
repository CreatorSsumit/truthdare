


let box = document.querySelector('body');
let width = box.clientWidth;
let height = box.clientHeight;


if(width > 500){
    Split(['#left', '#right'], {
        sizes: [80, 20],
        gutterAlign:'end',
        minSize: 200,
       gutterSize:10,
        cursor: 'col-resize',
        direction: 'horizontal',
    })
}else{
    Split(['#left', '#right'], {
        gutterAlign:'end',
      minSize: 200,
       gutterSize:5,
        cursor: 'col-resize',
        direction: 'vertical',
    })
}

var list = [];

let a = document.querySelector("#insidebox")


document.querySelector("#submit").addEventListener("submit",(event)=>{
    event.preventDefault();
    let option = document.querySelector("#right");
    option.scrollTop = 0;
    let count = 1;

setInterval(() => {
     
 count = count+1;

  if(count <= 3 ){
    document.querySelector("#reload").classList.add("spinner-border");
   
 }else{
    document.querySelector("#reload").classList.remove("spinner-border");
      clearInterval()
 }
  }, 1000);

 

        let random = Math.floor(Math.random() * list.length)
    document.querySelector("#name").textContent = list[random];
    var classname = $("*").filter(function(e){
     return $(this).text() == list[random]
    
    })[1]
    // document.querySelector("#reload").classList.remove(".spinner-border");
    
     document.getElementsByClassName('box')[0].style.paddingRight = '20px';
     document.getElementsByClassName('box')[0].style.paddingLeft = '20px';
    
    
    document.getElementsByClassName('box')[0].innerHTML = `<img src="https://images.unsplash.com/photo-1601234699404-4867fa71f87f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=565&q=80"  /><div id='textbox' style="width: 100%;height: 70px;text-align: right;"><h4 id='texth4'>${list[random]}</h4></b><p style="font-size: 10px;">DSG department</p></div></div>
    ` 
    
    document.getElementsByClassName('box')[0].classList.add('animate');
    classname.parentNode.innerHTML=`<div id='textbox' style="width: 100%;height: 70px;text-align: right;"><h4 id='texth4'>${list[0]}</h4></b><p style="font-size: 10px;">DSG department</p></div></div>`
    
  
      let temp = list[0];
      list[0] = list[random];
      list[random] = temp;

})

if(list.length === 0){
    document.querySelector("#btn").disabled = true; 
    document.querySelector("#noofjoin").textContent =  `${list.length} person joined`; 
}
  
let inputval = document.querySelector('#pushname');

document.querySelector("#pushform").addEventListener("submit",(e)=>{

    e.preventDefault();

    if(!inputval.value){
        document.querySelector("#error").textContent = "No Input Feed"
        


    } else if(list.indexOf(inputval.value.toLowerCase()) > -1){
       document.querySelector("#error").textContent = "Already User Exists";
     
    }else{
 list.push(inputval.value.toLowerCase());

 a.innerHTML += `<div class="box" ><img src="https://images.unsplash.com/photo-1601234699404-4867fa71f87f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=565&q=80"  /><div id='textbox' style="width: 100%;height: 70px;text-align: right;"><h4 id='texth4'>${inputval.value}</h4></b><p style="font-size: 10px;">DSG department</p></div></div>`;
      document.querySelector("#noofjoin").textContent =  `${list.length} person joined`;
      
      let option = document.querySelector("#right");
     option.scrollTop = option.scrollHeight;
      
      inputval.value = '';

        document.querySelector("#error").textContent = ""
    }
    if(list.length > 1){
        document.querySelector("#btn").disabled = false; 

    }

  
})





  
