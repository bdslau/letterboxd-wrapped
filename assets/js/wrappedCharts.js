// Load Google Charts library
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawCharts); // Ensure all charts are drawn after the library loads


// Function to draw all charts
function drawCharts() {
    // PLOT: Movies watched per day of the week
    fetch('/assets/docs/user_days.json')
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
    fetch('/assets/docs/user_topReleases.json')
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
    fetch('/assets/docs/display_stats.json')
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
    fetch('/assets/docs/user_topAllMovies.json')
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
    fetch('/assets/docs/user_weekly_data.json')
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
    fetch('/assets/docs/genresWatched_data.json')
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
    fetch('/assets/docs/genresRated_data.json')
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
    fetch('/assets/docs/countriesWatched_data.json')
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
    fetch('/assets/docs/countriesRated_data.json')
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
    fetch('/assets/docs/languagesWatched_data.json')
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
    fetch('/assets/docs/languagesRated_data.json')
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
    fetch('/assets/docs/actors_watched.json')
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
    fetch('/assets/docs/actors_rated.json')
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
    fetch('/assets/docs/directors_watched.json')
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
    fetch('/assets/docs/directors_rated.json')
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
    fetch('/assets/docs/ratings_data.json')
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
    fetch('/assets/docs/releasesProportion.json')
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
    fetch('/assets/docs/positive_diff.json')
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
    fetch('/assets/docs/negative_diff.json')
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
    fetch('/assets/docs/high_low_data.json')
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
    
    
    // PLOT: Pronto Pinarello Movies
    fetch('/assets/docs/prontoMovies.json')
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
    
    
    // PLOT: Mapped countries
    fetch('/assets/docs/all_countries.json')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load all_countries.json');
            return response.json();
        })
        .then(data => {
            console.log('all_countries data:', data); // Debugging statement
            movieMap(data);

            // Add event listener to the submit button if it exists
            const submitButtonWrapped = document.getElementById('submitButtonWrapped');
            if (submitButtonWrapped) {
                submitButtonWrapped.addEventListener('click', () => movieMap(data));
            } else {
                console.warn('Button with id "submitButtonWrapped" not found.');
            }
        })
        .catch(error => console.error('Error fetching all_countries data:', error));

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
                    // Prevent URL opening on mobile devices
                    if (isMobile) {
                        console.log('Click detected on mobile. URL will not open.');
                        evt.preventDefault(); // Prevent default action for mobile
                        return; // Stop further processing
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


// PLOT: Mapped coutnries
function movieMap(user_data) {
    console.log('movieMap called with data:', user_data); // Debugging statement 

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

    // Summarize watch_count by country
    const countryWatchCount = {};
    filteredData.forEach(item => {
        countryWatchCount[item.country] = (countryWatchCount[item.country] || 0) + item.watch_count;
    });

    // Create a color scale based on watch_count
    const maxCount = Math.max(...Object.values(countryWatchCount), 1);
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, maxCount]);

    // Create or select the SVG container with added margin for space
    const svg = d3.select('#mapContainer')
        .attr('width', '100%')
        .attr('height', '100%')
        .style('background-color', 'white')
        .style('margin', '10px'); // Added margin for space around the plot

    // Clear existing elements
    svg.selectAll('*').remove();

    // Create a tooltip for hover interactions with smaller font size
    const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('padding', '8px')
        .style('background', 'rgba(0, 0, 0, 0.7)')
        .style('color', 'white')
        .style('border-radius', '4px')
        .style('visibility', 'hidden')
        .style('font-size', '10px'); // Smaller font size for tooltip

    // Load and plot GeoJSON data
    d3.json('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
        .then(geojson => {
            const projection = d3.geoMercator().scale(130).translate([window.innerWidth / 2, window.innerHeight / 2]);
            const path = d3.geoPath().projection(projection);

            svg.selectAll('path')
                .data(geojson.features)
                .enter()
                .append('path')
                .attr('d', path)
                .attr('fill', d => {
                    const country = d.properties.name;
                    const count = countryWatchCount[country] || 0;
                    return colorScale(count);
                })
                .attr('stroke', '#131313')
                .attr('stroke-width', 0.5)
                .on('mouseover', function (event, d) {
                    const country = d.properties.name;
                    const count = countryWatchCount[country] || 0;

                    d3.select(this).style('opacity', 0.7);

                    tooltip
                        .style('visibility', 'visible')
                        .html(`${country}<br>Pelis: ${count}`);
                })
                .on('mousemove', function (event) {
                    tooltip
                        .style('top', `${event.pageY + 10}px`)
                        .style('left', `${event.pageX + 10}px`);
                })
                .on('mouseout', function () {
                    d3.select(this).style('opacity', 1);
                    tooltip.style('visibility', 'hidden');
                });
        })
        .catch(err => console.error('Error loading GeoJSON data:', err));
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
    ['diffAvg_Positive', 'diffAvg_Negative']
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




