# Assignment 2 - Web API.
​
Name: Hasan Berk
​
## Features.
​
 + Integrated my Assignment 1 React App with my own movies api.
​
 + Have to signup and login before accessing my react app now.
​
 + Uses JWT tokens to authenticate users.

 + Gets movies, tv shows and actors from my own api.

​
## Installation Requirements
​
Clone my repository onto your machine, then run npm install on both the movies-api folder and moviesApp folder. Have mongodb installed also. Then npm start should work.
​
## API Configuration
​
```bat
NODE_ENV=development
PORT=8080
HOST=3000
mongoDB=YourMongoURL
seedDb=true
secret=YourJWTSecret
FAST_REFRESH=false
```

​
## API Design
Give an overview of your web API design, perhaps similar to the following: 
​
|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/shows | Gets a list of tv shows | N/A | N/A | N/A
| /api/actors | Get a list of actors | N/A | N/A | N/A  
| /api/users | Get a list of users registered | Posts the logged in user | N/A | N/A  
| /api/users?action=register | N/A | Registers a new user | N/A | N/A
​
## Security and Authentication
All routes are protected in the app, meaning you cannot look at movies or anything without signing in first.

Uses JWT tokens for authentication. 
​
## Integrating with React App

I made the functions to use my own api to get movies, tv shows and actors. 
​
~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};
​
export const getTVShows = () => {
  return fetch(
     '/api/shows',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getActors = () => {
  return fetch(
     '/api/actors',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

~~~

I also added the login and signup functions for authentication and security.

~~~Javascript
  export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

​~~~
