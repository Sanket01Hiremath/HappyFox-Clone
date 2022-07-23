let data1=[
    {
        a1:"",
        img1:"https://cdn-icons.flaticon.com/png/128/1184/premium/1184787.png?token=exp=1658487374~hmac=6325a8ae2b4fca7d61aadeef1b52ba0d",
        name1:"Help Desk Tour\n\n",
        details1:"Provide Faster and Better Service for your Customer"
    },
    {
        a1:"",
        img1:"https://cdn-icons-png.flaticon.com/128/2329/2329087.png",
        name1:"Get a Demo\n\n",
        details1:"See HappyFox Help Desk in Action"
    }
];
let data2=[
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/8084/8084638.png",
        name2:"Ticketing System\n\n",
        details2:"Deliver exceptional customer service with HappyFox."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/8085/8085280.png",
        name2:"Knowledge Base\n\n",
        details2:"Promote self-service; build help and FAQ pages."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/1556/1556324.png",
        name2:"Connected Actions\n\n",
        details2:"Respont faster using temlated response and actions."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/3079/3079165.png",
        name2:"Automation\n\n",
        details2:"Reduce the time spent on repetitive tasks."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/4149/4149627.png",
        name2:"Task Management\n\n",
        details2:"Create and manage all the tasks involved in resolving a ticket."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/4149/4149668.png",
        name2:"satisfaction Survey\n\n",
        details2:"Get feedback and improve Customer Experience."
    },
    {
        a2:"",
        img2:"https://cdn-icons-png.flaticon.com/128/4149/4149688.png",
        name2:"Help Desk Reports\n\n",
        details2:"Monitor,Analyze and improve your Customer Support."
    },
];
let data3=[
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/hf-int-icon.svg",
        text:"HappyFox Chat"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/salesforce-int-icon.svg",
        text:"Salesforce"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/aircall-int-icon.svg",
        text:"Aircall"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/logo/ms-teams-logo.svg",
        text:"Microsoft Teams"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/slack-int-icon.svg",
        text:"Slack"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/fb-int-icon.svg",
        text:"Facebook"
    },
    {
        a3:"",
        img3:"https://assets.www.happyfox.com/v2/images/site-nav/shopify-int-icon.svg",
        text:"Shopify"
    }
]

let overview=document.getElementById("overview");
let features=document.getElementById("features");
let integrations=document.getElementById("integrations");

data1.forEach(function(ele){
    let oLink1=document.createElement("a");
    oLink1.setAttribute("href",ele.a1);

    let overviewImg=document.createElement("img");
    overviewImg.setAttribute("src",ele.img1);
    let overviewName=document.createElement("span");
    overviewName.innerText=ele.name1;
    let overviewDet=document.createElement("span");
    overviewDet.innerText=ele.details1;

    overviewName.append(overviewDet);
    oLink1.append(overviewImg,overviewName);
    overview.append(oLink1);
});

data2.forEach(function(ele){
    let oLink2=document.createElement("a");
    oLink2.setAttribute("href",ele.a2);
    
    let overviewImg=document.createElement("img");
    overviewImg.setAttribute("src",ele.img2);
    let overviewName=document.createElement("span");
    overviewName.innerText=ele.name2;
    let overviewDet=document.createElement("span");
    overviewDet.innerText=ele.details2;

    overviewName.append(overviewDet);
    oLink2.append(overviewImg,overviewName);
    features.append(oLink2);
});

data3.forEach(function(ele){
    let oLink3=document.createElement("a");
    oLink3.setAttribute("href",ele.a3);
    
    let overviewImg=document.createElement("img");
    overviewImg.setAttribute("src",ele.img3);
    let overviewName=document.createElement("span");
    overviewName.innerText=ele.text;

    oLink3.append(overviewImg,overviewName);
    integrations.append(oLink3);
})