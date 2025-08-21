const projectTypeLi = Array.from(document.querySelectorAll('.project-type li'));
const projectTypeUl = document.querySelector('.project-type');
const projectType = document.querySelectorAll('.project .text ul');
const projectsPanels = Array.from(document.querySelectorAll('.projects'));

//in bayad baraye panel ha bashe
projectsPanels.forEach((panel,index)=>{
    if(index>0) panel.classList.add('panel-not-active');;
    // console.log(projectsPanels);
});

let activePannel;
let activePannelName;


function addingProjectsToPanels(){

}
function makeProjects(projectTypeDiv){
    // panel ro begiram va article(projectTypeDiv) ro behesh append konam
    
    // newArticle.appendChild(projectTypeDiv);
    // return newArticle;
}

function switchTab(e){
    const clickedLi = e.target.closest('li');
    if(!clickedLi) return;

    projectTypeLi.forEach((li)=> li.classList.remove('active'));
    clickedLi.classList.add('active');

   
    

    activePannelName = clickedLi.getAttribute('name');
    // console.log(`activePannelName: ${activePannelName}`);  
    
    
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
            case 'Tailwind':
                //add to wordpress panel
                console.log('Tailwind');
                if(activePannel.classList == `Tailwind-panel projects`){
                    activePannel.appendChild(projectType.parentElement.parentElement);
                }
                break;
            
            
        }
    });
    
}
projectTypeUl.addEventListener('click', switchTab);
