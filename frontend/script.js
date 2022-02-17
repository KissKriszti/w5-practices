

function loadEvent() {

    console.log("The page has loaded");

    let rootElement = document.getElementById("root");

    let card2 = function (title,year,rate){
            return `
            <div class="card">
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
        // returneli az elkészült elemekkel feltöltött rendelt card listet.
        return renderedCardList;
    }

    let newGoodMovies = [];

    for (const movieSend of movies) {

        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
        }
    };

    newGoodMovies.sort(function(a,b){return a.year - b.year});
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));

};

window.addEventListener("load", loadEvent);