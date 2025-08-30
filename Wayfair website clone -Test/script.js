
let arr=["https://assets.wfcdn.com/im/19086177/resize-h566-w2000%5Ecompr-r85/3622/362240110/ge_appliances._save_up_to_40%25_on_select_appliances._362240110.jpg",
         "https://cdn.prod.website-files.com/6009ec8cda7f305645c9d91b/60108425520a6b80a93f1314_6002086f72b7273fad01e2a5_apple-slider.jpeg",
         "https://assets.wfcdn.com/im/46905910/resize-h760-w2350%5Ecompr-r85/3057/305775629/fl_loyalty_banner_large.jpg",
         "https://assets.wfcdn.com/im/94430425/resize-h229-w2000%5Ecompr-r85/3678/367841804/bmsm_labor_day_367841804.jpg"]

let i=0
let box=document.getElementById("box")

let nextbtn=document.getElementById("next")
    nextbtn.addEventListener("click",changeNext)
    // nextbtn.addEventListener("click",hault)

let prevbtn=document.getElementById("prev")
    prevbtn.addEventListener("click",changePrev)
    // prevbtn.addEventListener("click",hault)



appendImg(i)

function appendImg(q){

    let img=document.createElement("img")
    img.src=arr[q]
    box.innerHTML=""
    box.append(img)
}

function changeNext(){
    i++
    i=i>=arr.length-1?0:i
    appendImg(i)
}

function changePrev(){
    i--
    i=i<=-1?arr.length-1:i
    appendImg(i)
}


setInterval(function(){

    changeNext()
},3000)



