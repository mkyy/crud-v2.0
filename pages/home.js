export default () =>{
    const __div = document.createElement('div');
    __div.className = 'navigation';

    const data = `<nav>
    <a class="option" href="#motoboy">C.R.U.D Motoboy</a>
    <a class="option" href="#customer">C.R.U.D Cliente</a>
    <a class="option" href="#">Associar motoboy à empresa</a>
</nav>`;

    __div.innerHTML = data;

    return __div;
}