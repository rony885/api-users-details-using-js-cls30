const products = [
    {id:2, name:"Dell", color:"black", ram:"8Gb", price:68000},
    {id:3, name:"Lenevo", color:"White", ram:"8Gb", price:50000},
    {id:4, name:"Accer", color:"red", ram:"12Gb", price:76000},
    {id:5, name:"Hp", color:"indigo", ram:"16Gb", price:85000},
    {id:1, name:"Mac", color:"black", ram:"32Gb", price:208000},
]

// const found = products.filter((product)=> product.price > 30000 && product.color=="black");
const found = products.filter((product)=> product.price > 30000);

let container = document.getElementById("container");

let errorMessage = document.createElement("h2");
errorMessage.innerHTML ="Data not found"
if(found.length>0){
    found.map((product)=>{
        let div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML= `
        <h1>id: ${product.id}</h1>
        <h2>Name: ${product.name}</h2>
        <h2>Color: ${product.color}</h2>
        <h2>Ram: ${product.ram}</h2>
        <h2>Price: ${product.price}</h2>
        `
        container.appendChild(div);
     })
}
else{
    container.appendChild(errorMessage)
}





// products.map((product)=> console.log(product.name, product.price))

