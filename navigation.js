const bPath = "../";

window.onload = e =>{
    prepButtons();
    console.log("Nav Ready!");
};

function prepButtons(){
    document.getElementById("backBtn").addEventListener("click",function(){
        goBack(1);
    });

    document.getElementById("2backBtn").addEventListener("click",function(){
        goBack(2);
    });
};


function goBack(amount){
    let fullP = bPath;
    for(i = 0; i < amount; i++){
        fullP += bPath;
    }
    window.location.replace(fullP);
};