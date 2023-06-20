const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];

function pageTransitions(){
    //button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.activebtn');
            currentBtn[0].className = currentBtn[0].className.replace('activebtn','');
            this.className += ' activebtn'
        })
    }
   // document.querySelector(".active").classList.remove("active");
    //document.getElementById(button.dataset.id).classList.add("active");
    //sections for the active class
    allSections.addEventListener('click', (e) =>{
        //console.log(e.target);
        const id = e.target.dataset.id;
        if(id){
            //remove other selected buttons
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            //set displaty and transition
            sections.forEach((section)=>{
                section.classList.remove('active');
                console.log("active removed")
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    //toggling themes
    const themebtn = document.querySelector('.theme-btn');
    themebtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}
pageTransitions();