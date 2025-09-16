const Baseurl="http://localhost:3000"
// const endpoint="items"
let logform=document.getElementById("logform")

logform.addEventListener("submit",getdetails)

function getdetails(){

    let name=logform.uname.value
    let image=logform.uimage.value
    let price=logform.uprice.value
    let rating=logform.urating.value
    let category=logform.products.value


    let obj={
        name,image,price,rating,category
    }

    postData(obj)

    

      logform.reset()
}
    
    async function postData(obj){

        let endpoint=""
        if(obj.category=="Furniture"){

            endpoint="Furniture"
        }
        else if(obj.category=="outdoor"){
             
            endpoint="outdoor"
        }
        else if(obj.category=="Bedding&Bath"){
            endpoint="Bedding&Bath"
        }
        else if(obj.category=="Rugs"){
            endpoint="Rugs"
        }else if(obj.category=="Decor&Pillows"){
            endpoint="Decor&Pillows"
        }


        try{
            await fetch(`${Baseurl}/${endpoint}`,{

            method:"POST",
            body:JSON.stringify(obj),
            headers:{
                "Content-Type":"application/Json"
            }
        })
    }
    catch(error){
        console.log("error occured")
    }

}
