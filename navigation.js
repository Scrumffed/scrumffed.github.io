const backPath = "../";
const svsPath = "./services";
const proPath = "./projects";
const orgPath = "./organisation";
const cntPath = "./contact";

window.onload = () =>{
    prepButtons();
    console.log("Nav Ready!");
}

function prepButtons(){
    const back1Btn = document.getElementById("backBtn");
    const back2Btn = document.getElementById("2backBtn");
    
    const servicesBtn = document.getElementById("svsBtn");
    const projectsBtn = document.getElementById("proBtn");
    const oranisationBtn = document.getElementById("orgBtn");
    const contactsBtn =document.getElementById("cntBtn");

    if(back1Btn){
        back1Btn.addEventListener("click",function(){
            goBack(1);
        });
    }
    
    if(back2Btn){
        back2Btn.addEventListener("click",function(){
            goBack(2);
        });
    }

    if(servicesBtn){
        servicesBtn.addEventListener("click",function(){
            navTo(svsPath);
        });
    }

    if(projectsBtn){
        document.getElementById("proBtn").addEventListener("click",function(){
            navTo(proPath);
        });
    }

    if(oranisationBtn){
        document.getElementById("orgBtn").addEventListener("click",function(){
            navTo(orgPath);
        });
    }

    if(contactsBtn){
        document.getElementById("cntBtn").addEventListener("click",function(){
            navTo(cntPath);
        });
    }
}

function goBack(amount){
    let fullPath = backPath;
    for(i = 0; i < amount; i++){
        fullPath += backPath;
    }
    navTo(fullPath);
}

function navTo(path){
    window.location.replace(path);
}