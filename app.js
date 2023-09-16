 const input = document.getElementById('input');
 const list = document.getElementById('list-order');
 const listDiv = document.getElementById('list-div');
 const liElements = document.querySelectorAll('li');
 const button = document.querySelector('.round-button');


 function addTask(){
    if(input.value === ''){
        alert('You must write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        listDiv.classList.add('list');
    }
    input.value = '';
 }

 button.addEventListener('mousedown', (event) => {
    event.preventDefault();
    addTask();
  });
  

  list.addEventListener("click", function(event) {
    if (event.target.tagName === "LI" && !event.target.classList.contains("checked")) {
        event.target.classList.add("checked");
        setTimeout(function() {
            event.target.remove();
          }, 1000);
  }
});
