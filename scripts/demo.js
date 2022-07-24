let form=document.getElementById("demoform");
form.addEventListener("submit",createData);


function createData(e){
    e.preventDefault();

    let valObj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        cname:document.getElementById("cname").value,
        csize:document.getElementById("csize").value,
        industry:document.getElementById("industry").value,
        agentCount:document.getElementById("agentcount").value,
        region:document.getElementById("region").value
    }
    let valArr=[];
    valArr.push(valObj);
    localStorage.setItem("registration",JSON.stringify(valArr));
}