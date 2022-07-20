let sliderData=[
    {
        text:"“With HappyFox, I finally feel that I can trust the data I’m able to export from the system. We implemented the solution for email tracking but are now leveraging it to track incoming invoices aswell. If a business is facing similar problems to ours in terms of tracking incoming emails or a high number of incoming emails from the same customers or suppliers, in my opinion HappyFox really is the best solution to resolve this. With HappyFox, you really are able to track everything that is coming in, and analyze the data in real-time.”",
        name:"Pankaj Kumar",
        role:"Manager, Accounts Payable Whirlpool Global Finance Center",
        logo:"https://assets.www.happyfox.com/v2/logo/whirlpool.svg"
    },
    {
        text:"“With HappyFox we have a specialized partner, whose vast customer portfolio across multiple industries,sees and knows the next “big thing” in customer support, and integrates this into a compact and cost-effective solution, saving considerable effort, time and cost for us. In short, it allows us to focus on happy customers – the rest we leave to HappyFox.”",
        name:"Martin Hartvigsen",
        role:"Director, Global Technical Support",
        logo:"https://assets.www.happyfox.com/v2/logo/jabra.svg"
    },
    {
        text:"“So far we have Facilities and Security using this system. There is nothing I do not use in HappyFox and our team likes the app, the reports, the smart rules, and the tags. We enter tickets and complete them daily and HappyFox has improved our average number of tickets completed per month. My customers (Health Center Staff) have all responded very positively to the change; they love that they can see all the tickets for their site and comment on whether they’re still needed.”",
        name:"Karin Stopforth",
        role:"Facilities Administrator",
        logo:"https://assets.www.happyfox.com/v2/logo/planned-parenthood.png"
    }
];

let rightbtn=document.getElementById("rightbtn");
let leftbtn=document.getElementById("leftbtn");
let clienttext=document.getElementById("text");
let clientname=document.getElementById("name");
let clientlogo=document.getElementById("logo");
let clientrole=document.getElementById("role");


let divindex=0;
creatediv(divindex);

function creatediv(divindex){
    clienttext.innerText=sliderData[divindex].text;
    clientname.innerText=sliderData[divindex].name;
    clientrole.innerText=sliderData[divindex].role;
    clientlogo.setAttribute.src=sliderData[divindex].logo;
}

rightbtn.addEventListener("click",function(){
    divindex++;
    if(divindex===sliderData.length){
        divindex=0;
    }
    creatediv(divindex);
});
leftbtn.addEventListener("click",function(){
    divindex--;
    if(divindex<0){
        divindex=sliderData.length-1;
    }
    creatediv(divindex);
});