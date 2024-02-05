const inputBox = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
const container = document.getElementById('container');

function addTask(){
    if(inputBox.value === ''){
        alert('You Must Write a Task!');
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        container.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML= '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
container.addEventListener("click",function(e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
inputBox.addEventListener('keydown', function(e){
    if(e.key == 'Enter'){
        addTask();
    }
});

function saveData(){
    localStorage.setItem('data',container.innerHTML);
}
function sList(){
    container.innerHTML = localStorage.getItem('data');
}    
sList();