const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')
//a constante criada recebe o valor da classe html como uma query

botaoMenu.addEventListener('click',() => {
    menu.classList.toggle('menu-lateral__ativo')
})
//a constante criada recebe um listner que quando for clicado vai apontar para a cnstante,
// que por sua vez ela chama a lista de classes que a query está passando do html para
// e então quando isso acontece, ele passa a selecionar a classe html ativo que
//no CSS essa classe tem uma apresentação diferente, causando o efeito do menu lateral abrindo


