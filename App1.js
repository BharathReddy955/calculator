var c=document.getElementById('text')
c.addEventListener("click",function(){add(1)})
c.addEventListener("click",function(){calc()})
c.addEventListener("click",function(){clear()})

function add(val){
let s=document.getElementById("text")
s.value=s.value+val;

}
function sub(){
    let s=document.getElementById('text')
    s.value=s.value.slice(0,-1)

}


function calc(){
    const v=document.getElementById('text').value
    document.getElementById('text').value=  eval(v);

}

function clearResult(){
document.getElementById('text').value='';
}
  