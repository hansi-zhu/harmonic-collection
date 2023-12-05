// calling all of the Html classes 
const img2 = document.querySelector('.img2') 

// default movement of slider which is horizontal movement 
window.addEventListener('mousemove',(e)=>{ 
	img2.style.left = e.clientX + 'px'
	img2.scroll.top = 0 + 'px'
})
