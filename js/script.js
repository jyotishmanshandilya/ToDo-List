function putDate(){
    const date = new Date();
    document.querySelector('#date').innerHTML = date.toDateString();
}

function newTask(){
    const element = document.querySelector('#list');
    var task = document.querySelector('#task-input').value;
    if (task!=''){
        const tag = document.createElement('li');
        tag.appendChild(document.createTextNode(task));
        element.appendChild(tag);

        document.querySelector('#task-input').value = "" ;
    } 
}