
// Book Constructor
function Book(title, author, isbn){
    this.title = title
    this.author = author
    this.isbn = isbn
}

// UI constructor
function UI() {}

// Add Book To list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr')

    // Insert cols
    row.innerHTML = `
        <td> ${book.title} </td>
        <td> ${book.author} </td>
        <td> ${book.isbn} </td>
        <td> <a href='' class='delete'> X </a> </td>
    `
    list.appendChild(row)

}

// Clear Fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('isbn').value = ''
}

// Show Alert
UI.prototype.showAlert = function(message, className){
    // Create Div Element
    const div = document.createElement('div')
    // Add Class Name
    div.className = `alert ${className}`
    // Add text
    div.appendChild(document.createTextNode(message))
    // Get Container
    const container = document.querySelector('.container')
    // Get Container
    const form = document.querySelector('#book-form')
    // Insert Before
    container.insertBefore(div, form)

    // TimeOut
    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 2000)
}

// Delete Book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
         target.parentElement.parentElement.remove()
    }
}


// Store constructor
// function Store(){
//     this.getBook = function(){
//         let books;
//         if(localStorage.getItem('books') === null){
//             books = []
//         } else {
//             books = JSON.parse(localStorage.getItem('books'))
//         }
    
//         return books
//     }

//     this.addBook = function(book){
//         const books = this.getBook()
    
//         books.push(book)
//         localStorage.setItem('books', JSON.stringify(books))
//     }

//     this.displayBook = function(){
//         const books = this.getBook()

//         books.forEach(function(book){
//             const ui = new UI

//             // Add book to UI
//             ui.addBookToList(book)
//         })
//     }

//     // this.removeBook = function(){}
// }

function Store(){}
Store.prototype.getBook = function(){
    let books;
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }

    return books
}

Store.prototype.addBook = function(book){
    const books = Store.prototype.getBook()

    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

Store.prototype.displayBook = function(){
    const books = Store.prototype.getBook()

    books.forEach(function(book){
        const ui = new UI
        
        // Add book to UI
        ui.addBookToList(book)
    })
}

// Store.prototype.removeBook = function(){}



// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.prototype.displayBook)

// Event Listeners For Add Book
// Get Form Values
document.getElementById('book-form').addEventListener('submit', function(e){
   const title = document.getElementById('title').value,
         author = document.getElementById('author').value,
         isbn = document.getElementById('isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn)

    // Instantiate UI
    const ui = new UI() 

    // Instantiate Store
    const store = new Store()

    // Validate
    if(title === '' || author === '' || isbn === '' ){
        // Show Alert
        ui.showAlert('Please fill in the fileds', 'error')
    } else {
        // Add book to list
        ui.addBookToList(book)

        // Add to LS
        store.addBook(book)
        store.getBook()
        store.displayBook()

        // Show Alert
        ui.showAlert('Book Added!!!', 'success')

        // Clear Fields
        ui.clearFields()
    }
    
    e.preventDefault()
})  

// Event Listener For Delete
document.getElementById('book-list').addEventListener('click', function(e){
    // Instantiate UI for delete
    const ui = new UI() 
    
    // Delete book
    ui.deleteBook(e.target)
    
    // Show Alert
    ui.showAlert('Book Removed!', 'success')

    e.preventDefault()
})



// // Book Constructor
// function Book(title, author, isbn){
//     this.title = title
//     this.author = author
//     this.isbn = isbn
// }

// // UI constructor
// function UI() {}

// // Add book To List
// UI.prototype.addBookToList = function(book){
//     const list = document.getElementById('book-list')

//     // Create Element
//     const row = document.createElement('tr')
//     row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href='' class='delete'>X</a></td>
//     `
//     list.appendChild(row)
// } 

// // Clear Fields
// UI.prototype.clearFields = function(){
//     document.getElementById('title').value = ''
//     document.getElementById('author').value = ''
//     document.getElementById('isbn').value = ''
// }

// // Show Alert
// UI.prototype.showAlert = function(message, className){
//     // create Div Element
//     const div = document.createElement('div')
//     // Classes
//     div.className = `alert ${className}`
//     // Add Text
//     div.appendChild(document.createTextNode(message))
//     // Get Parent
//     const container = document.querySelector('.container')
//     // Get form
//     const form = document.querySelector('#book-form')
//     // Insert Alert
//     container.insertBefore(div, form)

//     // Time Out
//     setTimeout(function(){
//         document.querySelector('.alert').remove()
//     }, 2000)

// }

// // Event Listner
// document.getElementById('book-form').addEventListener('submit', function(e){
//     // Get form Values
//     const title = document.getElementById('title').value,
//           author = document.getElementById('author').value,
//           isbn = document.getElementById('isbn').value;
    
//     // instantiate Book
//     const book = new Book(title, author, isbn)
//     console.log(book)

//     // instantiate UI
//     const ui = new UI()

//     // Validate
//     if(title === '' || author === '' || isbn === ''){
//         ui.showAlert('Please fill in the fields', 'error')
//     } else {
//         // Add Book To List
//         ui.addBookToList(book)
        
//         // Show Success
//         ui.showAlert('Book Added!!!', 'success')

//         // Clear Fields
//         ui.clearFields()   
//     }

//     e.preventDefault();
// })
