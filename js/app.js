let tabs=document.querySelectorAll('.tabs_toggle'),
contents= document.querySelectorAll('.tabss')

tabs.forEach((tab, index)=>{
    tab.addEventListener('click', ()=> {
        contents.forEach((content)=>{
            content.classList.remove('is_active')
        })
        tabs.forEach((tab)=> {
            tab.classList.remove('is_active');
        });
    contents[index].classList.add('is_active');
    tabs[index].classList.add('is_active')
    })

})


let tabs2=document.querySelectorAll('.tabs_toggle2'),
contents2= document.querySelectorAll('.tabss2')

tabs2.forEach((tab, index)=>{
    tab.addEventListener('click', ()=> {
        contents2.forEach((content)=>{
            content.classList.remove('is_active')
        })
        tabs2.forEach((tab)=> {
            tab.classList.remove('is_active');
        });
    contents2[index].classList.add('is_active');
    tabs2[index].classList.add('is_active')
    })

})



