function validFormFieldInput(e){
    
    e.preventDefault()
    
    const newName = document.querySelector('#name');
    const name = newName.value;
    console.log(name);
}
const button = document.getElementById('button');
button.onclick = validFormFieldInput