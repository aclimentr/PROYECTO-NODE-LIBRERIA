const arraybooks = [];
let main$$ = document.querySelector("main")
const input$$ = document.querySelector("input")
const getAllBooks = async () =>{
    for (let i = 1; i <= 151; i++){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        const result = await response.json();
        arraybooks.push(result);
    }
    console.log(arraybooks)
    return arraybooks;
}

// const mapBooks = (books)=>{
//     return books.map((results)=>({
//         nombre: results.name,
//         foto: results.sprites.front_default
//     }))
// }

const init = async ()=>{
    const books = await getAllBooks();
    const mappingBooks = mapBooks(books); 
}
init();