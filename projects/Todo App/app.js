const addItem = () => {

    let input = document.getElementById('input');
    // console.log(input.value)
    let value = input.value
    // console.log(value)
    input.value = ''

    let myList = document.getElementById('myList');
    // console.log(myList);

    let listItem = document.createElement('li')
    // console.log(listItem)
    let listItemValue = document.createTextNode(value)
    listItem.appendChild(listItemValue)
    //  console.log(listItem)
    myList.appendChild(listItem)

    //  !create delete button
    let deleteButton = document.createElement('button')
    // console.log(deleteButton)

    let deleteButtonText = document.createTextNode('Delete Item')
    deleteButton.appendChild(deleteButtonText);
    deleteButton.setAttribute('onclick', 'deleteItem(this)')
    listItem.appendChild(deleteButton);
    // console.log(deleteButton)


    //  !create edit button
    let editButton = document.createElement('button')
    // console.log(editButton)

    let editButtonText = document.createTextNode('edit Item')
    editButton.appendChild(editButtonText);
    editButton.setAttribute('onclick', 'editItem(this)')
    listItem.appendChild(editButton);
    // console.log(editButton)
}


function deleteItem(e) {
    console.log(e.parentNode);
    e.parentNode.remove();
}




function editItem(e) {
    // console.log(e.parentNode.firstChild.nodeValue)
    let updatedValue = prompt("Enter new value")
    e.parentNode.firstChild.nodeValue = updatedValue;
}



function removeAll() {

    let myList=document.getElementById('myList')
    // console.log(myList)
    myList.innerHTML=``

}