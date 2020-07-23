/**
 * 
 */

const toogleBtn =document.querySelector('.navbar__toogleBtn');
//HTML class="navbar" 애들중에 toogleBtn을 찾아서 toogleBtn에 연결시켜준다.
const menu=document.querySelector('.navbar__menu');
const icons=document.querySelector('.navbar__icons');

toogleBtn.addEventListener('click', () =>{
	menu.classList.toggle('active');
	icons.classList.toggle('active');
//	마우스를 클릭했을때 메뉴와 아이콘의 클래스가 active가 없다면 active를 추가해주고 
//	있다면 다시 빼주는 일을 해준다.
});