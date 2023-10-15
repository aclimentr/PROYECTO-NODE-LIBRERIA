const arraybooks = [];
let main$$ = document.querySelector("main")
const input$$ = document.getElementsByClassName("searchingbar")
const getAllBooks = async () =>{
    for (let i = 1; i <= 151; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const result = await response.json();
        arraybooks.push(result);
    }
    console.log(arraybooks)
    return arraybooks;
}

const mapBooks = (books)=>{
    return books.map((results)=>({
        nombre: ,
        foto: ,
        autor:
    }))
}

    const printBooks = (books) =>{
        main$$.innerHTML=""
        for(const drawbooks of books){
            const booksDiv$$ = document.createElement("div")
            booksDiv$$.innerHTML=`
            <h2>${drawbooks.name}</h2>
            <img src="${drawbooks.image}" alt="${drawbooks.name}"
            `;
            main$$.appendChild(booksDiv$$);
        }
    }
const useInput = (mapingBooks) => {
    input$$.addEventListener("input", () =>searchBooks(input$$.value, mapingBooks))
}
const searchBooks = (filtro, books) =>{
    let filteredBooks = books.filter((books)=>books.name.toLowercase().includes(filtro.toLowercase()))
    printBooks(filteredBooks);
}
const init = async ()=>{
    const books = await getAllBooks();
    const mapingBooks = mapBooks(books); 
    console.log(mapingBooks);
    printBooks(mapingBooks);
}
init();