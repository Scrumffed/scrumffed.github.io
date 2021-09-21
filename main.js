window.onload = e => {
    prepButtons();
    console.log("Ready!");
}

function prepButtons(){
    document.getElementById("svsBtn").addEventListener("click",function(){
        navTo("./services");
    })

    document.getElementById("proBtn").addEventListener("click",function(){
        navTo("./projects");
    })

    document.getElementById("orgBtn").addEventListener("click",function(){
        navTo("./organisation");
    })

    document.getElementById("cntBtn").addEventListener("click",function(){
        navTo("./contact");
    })
}

function navTo(dest){
    window.location.replace(dest);
};
