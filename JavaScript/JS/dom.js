// console.log("first");
// let para=document.getElementsByTagName('p')
// console.log(para[1].innerHTML);
// let heading1=document.getElementsByTagName('h1')
// console.log(heading1.parentNode)
// console.log(heading1.innerHTML)
// let para = document.getElementsByClassName('para')
// let para=document.getElementById('para')
// let para=document.querySelector('#para')
// console.log(para);
// let div=document.getElementById('div')
// console.log(div.className);
// let heading=document.getElementById('heading')
// console.log(heading.hasChildNodes())
// let head = document.getElementById('head')
// console.log(head)
function changeText() {
    // let head = document.getElementById('head');
    // console.log(head);
    // head.classList.remove('def');


    // head.classList.add('abc')
    // head.className="abc def"



    // console.log(head.className)
    // head.style.backgroundColor = "red";
    // head.style.color = "green";

    // head.style.display = "none"
    // let text=prompt("Enter text")
    // head.innerText=text
    // console.log(head.innerText)
}


// function changeHtml() {
//     // console.log("first")
//     // let myDiv = document.getElementById('myDiv')
//     // let myImg=document.getElementById('myImg')
//     console.log(myImg.src)
//     myImg.src='babar.jpg'

// }

// function onBulb(){
//     let myBulb=document.getElementById('myBulb')
//     console.log(myBulb)
//     myBulb.src='on.png'
// }


// function offBulb(){
//     let myBulb=document.getElementById('myBulb')
//     console.log(myBulb)
//     myBulb.src='of.jpg'
// }



// let btn=document.getElementById('btn')
// btn.setAttribute('class','def')
// console.log(btn)

// btn.setAttribute('onclick','myFun()')


// function myFun(){
//     console.log("Function clicked")

// }

// let para=document.getElementById('para')
// console.log(para)
//  let input=prompt("Write")

// let paraText=document.createTextNode(input)
// para.appendChild(paraText)

// console.log(para)

let list=document.getElementById('list')
console.log(list)


let myItem=document.createElement('li')
let myItemText=document.createTextNode("I am List Item")
myItem.appendChild(myItemText)
console.log(myItem)
myItem.id="a"
myItem.className="abc"
list.appendChild(myItem)

