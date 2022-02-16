
/* let myString = "mikkamakka";

let mySecondString = myString

let myThirdString = "mikkamakka"

console.log(myString);
console.log(mySecondString);
console.log(myString === mySecondString);
console.log(myString === myThirdString); */


/* let myObject = {
    myString: "mikkamakka"
}

let mySecondObject = myObject;

let myThirdObject = {
    myString: "mikkamakka"
} */

/* console.log(myObject === mySecondObject);
console.log(myObject === myThirdObject); */


/* console.log("" === "");
console.log({} === {}); */

/* mySecondObject.myString = "domdodom";
console.log(myObject.myString);

let myFourthObject = {...myObject};

myFourthObject.myString = "vacskamati";
console.log(myFourthObject.myString); */


/* window.addEventListener("load", function() {
    console.log("The page has loaded")
}) */

function loadEvent() {

    console.log("The page has loaded")

    let rootElement = document.getElementById("root")

  /*   let card = function (movieReceive){

        return `
        <div class="card">
            <h2>${movieReceive.title}</h2>
            <div class="time">Year: ${movieReceive.year}</div>
            <div clas="rate">Rate: ${movieReceive.rate}</div>
        </div>
        `
    }; */

    let card2 = function (title,year,rate){

        return `
        <div class="card">
            <h2>${title}</h2>
            <div class="time">Year: ${year}</div>
            <div clas="rate">Rate: ${rate}</div>
        </div>
        `
    };

   /*  rootElement.insertAdjacentHTML("beforeend", card({
        "title": "Harry Potter",
        "year": 2017,
        "rate": 9.9
    }));

    let actuallyFavouriteMovie = {
        "title": " Eternal sunshine",
        "year": 2004,
        "rate": 9.8
    }

    rootElement.insertAdjacentHTML("beforeend", card(actuallyFavouriteMovie));
    rootElement.insertAdjacentHTML("beforeend", card(movies[0])); */

   /*  for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card(movieSend));
    } */

    let anotherFavoriteMovie = {
        "title": "The Last Scout Boy",
        "year": 1991,
        "rate": 7.0
    }

    rootElement.insertAdjacentHTML("beforeend", card2(anotherFavoriteMovie.title, anotherFavoriteMovie.year, anotherFavoriteMovie.rate));

    for (const movieSend of movies) {
        rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
    }

};

window.addEventListener("load", loadEvent);