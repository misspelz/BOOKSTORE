// regex on the input fields
let bookTitle = document.getElementById("title")
bookTitle.addEventListener("input", titleValue)
let titlePopUp = document.getElementById("title-regex")

let authorTitle = document.getElementById("author")
authorTitle.addEventListener("input", authorValue)
let authorPopUp = document.getElementById("author-regex")

let isbnTitle = document.getElementById("isbn")
isbnTitle.addEventListener("input", isbnValue)
let isbnPopUp = document.getElementById("isbn-regex")


function titleValue(event){
    let titleValue = event.target.value

    let titleRegex = /^[A-Z][a-z]+/
    let match = titleRegex.test(titleValue)
    
    if(match){
        titlePopUp.style.display = "none"
    }else{
        titlePopUp.style.display = "block"
    }
}

function authorValue(event){
    let authorValue = event.target.value

    let authorRegex = /^[A-Z][a-z]+/
    let match2 = authorRegex.test(authorValue)

    if(match2){ 
        authorPopUp.style.display = "none"
    }else{
        authorPopUp.style.display = "block"
    }
}

function isbnValue(event){
    let isbnValue = event.target.value

    let isbnRegex = /\d*[-]\d/g
    let match3 = isbnRegex.test(isbnValue)

    if(match3){ 
        isbnPopUp.style.display = "none"
    }else{
        isbnPopUp.style.display = "block"
    }
}


// pick submit button
let submit = document.getElementById("btn")
// console.log(submit)
submit.addEventListener("click", addToLists)

// submit button
function addToLists(event){
    let submit_btn = event.target
    // console.log(submit_btn)


    // get each of the input fields
    let submit_btn_parent = submit_btn.parentElement
    // console.log() 

    let title = submit_btn_parent.children[1].value
    let author = submit_btn_parent.children[3].value
    let isbn = submit_btn_parent.children[5].value
    // console.log(title, author, isbn)


    // when there are no inputs, pop up the required fields and otherwise
    let required = document.getElementsByClassName("required")[0]
    
    let bookAdded = document.getElementsByClassName("book-added")[0]

    if(title === '' || author === "" || isbn === ""){
        required.style.display = "block"

        function requiredFunction(){
            required.style.display = ""
            // return;
        }
        setTimeout(requiredFunction, 2000);

        return;
    }else{
        bookAdded.style.display = "block"

        function requiredFunction(){
            bookAdded.style.display = ""
            // return;
        }
        setTimeout(requiredFunction, 2000);

        // return;
    }


    // create the container where the book items details will be stored on click
    let book_lists = document.createElement("tr")
    book_lists.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="remove"><i class="fa fa-times table_btn"></i></button></td>`

    // append the container to the parent element
    let main_container = document.getElementsByTagName("tbody")[0]

    main_container.append(book_lists)
    


    // create the function for remove button //
    let remove_btn = document.getElementsByClassName("remove")
    for(let i=0; i<remove_btn.length; i++){
        remove_btn[i].addEventListener("click", removeBook)
    }
};

function removeBook(event){
    let remove = event.target
    let newRemove = remove.parentElement
    // remove_parent = remove.parentElement
    newRemove_grandparent = newRemove.parentElement.parentElement
    newRemove_grandparent.remove()


    // pop up to remove books that has been added
    let bookRemoved = document.getElementsByClassName("book-removed")[0]
    bookRemoved.style.display = "block"

    function requiredFunction(){
        bookRemoved.style.display = ""
        // return;
    }
    setTimeout(requiredFunction, 2000);
}




















  // check that item to be added is in the list or not
    // const itemISBN = document.getElementsByClassName("isbn_input")
    // for (let i = 0; i < itemISBN.length; i++){
    //     const itemISBNElement = itemISBN[i].value

    //     if(itemISBNElement === isbn){
    //         alert("Book already in your Library")
    //         return;
    //     }
    // }











   
