# FRD Functional Requirements Document (translated)

## **Assignment**

Create an application for retrieving movie information according to the design.

👨‍🎨 👉 [Design Link](https://www.figma.com/file/VkLZt5T4dZQQ3cEhWcnhyG/Movie-Search-App-(Copy)).

## **Requirements**

- Use [CRA](https://create-react-app.dev/), [Vite](https://vitejs.dev/), or [Next.js](https://nextjs.org/) (SSR is not required) to start the project.
- Store all your application code in a single GitHub repository. [Instructions](https://docs.github.com/en/github/getting-started-with-github/create-a-repo).
- Use the component library [Mantine](https://mantine.dev/) (the above design was created using it).
- Deploy the application (see [`“Deploy”`](https://www.notion.so/d34ca388a8ab42c0b2c89094fb7a5ea3?pvs=21)) so it is accessible via a link.

>‼️ Don’t leave deployment to the last moment!
>
>*"I didn’t manage to deploy the application by the deadline, can I submit the test now, I’ve been working on it for two weeks?"* - won’t work.

## **Functionality**

For the test assignment, you will need the API of the [TMDB](https://developer.themoviedb.org/docs/getting-started) service (documentation via the link).

>❗ Use a VPN to register on TMDB.
>Depending on your internet provider, a VPN might also be necessary for local development (making API requests).

Use the following endpoints:

- [Movie Search](https://developer.themoviedb.org/reference/discover-movie)
- [Genre List](https://developer.themoviedb.org/reference/genre-movie-list)
- [Movie Details](https://developer.themoviedb.org/reference/movie-details)

>❕ Pay attention to the [append_to_resource](https://developer.themoviedb.org/docs/append-to-response) parameter for getting the movie trailer.

To enhance security, avoid placing the API key on the client side.
You need to **create a proxy server** that will fetch data from TMDB and return it to the client. (see [`”Additional Functionality”`](https://www.notion.so/c3a7adc40e5d4e0d9d3d3e5462a576bc?pvs=21)) 👨‍💻

>💡 We recommend using [Next.js API](https://nextjs.org/learn-pages-router/basics/api-routes), but you can write a full backend using any Node.js framework.

### “Movie Search” Page

```
💡 For searching, use the following request parameters:
**language** = movie language (use “*en-US”*)
**with_genres** = genre ID from the genre catalog
**primary_release_year** = release year
**vote_average.lte and vote_average.gte** = movie rating
**sort_by** = selected sorting value
**page** = requested page number
```

1. The user sees a list of available movies and filters to narrow the search.

```
💡 To display movies, use the following response fields:
**original_title** = title
**poster_path** = poster path
**release_date** = release date
**vote_average** = movie rating
**vote_count** = number of votes
**genre_ids** = genre array
```

1. The user can click on a movie and go to the `“[Movie](https://www.notion.so/c3a7adc40e5d4e0d9d3d3e5462a576bc?pvs=21)”` page for detailed information about it.
2. The user can rate a movie by clicking on a star, thereby saving it to rated movies.
3. The user can remove the movie from rated by clicking the star again and confirming the action in a modal window.

>💡 You will need a database to store rated movies.
Use the browser’s LocalStorage.

### “Rated” Page

1. The user sees a list of rated movies and their corresponding ratings.
2. The user can change the movie rating.
3. The user can search rated movies by their title.
4. The user can remove the movie from rated by clicking the star again and confirming the action in a modal window.
5. The user can click on a movie and go to the `“[Movie](https://www.notion.so/c3a7adc40e5d4e0d9d3d3e5462a576bc?pvs=21)”` page for detailed information about it.

### “Movie” Page

The user sees the movie details according to the design.

```
💡 To display movie information, use the following response fields:
**original_title** = title
**poster_path** = poster path
**release_date** = release date
**vote_average** = movie rating
**vote_count** = number of votes
**runtime** = duration
**budget** = budget
**revenue** = revenue
**genres** = genre array
**overview** = description
**production_companies** = production companies array
**videos** = array of available videos (display the first official trailer if available)
```

## **Additional Functionality**

- Display a loader ([example](https://mantine.dev/core/loader/)) while waiting for a server response.
- Show an empty state if the movie list is empty on the `“[Movie Search](https://www.notion.so/c3a7adc40e5d4e0d9d3d3e5462a576bc?pvs=21)”` and `“[Rated](https://www.notion.so/c3a7adc40e5d4e0d9d3d3e5462a576bc?pvs=21)”` pages.
- Implement pagination.
- Proxy all requests to the TMDB API.
- Validate filter values both on the client and server (proxy).
- The minimum page width for proper display is 320px.
There is no mobile version design, do it at your discretion.
All elements mentioned in the task are present in both desktop and mobile versions.

>❗ Do not use ChatGPT or other AI to complete the task.
>Applications found to have traces of AI will be automatically disqualified.
>We care about your level of proficiency with web development tools, not your ability to work with AI.

## **What We Will Look At**

- Full compliance of the layout with the design.
- Implementation of the main functionality.
- Implementation of additional functionality.
- Breaking down code into React components.
- Code cleanliness.