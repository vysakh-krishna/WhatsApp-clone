console.log("hello");
let arr=[
    {
        name: "Vysakh",
        msgTime: "01:17 pm",
        message:[
            {
                content: "Hello, how are you.",
                user: true //received message
            },
            {
                content: "Are you there...",
                user: true //received message
            },
            {
                content: "Hello !!!",
                user: true //received message
            },
            {
                content: "Hello, Am good.",
                user: false //received message
            },
            {
                content: "how are you...",
                user: false //received message
            }
        ]
    },
    {
        name: "Fazil",
        msgTime: "02:17 pm",
        message:[
            {
                content: "Hello",
                user: true //received message
            },
            {
                content: "Are you comming today",
                user: true //received message
            },
            {
                content: "Yes I am",
                user: false //received message
            },
            {
                content: "Ok that sounds good",
                user: true //received message
            },
            {
                content: "bye",
                user: false //received message
            }
        ]
    },
    {
        name: "Vismaya",
        msgTime: "04:17 pm",
        message:[
            {
                content: "Hey, Am Vismaya.",
                user: true //received message
            },
            {
                content: "Do you remember me.",
                user: true //received message
            },
            {
                content: "Yes I do",
                user: false //received message
            },
            {
                content: "wow that is great",
                user: true //received message
            },
            {
                content: "how are you...",
                user: false //received message
            }
        ]
    }
]
function getPerson(i){
    let person =`
        <div class="contactBar" id="contact${i}">
            <div>
                <img src="images/avatar-icon-images-4.jpg" alt="avatar" style="height: 36px; border-radius: 18px;">
            </div>
            <div class="contactName">
                ${this.name}
                <div class="contactmsg">${this.message[this.message.length-1].content}</div>
            </div>
            <div class="chatTime">
                ${this.msgTime}
            </div>
        </div>
    `
    return person
}
function receivedmsg(content) {
    let msg =`
    <div class="chatBox">
        <div class="received">
        ${content}
        </div>
    </div>
    `
    return msg;
}
function sendmsg(content){
    let msg=`
        <div class="chatBox sendChat">
            <div class="send">
            ${content}
           </div>
        </div>
    `
    return msg;
}
let content=``;
arr.forEach((ele,i)=>{
    let copy=getPerson.bind(ele);
    content+=copy(i);
})
document.getElementById('contacts').innerHTML=content;
arr.forEach((ele,i)=>{
    document.getElementById(`contact${i}`).addEventListener('click',()=>{
        document.getElementById('personName').innerText=ele.name;
        let messages=``;
        ele.message.forEach(m=>{
            if(m.user===true){
                messages+=receivedmsg(m.content);
            }
            else{
                messages+=sendmsg(m.content);
            }
        })
        document.getElementById('mainChat').innerHTML=messages;
    })
})