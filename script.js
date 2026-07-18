const projectTypeLi = Array.from(document.querySelectorAll('.project-type li'));
const projectTypeUl = document.querySelector('.project-type');
const projectType = document.querySelectorAll('.project .text ul');
const projectsPanels = Array.from(document.querySelectorAll('.projects'));

const html = document.documentElement;
const modeSwicher = document.querySelector(".but");
const circle = document.querySelector(".circle");

let theme0;
const setTheme = (theme) => {
    document.documentElement.removeAttribute('data-theme');
    
    if(theme === 'dark'){
        html.setAttribute('data-theme','dark');
    }
    localStorage.setItem('theme', theme);
    theme0 = theme;
}
const loadTheme = () =>{
    const savedTheme = localStorage.getItem('theme');
    console.log(savedTheme);
    if(savedTheme=='dark') circle.classList.add('toggled');
    if(savedTheme) setTheme(savedTheme);
}
modeSwicher.addEventListener('click', ()=>{
    setTheme(theme0==='dark'?'light':'dark');
    circle.classList.toggle('toggled');
    console.log("ok")
})


//in bayad baraye panel ha bashe
projectsPanels.forEach((panel,index)=>{
    if(index>0) panel.classList.add('panel-not-active');
});
let activePannel;
let activePannelName;

function switchTab(e){
    const clickedLi = e.target.closest('li');
    if(!clickedLi) return;

    projectTypeLi.forEach((li)=> li.classList.remove('active'));
    clickedLi.classList.add('active');

    activePannelName = clickedLi.getAttribute('name');

    projectsPanels.forEach((panel)=>{
        if(panel.classList == `${activePannelName}-panel projects panel-not-active`){
            activePannel = panel;
        }
    })

    projectsPanels.forEach((panel)=>{ 
        panel.classList.add('panel-not-active');
    });
    activePannel.classList.remove('panel-not-active');

    //in baraye halat search proje ha va namayesheshoon toye safhe ye marbot beheshoon hast
    projectType.forEach((projectType)=>{
        // console.log(projectType.parentElement.parentElement);
        if(activePannel.classList == `All-panel projects`){
            activePannel.appendChild(projectType.parentElement.parentElement);
        }
        //ino dorost konam ke faghat akharin gozine ro check nakone va hama ro chek kone
        switch (projectType.lastElementChild.innerHTML){
            case 'CSS':
                //add to css panel
                console.log('CSS');
                if(activePannel.classList == `CSS-panel projects`){
                    activePannel.appendChild(projectType.parentElement.parentElement);
                }
                // addingProjectsToPanels();
                break;
            case 'JAVASCRIPT':
                //add to js panel
                console.log('JAVASCRIPT');
                if(activePannel.classList == `JS-panel projects`){
                    activePannel.appendChild(projectType.parentElement.parentElement);
                }
                break;
            case 'Wordpress':
                //add to wordpress panel
                console.log('Wordpress');
                if(activePannel.classList == `Wordpress-panel projects`){
                    activePannel.appendChild(projectType.parentElement.parentElement);
                }
                break;
            case 'React':
                //add to React panel
                console.log('React');
                if(activePannel.classList == `React-panel projects`){
                    activePannel.appendChild(projectType.parentElement.parentElement);
                }
                break;
        
        }
    });
    
}
projectTypeUl.addEventListener('click', switchTab);
loadTheme();