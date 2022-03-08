export default class motoboy {
    name = '';
    age = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

static getInstance(_name, _age){
    return new motoboy(_name, _age);
}

static instanceMotoboyPage(){

    let div = document.createElement('div');
    div.className = 'nav-wrapper';

    const form = `<nav class="navbar">
                    <button class="navbar-option" id="create">Create</button>
                    <button class="navbar-option" id="read">Read</button>
                    <button class="navbar-option" id="update">Update</button>
                    <button class="navbar-option" id="delete">Delete</button>
                  </nav>`;

    div.innerHTML = form;

    return div;
}

static showCreatePage(){
    let div = document.createElement('div');
    div.className = 'form-wrapper';
        
    const createpage = `<form>
                            <label>nome:</label>
                            <input type="text" class="nameInput">
                            <label>idade:</label>
                            <input type="text" class="ageInput">
                            <button class="submit">Enviar</button>
                            </form>`;

    div.innerHTML = createpage;

    return div;

    }

static showReadPage(_array){
    let div = document.createElement('div');
        
    let readpage = `<table class="readPageTable">
                    <tr><td>NOME: </td><td>IDADE: </td><tr>`;
    _array.forEach(element  => {
        readpage += `
        <tr>
            <td>${element.name}</td>
            <td>${element.age}</td>
        </tr>`;
    });
    readpage += `</table>`;

    div.innerHTML = readpage;

    return div;

}

static showUpdatePage(_array){
    let div = document.createElement('div');
    div.className = 'form-wrapper';
        
    let updatepage = `<select id="selectToUpdate">
                      <option value="" disabled selected>Select your option</option>`;

    _array.forEach(element =>{
        updatepage += `<option value="${element.name}">${element.name}</option>`
    })

    updatepage += `</select>
                   <div><label>Digite o novo nome: </label>
                   <input type="text" class="toChange"></div>`;
    div.innerHTML = updatepage;

    const but = document.createElement('button');
    but.className = ('updateButton');
    but.innerText = "UPDATE";

    but.addEventListener('click', () => {

        _array.forEach((element, index) => {
            if(element.name === document.querySelector('#selectToUpdate').value){
                element.name = document.querySelector('.toChange').value;
                alert("Nome do motoboy alterado com sucesso!")
            }
        })
    });

    div.appendChild(but);
    return div;

}

static showDeletePage(_array){
    let div = document.createElement('div');
    div.className = 'form-wrapper';
        
    let updatepage = `<select id="selectToDelete">
                      <option value="" disabled selected>Select your option</option>`;

    _array.forEach(element =>{
        updatepage += `<option value="${element.name}">${element.name}</option>`
    })

    updatepage += `</select>`;
    div.innerHTML = updatepage;

    const but = document.createElement('button');
    but.className = 'deleteButton';
    but.innerText = "DELETE";

    but.addEventListener('click', () => {

        _array.forEach((element, index) => {
            if(element.name === document.querySelector('#selectToDelete').value){
                _array.splice(index, 1);
                alert("removido")
            }
        })
    });

    div.appendChild(but);
    return div;
}

}

