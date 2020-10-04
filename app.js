//create myLibrary array
         myLibrary = [];
 let shelf = document.getElementById('shelf');
 //function for creating book- constructor
function book (title, author,course, link, page){
    this.title = title;
    this.author = author;
    this.course = course;
    this.link = link;
    this.page = page;
    
};
    function addbook(arr){
         shelf.innerHTML = '';
         //for each array create a box and display array title
    for(let i=0;i < arr.length;i++){
        //create a box to detail book and to store delete button
        let box = document.createElement('div');
        let image = document.createElement('img');
        let innerbox = document.createElement('div');
        let delButton = document.createElement('img');
        let title = document.createElement('h4');
        let description = document.createElement('h5');
        
        
        //add class to box and button
        
        delButton.classList.add('delButton');
        innerbox.classList.add('book');
        box.classList.add('recipeHolder')
        
        //add inner text
       
        title.innerText = arr[i].title;
        description.innerText += arr[i].author;
        innerbox.value = arr[i];
        delButton.value = arr[i].title;
        delButton.src = 'bin.png'
        image.src = arr[i].link;
        //attach header and description to innerbox
        innerbox.appendChild(title);
        innerbox.appendChild(description);

        //attach delButton to div
        box.appendChild(image);
        box.appendChild(innerbox);
        box.appendChild(delButton);
        
        //attach box to shelf
        shelf.appendChild(box); 

};
};


//create a few books
    const book1 =  new book('Chocolate Fondant', 'A gooey prepare-ahead dessert thats perfect for entertaining','Dessert', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-22625_11-1e84fa2.jpg?quality=90&webp=true&resize=300,272','https://www.bbcgoodfood.com/recipes/chocolate-fondant');
    myLibrary.push(book1);
    const book2 = new book('Red Lentil Fritters', 'Oven Bake to make them healthier, great in wraps or naans.','main',  'https://data.thefeedfeed.com/recommended/post_677507.jpeg','https://www.youtube.com/watch?v=94VdtP5OlZI&t=271s');
    myLibrary.push(book2);
    const book3 = new book('Banoffe Pie Overnight Oats', 'great for pre cycle,loads of energy', 'Dessert', 'https://www.thegardengrazer.com/wp-content/uploads/2018/01/vanilla-overnight-oats-square-650.jpg','https://www.youtube.com/watch?v=5nWsV0Be-vI')
    myLibrary.push(book3);
    const book4 = new book('Sri Lankan Brindal Bhaji', 'Aubergine curry, sweet, tangy and Delicious','main','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWSVao6BYXCKLbbbXvI-Lbr3LT0jT37vZu9Q&usqp=CAU','https://www.youtube.com/watch?v=4jYvHNMmeJM')
    myLibrary.push(book4);
    addbook(myLibrary);
    //new book button 
    let add = document.getElementById('newBookButton');
    let title = document.getElementById('textTitle');
    let author = document.getElementById('textAuthor');
    let course = document.getElementById('textCourse')
    let picLink = document.getElementById('textPicLInk');
    let link = document.getElementById('textLink');
    add.addEventListener('click', addBookToLibrary);
    //new book form
    function addBookToLibrary(){
    let form = document.getElementById('newForm');
    form.style.display = 'flex'
    //cancel button function
    let cancel = document.getElementById('cancel');
    cancel.addEventListener('click', cancelBook)
    function cancelBook(){
        title.value = '';
        author.value = '';
        course.value = ''; 
        picLink.value = '';
        link.value = '';
        form.style.display = 'none';
        
    }
    //reset buttonfunction
    let reset = document.getElementById('reset');
    reset.addEventListener('click', resetBut)
    function resetBut(){
        title.value = '';
        author.value = '';
        course.value = ''; 
        picLink.value = '';
        link.value = '';
    }

    let newBook = document.getElementById('submit');
    newBook.addEventListener('click', addNewBook);
        function addNewBook(){
            //get values from form

            let a = title.value;
            let b = author.value;
            let c = course.value;
            let d = picLink.value;
            let e = link.value;
            if(a===''||b===''||c===''||d===''||e===''){
                cancelBook();
            }else{
            let createdBook =  new book(a, b, c, d, e);
       myLibrary.push(createdBook);
       title.value = '';
       author.value = '';
       course.value = ''; 
       picLink.value = '';
       link.value = '';  
       cancelBook();          
       addbook(myLibrary);
       details(myLibrary);
            };
    };
    };

//expand details for each book
function details(a){
    let bookSelect = document.querySelectorAll('.recipeHolder')
        for(let i= 0; i <bookSelect.length;i++) {
        bookSelect[i].addEventListener('mouseover', result);
        ;
        function result(){

//change display on book info and trash button          
    let trash = document.querySelectorAll('.delButton');
    let info = document.querySelectorAll('.book');
        trash[i].style.display = 'block';
        info[i].style.display = 'flex';
     
    
//remove resultBox from page and restart details function    
      bookSelect[i].addEventListener('mouseout', closebox);
      function closebox(){
        trash[i].style.display = 'none';
        info[i].style.display = 'none';        
      };

//jump to recipe in new window
        bookSelect[i].addEventListener('click', newLink)
        function newLink(){
            window.open(a[i].page, '_blank');
      }

};
};   
};

//delete button function
      

    let deleteButton = document.querySelectorAll('.delButton');
//loop through delete buttons to find one that matches 
    for(let i=0;i < deleteButton.length;i++){
        deleteButton[i].addEventListener('click', delwhich)
function delwhich(){
  
   myLibrary = myLibrary.filter(name => name.title !== deleteButton[i].value);
addbook(myLibrary);
details(myLibrary);

      };
    };


// add sort by mains
    let sortTitle = document.getElementById('mains');
        sortTitle.addEventListener('click', main);
        function main(){
            sorted = myLibrary.filter(a => a.course === 'main'|| a.course === 'Main').sort((a,b) => a.title > b.title? 1 :-1);
            addbook(sorted);
            details(sorted);
        }
//sort by dessert
        let sortAuthor = document.getElementById('desserts');
        sortAuthor.addEventListener('click', dessert);
        function dessert(){
            sorted = myLibrary.filter(a => a.course === 'dessert'|| a.course === 'Dessert').sort((a,b) => a.title > b.title? 1 :-1);
            addbook(sorted);
            details(sorted);
        }
//return to All
        let returnAll = document.getElementById('all');
        returnAll.addEventListener('click', backToAll);
        function backToAll(){
            addbook(myLibrary);
            details(myLibrary);
        }
        
//sort by read or not
        let alpha = document.getElementById('Alphabet');
            alpha.addEventListener('click', alphaSort)
            function alphaSort(){
            myLibrary.sort((a,b) => a.title > b.title? 1 :-1)
            addbook(myLibrary)
            details(myLibrary);
        };
  


                //call all functions    
        details(myLibrary);
       




        

   
