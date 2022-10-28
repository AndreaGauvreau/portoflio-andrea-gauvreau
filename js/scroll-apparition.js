
const slidingDede = document.querySelector('.bestprojects')


window.addEventListener('scroll', ()=>{
    const {scrollTop, clientHeight}= document.documentElement

  const topslid = slidingDede.getBoundingClientRect().top

  if(scrollTop >(scrollTop + topslid).toFixed() - clientHeight * 0.20){
    slidingDede.classList.add('active')
  }
})


