let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]


taskbar.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
        edge.style.top = "-924px"
        recyle.style.top = "-1086px"

    }
    else{
        startmenu.style.bottom = "50px"
        edge.style.top = "-924px"
        recyle.style.top = "-1086px"
    }
})
//let chrome = document.getElementsByClassName("img")[0]
let edge = document.getElementsByClassName("edgeapp")[0]
let edgeico = document.getElementsByClassName("imgimg")[0]
edgeico.addEventListener("click",()=>{
    if(edge.style.top == "25px"){
        edge.style.top = "-924px"
        startmenu.style.bottom = "-655px"
    }
    else{
        edge.style.top = "25px"
        startmenu.style.bottom = "-655px"
    }
})
let recyle = document.getElementsByClassName("recyleapp")[0]
let recyleico = document.getElementsByClassName("imgimgimg")[0]
recyleico.addEventListener("click" , ()=>{
    if(recyle.style.top == "25px"){
        recyle.style.top = "-1086px"
        startmenu.style.bottom = "-655px"
    }
    else{
        recyle.style.top = "25px"
        startmenu.style.bottom = "-655px"
    }
})