document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const popularMovies = document.getElementById("popular-movies");
    const highestRatedMovies = document.getElementById("highest-rated-movies");

    function filterMovies(query) {
        const allMovies = Array.from(document.querySelectorAll(".movie"));
        allMovies.forEach(movie => {
            const title = movie.querySelector(".movie-title").textContent.toLowerCase();
            if (title.includes(query.toLowerCase())) {
                movie.style.display = "block";
            } else {
                movie.style.display = "none";
            }
        });
    }
    
    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const query = searchInput.value.trim();
        filterMovies(query);
    });
});
