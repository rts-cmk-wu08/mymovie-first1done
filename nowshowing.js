let nowShowing = document.querySelector(".now__showing");
fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=184ef74a3cb2905d98fce7cf3ed1541e")
    .then(response => response.json())
    .then(data => {
        data.results.forEach(result => {

            let ratingCoversion = result.vote_average;
            let rating = Math.round(ratingCoversion * 10) / 10;
            const movieCard = document.createElement("article");

            movieCard.classList.add("movie__card");
            movieCard.innerHTML = `

    <a href="details.html?id=${result.id}">
    <img class="poster__img" src="https://image.tmdb.org/t/p/w500${result.poster_path}">
    
    <h3>${result.title}</h3>
    </a>
    <div class="rating"><i class="fa-solid fa-star star"></i><p class="imdb__rating"><span>${rating}</span>/10 IMDb</p></div>
    `;

            nowShowing.append(movieCard);

        });
    });