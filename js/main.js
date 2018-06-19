const backgrounds = [
    " ' https://res.cloudinary.com/dowmiccxo/image/upload/v1529275454/5.jpg' ",
    " ' https://res.cloudinary.com/dowmiccxo/image/upload/v1529275451/6.jpg ' ",
    " ' https://res.cloudinary.com/dowmiccxo/image/upload/v1529275448/7.jpg' ",
    " ' https://res.cloudinary.com/dowmiccxo/image/upload/v1529275427/3.jpg ' ",
    " ' https://res.cloudinary.com/dowmiccxo/image/upload/v1529275410/2.jpg ' ",
    " ' https://res.cloudinary.com/dowmiccxo/image/upload/v1529275327/1.jpg ' ",
    " ' https://res.cloudinary.com/dowmiccxo/image/upload/v1523832701/stage3.png' ",
    
  ];
const myQuotes = [
    "The road to success and the road to failure are almost exactly the same." ,
    "Opportunities don't happen. You create them." ,
  ];

const addToArray = () => {
 let quotes = document.getElementById("intake").value;
 myQuotes.push(quotes);
 document.getElementById("intake").value = "";
 document.getElementById("container-alert").style.display = 'block';
 setTimeout(() =>{
    document.getElementById("container-alert").style.display = 'none'; }, 1000);
}

const randomly = {
    randomBackgrounds: () => {
        let picture = document.getElementById("bg_display");
        let bg = backgrounds[Math.floor(Math.random()*backgrounds.length)];
        picture.style=` background: url(${bg}) no-repeat;background-size: 100%`;
    },
    randomQuotes: () => {
        let selected_quote = myQuotes[Math.floor(Math.random()*myQuotes.length)];
        let quote = document.getElementById("bg_display");
        quote.innerHTML =   `<p id="list_quotes">" ${selected_quote} "</p>`;
        randomly.randomBackgrounds();
    }
  };