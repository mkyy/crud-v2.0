import home from "../pages/home.js";
import motoboy from "../pages/motoboy.js";

const main = document.querySelector('.wrapper');
const motoboys_array = [];


const init = () => {

    window.addEventListener('hashchange', ()=>{
        main.innerHTML =""
        if(window.location.hash != ''){
            main.appendChild(showBackbutton());
        }
        switch(window.location.hash){
            case '':
            main.appendChild(home());
            break;
            case '#motoboy':
                motoboyPaginate();
                break;
            case '#motoboy/create':
                motoboyPaginate();
                main.appendChild(motoboy.showCreatePage())
                eventButton();
            break;
            case '#motoboy/read':
                motoboyPaginate();
                main.appendChild(motoboy.showReadPage(motoboys_array))
            break;
            case '#motoboy/update':
                motoboyPaginate();
                main.appendChild(motoboy.showUpdatePage(motoboys_array))
            break;
            case '#motoboy/delete':
                motoboyPaginate();
                main.appendChild(motoboy.showDeletePage(motoboys_array))
            break;
            case '#customer':
            break;
            case '#asd':
            break;
        }
    })
}

const motoboyPaginate = () => {
    main.appendChild(motoboy.instanceMotoboyPage())
    //create
    document.querySelector('#create').addEventListener('click', () =>{
        window.location.hash = 'motoboy/create';
    });
    //read
    document.querySelector('#read').addEventListener('click', () =>{
        window.location.hash = 'motoboy/read';
    });
    //update
    document.querySelector('#update').addEventListener('click', () =>{
        window.location.hash = 'motoboy/update';
    });
    //delete
    document.querySelector('#delete').addEventListener('click', () =>{
        window.location.hash = 'motoboy/delete';
    });
}

const eventButton = () => {
    document.querySelector('.form-wrapper .submit').addEventListener('click', () => {
        let name = main.querySelector('.nameInput').value
        let age = main.querySelector('.ageInput').value

        motoboys_array.push(motoboy.getInstance(name, age))
        main.querySelector('.nameInput').value = '';
        main.querySelector('.ageInput').value = '';
        alert('motoboy criado com sucesso!')
    })
}

const showBackbutton = () =>{
    const element = document.createElement('button')
    element.className = 'backbutton';
    element.innerText = '< VOLTAR';

    element.addEventListener('click', () =>{
        window.location.hash = '';
        
    })

    return element;
}

window.addEventListener('load', () =>{
    main.appendChild(home())
    init()
})