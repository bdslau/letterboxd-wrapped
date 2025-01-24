import pandas as pd
import json
from bs4 import BeautifulSoup
import requests
import numpy as np
import sqlite3

# Establish database connection
conn = sqlite3.connect('C:/Users/Lucas/Desktop/letterboxd/data/database.db')

# Function to get the list's page count
def get_list_page_count(url):
    r = requests.get(url)

    soup = BeautifulSoup(r.text, "lxml")

    body = soup.find("body")

    try:
        if "error" in body["class"]:
            return -1, None
    except KeyError:
        print(body)
        return -1, None

    try:
        page_link = soup.findAll("li", attrs={"class", "paginate-page"})[-1]
        num_pages = int(page_link.find("a").text.replace(",", ""))
    except IndexError:
        num_pages = 1

    return num_pages


# Function to convert a value to a star_rating
def convert_to_stars(rating):
    rating_10scale = float(rating) * 2  # Convert rating to a scale of 0-10
    full_stars = int(rating_10scale // 2)  # Number of full stars
    half_star = "½" if rating_10scale % 2 == 1 else ""  # Add "½" if there's a remainder
    return "★" * full_stars + half_star  # Combine full stars and half star


# Function to calculate the percentage of watched movies from a list
def calculate_list_watched_percentages(df, list_queries):
    results = []
    for user, group in df.groupby('user'):
        user_queries = set(group['query'])
        viewed = len([q for q in list_queries if q in user_queries])
        total = len(list_queries)
        not_viewed = total - viewed
        
        viewed_percentage = (viewed / total) * 100
        not_viewed_percentage = (not_viewed / total) * 100
        
        results.append({'user': user, 'condition': 'Vistos', 'percentage': round(viewed_percentage, 1)})
        results.append({'user': user, 'condition': 'No vistos', 'percentage': round(not_viewed_percentage, 1)})

    return pd.DataFrame(results)




# Import raw data
cast_crew_photos = pd.read_sql("SELECT * FROM photos", conn)
cast_data = pd.read_sql("SELECT * FROM cast_data", conn)
crew_data = pd.read_sql("SELECT * FROM crew_data", conn)
userDiary = pd.read_sql("SELECT * FROM user_diaries", conn)
userFilms = pd.read_sql("SELECT * FROM user_films", conn)
countries_data = pd.read_sql("SELECT * FROM countries_data", conn)
languages_data = pd.read_sql("SELECT * FROM languages_data", conn)
genres_data = pd.read_sql("SELECT * FROM genres_data", conn)
films_data = pd.read_sql("SELECT * FROM films_data", conn)
films_poster = pd.read_sql("SELECT * FROM posters", conn)


# Select specific columns from userDiary
userDiary = userDiary[['user', 'query', 'viewing_date', 'rating', 'liked', 'rewatch']]

# Convert 'rating' to integer
userDiary['rating'] = pd.to_numeric(userDiary['rating'], errors='coerce').fillna(0).astype(int)


# Filter to only include 2024 data
userDiary['viewing_date'] = pd.to_datetime(userDiary['viewing_date'], errors='coerce')
diary24 = userDiary[userDiary['viewing_date'].dt.year == 2024]


# Merge diary24 with films_data
detailed_diary = diary24.merge(films_data, on='query', how='left')

# Change the scale of avg_rating from 0-10 to 0-5
detailed_diary['avg_rating'] = detailed_diary['avg_rating'].astype(str)  # Convert to string
detailed_diary['avg_rating'] = detailed_diary['avg_rating'].str.replace(',', '.')  # Replace ',' with '.'
detailed_diary['avg_rating'] = detailed_diary['avg_rating'].astype(float)  # Convert back to float for division
detailed_diary['avg_rating'] = (detailed_diary['avg_rating'] / 2).round(2)  # Divide by 2 and round to 2 decimals
detailed_diary['avg_rating'] = detailed_diary['avg_rating'].astype(str)  # Convert to string again

# Change the scale of rating from 0-10 to 0-5
detailed_diary['rating'] = detailed_diary['rating'].astype(str)  # Convert to string
detailed_diary['rating'] = detailed_diary['rating'].str.replace(',', '.')  # Replace ',' with '.'
detailed_diary['rating'] = detailed_diary['rating'].astype(float)  # Convert back to float for division
detailed_diary['rating'] = (detailed_diary['rating'] / 2).round(2)  # Divide by 2 and round to 2 decimals
detailed_diary['rating'] = detailed_diary['rating'].astype(str)  # Convert back to string

# Create difference column
detailed_diary['difference'] = detailed_diary['rating'].astype(float) - detailed_diary['avg_rating'].astype(float)

# Apply the convert_to_stars function to the 'rating' column
detailed_diary['star_rating'] = detailed_diary['rating'].apply(convert_to_stars)



# Rename 'url' to 'name_query' in cast_data and crew_data
cast_data.rename(columns={'url': 'name_query'}, inplace=True)
crew_data.rename(columns={'url': 'name_query'}, inplace=True)

# Remove duplicate rows from cast_data and crew_data
crew_data.drop_duplicates(inplace=True)

# Add a new column 'person_lboxd_url'
cast_data['person_lboxd_url'] = cast_data['name_query'].str.replace(' ', '')
crew_data['person_lboxd_url'] = crew_data['name_query'].str.replace(' ', '')

# Wrangle 'name_query' in cast_data, crew_data and cast_crew_photos
cast_data['name_query'] = cast_data['name_query'].str.extract(r'/([^/]+)/[^/]*$')
crew_data['name_query'] = crew_data['name_query'].str.extract(r'/([^/]+)/[^/]*$')
cast_crew_photos['name_query'] = cast_crew_photos['name_query'].str.extract(r'/([^/]+)/[^/]*$')

# Remove duplicated rows based on the 'name_query' column
cast_crew_photos = cast_crew_photos.drop_duplicates(subset=['name_query'])

# Add the photos urls to the cast_data and crew_data
cast_data = cast_data.merge(cast_crew_photos, on='name_query', how='left')
crew_data = crew_data.merge(cast_crew_photos, on='name_query', how='left')

# If movie appears more than once, keep newest rating
diary24_noRewatch = diary24.sort_values('viewing_date').drop_duplicates(subset=['user', 'query'], keep='last')

# Add cast and crew data to the diary data
cast_ratings = diary24_noRewatch.merge(cast_data, on='query', how='left')
crew_ratings = diary24_noRewatch.merge(crew_data, on='query', how='left')





# Top rated - watched actors --------------------------------------------------------------
# Only include top 10 order actors
cast_ratings = cast_ratings[cast_ratings['order'] <= 10]

# Group by 'user' and 'name_query' to calculate avg_user_rating and watch_count
grouped_cast_ratings = cast_ratings.groupby(['user', 'name_query']).agg(
    avg_user_rating=('rating', 'mean'),
    watch_count=('rating', 'size')
).reset_index()

# Merge with additional columns (name and url) from cast_ratings
grouped_cast_ratings = grouped_cast_ratings.merge(cast_ratings[['name_query', 'name', 'url', 'person_lboxd_url']].drop_duplicates(),
                                                  on='name_query', how='left')

# Filter to only include rows where watch_count is at least 2
grouped_cast_ratings_filtered = grouped_cast_ratings[grouped_cast_ratings['watch_count'] >= 2]

# Get top 5 rows based on avg_user_rating for each user
topCast_rated = grouped_cast_ratings_filtered.sort_values(by=['avg_user_rating', 'name'], ascending=[False, True]) \
    .groupby('user').head(5)[['name', 'url', 'user', 'avg_user_rating', 'person_lboxd_url']]

# Divide the 'avg_user_rating' column by 2 and round to 2 decimal places
topCast_rated['avg_user_rating'] = (topCast_rated['avg_user_rating'] / 2).round(2)

# Get top 5 rows based on watch_count for each user
topCast_watched = grouped_cast_ratings.sort_values('watch_count', ascending=False) \
    .groupby('user').head(5)[['name', 'url', 'user', 'watch_count', 'person_lboxd_url']]


# Save as JSON
topCast_rated = topCast_rated.to_json(orient='records')
with open('assets/docs/actors_rated.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(topCast_rated), f, ensure_ascii=False, indent=4)

topCast_watched = topCast_watched.to_json(orient='records')
with open('assets/docs/actors_watched.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(topCast_watched), f, ensure_ascii=False, indent=4)



# Top rated - watched directors --------------------------------------------------------------
# Only include main directors
crew_ratings = crew_ratings[crew_ratings['job'] == 'Director']

# Group by 'user' and 'name_query' to calculate avg_user_rating and watch_count
grouped_crew_ratings = crew_ratings.groupby(['user', 'name_query']).agg(
    avg_user_rating=('rating', 'mean'),
    watch_count=('rating', 'size')
).reset_index()

# Merge with additional columns (name and url) from crew_ratings
grouped_crew_ratings = grouped_crew_ratings.merge(crew_ratings[['name_query', 'name', 'url', 'person_lboxd_url']].drop_duplicates(),
                                                  on='name_query', how='left')

# Filter to only include rows where watch_count is at least 3
grouped_crew_ratings_filtered = grouped_crew_ratings[grouped_crew_ratings['watch_count'] >= 2]

# Get top 5 rows based on avg_user_rating for each user
topDirectors_rated = grouped_crew_ratings_filtered.sort_values(by=['avg_user_rating', 'name'], ascending=[False, True]) \
    .groupby('user').head(5)[['name', 'url', 'user', 'avg_user_rating', 'person_lboxd_url']]

# Divide the 'avg_user_rating' column by 2 and round to 2 decimal places
topDirectors_rated['avg_user_rating'] = (topDirectors_rated['avg_user_rating'] / 2).round(2)

# Get top 5 rows based on watch_count for each user
topDirectors_watched = grouped_crew_ratings.sort_values('watch_count', ascending=False) \
    .groupby('user').head(5)[['name', 'url', 'user', 'watch_count', 'person_lboxd_url']]


# Save as JSON
topDirectors_rated = topDirectors_rated.to_json(orient='records')
with open('assets/docs/directors_rated.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(topDirectors_rated), f, ensure_ascii=False, indent=4)

topDirectors_watched = topDirectors_watched.to_json(orient='records')
with open('assets/docs/directors_watched.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(topDirectors_watched), f, ensure_ascii=False, indent=4)




# Best Picture Winners Watched -------------------------------------------------------
url = 'https://letterboxd.com/tajlv/list/best-picture/'
num_pages = get_list_page_count(url)
best_pic_queries = []
for i in range(1, num_pages+1):
    url = 'https://letterboxd.com/tajlv/list/best-picture/page/{}/'
    
    # Send a GET request to fetch the web page
    r = requests.get(url.format(i))

    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(r.text, "lxml")

    # Find all <div> elements whose class starts with 'really-lazy-load poster film-poster film-poster-'
    divs = soup.find_all("div", class_=lambda x: x and x.startswith('really-lazy-load poster film-poster film-poster-'))

    if best_pic_queries:
        new_list = [div['data-film-slug'] for div in divs if 'data-film-slug' in div.attrs]
        best_pic_queries.extend(new_list)
    else:
        best_pic_queries = [div['data-film-slug'] for div in divs if 'data-film-slug' in div.attrs]

# Save to JSON file
best_pic_winners = calculate_list_watched_percentages(userFilms, best_pic_queries)
best_pic_winners.to_json('assets/docs/best_pic_winners.json', orient='records')




# Pronto Pinarello Watched -------------------------------------------------------
url = 'https://letterboxd.com/disnick123/list/pronto-pinarello-todas-las-peliculas-vistas/'
num_pages = get_list_page_count(url)
pronto_pinarello_queries = []
for i in range(1, num_pages+1):
    url = 'https://letterboxd.com/disnick123/list/pronto-pinarello-todas-las-peliculas-vistas/page/{}/'
    
    # Send a GET request to fetch the web page
    r = requests.get(url.format(i))

    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(r.text, "lxml")

    # Find all <div> elements whose class starts with 'really-lazy-load poster film-poster film-poster-'
    divs = soup.find_all("div", class_=lambda x: x and x.startswith('really-lazy-load poster film-poster film-poster-'))

    if pronto_pinarello_queries:
        new_list = [div['data-film-slug'] for div in divs if 'data-film-slug' in div.attrs]
        pronto_pinarello_queries.extend(new_list)
    else:
        pronto_pinarello_queries = [div['data-film-slug'] for div in divs if 'data-film-slug' in div.attrs]

# Filter the list to only include values between 'hard-to-kill' and 'final-destination-5' (2024 streams)
start = pronto_pinarello_queries.index('hard-to-kill')
end = pronto_pinarello_queries.index('final-destination-5')
pronto_pina_queries_2024 = pronto_pinarello_queries[start:end + 1]

# Save to JSON file
prontoMovies = calculate_list_watched_percentages(userFilms, pronto_pina_queries_2024)
prontoMovies.to_json('assets/docs/prontoMovies.json', orient='records')




# Top 100 Argentina Watched -------------------------------------------------------
url = 'https://letterboxd.com/matiassanz/list/top-100-best-rated-argentinian-films-on-letterboxd/'
num_pages = get_list_page_count(url)
top_100_arg_queries = []
for i in range(1, num_pages+1):
    url = 'https://letterboxd.com/matiassanz/list/top-100-best-rated-argentinian-films-on-letterboxd/page/{}/'
    
    # Send a GET request to fetch the web page
    r = requests.get(url.format(i))

    # Parse the HTML content with BeautifulSoup
    soup = BeautifulSoup(r.text, "lxml")

    # Find all <div> elements whose class starts with 'really-lazy-load poster film-poster film-poster-'
    divs = soup.find_all("div", class_=lambda x: x and x.startswith('really-lazy-load poster film-poster film-poster-'))

    if top_100_arg_queries:
        new_list = [div['data-film-slug'] for div in divs if 'data-film-slug' in div.attrs]
        top_100_arg_queries.extend(new_list)
    else:
        top_100_arg_queries = [div['data-film-slug'] for div in divs if 'data-film-slug' in div.attrs]

# Save to JSON file
top100_Arg = calculate_list_watched_percentages(userFilms, top_100_arg_queries)
top100_Arg.to_json('assets/docs/top100_Arg.json', orient='records')








# Countries data -------------------------------------------------------
# Add the countries to the diaries data
countries_ratings = diary24_noRewatch.merge(countries_data, on='query', how='inner')

# Group by 'user' and 'country', calculate avg_user_rating and watch_count
grouped_countries = (
    countries_ratings
    .groupby(['user', 'country'])
    .agg(avg_user_rating=('rating', 'mean'), watch_count=('rating', 'size'))
    .reset_index()
)

# Remove duplicate rows (if necessary)
grouped_countries = grouped_countries.drop_duplicates()

# Create df with all countries
grouped_countries_urls = (
    countries_ratings
    .groupby(['user', 'country', 'country_url'])
    .agg(avg_user_rating=('rating', 'mean'), watch_count=('rating', 'size'))
    .reset_index()
)
all_countries = grouped_countries_urls[['user', 'country', 'watch_count', 'country_url']]

# For each User, select the 10 rows with the highest watch_count
countries_watched = (
    grouped_countries
    .sort_values(by=['user', 'watch_count'], ascending=[True, False])
    .groupby('user')
    .head(10)
)

# Filter to only include rows where watch_count is at least 2
grouped_countries_filtered = grouped_countries[grouped_countries['watch_count'] >= 2]

# For each User, select the 10 rows with the highest watch_count
countries_rated = (
    grouped_countries_filtered
    .sort_values(by=['user', 'avg_user_rating'], ascending=[True, False])
    .groupby('user')
    .head(10)
)

# Select columns from countries_watched and countries_rated
countries_watched = countries_watched[['user', 'country', 'watch_count']]
countries_rated = countries_rated[['user', 'country', 'avg_user_rating']]

# Round avg_user_rating
countries_rated['avg_user_rating'] = (countries_rated['avg_user_rating'].astype(float) / 2).round(2)

# Save to JSON file
all_countries.to_json('assets/docs/all_countries.json', orient='records')
countries_watched.to_json('assets/docs/countriesWatched_data.json', orient='records')
countries_rated.to_json('assets/docs/countriesRated_data.json', orient='records')














# Languages data -------------------------------------------------------
# Add the languages to the diaries data
languages_ratings = diary24_noRewatch.merge(languages_data, on='query', how='inner')

# Rename column 'Language' to 'language'
languages_ratings.rename(columns={'Language': 'language'}, inplace=True)

# Filter to only count primary languages Primary
languages_ratings = languages_ratings[languages_ratings['priority'] == 'Primary']

# Group by 'user' and 'language', calculate avg_user_rating and watch_count
grouped_languages = (
    languages_ratings
    .groupby(['user', 'language'])
    .agg(avg_user_rating=('rating', 'mean'), watch_count=('rating', 'size'))
    .reset_index()
)

# Remove duplicate rows (if necessary)
grouped_languages = grouped_languages.drop_duplicates()

# For each User, select the 10 rows with the highest watch_count
languages_watched = (
    grouped_languages
    .sort_values(by=['user', 'watch_count'], ascending=[True, False])
    .groupby('user')
    .head(10)
)

# Filter to only include rows where watch_count is at least 2
grouped_languages_filtered = grouped_languages[grouped_languages['watch_count'] >= 2]

# For each User, select the 10 rows with the highest watch_count
languages_rated = (
    grouped_languages_filtered
    .sort_values(by=['user', 'avg_user_rating'], ascending=[True, False])
    .groupby('user')
    .head(10)
)

# Select columns from languages_watched and languages_rated
languages_watched = languages_watched[['user', 'language', 'watch_count']]
languages_rated = languages_rated[['user', 'language', 'avg_user_rating']]

# Round avg_user_rating
languages_rated['avg_user_rating'] = (languages_rated['avg_user_rating'].astype(float) / 2).round(2)

# Save to JSON file
languages_watched.to_json('assets/docs/languagesWatched_data.json', orient='records')
languages_rated.to_json('assets/docs/languagesRated_data.json', orient='records')








# Genres data -------------------------------------------------------
# Add the genres to the diaries data
genres_ratings = diary24_noRewatch.merge(genres_data, on='query', how='inner')

# Group by 'user' and 'genre', calculate avg_user_rating and watch_count
grouped_genres = (
    genres_ratings
    .groupby(['user', 'genre'])
    .agg(avg_user_rating=('rating', 'mean'), watch_count=('rating', 'size'))
    .reset_index()
)

# Remove duplicate rows (if necessary)
grouped_genres = grouped_genres.drop_duplicates()

# For each User, select the 10 rows with the highest watch_count
genres_watched = (
    grouped_genres
    .sort_values(by=['user', 'watch_count'], ascending=[True, False])
    .groupby('user')
    .head(10)
)

# Filter to only include rows where watch_count is at least 2
grouped_genres_filtered = grouped_genres[grouped_genres['watch_count'] >= 2]

# For each User, select the 10 rows with the highest watch_count
genres_rated = (
    grouped_genres_filtered
    .sort_values(by=['user', 'avg_user_rating'], ascending=[True, False])
    .groupby('user')
    .head(10)
)

# Select columns from genres_watched and genres_rated
genres_watched = genres_watched[['user', 'genre', 'watch_count']]
genres_rated = genres_rated[['user', 'genre', 'avg_user_rating']]

# Round avg_user_rating
genres_rated['avg_user_rating'] = (genres_rated['avg_user_rating'].astype(float) / 2).round(2)

# Save to JSON file
genres_watched.to_json('assets/docs/genresWatched_data.json', orient='records')
genres_rated.to_json('assets/docs/genresRated_data.json', orient='records')









# Display Stats -------------------------------------------------------
# Group by 'user' to calculate diary_logs, rewatchs and hours_watched
display_stats = detailed_diary.groupby('user').agg(
    diary_logs=('user', 'count'),
    rewatchs=('rewatch', lambda x: (x == True).sum()),
    hours_watched=('total_minutes', lambda x: round(x.sum() / 60, 1))
).reset_index()

# Save to JSON file
display_stats.to_json('assets/docs/display_stats.json', orient='records')









# High Low Stats -------------------------------------------------------
# Filter out null and 0 values where necessary
filtered_detailed_diary = detailed_diary[
    (detailed_diary['avg_rating'].notnull()) & (detailed_diary['avg_rating'] != 0) &
    (detailed_diary['vote_count'].notnull()) & (detailed_diary['vote_count'] != 0) &
    (detailed_diary['total_minutes'].notnull()) & (detailed_diary['total_minutes'] != 0)
]


# Define aggregation functions for each condition
agg_functions = {
    'Prom. más alto': ('avg_rating', 'idxmax'),
    'Prom. más bajo': ('avg_rating', 'idxmin'),
    'Más popular': ('vote_count', 'idxmax'),
    'Menos popular': ('vote_count', 'idxmin'),
    'Más larga': ('total_minutes', 'idxmax'),
    'Más corta': ('total_minutes', 'idxmin')
}

# Extract rows per user for each condition
hi_low_rows = []
for user, group in filtered_detailed_diary.groupby('user'):
    for label, (col, func) in agg_functions.items():
        row = group.loc[getattr(group[col], func)()].copy()
        row['hi_low_labels'] = label
        row['value_labels'] = row[col]
        
        # Format value_labels based on hi_low_labels
        if label in ['Prom. más alto', 'Prom. más bajo']:
            row['value_labels'] = f"{row[col]} ★"
        elif label in ['Más popular', 'Menos popular']:
            if 999 < row[col] <= 999999:
                row['value_labels'] = f"{round(row[col] / 1000, 2)} k"
            elif 999999 < row[col] <= 999999999:
                row['value_labels'] = f"{round(row[col] / 1000000, 2)} mill."
        elif label in ['Más larga', 'Más corta']:
            row['value_labels'] = f"{row[col]} min."
        
        hi_low_rows.append(row)

# Create the final aggregated dataframe
result_hi_low = pd.DataFrame(hi_low_rows)

# Left join with films_poster on 'query'
high_low_data = result_hi_low.merge(films_poster, on='query', how='left')

# Rename 'poster_url' to 'movie'
high_low_data.rename(columns={'poster_url': 'movie'}, inplace=True)

# Select specific columns
high_low_data = high_low_data[['movie', 'user', 'hi_low_labels', 'value_labels']]

# Save to JSON file
high_low_data = high_low_data.to_json(orient='records')
with open('assets/docs/high_low_data.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(high_low_data), f, ensure_ascii=False, indent=4)






# Positive and Difference with Average -------------------------------------------------------
# Create a duplicate of the original dataframe
detailed_diary_float = detailed_diary.copy()

# If movie appears more than once, keep newest rating
detailed_diary_float = detailed_diary_float.sort_values('viewing_date').drop_duplicates(subset=['user', 'query'], keep='last')

# Convert 'rating' and 'avg_rating' columns to float
detailed_diary_float['rating'] = pd.to_numeric(detailed_diary_float['rating'], errors='coerce')
detailed_diary_float['avg_rating'] = pd.to_numeric(detailed_diary_float['avg_rating'], errors='coerce')

# Remove rows where either column is 0 or NaN
detailed_diary_float = detailed_diary_float[
    (detailed_diary_float['rating'] > 0) & 
    (detailed_diary_float['avg_rating'] > 0) & 
    detailed_diary_float['rating'].notna() & 
    detailed_diary_float['avg_rating'].notna()
]

# Get the top 6 movies with the highest POSITIVE difference between the user's rating and the average rating
positive_diff = (detailed_diary_float
                     .groupby('user', group_keys=False)
                     .apply(lambda x: x.nlargest(6, 'difference')))

# Get the top 6 movies with the highest NEGATIVE difference between the user's rating and the average rating
negative_diff = (detailed_diary_float
                     .groupby('user', group_keys=False)
                     .apply(lambda x: x.nsmallest(6, 'difference')))

# Create 'avg' column with 'vs. ' prefix
positive_diff['avg'] = 'vs. ' + positive_diff['avg_rating'].astype(str)
negative_diff['avg'] = 'vs. ' + negative_diff['avg_rating'].astype(str)

# Drop the 'rating' column
positive_diff = positive_diff.drop(columns=['rating'])
negative_diff = negative_diff.drop(columns=['rating'])

# Rename 'star_rating' to 'rating'
positive_diff = positive_diff.rename(columns={'star_rating': 'rating'})
negative_diff = negative_diff.rename(columns={'star_rating': 'rating'})

# Add the posters urls
positive_diff = positive_diff.merge(films_poster, on='query', how='left')
negative_diff = negative_diff.merge(films_poster, on='query', how='left')

# Rename 'poster_url' to 'movie'
positive_diff = positive_diff.rename(columns={'poster_url': 'movie'})
negative_diff = negative_diff.rename(columns={'poster_url': 'movie'})

# Create films urls
positive_diff['film_url'] = "https://letterboxd.com/film/" + positive_diff['query'] + "/"
negative_diff['film_url'] = "https://letterboxd.com/film/" + negative_diff['query'] + "/"

# Select columns
positive_diff = positive_diff[['user', 'movie', 'avg', 'rating', 'film_url']]
negative_diff = negative_diff[['user', 'movie', 'avg', 'rating', 'film_url']]


# Save to JSON file
positive_diff = positive_diff.to_json(orient='records')
with open('assets/docs/positive_diff.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(positive_diff), f, ensure_ascii=False, indent=4)

negative_diff = negative_diff.to_json(orient='records')
with open('assets/docs/negative_diff.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(negative_diff), f, ensure_ascii=False, indent=4)









# Movies per rating --------------------------------------------
# Create a copy df
diary24_ratings = detailed_diary[['user', 'rating']].copy()

# Remove rows where rating is 0 or NaN
diary24_ratings = diary24_ratings[diary24_ratings['rating'].notna() & (diary24_ratings['rating'] != "0.0")]

# Group by 'user' and 'rating', then count occurrences
ratings_data = diary24_ratings.groupby(['user', 'rating']).size().reset_index(name='rating_count')

# Apply the convert_to_stars function to the 'rating' column
ratings_data['stars'] = ratings_data['rating'].apply(convert_to_stars)

# Save to JSON file
ratings_data.to_json('assets/docs/ratings_data.json', orient='records')












# Proportion of movies watched that were 2024 releases ----------------------------
releasesProportion = (
    detailed_diary
    .groupby('user')
    .apply(lambda group: pd.DataFrame({
        'type_movie': ['Estrenos', 'Viejas', 'Total'],
        'movie_count': [
            ((group['release_date'] >= '2024-01-01') & (group['release_date'] < '2025-01-01')).sum(),  # Count of Estrenos
            (group['release_date'] < '2024-01-01').sum(),  # Count of Viejas
            len(group)                                     # Total count
        ]
    }))
    .reset_index(level=0)  # Reset the user index to have it as a column
    .reset_index(drop=True)  # Reset the row index for a clean dataframe
)

# Save to JSON file
releasesProportion.to_json('assets/docs/releasesProportion.json', orient='records')












# Top Movies Resumitos ------------------------------------------------
# List of resumitos
resumitos_users = ['lucasvar', 'disnick123', 'donjorge86', 'lafloromero', 'mrpereza', 'isa_ycaza3010', 'peperro_cibrian',
                   'superagustina', 'juli_neme', 'sartenquemada', 'lxonxl']

# Filter diaries to only have resumitos users
resumitos_diaries = detailed_diary[detailed_diary['user'].isin(resumitos_users)]

# Convert to float
resumitos_diaries['rating'] = resumitos_diaries['rating'].astype(float)

# Filter to keep the newest viewing_date for each user-query combination
resumitos_diaries = resumitos_diaries.loc[
    resumitos_diaries.groupby(['user', 'query'])['viewing_date'].idxmax()
]

# Group and calculate avg_resumito_rating and watch_count
resumitos_grouped = (
    resumitos_diaries[resumitos_diaries['rating'].notnull() & (resumitos_diaries['rating'] != 0)]
    .groupby('query', as_index=False)
    .agg(
        avg_resumito_rating=('rating', 'mean'),
        watch_count=('query', 'count')
    )
)

# Add release_date (first value per group)
release_dates = resumitos_diaries.groupby('query')['release_date'].first().reset_index()
resumitos_grouped = resumitos_grouped.merge(release_dates, on='query', how='left')

# Round avg_resumito_rating to 2 decimals
resumitos_grouped['avg_resumito_rating'] = resumitos_grouped['avg_resumito_rating'].round(2)

# Merge with films_poster to add poster_url, renamed as movie
resumitos_grouped = resumitos_grouped.merge(
    films_poster[['query', 'poster_url']],
    on='query',
    how='left'
)

# Rename the column poster_url to movie
resumitos_grouped.rename(columns={'poster_url': 'movie'}, inplace=True)

# Select the top 6 rows with the highest avg_resumito_rating, only 2024 releases
top_releases_resumitos = (
    resumitos_grouped
    .query("watch_count >= 3 and '2024-01-01' <= release_date < '2025-01-01'")
    .nlargest(6, 'avg_resumito_rating')
    [['movie', 'avg_resumito_rating']]
)

# Select the top 6 rows with the highest avg_resumito_rating
top_movies_resumitos = (
    resumitos_grouped
    .query("watch_count >= 3")
    .nlargest(6, 'avg_resumito_rating')
    [['movie', 'avg_resumito_rating']]
)

# Filter the list to only include values between 'hard-to-kill' and 'final-destination-5' (2024 streams)
start = pronto_pinarello_queries.index('hard-to-kill')
end = pronto_pinarello_queries.index('final-destination-5')
pronto_pina_queries_2024 = pronto_pinarello_queries[start:end + 1]

# Select the top 6 rows with the highest avg_resumito_rating, movies watched on stream
top_stream_resumitos = (
    resumitos_grouped
    .loc[resumitos_grouped['watch_count'] >= 3 & resumitos_grouped['query'].isin(pronto_pina_queries_2024)]
    .nlargest(6, 'avg_resumito_rating')
    [['movie', 'avg_resumito_rating']]
)


# Save to JSON file
top_releases_resumitos = top_releases_resumitos.to_json(orient='records')
with open('assets/docs/top_releases_resumitos.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(top_releases_resumitos), f, ensure_ascii=False, indent=4)
    
top_movies_resumitos = top_movies_resumitos.to_json(orient='records')
with open('assets/docs/top_movies_resumitos.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(top_movies_resumitos), f, ensure_ascii=False, indent=4)
    
top_stream_resumitos = top_stream_resumitos.to_json(orient='records')
with open('assets/docs/top_stream_resumitos.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(top_stream_resumitos), f, ensure_ascii=False, indent=4)








# Movies watched per day of the week ----------------------------------------------------------
# Create a mapping for days of the week
day_mapping = {
    'Monday': 'Lu',
    'Tuesday': 'Ma',
    'Wednesday': 'Mi',
    'Thursday': 'Ju',
    'Friday': 'Vi',
    'Saturday': 'Sá',
    'Sunday': 'Do'
}

# Extract day names and map them to their abbreviations
detailed_diary['day'] = detailed_diary['viewing_date'].dt.day_name().map(day_mapping)

# Group by 'user' and 'day', then count rows
day_counts = detailed_diary.groupby(['user', 'day']).size().reset_index(name='count')

# Save to JSON file
day_counts.to_json('assets/docs/user_days.json', orient='records')












# User ratings data ------------------------------------------------------------
# Merge detailed_diary with films_poster to add poster URLs for movies
user_ratings = detailed_diary.merge(films_poster, on='query', how='left')

# Rename columns
user_ratings = user_ratings.rename(columns={
    'query': 'movie_query',       # Rename 'query' to 'movie_query'
    'poster_url': 'film_poster'   # Rename 'poster_url' to 'film_poster'
})

# Select and reorder relevant columns for final output
user_ratings = user_ratings[['movie_query', 'user', 'rating', 'avg_rating', 'film_poster', 'star_rating']]

# Save to JSON file
user_ratings = user_ratings.to_json(orient='records')
with open('assets/docs/user_ratings.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(user_ratings), f, ensure_ascii=False, indent=4)












# User top Movies and Releases ----------------------------------------------
# Merge detailed_diary with films_poster to add poster URLs for movies
user_movies = detailed_diary.merge(films_poster, on='query', how='left')

# Keep the newest viewing_date for each (user, query) combination
user_movies = (user_movies.sort_values(by='viewing_date', ascending=False)  # Sort by newest date
                         .drop_duplicates(subset=['user', 'query']))        # Keep the latest entry per user-query combo

# Select the top 6 rows with the highest rating for each user
top_movies = (user_movies.sort_values(by='rating', ascending=False)  # Sort by highest rating
                         .groupby('user')                           # Group by user
                         .head(6))                                  # Take the top 6 per user

# Rename columns
top_movies = top_movies.drop(columns=['rating'])
top_movies = top_movies.rename(columns={
    'poster_url': 'movie',   # Rename 'poster_url' to 'movie'
    'star_rating': 'rating'  # Rename 'star_rating' to 'rating'
})

# Add the url to the film's letterboxd page
top_movies['film_url'] = "https://letterboxd.com/film/" + top_movies['query'] + "/"

# Select the columns
top_movies = top_movies[['user', 'movie', 'rating', 'film_url']]


# Filter movies released in 2024
top_releases = user_movies[
    (user_movies['release_date'] >= '2024-01-01') & 
    (user_movies['release_date'] < '2025-01-01')
]

# Select the top 6 rows with the highest rating for each user
top_releases = (top_releases.sort_values(by='rating', ascending=False)  # Sort by highest rating
                         .groupby('user')                           # Group by user
                         .head(6))                                  # Take the top 6 per user

# Rename columns and select
top_releases = top_releases.drop(columns=['rating'])
top_releases = top_releases.rename(columns={
    'poster_url': 'movie',   # Rename 'poster_url' to 'movie'
    'star_rating': 'rating'  # Rename 'star_rating' to 'rating'
})

# Add the url to the film's letterboxd page
top_releases['film_url'] = "https://letterboxd.com/film/" + top_releases['query'] + "/"

# Select the columns
top_releases = top_releases[['user', 'movie', 'rating', 'film_url']]


# Save to JSON file
top_movies = top_movies.to_json(orient='records')
with open('assets/docs/user_topAllMovies.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(top_movies), f, ensure_ascii=False, indent=4)

top_releases = top_releases.to_json(orient='records')
with open('assets/docs/user_topReleases.json', 'w', encoding='utf-8') as f:
    json.dump(json.loads(top_releases), f, ensure_ascii=False, indent=4)









# Weekly data ---------------------------------------------------------------
# Generate dates df for 2024
dates_2024 = pd.date_range(start="2024-01-01", end="2024-12-31")
dates_2024_df = pd.DataFrame({'date': dates_2024})

# Add week number
dates_2024_df['week_number'] = dates_2024_df['date'].dt.isocalendar().week

# Adjust week number for dates in January that belong to the last week of the previous year
dates_2024_df['week_number'] = np.where(
    (dates_2024_df['week_number'] == 1) & (dates_2024_df['date'].dt.month > 1),
    dates_2024_df['week_number'].max() + 1,
    dates_2024_df['week_number']
)

# Group by week number and calculate first and last date of each week
weeks_df = dates_2024_df.groupby('week_number').agg(
    first_date=('date', 'min'),
    last_date=('date', 'max')
).reset_index()


# Ensure the date columns are datetime objects
weeks_df['first_date'] = pd.to_datetime(weeks_df['first_date'])
weeks_df['last_date'] = pd.to_datetime(weeks_df['last_date'])
detailed_diary['viewing_date'] = pd.to_datetime(detailed_diary['viewing_date'])

# Convert datetime objects to string (SQLite doesn't support datetime natively)
weeks_df['first_date'] = weeks_df['first_date'].dt.strftime('%Y-%m-%d')
weeks_df['last_date'] = weeks_df['last_date'].dt.strftime('%Y-%m-%d')
detailed_diary['viewing_date'] = detailed_diary['viewing_date'].dt.strftime('%Y-%m-%d')

# Make the db in memory
conn = sqlite3.connect(':memory:')

# Write the tables
weeks_df.to_sql('weeks_df', conn, index=False)
detailed_diary.to_sql('detailed_diary', conn, index=False)

# SQL query
qry = '''
    SELECT
        detailed_diary.*,
        weeks_df.first_date,
        weeks_df.last_date,
        weeks_df.week_number
    FROM
        detailed_diary
    JOIN weeks_df ON viewing_date BETWEEN first_date AND last_date
'''
weekly_diary = pd.read_sql_query(qry, conn)

# Convert rating column to float and the dates back to datetime
weekly_diary['rating'] = weekly_diary['rating'].astype(float)
weekly_diary['first_date'] = pd.to_datetime(weekly_diary['first_date'])
weekly_diary['last_date'] = pd.to_datetime(weekly_diary['last_date'])
weekly_diary['viewing_date'] = pd.to_datetime(weekly_diary['viewing_date'])

# Close the connection
conn.close()


# Group by user, week_number, first_date, last_date
weekly_summary = (
    weekly_diary
    .groupby(['user', 'week_number', 'first_date', 'last_date'], as_index=False)
    .agg(
        weekly_quantity=('user', 'size'),  # Count number of rows per group
        avg_weekly_rating=('rating', lambda x: x[x != 0].mean())  # Exclude rating == 0 for mean calculation
    )
)

# Round avg_weekly_rating for clarity and convert the weekly_quantity to integer
weekly_summary['avg_weekly_rating'] = weekly_summary['avg_weekly_rating'].round(2)
weekly_summary['weekly_quantity'] = weekly_summary['weekly_quantity'].astype(int)



# Create a full set of all possible user-week combinations
all_weeks = weeks_df[['week_number', 'first_date', 'last_date']]
all_users = weekly_summary['user'].unique()

# Create a dataframe with all user-week combinations
full_weekly_summary = pd.DataFrame([(user, week) for user in all_users for week in all_weeks['week_number']],
                                 columns=['user', 'week_number'])
full_weekly_summary = full_weekly_summary.merge(all_weeks, on='week_number', how='left')

# Add the weekly summary data
full_weekly_summary = full_weekly_summary.merge(weekly_summary[['user', 'week_number', 'weekly_quantity', 'avg_weekly_rating']],
                                                on=['user', 'week_number'],
                                                how='left')

# Fill NaN values with 0 for missing weeks
full_weekly_summary['weekly_quantity'] = full_weekly_summary['weekly_quantity'].fillna(0)
full_weekly_summary['avg_weekly_rating'] = full_weekly_summary['avg_weekly_rating'].fillna(0)

# Ensure the 'first_date' and 'last_date' columns are in datetime format
full_weekly_summary['first_date'] = pd.to_datetime(full_weekly_summary['first_date'])
full_weekly_summary['last_date'] = pd.to_datetime(full_weekly_summary['last_date'])

# Add month labels
month_labels = {
    1: "Ene", 2: "Feb", 3: "Mar", 4: "Abr", 5: "May", 6: "Jun",
    7: "Jul", 8: "Ago", 9: "Sep", 10: "Oct", 11: "Nov", 12: "Dic"
}
full_weekly_summary['month_first_date'] = full_weekly_summary['first_date'].dt.month.map(month_labels)
full_weekly_summary['month_last_date'] = full_weekly_summary['last_date'].dt.month.map(month_labels)

# Create week range and labels
full_weekly_summary['week_range'] = np.where(
    full_weekly_summary['month_first_date'] == full_weekly_summary['month_last_date'],
    full_weekly_summary['month_first_date'] + " " + full_weekly_summary['first_date'].dt.day.astype(str) + "—" + full_weekly_summary['last_date'].dt.day.astype(str),
    full_weekly_summary['month_first_date'] + " " + full_weekly_summary['first_date'].dt.day.astype(str) + "—" + full_weekly_summary['month_last_date'] + " " + full_weekly_summary['last_date'].dt.day.astype(str)
)

full_weekly_summary['week_label'] = "Sem. " + full_weekly_summary['week_number'].astype(str)

full_weekly_summary = full_weekly_summary[['week_number', 'user',
                     'weekly_quantity', 'avg_weekly_rating',
                     'week_range', 'week_label']]

# Save to JSON file
full_weekly_summary.to_json('assets/docs/user_weekly_data.json', orient='records', date_format='iso')