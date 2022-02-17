

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
        let renderedCardList = "";
         // for ciklus ami végigmegy a listán, a cardsarrayen
        for (const incomingMovie of incomingMoviesArray) {
            // for ciklus minden lépcsőjénél hozzáadja a rendercardlisthez az adott elemet a megfelelő div card-ban
            renderedCardList += `
            <div class="card">
                <h2>${incomingMovie.title}</h2>
                <div class="time">Year: ${incomingMovie.year}</div>
                <div class="rate">Rate: ${incomingMovie.rate}</div>
            </div>`
        };

        console.log(renderedCardList);
        // returneli az elkészült elemekkel feltöltött rendelt card listet.
        return renderedCardList;
    }

    // movies.sort(function(a,b){return a.year - b.year});
    // console.log(movies);

    let newGoodMovies = [];

    for (const movieSend of movies) {

        // let floorRate = Math.floor(movieSend.rate);



        if (movieSend.year > 2000 && movieSend.rate >= 8) {
            newGoodMovies.push(movieSend);
            /* rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, floorRate)); */
        }

        /* let newerThan2000 = false;

        if (movieSend.year > 2000) {
            newerThan2000 = true
        }

        if (newerThan2000) {
            rootElement.insertAdjacentHTML("beforeend", card2(movieSend.title, movieSend.year, movieSend.rate));
        } */
    };

    newGoodMovies.sort(function(a,b){return a.year - b.year});
    // console.log(newGoodMovies);
    rootElement.insertAdjacentHTML("beforeend", renderAllCardElements(newGoodMovies));

};

window.addEventListener("load", loadEvent);