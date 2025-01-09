// Load Google Charts library
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCharts); // Ensure all charts are drawn after the library loads


// Function to draw all charts
function drawCharts() {
    // PLOT: Movies watched per day of the week
    fetch('/letterboxd-wrapped/assets/docs/user_days.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load user_days.json');
            return response.json();
        })
        .then(data => {
            console.log('user_days data:', data); // Debugging statement
            moviesPerDay(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => moviesPerDay(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching user_days data:', error));
    
        
    // PLOT: Top Releases of the Year
    fetch('/letterboxd-wrapped/assets/docs/user_topReleases.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load user_topReleases.json');
            return response.json();
        })
        .then(data => {
            console.log('user_topReleases data:', data); // Debugging statement
            topReleases(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => topReleases(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching user_topReleases data:', error));
    
        
    // PLOT: Display stats
    fetch('/letterboxd-wrapped/assets/docs/display_stats.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load display_stats.json');
            return response.json();
        })
        .then(data => {
            console.log('display_stats data:', data); // Debugging statement
            displayStats(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => displayStats(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching display_stats data:', error));


    // PLOT: Top Movies of the Year
    fetch('/letterboxd-wrapped/assets/docs/user_topAllMovies.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load user_topAllMovies.json');
            return response.json();
        })
        .then(data => {
            console.log('user_topAllMovies data:', data); // Debugging statement
            topMovies(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => topMovies(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching user_topAllMovies data:', error));

    
    // PLOT: Ratings and movies watched per week
    fetch('/letterboxd-wrapped/assets/docs/user_weekly_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load user_weekly_data.json');
            return response.json();
        })
        .then(data => {
            console.log('user_weekly_data data:', data); // Debugging statement
            weeklyWatched(data);
            weeklyRatings(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => weeklyWatched(data));
                submitButtonWrapped.addEventListener('click', () => weeklyRatings(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching user_weekly_data data:', error));


    // PLOT: Most watched GENRES
    fetch('/letterboxd-wrapped/assets/docs/genresWatched_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load genresWatched_data.json');
            return response.json();
        })
        .then(data => {
            console.log('genresWatched_data data:', data); // Debugging statement
            genresWatched(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => genresWatched(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching genresWatched_data data:', error));


    // PLOT: Highest rated GENRES
    fetch('/letterboxd-wrapped/assets/docs/genresRated_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load genresRated_data.json');
            return response.json();
        })
        .then(data => {
            console.log('genresRated_data data:', data); // Debugging statement
            genresRated(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => genresRated(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching genresRated_data data:', error));


    // PLOT: Most watched COUNTRIES
    fetch('/letterboxd-wrapped/assets/docs/countriesWatched_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load countriesWatched_data.json');
            return response.json();
        })
        .then(data => {
            console.log('countriesWatched_data data:', data); // Debugging statement
            countriesWatched(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => countriesWatched(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching countriesWatched_data data:', error));


    // PLOT: Highest rated COUNTRIES
    fetch('/letterboxd-wrapped/assets/docs/countriesRated_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load countriesRated_data.json');
            return response.json();
        })
        .then(data => {
            console.log('countriesRated_data data:', data); // Debugging statement
            countriesRated(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => countriesRated(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching countriesRated_data data:', error));


    // PLOT: Most watched LANGUAGES
    fetch('/letterboxd-wrapped/assets/docs/languagesWatched_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load languagesWatched_data.json');
            return response.json();
        })
        .then(data => {
            console.log('languagesWatched_data data:', data); // Debugging statement
            languagesWatched(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => languagesWatched(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching languagesWatched_data data:', error));


    // PLOT: Highest rated LANGUAGES
    fetch('/letterboxd-wrapped/assets/docs/languagesRated_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load languagesRated_data.json');
            return response.json();
        })
        .then(data => {
            console.log('languagesRated_data data:', data); // Debugging statement
            languagesRated(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => languagesRated(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching languagesRated_data data:', error));


    // PLOT: Most watched ACTORS
    fetch('/letterboxd-wrapped/assets/docs/actors_watched.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load actors_watched.json');
            return response.json();
        })
        .then(data => {
            console.log('actors_watched data:', data); // Debugging statement
            actorsWatched(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => actorsWatched(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching actors_watched data:', error));


    // PLOT: Highest rated ACTORS
    fetch('/letterboxd-wrapped/assets/docs/actors_rated.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load actors_rated.json');
            return response.json();
        })
        .then(data => {
            console.log('actors_rated data:', data); // Debugging statement
            actorsRated(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => actorsRated(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching actors_rated data:', error));


    // PLOT: Most watched DIRECTORS
    fetch('/letterboxd-wrapped/assets/docs/directors_watched.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load directors_watched.json');
            return response.json();
        })
        .then(data => {
            console.log('directors_watched data:', data); // Debugging statement
            directorsWatched(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => directorsWatched(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching directors_watched data:', error));


    // PLOT: Highest rated DIRECTORS
    fetch('/letterboxd-wrapped/assets/docs/directors_rated.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load directors_rated.json');
            return response.json();
        })
        .then(data => {
            console.log('directors_rated data:', data); // Debugging statement
            directorsRated(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => directorsRated(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching directors_rated data:', error));


    // PLOT: Films per rating STAR
    fetch('/letterboxd-wrapped/assets/docs/ratings_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load ratings_data.json');
            return response.json();
        })
        .then(data => {
            console.log('ratings_data data:', data); // Debugging statement
            ratingStars(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => ratingStars(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching ratings_data data:', error));
    
    
    // PLOT: proportion of RELEASES watched
    fetch('/letterboxd-wrapped/assets/docs/releasesProportion.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load releasesProportion.json');
            return response.json();
        })
        .then(data => {
            console.log('releasesProportion data:', data); // Debugging statement
            releasesProportions(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => releasesProportions(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching releasesProportion data:', error));


    // PLOT: biggest POSITIVE difference
    fetch('/letterboxd-wrapped/assets/docs/positive_diff.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load positive_diff.json');
            return response.json();
        })
        .then(data => {
            console.log('positive_diff data:', data); // Debugging statement
            positiveDiff(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => positiveDiff(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching positive_diff data:', error));
    
    
    // PLOT: Biggest NEGATIVE difference
    fetch('/letterboxd-wrapped/assets/docs/negative_diff.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load negative_diff.json');
            return response.json();
        })
        .then(data => {
            console.log('negative_diff data:', data); // Debugging statement
            negativeDiff(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => negativeDiff(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching negative_diff data:', error));
    
    
    // PLOT: High and Low movies
    fetch('/letterboxd-wrapped/assets/docs/high_low_data.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load high_low_data.json');
            return response.json();
        })
        .then(data => {
            console.log('high_low_data data:', data); // Debugging statement
            high_low_movies(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => high_low_movies(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching high_low_data data:', error));
    
    
    // PLOT: Best Picture Winners
    fetch('/letterboxd-wrapped/assets/docs/best_pic_winners.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load best_pic_winners.json');
            return response.json();
        })
        .then(data => {
            console.log('best_pic_winners data:', data); // Debugging statement
            bestPicWinners(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => bestPicWinners(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching best_pic_winners data:', error));
    
    
    // PLOT: Top 100 Argentina
    fetch('/letterboxd-wrapped/assets/docs/top100_Arg.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load top100_Arg.json');
            return response.json();
        })
        .then(data => {
            console.log('prontoMovies data:', data); // Debugging statement
            top100_Arg(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => top100_Arg(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching top100_Arg data:', error));
    
    
    // PLOT: Pronto Pinarello Movies
    fetch('/letterboxd-wrapped/assets/docs/prontoMovies.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load prontoMovies.json');
            return response.json();
        })
        .then(data => {
            console.log('prontoMovies data:', data); // Debugging statement
            prontoMovies(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => prontoMovies(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching prontoMovies data:', error));
    
    
    // PLOT: Top Releases Resumitos
    fetch('/letterboxd-wrapped/assets/docs/top_releases_resumitos.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load top_releases_resumitos.json');
            return response.json();
        })
        .then(data => {
            console.log('topReleasesResumitos data:', data); // Debugging statement
            topReleasesResumitos(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => topReleasesResumitos(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching topReleasesResumitos data:', error));
    

    // PLOT: Top Movies Resumitos
    fetch('/letterboxd-wrapped/assets/docs/top_movies_resumitos.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load top_movies_resumitos.json');
            return response.json();
        })
        .then(data => {
            console.log('topMoviesResumitos data:', data); // Debugging statement
            topMoviesResumitos(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => topMoviesResumitos(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching topMoviesResumitos data:', error));

    
    // PLOT: Top Watched on Stream Resumitos
    fetch('/letterboxd-wrapped/assets/docs/top_stream_resumitos.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load top_stream_resumitos.json');
            return response.json();
        })
        .then(data => {
            console.log('topStreamResumitos data:', data); // Debugging statement
            topStreamResumitos(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => topStreamResumitos(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching topStreamResumitos data:', error));

    
    // PLOT: graphics made with user_ratings data
    fetch('/letterboxd-wrapped/assets/docs/user_ratings.json')
    .then(response => {
        if (!response.ok) throw new Error('Failed to load user_ratings.json');
        return response.json();
    })
    .then(data => {
        console.log('MatchingScore MatchingMovies data:', data); // Debugging statement
        MatchingScore(data);
        MatchingMovies(data);
        avgBenevoleceScore(data);
        compared_TopPositiveDiff(data);
        compared_TopNegativeDiff(data);
        comparedBenevolenceScore(data);

        // Ensure only positive differences are shown by default
        document.getElementById('compared_topPositiveDiff_id').style.display = 'flex';
        document.getElementById('compared_topNegativeDiff_id').style.display = 'none';

        // Event listener for submit button
        const submitButtonWrapped = document.getElementById('submitButtonWrapped');
        if (submitButtonWrapped) {
            submitButtonWrapped.addEventListener('click', () => {
                console.log('submitButtonWrapped clicked');
                MatchingScore(data);
                MatchingMovies(data);
                avgBenevoleceScore(data);
                compared_TopPositiveDiff(data);
                compared_TopNegativeDiff(data);
                comparedBenevolenceScore(data);

                document.getElementById('compared_topPositiveDiff_id').style.display = 'flex';
                document.getElementById('compared_topNegativeDiff_id').style.display = 'none';
            });
        } else {
            console.warn('Button with id "submitButtonWrapped" not found.');
        }

        // Event listener for compare button
        const compareButtonWrapped = document.getElementById('compareButtonWrapped');
        if (compareButtonWrapped) {
            compareButtonWrapped.addEventListener('click', () => {
                console.log('compareButtonWrapped clicked');
                MatchingScore(data);
                MatchingMovies(data);
                compared_TopPositiveDiff(data);
                compared_TopNegativeDiff(data);
                comparedBenevolenceScore(data);

                document.getElementById('compared_topPositiveDiff_id').style.display = 'flex';
                document.getElementById('compared_topNegativeDiff_id').style.display = 'none';
            });
        } else {
            console.warn('Button with id "compareButtonWrapped" not found.');
        }

        // Event listeners for Positive and Negative buttons
        const positiveButton = document.getElementById('compared_topPositiveDiff_button');
        const negativeButton = document.getElementById('compared_topNegativeDiff_button');

        if (positiveButton) {
            positiveButton.addEventListener('click', () => {
                document.getElementById('compared_topPositiveDiff_id').style.display = 'flex';
                document.getElementById('compared_topNegativeDiff_id').style.display = 'none';
            });
        }

        if (negativeButton) {
            negativeButton.addEventListener('click', () => {
                document.getElementById('compared_topPositiveDiff_id').style.display = 'none';
                document.getElementById('compared_topNegativeDiff_id').style.display = 'flex';
            });
        }
    })
    .catch(error => console.error('Error fetching MatchingScore MatchingMovies data:', error));



}


// PLOT: Top Releases of the Year
let topReleasesChart = null; // Global variable to store the chart instance
function topReleases(user_data) {
    console.log('topReleases called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (topReleasesChart) {
        topReleasesChart.destroy();
    }

    const container = document.getElementById('topReleases_id'); // Get the container element

    if (!container) {
        console.error('Element with id "topReleases_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    filteredData.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        // Create an anchor tag for the clickable link
        const link = document.createElement('a');
        link.href = item.film_url; // Set the film URL
        link.target = '_blank'; // Open in a new tab/window

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        const rating = document.createElement('div');
        rating.textContent = item.rating;
        rating.style.marginTop = '5px';
        rating.style.color = '#131313'; // Change rating color to a darker grey

        // Append the image to the link
        link.appendChild(img);

        // Append the link and rating to the movie div
        movieDiv.appendChild(link);
        movieDiv.appendChild(rating);

        // Append the movie div to the container
        container.appendChild(movieDiv);
    });
}



// PLOT: Top Movies of the Year
let topMoviesChart = null; // Global variable to store the chart instance
function topMovies(user_data) {
    console.log('topMovies called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (topMoviesChart) {
        topMoviesChart.destroy();
    }

    const container = document.getElementById('topMovies_id'); // Get the container element

    if (!container) {
        console.error('Element with id "topMovies_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    filteredData.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        // Create an anchor tag for the clickable link
        const link = document.createElement('a');
        link.href = item.film_url; // Set the film URL
        link.target = '_blank'; // Open in a new tab/window

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        const rating = document.createElement('div');
        rating.textContent = item.rating;
        rating.style.marginTop = '5px';
        rating.style.color = '#131313'; // Change rating color to a darker grey

        // Append the image to the link
        link.appendChild(img);

        // Append the link and rating to the movie div
        movieDiv.appendChild(link);
        movieDiv.appendChild(rating);

        // Append the movie div to the container
        container.appendChild(movieDiv);
    });
}



// PLOT: Display stats
function displayStats(user_data) {
    console.log('topReleases called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    const container = document.getElementById('displayStats_id');

    if (!container) {
        console.error('Element with id "displayStats_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    filteredData.forEach(data => {
        // Create a div for each set of stats
        const statsDiv = document.createElement('div');
        statsDiv.style.padding = '10px';
        statsDiv.style.textAlign = 'center';

        // Create a Pelis element
        const pelis = document.createElement('div');
        pelis.innerHTML = `<span style="color: #131313; font-weight: bold; font-size: 30px;">${data.diary_logs}</span><br><span style="color: #707070; font-size: 10px;">Pelis</span>`;
        statsDiv.appendChild(pelis);

        // Create a rewatchs element
        const rewatchs = document.createElement('div');
        rewatchs.innerHTML = `<span style="color: #131313; font-weight: bold; font-size: 30px;">${data.rewatchs}</span><br><span style="color: #707070; font-size: 10px;">Rewatches</span>`;
        rewatchs.style.paddingTop = '20px';
        statsDiv.appendChild(rewatchs);

        // Create a Horas element
        const horas = document.createElement('div');
        horas.innerHTML = `<span style="color: #131313; font-weight: bold; font-size: 30px;">${data.hours_watched}</span><br><span style="color: #707070; font-size: 10px;">Horas</span>`;
        horas.style.paddingTop = '20px';
        statsDiv.appendChild(horas);

        // Append stats div to the container
        container.appendChild(statsDiv);
    });
}


// PLOT: Movies watched per day of the week
let userDaysChart = null; // Global variable to store the chart instance
function moviesPerDay(user_data) {
    console.log('moviesPerDay called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (userDaysChart) {
        userDaysChart.destroy();
    }

    // Create a new chart instance
    userDaysChart = new Chart(
        document.getElementById("userDays_id"),
        {
            type: 'bar',
            data: {
                labels: filteredData.map(row => row.day),
                datasets: [
                    {
                        data: filteredData.map(row => row.count),
                        backgroundColor: 'rgba(0, 0, 0, 0.69)',
                        hoverBackgroundColor: '#DC7283',
                        borderWidth: 0
                    }
                ]
            },
            options: {
                title: {
                    display: false
                },
                legend: { display: false },
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: window.innerWidth <= 768 ? 1.5 : 2.5,
                scales: {
                    yAxes: [{
                        ticks: { display: false, beginAtZero: true }, // Remove y-axis text
                        gridLines: { display: false } // Remove y-axis grid lines
                    }],
                    xAxes: [{
                        ticks: { mirror: true, fontColor: '#131313', fontFamily: 'Arial' }, // Change x-axis text color and font
                        gridLines: { display: false } // Remove x-axis grid lines
                    }]
                },
                tooltips: {
                    callbacks: {
                        // Customizes the title to display full day names
                        title: function(tooltipItems, data) {
                            const dayMap = {
                                'Lu': 'Lunes',
                                'Ma': 'Martes',
                                'Mi': 'Miércoles',
                                'Ju': 'Jueves',
                                'Vi': 'Viernes',
                                'Sá': 'Sábado',
                                'Do': 'Domingo'
                            };
                            const dayAbbrev = tooltipItems[0].label;
                            return dayMap[dayAbbrev] || dayAbbrev;
                        },
                        // Customizes the label to append "pelis" and removes the color box
                        label: function(tooltipItem, data) {
                            const value = tooltipItem.value;
                            return `${value} pelis`;
                        }
                    },
                    // Disables the color box in the tooltip
                    displayColors: false
                },
                layout: { padding: 20 }
            }
        }
    );
}


// PLOT: Movies watched per week
let weeklyWatchedChart = null; // Global variable to store the chart instance
function weeklyWatched(user_data) {
    console.log('weeklyWatched called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (weeklyWatchedChart) {
        weeklyWatchedChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('weeklyWatched_id').getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0); // Horizontal gradient
    gradient.addColorStop(0, '#00e054'); // Start color
    gradient.addColorStop(1, '#40bcf4'); // End color

    weeklyWatchedChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: filteredData.map(row => row.week_number),
            datasets: [
                {
                    data: filteredData.map(row => row.weekly_quantity),
                    backgroundColor: gradient, // Apply gradient
                    hoverBackgroundColor: '#556678',
                    borderWidth: 0
                }
            ]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function(tooltipItem, data) {
                        const value = data.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index];
                        if (value <= 1) {
                            return `${value} Peli`;
                        } else {
                            return `${value} Pelis`;
                        }
                    },
                    label: function(tooltipItem, data) {
                        const weekNumber = data.labels[tooltipItem.index];
                        const weekRange = filteredData[tooltipItem.index].week_range;
                        const arrayLines = [`Sem. ${weekNumber}`, `${weekRange}`];
                        return arrayLines;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 },
            onClick: function(event) {
                // Detect if the device is mobile
                const isMobile = /Mobi|Android/i.test(navigator.userAgent);

                if (isMobile) {
                    console.log('Click disabled on mobile devices.');
                    return; // Do nothing if it's a mobile device
                }

                // Get the clicked element
                const activePoints = weeklyWatchedChart.getElementsAtEventForMode(event, 'nearest', { intersect: true });

                // Log the entire activePoints object to understand its structure
                console.log('Active Points:', activePoints);

                if (activePoints.length > 0) {
                    // Log the properties of the clicked element to verify how to extract the index
                    console.log('Clicked Element:', activePoints[0]);

                    const clickedIndex = activePoints[0]._index; // Get the index using _index (sometimes .index might not work)
                    console.log('Clicked Index:', clickedIndex); // Debug the clicked index

                    // Check if the index is within the bounds of filteredData
                    if (clickedIndex >= 0 && clickedIndex < filteredData.length) {
                        const clickedWeekNumber = filteredData[clickedIndex].week_number; // Get the corresponding week number
                        console.log('Clicked Week Number:', clickedWeekNumber); // Debug week_number

                        // Ensure selectedUser and clickedWeekNumber are valid
                        if (selectedUser && clickedWeekNumber) {
                            // Construct the URL
                            const url = `https://letterboxd.com/${selectedUser}/films/diary/for/2024/week/${clickedWeekNumber}/`;

                            // Log the generated URL
                            console.log('Generated URL:', url);

                            // Open the URL in a new tab/window
                            window.open(url, '_blank');
                        } else {
                            console.error('Selected user or week number is missing.');
                        }
                    } else {
                        console.error('Clicked index is out of bounds.');
                    }
                } else {
                    console.error('No active points found on click.');
                }
            }
        }
    });
}


// PLOT: Movies watched per week
let weeklyRatingsChart = null; // Global variable to store the chart instance
function weeklyRatings(user_data) {
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Log to ensure filteredData is correct
    console.log('Filtered Data:', filteredData);

    // Destroy existing chart instance if it exists
    if (weeklyRatingsChart) {
        weeklyRatingsChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('weeklyRated_id').getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0); // Horizontal gradient
    gradient.addColorStop(0, '#00e054'); // Start color
    gradient.addColorStop(1, '#40bcf4'); // End color

    weeklyRatingsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: filteredData.map(row => row.week_number),
            datasets: [
                {
                    data: filteredData.map(row => row.avg_weekly_rating),
                    backgroundColor: gradient, // Apply gradient
                    hoverBackgroundColor: '#556678', // Hover color
                    borderWidth: 0
                }
            ]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function(tooltipItem, data) {
                        const value = data.datasets[tooltipItem[0].datasetIndex].data[tooltipItem[0].index];
                        return `${value} ★`;
                    },
                    label: function(tooltipItem, data) {
                        const weekNumber = data.labels[tooltipItem.index];
                        const weekRange = filteredData[tooltipItem.index].week_range;
                        const arrayLines = [`Sem. ${weekNumber}`, `${weekRange}`];
                        return arrayLines;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 },
            onClick: function(event) {
                // Mobile detection logic
                const isMobile = /Mobi|Android/i.test(navigator.userAgent);
                if (isMobile) {
                    console.log("Click functionality disabled on mobile devices");
                    return; // Prevent URL redirection on mobile
                }

                // Get the clicked element
                const activePoints = weeklyRatingsChart.getElementsAtEventForMode(event, 'nearest', { intersect: true });

                // Log the entire activePoints object to understand its structure
                console.log('Active Points:', activePoints);

                if (activePoints.length > 0) {
                    // Log the properties of the clicked element to verify how to extract the index
                    console.log('Clicked Element:', activePoints[0]);

                    const clickedIndex = activePoints[0]._index; // Get the index using _index (sometimes .index might not work)
                    console.log('Clicked Index:', clickedIndex); // Debug the clicked index

                    // Check if the index is within the bounds of filteredData
                    if (clickedIndex >= 0 && clickedIndex < filteredData.length) {
                        const clickedWeekNumber = filteredData[clickedIndex].week_number; // Get the corresponding week number
                        console.log('Clicked Week Number:', clickedWeekNumber); // Debug week_number

                        // Ensure selectedUser and clickedWeekNumber are valid
                        if (selectedUser && clickedWeekNumber) {
                            // Construct the URL
                            const url = `https://letterboxd.com/${selectedUser}/films/diary/for/2024/week/${clickedWeekNumber}/`;

                            // Log the generated URL
                            console.log('Generated URL:', url);

                            // Open the URL in a new tab/window
                            window.open(url, '_blank');
                        } else {
                            console.error('Selected user or week number is missing.');
                        }
                    } else {
                        console.error('Clicked index is out of bounds.');
                    }
                } else {
                    console.error('No active points found on click.');
                }
            }
        }
    });
}


// PLOT: Most watched GENRES
let genresWatchedChart = null; // Global variable to store the chart instance
function genresWatched(user_data){
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (genresWatchedChart) {
        genresWatchedChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('genresWatched_id').getContext('2d');
    genresWatchedChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: filteredData.map(data => data.genre),
            datasets: [{
                label: 'Watch Count',
                data: filteredData.map(data => data.watch_count),
                backgroundColor: 'rgba(0, 0, 0, 0.69)',
                hoverBackgroundColor: '#DC7283',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 0,
                barThickness: 20
            }]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display : true, fontColor: '#131313', fontFamily: 'Arial' }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {},
                    label: function(tooltipItem, data) {
                        console.log('tooltipItem:', tooltipItem);
                        console.log('data:', data);
                        const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return `${value} Pelis`;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 }
        }
    });
}


// PLOT: Highest rated GENRES
let genresRatedChart = null; // Global variable to store the chart instance
function genresRated(user_data){
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (genresRatedChart) {
        genresRatedChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('genresRated_id').getContext('2d');
    genresRatedChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: filteredData.map(data => data.genre),
            datasets: [{
                label: 'Watch Count',
                data: filteredData.map(data => data.avg_user_rating),
                backgroundColor: 'rgba(0, 0, 0, 0.69)',
                hoverBackgroundColor: '#DC7283',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 0,
                barThickness: 20
            }]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display : true, fontColor: '#131313', fontFamily: 'Arial' }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {},
                    label: function(tooltipItem, data) {
                        console.log('tooltipItem:', tooltipItem);
                        console.log('data:', data);
                        const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return `${value} ★`;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 }
        }
    });
}


// PLOT: Most watched COUNTRIES
let countriesWatchedChart = null; // Global variable to store the chart instance
function countriesWatched(user_data){
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (countriesWatchedChart) {
        countriesWatchedChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('countriesWatched_id').getContext('2d');
    countriesWatchedChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: filteredData.map(data => data.country),
            datasets: [{
                label: 'Watch Count',
                data: filteredData.map(data => data.watch_count),
                backgroundColor: 'rgba(0, 0, 0, 0.69)',
                hoverBackgroundColor: '#DC7283',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 0,
                barThickness: 20
            }]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display : true, fontColor: '#131313', fontFamily: 'Arial' }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {},
                    label: function(tooltipItem, data) {
                        console.log('tooltipItem:', tooltipItem);
                        console.log('data:', data);
                        const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return `${value} Pelis`;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 }
        }
    });
}


// PLOT: Highest rated COUNTRIES
let countriesRatedChart = null; // Global variable to store the chart instance
function countriesRated(user_data){
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (countriesRatedChart) {
        countriesRatedChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('countriesRated_id').getContext('2d');
    countriesRatedChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: filteredData.map(data => data.country),
            datasets: [{
                label: 'Watch Count',
                data: filteredData.map(data => data.avg_user_rating),
                backgroundColor: 'rgba(0, 0, 0, 0.69)',
                hoverBackgroundColor: '#DC7283',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 0,
                barThickness: 20
            }]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display : true, fontColor: '#131313', fontFamily: 'Arial' }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {},
                    label: function(tooltipItem, data) {
                        console.log('tooltipItem:', tooltipItem);
                        console.log('data:', data);
                        const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return `${value} ★`;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 }
        }
    });
}


// PLOT: Most watched LANGUAGES
let languagesWatchedChart = null; // Global variable to store the chart instance
function languagesWatched(user_data){
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (languagesWatchedChart) {
        languagesWatchedChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('languagesWatched_id').getContext('2d');
    languagesWatchedChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: filteredData.map(data => data.language),
            datasets: [{
                label: 'Watch Count',
                data: filteredData.map(data => data.watch_count),
                backgroundColor: 'rgba(0, 0, 0, 0.69)',
                hoverBackgroundColor: '#DC7283',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 0,
                barThickness: 20
            }]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display : true, fontColor: '#131313', fontFamily: 'Arial' }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {},
                    label: function(tooltipItem, data) {
                        console.log('tooltipItem:', tooltipItem);
                        console.log('data:', data);
                        const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return `${value} Pelis`;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 }
        }
    });
}


// PLOT: Highest rated LANGUAGES
let languagesRatedChart = null; // Global variable to store the chart instance
function languagesRated(user_data){
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (languagesRatedChart) {
        languagesRatedChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById('languagesRated_id').getContext('2d');
    languagesRatedChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: filteredData.map(data => data.language),
            datasets: [{
                label: 'Watch Count',
                data: filteredData.map(data => data.avg_user_rating),
                backgroundColor: 'rgba(0, 0, 0, 0.69)',
                borderColor: 'rgba(75, 192, 192, 1)',
                hoverBackgroundColor: '#DC7283',
                borderWidth: 0,
                barThickness: 20
            }]
        },
        options: {
            title: {
                display: false
            },
            legend: { display: false },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [{
                    ticks: { display : true, fontColor: '#131313', fontFamily: 'Arial' }, // Remove y-axis text
                    gridLines: { display: false } // Remove y-axis grid lines
                }],
                xAxes: [{
                    ticks: { display: false, beginAtZero: true }, // Remove x-axis grid lines
                    gridLines: { display: false } // Remove x-axis grid lines
                }]
            },
            tooltips: {
                callbacks: {
                    title: function() {},
                    label: function(tooltipItem, data) {
                        console.log('tooltipItem:', tooltipItem);
                        console.log('data:', data);
                        const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        return `${value} ★`;
                    }
                },
                displayColors: false
            },
            layout: { padding: 20 }
        }
    });
}


// PLOT: Highest watched ACTORS
function actorsWatched(user_data) {
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    const container = document.getElementById('actorsWatched_id');

    if (!container) {
        console.error('Element with id "actorsWatched_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    filteredData.forEach(data => {
        // Wrangle the URL
        const fullUrl = `https://letterboxd.com/${selectedUser}/films/diary/for/2024/with${data.person_lboxd_url}`;

        // Create a div for each actor
        const actorDiv = document.createElement('div');
        actorDiv.style.display = 'inline-block';
        actorDiv.style.textAlign = 'center';
        actorDiv.style.margin = '10px';
        actorDiv.style.padding = '10px';

        // Create an anchor tag for the clickable link
        const link = document.createElement('a');
        link.href = fullUrl; // Set the wrangled URL
        link.target = '_blank'; // Open in a new tab/window

        // Create an image element
        const img = document.createElement('img');
        img.src = data.url;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '50%'; // Make the image circular
        img.style.objectFit = 'cover';

        // Append the image to the link
        link.appendChild(img);

        // Create a name element
        const name = document.createElement('div');
        name.textContent = data.name;
        name.style.fontWeight = 'bold';
        name.style.color = '#131313';
        name.style.fontSize = '12px';

        // Create a watch count element
        const watchCount = document.createElement('div');
        watchCount.textContent = `${data.watch_count} Pelis`;
        watchCount.style.color = '#a1a1a1';
        watchCount.style.fontSize = '10px';

        // Append elements to the actor div
        actorDiv.appendChild(link); // Append the clickable image
        actorDiv.appendChild(name);
        actorDiv.appendChild(watchCount);

        // Append actor div to the container
        container.appendChild(actorDiv);
    });
}


// PLOT: Highest watched ACTORS
function actorsRated(user_data) {
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    const container = document.getElementById('actorsRated_id');

    if (!container) {
        console.error('Element with id "actorsRated_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    filteredData.forEach(data => {
        // Wrangle the URL
        const fullUrl = `https://letterboxd.com/${selectedUser}/films/diary/for/2024/with${data.person_lboxd_url}`;

        // Create a div for each actor
        const actorDiv = document.createElement('div');
        actorDiv.style.display = 'inline-block';
        actorDiv.style.textAlign = 'center';
        actorDiv.style.margin = '10px';
        actorDiv.style.padding = '10px';

        // Create an anchor tag for the clickable link
        const link = document.createElement('a');
        link.href = fullUrl; // Set the wrangled URL
        link.target = '_blank'; // Open in a new tab/window

        // Create an image element
        const img = document.createElement('img');
        img.src = data.url;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '50%'; // Make the image circular
        img.style.objectFit = 'cover';

        // Append the image to the link
        link.appendChild(img);

        // Create a name element
        const name = document.createElement('div');
        name.textContent = data.name;
        name.style.fontWeight = 'bold';
        name.style.color = '#131313';
        name.style.fontSize = '12px';

        // Create an avg_user_rating element
        const avg_user_rating = document.createElement('div');
        avg_user_rating.textContent = `${data.avg_user_rating} ★`;
        avg_user_rating.style.color = '#a1a1a1';
        avg_user_rating.style.fontSize = '10px';

        // Append elements to the actor div
        actorDiv.appendChild(link); // Append the clickable image
        actorDiv.appendChild(name);
        actorDiv.appendChild(avg_user_rating);

        // Append actor div to the container
        container.appendChild(actorDiv);
    });
}


// PLOT: Highest watched DIRECTORS
function directorsWatched(user_data) {
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    const container = document.getElementById('directorsWatched_id');

    if (!container) {
        console.error('Element with id "directorsWatched_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    filteredData.forEach(data => {
        // Wrangle the URL
        const fullUrl = `https://letterboxd.com/${selectedUser}/films/diary/for/2024/with${data.person_lboxd_url}`;

        // Create a div for each director
        const directorDiv = document.createElement('div');
        directorDiv.style.display = 'inline-block';
        directorDiv.style.textAlign = 'center';
        directorDiv.style.margin = '10px';
        directorDiv.style.padding = '10px';

        // Create an anchor tag for the clickable link
        const link = document.createElement('a');
        link.href = fullUrl; // Set the wrangled URL
        link.target = '_blank'; // Open in a new tab/window

        // Create an image element
        const img = document.createElement('img');
        img.src = data.url;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '50%'; // Make the image circular
        img.style.objectFit = 'cover';

        // Append the image to the link
        link.appendChild(img);

        // Create a name element
        const name = document.createElement('div');
        name.textContent = data.name;
        name.style.fontWeight = 'bold';
        name.style.color = '#131313';
        name.style.fontSize = '12px';

        // Create a watch count element
        const watchCount = document.createElement('div');
        watchCount.textContent = `${data.watch_count} Pelis`;
        watchCount.style.color = '#a1a1a1';
        watchCount.style.fontSize = '10px';

        // Append elements to the director div
        directorDiv.appendChild(link); // Append the clickable image
        directorDiv.appendChild(name);
        directorDiv.appendChild(watchCount);

        // Append director div to the container
        container.appendChild(directorDiv);
    });
}


// PLOT: Highest watched DIRECTORS
function directorsRated(user_data) {
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    const container = document.getElementById('directorsRated_id');

    if (!container) {
        console.error('Element with id "directorsRated_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear any existing content in the container
    container.innerHTML = '';

    filteredData.forEach(data => {
        // Wrangle the URL
        const fullUrl = `https://letterboxd.com/${selectedUser}/films/diary/for/2024/with${data.person_lboxd_url}`;

        // Create a div for each director
        const directorDiv = document.createElement('div');
        directorDiv.style.display = 'inline-block';
        directorDiv.style.textAlign = 'center';
        directorDiv.style.margin = '10px';
        directorDiv.style.padding = '10px';

        // Create an anchor tag for the clickable link
        const link = document.createElement('a');
        link.href = fullUrl; // Set the wrangled URL
        link.target = '_blank'; // Open in a new tab/window

        // Create an image element
        const img = document.createElement('img');
        img.src = data.url;
        img.style.width = '100px';
        img.style.height = '100px';
        img.style.borderRadius = '50%'; // Make the image circular
        img.style.objectFit = 'cover';

        // Append the image to the link
        link.appendChild(img);

        // Create a name element
        const name = document.createElement('div');
        name.textContent = data.name;
        name.style.fontWeight = 'bold';
        name.style.color = '#131313';
        name.style.fontSize = '12px';

        // Create an avg_user_rating element
        const avg_user_rating = document.createElement('div');
        avg_user_rating.textContent = `${data.avg_user_rating} ★`;
        avg_user_rating.style.color = '#a1a1a1';
        avg_user_rating.style.fontSize = '10px';

        // Append elements to the director div
        directorDiv.appendChild(link); // Append the clickable image
        directorDiv.appendChild(name);
        directorDiv.appendChild(avg_user_rating);

        // Append director div to the container
        container.appendChild(directorDiv);
    });
}


// PLOT: Movies watched per rating
let ratingStarsChart = null; // Global variable to store the chart instance
function ratingStars(user_data) {
    console.log('ratingStars called with data:', user_data); // Debugging statement

    // Mobile detection
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Log filtered data to verify
    console.log('Filtered Data:', filteredData);

    // Destroy existing chart instance if it exists
    if (ratingStarsChart) {
        ratingStarsChart.destroy();
    }

    // Create a new chart instance
    const ctx = document.getElementById("ratingStars_id").getContext('2d');

    ratingStarsChart = new Chart(
        document.getElementById("ratingStars_id"),
        {
            type: 'bar',
            data: {
                labels: filteredData.map(row => row.rating),
                datasets: [
                    {
                        data: filteredData.map(row => row.rating_count),
                        backgroundColor: '#131313', // Set bar color to #131313
                        hoverBackgroundColor: '#DC7283', // Hover color
                        borderWidth: 0
                    }
                ]
            },
            options: {
                title: {
                    display: false
                },
                legend: { display: false },
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: { display: false, beginAtZero: true }, // Remove y-axis text
                        gridLines: { display: false } // Remove y-axis grid lines
                    }],
                    xAxes: [{
                        ticks: { display: false }, // Remove x-axis text
                        gridLines: { display: false } // Remove x-axis grid lines
                    }]
                },
                tooltips: {
                    callbacks: {
                        title: function(tooltipItems, data) {
                            let index = tooltipItems[0].index;
                            return filteredData[index].stars;
                        },
                        label: function(tooltipItem, data) {
                            let index = tooltipItem.index;
                            return filteredData[index].rating_count + " Pelis";
                        }
                    },
                    // Disables the color box in the tooltip
                    displayColors: false
                },
                layout: { padding: 20 },
                onClick: function(evt, activeElements) {
                    // If mobile, do not trigger URL opening
                    if (isMobile) {
                        console.log('Click detected on mobile. URL will not open.');
                        return; // Prevent URL opening
                    }

                    // Proceed only if click occurs on a valid element
                    if (activeElements.length > 0) {
                        const datasetIndex = activeElements[0]._datasetIndex;
                        const index = activeElements[0]._index;
                        const rating = filteredData[index].rating;
                        
                        // Construct the URL
                        const url = `https://letterboxd.com/${selectedUser}/films/diary/for/2024/rated/${rating}/`;
                        
                        // Log the generated URL
                        console.log('Generated URL:', url);
                        
                        // Navigate to the URL
                        window.open(url, '_blank'); // Opens in a new tab
                    }
                }
            }
        }
    );
}



// PLOT: proportion of RELEASES watched
let releasesProportionsChart = null; // Global variable to store the chart instance
function releasesProportions(user_data) {
    console.log('releasesProportions called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Filter data for 'Estrenos' and 'Viejas'
    const moviesData = filteredData.filter(item => item.type_movie === 'Estrenos' || item.type_movie === 'Viejas');
    const totalData = filteredData.find(item => item.type_movie === 'Total');

    // Extract labels and data for the chart
    const labels = moviesData.map(item => item.type_movie);
    const data = moviesData.map(item => item.movie_count);

    // Destroy existing chart instance if it exists
    if (releasesProportionsChart) {
        releasesProportionsChart.destroy();
    }

    // Create a new chart instance
    releasesProportionsChart = new Chart(
        document.getElementById("releasesProportions_id"),
        {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#A64253', '#131313'], // Colors for 'Viejas' and 'Estrenos'
                    hoverBackgroundColor: ['#DC7283', '#515151'], // Hover colors for 'Viejas' and 'Estrenos'
                    borderWidth: 1
                }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                callbacks: {
                    title: function(tooltipItems, data) {
                        const total = totalData.movie_count;
                        const value = data.datasets[0].data[tooltipItems[0].index];
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${percentage}%`;
                    },
                    label: function(tooltipItem, data) {
                        const value = data.datasets[0].data[tooltipItem.index];
                        return `${value} de ${totalData.movie_count}`;
                    }
                },
                displayColors: false
            },
            legend: {
                display: true,
                position: 'left',
                align: 'center'
            }
        }
        }
    );

    // Trigger a resize on window resize (this will help the chart resize dynamically)
    window.addEventListener('resize', function() {
        releasesProportionsChart.update();
    });
}


// PLOT: Biggest POSITIVE difference
let positiveDiffChart = null; // Global variable to store the chart instance
function positiveDiff(user_data) {
    console.log('positiveDiff called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (positiveDiffChart) {
        positiveDiffChart.destroy();
    }

    const container = document.getElementById('diffAvg_Positive_id'); // Get the container element

    if (!container) {
        console.error('Element with id "diffAvg_Positive_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    filteredData.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        // Change cursor to a hand when hovering over the image
        img.style.cursor = 'pointer';

        // Add click event listener to open URL in a new tab
        img.addEventListener('click', () => {
            if (item.film_url) {
                window.open(item.film_url, '_blank');
            } else {
                console.warn('film_url is missing for item:', item);
            }
        });

        const rating = document.createElement('div');
        rating.textContent = item.rating;
        rating.style.marginTop = '5px';
        rating.style.color = '#131313'; // Change rating color to a darker grey

        const avg = document.createElement('div');
        avg.textContent = item.avg;
        avg.style.marginTop = '2px';
        avg.style.color = '#707070'; // Change avg color to a lighter grey
        avg.style.fontSize = '12px'; // Set font size

        movieDiv.appendChild(img);
        movieDiv.appendChild(rating);
        movieDiv.appendChild(avg);
        container.appendChild(movieDiv);
    });
}


// PLOT: Biggest NEGATIVE difference
let negativeDiffChart = null; // Global variable to store the chart instance
function negativeDiff(user_data) {
    console.log('negativeDiff called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (negativeDiffChart) {
        negativeDiffChart.destroy();
    }

    const container = document.getElementById('diffAvg_Negative_id'); // Get the container element

    if (!container) {
        console.error('Element with id "diffAvg_Negative_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    filteredData.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        // Change cursor to a hand when hovering over the image
        img.style.cursor = 'pointer';

        // Add click event listener to open URL in a new tab
        img.addEventListener('click', () => {
            if (item.film_url) {
                window.open(item.film_url, '_blank');
            } else {
                console.warn('film_url is missing for item:', item);
            }
        });

        const rating = document.createElement('div');
        rating.textContent = item.rating;
        rating.style.marginTop = '5px';
        rating.style.color = '#131313'; // Change rating color to a darker grey

        const avg = document.createElement('div');
        avg.textContent = item.avg;
        avg.style.marginTop = '2px';
        avg.style.color = '#707070'; // Change avg color to a lighter grey
        avg.style.fontSize = '12px'; // Set font size

        movieDiv.appendChild(img);
        movieDiv.appendChild(rating);
        movieDiv.appendChild(avg);
        container.appendChild(movieDiv);
    });
}


// PLOT: High and Low movies
let high_low_moviesChart = null; // Global variable to store the chart instance
function high_low_movies(user_data) {
    console.log('high_low_movies called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Destroy existing chart instance if it exists
    if (high_low_moviesChart) {
        high_low_moviesChart.destroy();
    }

    const container = document.getElementById('highAndLows_id'); // Get the container element

    if (!container) {
        console.error('Element with id "highAndLows_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    filteredData.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        const hiLowLabel = document.createElement('div');
        hiLowLabel.textContent = item.hi_low_labels;
        hiLowLabel.style.marginBottom = '5px';
        hiLowLabel.style.color = '#131313'; // Change hi_low_labels color to a darker grey
        hiLowLabel.style.fontSize = '10px'; // Reduce font size
        hiLowLabel.style.fontWeight = 'bold'; // Make text bold

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        // Change cursor to a hand when hovering over the image
        img.style.cursor = 'pointer';

        // Add click event listener to open URL in a new tab
        img.addEventListener('click', () => {
            if (item.film_url) {
                window.open(item.film_url, '_blank');
            } else {
                console.warn('film_url is missing for item:', item);
            }
        });

        const valueLabels = document.createElement('div');
        valueLabels.textContent = item.value_labels;
        valueLabels.style.marginTop = '5px';
        valueLabels.style.color = '#131313'; // Change value_labels color to a darker grey

        movieDiv.appendChild(hiLowLabel);
        movieDiv.appendChild(img);
        movieDiv.appendChild(valueLabels);
        container.appendChild(movieDiv);
    });
}


// PLOT: Best Picture Winners
let bestPicWinnersChart = null; // Global variable to store the chart instance
function bestPicWinners(user_data) {
    console.log('bestPicWinners called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Extract labels and data for the chart
    const labels = filteredData.map(item => item.condition);
    const data = filteredData.map(item => item.percentage);

    // Find the percentage value for "Vistos"
    const vistosEntry = filteredData.find(item => item.condition === "Vistos");
    const vistosPercentage = vistosEntry ? `${vistosEntry.percentage}%` : 'N/A';

    // Destroy existing chart instance if it exists
    if (bestPicWinnersChart) {
        bestPicWinnersChart.destroy();
    }

    // Create a new chart instance
    bestPicWinnersChart = new Chart(
        document.getElementById("bestPicWinners_id"),
        {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#A64253', '#131313'], // Colors for 'Viejas' and 'Estrenos'
                    hoverBackgroundColor: ['#DC7283', '#515151'], // Hover colors for 'Viejas' and 'Estrenos'
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: (chart) => {
                    const { width } = chart;
                    const { ctx } = chart;
                    ctx.save();
                    ctx.fillStyle = '#333';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    // Dynamically adjust font size with min and max limits
                    let fontSize = Math.max(16, Math.min(width / 10, 20)); // Min 16px, Max 20px
                    ctx.font = `bold ${fontSize}px Arial`; // Set the font size

                    const centerX = width / 2;
                    const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;

                    ctx.fillText(vistosPercentage, centerX, centerY);
                    ctx.restore();
                }
            }]
        }
    );
}


// PLOT: Top 100 Argentina
let top100_ArgChart = null; // Global variable to store the chart instance
function top100_Arg(user_data) {
    console.log('top100_Arg called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Extract labels and data for the chart
    const labels = filteredData.map(item => item.condition);
    const data = filteredData.map(item => item.percentage);

    // Find the percentage value for "Vistos"
    const vistosEntry = filteredData.find(item => item.condition === "Vistos");
    const vistosPercentage = vistosEntry ? `${vistosEntry.percentage}%` : 'N/A';

    // Destroy existing chart instance if it exists
    if (top100_ArgChart) {
        top100_ArgChart.destroy();
    }

    // Create a new chart instance
    top100_ArgChart = new Chart(
        document.getElementById("top100Arg_id"),
        {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#A64253', '#131313'], // Colors for 'Viejas' and 'Estrenos'
                    hoverBackgroundColor: ['#DC7283', '#515151'], // Hover colors for 'Viejas' and 'Estrenos'
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: (chart) => {
                    const { width } = chart;
                    const { ctx } = chart;
                    ctx.save();
                    ctx.fillStyle = '#333';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    // Dynamically adjust font size with min and max limits
                    let fontSize = Math.max(16, Math.min(width / 10, 20)); // Min 16px, Max 20px
                    ctx.font = `bold ${fontSize}px Arial`; // Set the font size

                    const centerX = width / 2;
                    const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;

                    ctx.fillText(vistosPercentage, centerX, centerY);
                    ctx.restore();
                }
            }]
        }
    );
}


// PLOT: Pronto Pinarello Movies
let prontoMoviesChart = null; // Global variable to store the chart instance
function prontoMovies(user_data) {
    console.log('prontoMovies called with data:', user_data); // Debugging statement
    const userInput = document.getElementById('userInput'); // Get the user input

    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }

    const selectedUser = userInput.value.trim();

    // Filter data if input is not empty
    let filteredData = user_data;
    if (selectedUser) {
        filteredData = user_data.filter(item => item.user === selectedUser);
    }

    // Extract labels and data for the chart
    const labels = filteredData.map(item => item.condition);
    const data = filteredData.map(item => item.percentage);

    // Find the percentage value for "Vistos"
    const vistosEntry = filteredData.find(item => item.condition === "Vistos");
    const vistosPercentage = vistosEntry ? `${vistosEntry.percentage}%` : 'N/A';

    // Destroy existing chart instance if it exists
    if (prontoMoviesChart) {
        prontoMoviesChart.destroy();
    }

    // Create a new chart instance
    prontoMoviesChart = new Chart(
        document.getElementById("prontoMovies_id"),
        {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: ['#A64253', '#131313'], // Colors for 'Viejas' and 'Estrenos'
                    hoverBackgroundColor: ['#DC7283', '#515151'], // Hover colors for 'Viejas' and 'Estrenos'
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    enabled: false
                },
                legend: {
                    display: false
                }
            },
            plugins: [{
                id: 'centerText',
                beforeDraw: (chart) => {
                    const { width } = chart;
                    const { ctx } = chart;
                    ctx.save();
                    ctx.fillStyle = '#333';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';

                    // Dynamically adjust font size with min and max limits
                    let fontSize = Math.max(16, Math.min(width / 10, 20)); // Min 16px, Max 20px
                    ctx.font = `bold ${fontSize}px Arial`; // Set the font size

                    const centerX = width / 2;
                    const centerY = chart.chartArea.top + (chart.chartArea.bottom - chart.chartArea.top) / 2;

                    ctx.fillText(vistosPercentage, centerX, centerY);
                    ctx.restore();
                }
            }]
        }
    );
}


// PLOT: Top Releases Resumitos
function topReleasesResumitos(user_data) {
    const container = document.getElementById('topReleasesResumitos_id'); // Get the container element

    if (!container) {
        console.error('Element with id "topReleasesResumitos_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    user_data.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        const avg_resumito_rating = document.createElement('div');
        avg_resumito_rating.textContent = item.avg_resumito_rating + ' ★';
        avg_resumito_rating.style.marginTop = '5px';
        avg_resumito_rating.style.color = '#131313'; // Change avg_resumito_rating color to a darker grey

        movieDiv.appendChild(img);
        movieDiv.appendChild(avg_resumito_rating);
        container.appendChild(movieDiv);
    });
}


// PLOT: Top Movies Resumitos
function topMoviesResumitos(user_data) {
    const container = document.getElementById('topMoviesResumitos_id'); // Get the container element

    if (!container) {
        console.error('Element with id "topMoviesResumitos_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    user_data.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        const avg_resumito_rating = document.createElement('div');
        avg_resumito_rating.textContent = item.avg_resumito_rating + ' ★';
        avg_resumito_rating.style.marginTop = '5px';
        avg_resumito_rating.style.color = '#131313'; // Change avg_resumito_rating color to a darker grey

        movieDiv.appendChild(img);
        movieDiv.appendChild(avg_resumito_rating);
        container.appendChild(movieDiv);
    });
}


// PLOT: Top Watched on Stream Resumitos
function topStreamResumitos(user_data) {
    const container = document.getElementById('topStreamResumitos_id'); // Get the container element

    if (!container) {
        console.error('Element with id "topStreamResumitos_id" not found.');
        return; // Stop execution if container doesn't exist
    }

    // Clear previous content
    container.innerHTML = '';

    // Create a new div for each movie
    user_data.forEach(item => {
        const movieDiv = document.createElement('div');
        movieDiv.style.display = 'inline-block';
        movieDiv.style.margin = '20px';
        movieDiv.style.textAlign = 'center';

        const img = document.createElement('img');
        img.src = item.movie;
        img.style.width = '100px';
        img.style.height = '150px';
        img.style.display = 'block';

        const avg_resumito_rating = document.createElement('div');
        avg_resumito_rating.textContent = item.avg_resumito_rating + ' ★';
        avg_resumito_rating.style.marginTop = '5px';
        avg_resumito_rating.style.color = '#131313'; // Change avg_resumito_rating color to a darker grey

        movieDiv.appendChild(img);
        movieDiv.appendChild(avg_resumito_rating);
        container.appendChild(movieDiv);
    });
}


// PLOT: Matching score with compareInput
function MatchingScore(user_data) {
    // Get the user input
    const userInput = document.getElementById('userInput');
    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }
    const selectedUser = userInput.value.trim();

    // Get the compare input
    const compareInput = document.getElementById('compareInput');
    if (!compareInput) {
        console.error('Element with id "compareInput" not found.');
        return; // Stop execution if compareInput doesn't exist
    }
    const compare_input = compareInput.value.trim();

    // Filter datasets by user
    const userData = user_data.filter(row => row.user === selectedUser);
    const compareData = user_data.filter(row => row.user === compare_input);

    // Create sets of titles for both users
    const userTitles = new Set(userData.map(row => row.movie_query));
    const compareTitles = new Set(compareData.map(row => row.movie_query));

    // Find common titles
    const commonTitles = [...userTitles].filter(movie_query => compareTitles.has(movie_query));

    // Filter datasets by common titles
    const filteredUserData = userData.filter(row => commonTitles.includes(row.movie_query));
    const filteredCompareData = compareData.filter(row => commonTitles.includes(row.movie_query));

    // Create maps for quick lookup
    const userRatings = new Map(filteredUserData.map(row => [row.movie_query, row.rating]));
    const compareRatings = new Map(filteredCompareData.map(row => [row.movie_query, row.rating]));

    // Calculate similarity score
    let totalDifference = 0;
    commonTitles.forEach(movie_query => {
        const rating1 = userRatings.get(movie_query);
        const rating2 = compareRatings.get(movie_query);
        totalDifference += Math.abs(rating1 - rating2);
    });

    const maxDifference = commonTitles.length * 9; // Max difference per movie_query is 9 (10-1)
    const similarityScore = commonTitles.length > 0 
        ? ((1 - totalDifference / maxDifference) * 100).toFixed(2) 
        : 0;

    
    // Determine font color based on similarityScore
    let fontColor = '';
    if (similarityScore <= 25) {
        fontColor = 'darkred';
    } else if (similarityScore <= 50) {
        fontColor = 'red';
    } else if (similarityScore <= 75) {
        fontColor = 'lightgreen';
    } else {
        fontColor = 'darkgreen';
    }

    // Display result in the div with id 'matching_score_id'
    const resultDiv = document.getElementById('matching_score_id');
    if (resultDiv) {
        resultDiv.style.fontFamily = 'Arial, sans-serif';
        resultDiv.style.fontSize = '40px';
        resultDiv.style.fontWeight = 'bold';
        resultDiv.style.color = fontColor;
        resultDiv.innerHTML = `${similarityScore}%`;
    }
}


// PLOT: Movies of compared user watched
function MatchingMovies(user_data) {
    // Get the user input
    const userInput = document.getElementById('userInput');
    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }
    const selectedUser = userInput.value.trim();

    // Get the compare input
    const compareInput = document.getElementById('compareInput');
    if (!compareInput) {
        console.error('Element with id "compareInput" not found.');
        return; // Stop execution if compareInput doesn't exist
    }
    const compare_input = compareInput.value.trim();
    // Filter datasets by user
    const userData = user_data.filter(row => row.user === selectedUser);
    const compareData = user_data.filter(row => row.user === compare_input);

    // Create sets of titles for both users
    const userTitles = new Set(userData.map(row => row.movie_query));
    const compareTitles = new Set(compareData.map(row => row.movie_query));

    // Find common titles
    const commonTitles = [...compareTitles].filter(movie_query => userTitles.has(movie_query));

    // Calculate overlap percentage
    const overlapPercentage = compareTitles.size > 0 
        ? ((commonTitles.length / compareTitles.size) * 100).toFixed(2) 
        : 0;

    // Determine font color based on overlapPercentage
    let fontColor = '';
    if (overlapPercentage <= 25) {
        fontColor = 'darkred';
    } else if (overlapPercentage <= 50) {
        fontColor = 'red';
    } else if (overlapPercentage <= 75) {
        fontColor = 'lightgreen';
    } else {
        fontColor = 'darkgreen';
    }

    // Display result in the div with id 'movies_in_common_id'
    const resultDiv = document.getElementById('movies_in_common_id');
    if (resultDiv) {
        resultDiv.style.fontFamily = 'Arial, sans-serif';
        resultDiv.style.fontSize = '40px';
        resultDiv.style.fontWeight = 'bold';
        resultDiv.style.color = fontColor;
        resultDiv.innerHTML = `${overlapPercentage}%`;
    }
}


// PLOT: Benevolece Score vs. average
function avgBenevoleceScore(user_data) {
    // Get the user input
    const userInput = document.getElementById('userInput');
    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }
    const selectedUser = userInput.value.trim();

    // Filter dataset by user
    const userData = user_data.filter(row => row.user === selectedUser);

    // Filter out rows with missing ratings
    const validData = userData.filter(row => row.rating != null && row.avg_rating != null);

    // Calculate the benevolence score
    let totalDifference = 0;
    validData.forEach(row => {
        totalDifference += row.rating - row.avg_rating;
    });

    const benevolenceScore = validData.length > 0 
        ? ((totalDifference / validData.length) * 10).toFixed(2) // Scale to percentage
        : 0;

    // Determine font color based on benevolenceScore
    let fontColor = '';
    if (benevolenceScore < -25) {
        fontColor = 'darkred';
    } else if (benevolenceScore < 0) {
        fontColor = 'red';
    } else if (benevolenceScore <= 25) {
        fontColor = 'lightgreen';
    } else {
        fontColor = 'darkgreen';
    }

    // Display result in the div with id 'avg_benevolence_score_id'
    const resultDiv = document.getElementById('avg_benevolence_score_id');
    if (resultDiv) {
        resultDiv.style.fontFamily = 'Arial, sans-serif';
        resultDiv.style.fontSize = '40px';
        resultDiv.style.fontWeight = 'bold';
        resultDiv.style.color = fontColor;
        resultDiv.innerHTML = `${benevolenceScore}%`;
    }
}


// PLOT: Top Positive Difference
function compared_TopPositiveDiff(user_data) {
    // Get the user input
    const userInput = document.getElementById('userInput');
    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }
    const selectedUser = userInput.value.trim();

    // Get the compare input
    const compareInput = document.getElementById('compareInput');
    if (!compareInput) {
        console.error('Element with id "compareInput" not found.');
        return; // Stop execution if compareInput doesn't exist
    }
    const compare_input = compareInput.value.trim();

    // Filter datasets by user
    const userData = user_data.filter(row => row.user === selectedUser);
    const compareData = user_data.filter(row => row.user === compare_input);

    // Step 2: Filter compare_input to only include movie_query present in user_input
    const userMovieQueries = new Set(userData.map(row => row.movie_query));
    const filteredCompareData = compareData.filter(row => userMovieQueries.has(row.movie_query));

    // Step 3: Merge compareData into userData based on movie_query
    const mergedData = userData.map(userRow => {
        const compareRow = filteredCompareData.find(row => row.movie_query === userRow.movie_query);
        return {
            ...userRow,
            compared_rating: compareRow ? compareRow.rating : null,
            compared_star_rating: compareRow ? compareRow.star_rating : null,
            difference: compareRow ? userRow.rating - compareRow.rating : null
        };
    });

    // Step 4: Sort by difference and get top 6
    const topDifferences = mergedData
        .filter(row => row.difference !== null)
        .sort((a, b) => b.difference - a.difference)
        .slice(0, 6);

    // Step 5: Display images and labels
    const container = document.getElementById('compared_topPositiveDiff_id');
    if (container) {
        container.innerHTML = ''; // Clear existing content
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '20px';
        container.style.justifyContent = 'center';

        topDifferences.forEach(row => {
            const card = document.createElement('div');
            card.style.display = 'inline-block';
            card.style.margin = '10px';
            card.style.textAlign = 'center';

            // Image
            const img = document.createElement('img');
            img.src = row.film_poster; // Using 'film_poster' for image URL
            img.style.width = '100px';
            img.style.height = '150px';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            img.style.marginBottom = '8px';

            // Star Rating Label
            const starRating = document.createElement('div');
            starRating.textContent = `${row.star_rating}`;
            starRating.style.fontSize = '14px';
            starRating.style.fontWeight = 'bold';
            starRating.style.color = 'green';

            // Compared Star Rating Label
            const comparedStarRating = document.createElement('div');
            comparedStarRating.textContent = `${row.compared_star_rating}`;
            comparedStarRating.style.fontSize = '14px';
            comparedStarRating.style.fontWeight = 'bold';
            comparedStarRating.style.color = '#131313';

            // Append elements
            card.appendChild(img);
            card.appendChild(starRating);
            card.appendChild(comparedStarRating);

            container.appendChild(card);
        });
    }
}


// PLOT: Top Negative Difference
function compared_TopNegativeDiff(user_data) {
    // Get the user input
    const userInput = document.getElementById('userInput');
    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }
    const selectedUser = userInput.value.trim();

    // Get the compare input
    const compareInput = document.getElementById('compareInput');
    if (!compareInput) {
        console.error('Element with id "compareInput" not found.');
        return; // Stop execution if compareInput doesn't exist
    }
    const compare_input = compareInput.value.trim();

    // Filter datasets by user
    const userData = user_data.filter(row => row.user === selectedUser);
    const compareData = user_data.filter(row => row.user === compare_input);

    // Step 2: Filter compare_input to only include movie_query present in user_input
    const userMovieQueries = new Set(userData.map(row => row.movie_query));
    const filteredCompareData = compareData.filter(row => userMovieQueries.has(row.movie_query));

    // Step 3: Merge compareData into userData based on movie_query
    const mergedData = userData.map(userRow => {
        const compareRow = filteredCompareData.find(row => row.movie_query === userRow.movie_query);
        return {
            ...userRow,
            compared_rating: compareRow ? compareRow.rating : null,
            compared_star_rating: compareRow ? compareRow.star_rating : null,
            difference: compareRow ? userRow.rating - compareRow.rating : null
        };
    });

    // Step 4: Sort by difference (ascending) and get bottom 6
    const bottomDifferences = mergedData
        .filter(row => row.difference !== null)
        .sort((a, b) => a.difference - b.difference)
        .slice(0, 6);

    // Step 5: Display images and labels
    const container = document.getElementById('compared_topNegativeDiff_id');
    if (container) {
        container.innerHTML = ''; // Clear existing content
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '20px';
        container.style.justifyContent = 'center';

        bottomDifferences.forEach(row => {
            const card = document.createElement('div');
            card.style.display = 'inline-block';
            card.style.margin = '10px';
            card.style.textAlign = 'center';

            // Image
            const img = document.createElement('img');
            img.src = row.film_poster; // Using 'film_poster' for image URL
            img.style.width = '100px';
            img.style.height = '150px';
            img.style.objectFit = 'cover';
            img.style.display = 'block';
            img.style.marginBottom = '8px';

            // Star Rating Label
            const starRating = document.createElement('div');
            starRating.textContent = `${row.star_rating}`;
            starRating.style.fontSize = '14px';
            starRating.style.fontWeight = 'bold';
            starRating.style.color = 'red';

            // Compared Star Rating Label
            const comparedStarRating = document.createElement('div');
            comparedStarRating.textContent = `${row.compared_star_rating}`;
            comparedStarRating.style.fontSize = '14px';
            comparedStarRating.style.fontWeight = 'bold';
            comparedStarRating.style.color = '#131313';

            // Append elements
            card.appendChild(img);
            card.appendChild(starRating);
            card.appendChild(comparedStarRating);

            container.appendChild(card);
        });
    }
}


// PLOT: Benevolence score vs. user
function comparedBenevolenceScore(user_data) {
    // Get the user input
    const userInput = document.getElementById('userInput');
    if (!userInput) {
        console.error('Element with id "userInput" not found.');
        return; // Stop execution if userInput doesn't exist
    }
    const selectedUser = userInput.value.trim();

    // Get the compare input
    const compareInput = document.getElementById('compareInput');
    if (!compareInput) {
        console.error('Element with id "compareInput" not found.');
        return; // Stop execution if compareInput doesn't exist
    }
    const compare_input = compareInput.value.trim();

    // If both users are the same, return a score of 0 directly
    if (selectedUser === compare_input) {
        const container = document.getElementById('compared_benevolenceScore_id');
        if (container) {
            container.innerHTML = ''; // Clear previous content
            const scoreElement = document.createElement('div');
            scoreElement.style.fontFamily = 'Arial, sans-serif';
            scoreElement.style.fontSize = '40px';
            scoreElement.style.fontWeight = 'bold';
            scoreElement.textContent = `0%`;
            scoreElement.style.color = 'black'; // 0% benevolence score is neutral and green
            container.appendChild(scoreElement);
        }
        return;
    }

    // Filter datasets by user
    const userData = user_data.filter(row => row.user === selectedUser);
    const compareData = user_data.filter(row => row.user === compare_input);

    // Step 2: Filter compare_input to only include movie_query present in user_input
    const userMovieQueries = new Set(userData.map(row => row.movie_query));
    const filteredCompareData = compareData.filter(row => userMovieQueries.has(row.movie_query));

    // Step 3: Merge compareData into userData based on movie_query
    const mergedData = userData.map(userRow => {
        const compareRow = filteredCompareData.find(row => row.movie_query === userRow.movie_query);
        return {
            ...userRow,
            compared_rating: compareRow ? compareRow.rating : null
        };
    });

    // Calculate the benevolence score
    let totalDifference = 0;
    mergedData.forEach(row => {
        totalDifference += row.rating - row.compared_rating;
    });

    const benevolenceScore = mergedData.length > 0 
        ? ((totalDifference / mergedData.length) * 10).toFixed(2) // Scale to percentage
        : 0;

    // Step 5: Display benevolence score with color change based on the value
    let fontColor = '';
    if (benevolenceScore < -25) {
        fontColor = 'darkred';
    } else if (benevolenceScore < 0) {
        fontColor = 'red';
    } else if (benevolenceScore <= 25) {
        fontColor = 'lightgreen';
    } else {
        fontColor = 'darkgreen';
    }

    // Display result in the div with id 'compared_benevolenceScore_id'
    const resultDiv = document.getElementById('compared_benevolenceScore_id');
    if (resultDiv) {
        resultDiv.style.fontFamily = 'Arial, sans-serif';
        resultDiv.style.fontSize = '40px';
        resultDiv.style.fontWeight = 'bold';
        resultDiv.style.color = fontColor;
        resultDiv.innerHTML = `${benevolenceScore}%`;
    }
}























// Event Listeners for the plot buttons (ONLY DUALS)
const buttonPairs = [
    ['topReleases', 'topMovies'],
    ['weeklyWatched', 'weeklyRated'],
    ['genresWatched', 'genresRated'],
    ['countriesWatched', 'countriesRated'],
    ['languagesWatched', 'languagesRated'],
    ['actorsWatched', 'actorsRated'],
    ['directorsWatched', 'directorsRated'],
    ['diffAvg_Positive', 'diffAvg_Negative'],
    ['compared_topPositiveDiff', 'compared_topNegativeDiff']
];

buttonPairs.forEach(([btn1, btn2]) => {
    document.getElementById(`${btn1}_button`).addEventListener('click', function() {
        document.getElementById(`${btn1}_id`).style.display = 'block';
        document.getElementById(`${btn2}_id`).style.display = 'none';
        this.classList.add('selected');
        document.getElementById(`${btn2}_button`).classList.remove('selected');
    });

    document.getElementById(`${btn2}_button`).addEventListener('click', function() {
        document.getElementById(`${btn1}_id`).style.display = 'none';
        document.getElementById(`${btn2}_id`).style.display = 'block';
        this.classList.add('selected');
        document.getElementById(`${btn1}_button`).classList.remove('selected');
    });
});



// Event Listeners for the plot buttons (ONLY TRIOS)
const buttons = [
    'topReleasesResumitos',
    'topMoviesResumitos',
    'topStreamResumitos'
];

buttons.forEach((button) => {
    document.getElementById(`${button}_button`).addEventListener('click', function() {
        buttons.forEach((btn) => {
            document.getElementById(`${btn}_id`).style.display = btn === button ? 'block' : 'none';
            document.getElementById(`${btn}_button`).classList.toggle('selected', btn === button);
        });
    });
});


