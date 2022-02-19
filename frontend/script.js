

function loadEvent() {

    console.log("The page has loaded");

    let rootElement = document.getElementById("root");

    let szamlalo = 0
    let card2 = function (title,year,rate){
            szamlalo++
            return `
            <div class="card card${szamlalo}">
                <h2>${title}</h2>
                <div class="time">Year: ${year}</div>
                <div class="rate">Rate: ${rate}</div>
            </div>`;
    };


    let renderAllCardElements = function (incomingMoviesArray) {
        let renderedCardList = `<div class="cards">`;
         // for ciklus ami végigmegy a listán, a cardsarrayen
        for (const incomingMovie of incomingMoviesArray) {
            
            renderedCardList += card2(incomingMovie.title, incomingMovie.year, incomingMovie.rate)

            // for ciklus minden lépcsőjénél hozzáadja a rendercardlisthez az adott elemet a megfelelő div card-ban
            /* renderedCardList += `
            <div class="card">
                <h2>${incomingMovie.title}</h2>
                <div class="time">Year: ${incomingMovie.year}</div>
                <div class="rate">Rate: ${incomingMovie.rate}</div>
            </div>` */
        };
        renderedCardList += `</div>`

        console.log(renderedCardList);
        // returneli az elkészült elemekkel feltöltött renderelt card listet.
        return renderedCardList;
    }

    let newGoodMovies = [];

    for (const movieSend of movies) {

        if (movieSend.year > 2015 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
        }
    };

    newGoodMovies.sort(function(a,b){return a.year - b.year});
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));

    // necessary for the grid introduction
    /* document.getElementsByClassName("card")[0].classList.add("card1");

    document.getElementsByClassName("card")[1].classList.add("card2") */

};

window.addEventListener("load", loadEvent);