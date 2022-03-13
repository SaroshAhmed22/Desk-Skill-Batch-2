// ! JS
// function myfun(){
//     return 'Hello Sarosh'
// }
// ! Function Expression
// var result=myfun();
// console.log(result)


//  ! Default Parameter

// function mult(a,b=6){
//   return a*b;
// }

// console.log(mult(3));

// ! let var and const

// {
// const a=9;
// console.log(a)
// }


// console.log(a)

// var a=10;

// function myfun(){
//     let a=3
//     console.log(a*4)
// }
// console.log(a)
// myfun()

// let myName='Sarosh '
// console.log(myName)
// if(10>9){
//     myName='Bilal '
//     console.log(myName)
// }


//  ! Tempelate literal
// const myName='Sarosh'
// const age =18;
// const uni='SSUET'

// console.log(`My name is ${myName} and my age is ${age} my uni is ${uni}   `)


// console.log('My age is ' + age)

// const myName=prompt("Please Enter Your good name")
// function greet(myName){
//     return `Hello ${myName}`
// }
// console.log(greet(myName))


// ! Array in JS

// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// console.log(friend1)
// console.log(friend2)
// console.log(friend3)

// const friends = ["Naresh", "Suresh", "kamlesh", "hamza"];
// friends[2]=18;
// console.log(friends[2]);



// for(let elements in friends){
//   console.log(elements);
// }



// for(let elements of number){
//   elements=elements**2
//   console.log(elements)
//   console.log( typeof (elements))
// }
// console.log(number)
// ! arrow function

// const myFun = ( ) => {
//      return 'Hellow'
// }
// console.log(myFun())


// let number = [1, 2, 3, 4]

// number.forEach((elem, index) => {
//     console.log(index, elem ** 2)
// })

// console.log(number)


// let fruits=["appple" , "mango" , "banana" , "Orange" ,"Grapes"];

// console.log(fruits.length)

// ! push and pop

// fruits.pop()
// fruits.pop()

// ! unshift and shift
// fruits.unshift("Pineapple")
// fruits.shift();
// console.log(fruits)
// var myFriendNames = ['Sarosh','Muzammil','Idrees','Hamza'];
// console.log(myFriendNames.includes("Ali"));
// console.log(myFriends.length)
// console.log(myFriends[myFriends.length -1]);
// var myFriendNames = ["Sarosh","Ahmed","Khan","Aziz ", "Sarosh"  ,"Kahyan" ,"Sarosh"];
// console.log(myFriendNames.lastIndexOf('Sarosh'));
//  console.log(myFriendNames.indexOf("Sarosh"));
// const array1 = [5, 12, 8, 130, 44];
// const found = array1.find(element => element > 10);
// console.log(found);
// let array=['Zeeshan' , 'Kamran' ,'Bilal' , 'Ali' , 'Ale']
// let newArray=array.sort()
// console.log(newArray)
// let a=array.reverse()
// console.log(array)
// console.log(a)


// let students=['Chandresh'  , 'Abdullah'  ,"Mubassir" , "Sarosh" , "Govinda" , 'Bilal'];

// let indexofBilal=students.indexOf('Bilal')

// console.log(indexofBilal)
// if(indexofBilal !=-1){
//     alert('Bilal is Present in an array')

// }
// else{
//     alert('Bilal is not Present in an array')
// }
// array1 = [1, 4, 9, 16, 25,9];
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem == 9;
// })
// console.log(array1);
// console.log(newArr);

// const 
// const myname=["Sarosh" , "Govinda" , "Shandresh"]
// console.log(myname.sort())
// const number=[3,20,1]
// console.log(number.sort())
// number=1
// const number = [1, 2, 3, 4];
// let newNumber = number.map((elem, index, array) => {

//     return elem ** 2
// })
// console.log(newNumber)
// console.log(number);
// (()=>{
// })
// const ages = [10, 20, 33, 13, 15, 16, 17, 19, 29, 40]
// const newData = ages.filter((elem, index) => {
//     return elem > 18
// })
// console.log(newData)
// newData=[20,33,29,30,40]
// ! object

// const myObj = {
//     name: 'Sarosh', 
//     age: 22,
// }

// const students = [
//     {
//         name: 'Sarosh',
//         age: 22,
//         CGPA: 3.2,
//     },

//     {
//         name: 'Idrees',
//         age: 21,
//         CGPA: 3.1,

//     },

//     {
//         name: 'Hamza',
//         age: 32,
//         CGPA: 3,

//     },

//     {
//         name: 'Kamran',
//         age: 24,
//         CGPA: 2.4,

//     },


//     {
//         name: 'Bilal',
//         age: 21,
//         CGPA: 1,

//     },

//     {
//         name: 'Chandresh',
//         age: 26,
//         CGPA: 2.9,

//     },
// ]
// console.log(students)
// const newStudents = students.filter((data,index) => {
//     return data.CGPA>=3

// })

// console.log(newStudents )



// let myName = "Sarosh Ahmed";
// let officename = 'Desk Work solutions';

// let Name = new String("Sarosh Khan");
// console.log(Name)
// let mName = 'Sarosh Ahmed khan';

// let myName = `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

// Where can I get some?
// There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

// 5
// 	paragraphs
// 	words
// 	bytes
// 	lists
// 	Start with 'Lorem
// ipsum dolor sit amet.A.`;
// let index = myName.length
// console.log(index)

// console.log(myName[index - 2])


// const myBioData =  'I am the Sarosth Ahmed';

// const a=myBioData.lastIndexOf("t")
// console.log(a);

// const myName='Sarosh'

// let result=myName.slice(0,4)

// console.log(result)

// const myEmail='SaroshAhmed622@gmail.com'


// let b=a.substring(4,-7)
// console.log(b)

// const myEmail='riyyanqazi6@gmail.com';
// let index=myEmail.indexOf('@');
// console.log(index)
//  let result=myEmail.slice(0,index);
//  console.log(result)

// var str = "Apple,Bananaa,Kiwi";
// let res = str.slice(8,-3);
// console.log(res)

// console.log(str[])


// var str = "Apple, Bananaa, Kiwi";
// let res = str.substring(8);
// console.log(res)



// length of the extracted part.
// const a='SaroshAhmed622@gmail.com'
// let b=a.substring(0,3)
// console.log(b)
//   ! replace method
// let myBioData = `I am Sarosh Ahmed `;
// let repalceData = myBioData.replace('Sarosh','Bilal');
// console.log(repalceData);
// console.log(myBioData);
// let str = "HELLO WORLD";
// console.log(str.charCodeAt(0));

// var str = "              Hello World!            ";
// console.log(str.trim());

// split() method
// var txt = `a b c d e , e f g h`;   // String
// let a=txt.split(",")
// console.log(a);           





const students = [
    {
        name: 'Sarosh',
        age: 22,
        CGPA: 3.2,
    },

    {
        name: 'Idrees',
        age: 21,
        CGPA: 3.1,

    },

    {
        name: 'Hamza',
        age: 32,
        CGPA: 3,

    },

    {
        name: 'Kamran',
        age: 24,
        CGPA: 2.4,

    },


    {
        name: 'Bilal',
        age: 21,
        CGPA: 1,

    },

    {
        name: 'Chandresh',
        age: 26,
        CGPA: 2.9,

    },



];

//   let myFName = myBioData[0];
//   let myLName = myBioData[1];
//   let myAge = myBioData[2];

//   console.log(myFName)
//   console.log(myLName)
//   console.log(myAge)

// let [std1, std2, std3, std4, std5,] = students;
// console.log(std1);
// console.log(std2);
// console.log(std3);
// console.log(std4);
// console.log(std5.name);









// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const newcolors=['yellow' , 'green' ,'purple']


// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// 2nd time add one more color on top and tell we need to write it again 
// on myColor array too 


// const MyFavColors = [ 'Golden' ,'Teal' , ...colors, ...newcolors ];

// console.log(MyFavColors);




// function myfun(e) {
//     console.log(e)
//     console.log("Clicked");
//     console.log("ABdullah");
// }



function clac(value){
    // console.log(value)
    // console.log(value**2)
    // console.log(value+9)

}









