import userModel from '../api/users/userModel.js';
import genreModel from '../api/genres/genreModel.js';
import actorModel from '../api/actors/actorsModel.js';
import users from './users.js';
import actors from './actors.js';
import genres from './genres.js';
import dotenv from 'dotenv';
import movieModel from '../api/movies/movieModel.js';
import movies from './movies.js';
import showModel from '../api/shows/showModel.js';
import shows from './shows.js';

dotenv.config();

// deletes all movies documents in collection and inserts test data
export async function loadMovies() {
  console.log('load seed data');
  console.log(movies.length);
  try {
    await movieModel.deleteMany();
    await movieModel.collection.insertMany(movies);
    console.info(`${movies.length} Movies were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load movie Data: ${err}`);
  }
}

// deletes all shows documents in collection and inserts test data
export async function loadShows() {
  console.log('load seed data');
  console.log(shows.length);
  try {
    await showModel.deleteMany();
    await showModel.collection.insertMany(shows);
    console.info(`${shows.length} Shows were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load show Data: ${err}`);
  }
}

// deletes all actors documents in collection and inserts test data
export async function loadActors() {
  console.log('load seed data');
  console.log(actors.length);
  try {
    await actorModel.deleteMany();
    await actorModel.collection.insertMany(actors);
    console.info(`${actors.length} Actors were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load show Data: ${err}`);
  }
}

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

// deletes all genres in collection and inserts genres
async function loadGenres() {
    console.log('load genre Data');
    try {
      await genreModel.deleteMany();
      await genreModel.collection.insertMany(genres);
      console.info(`${genres.length} genres were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load genre Data: ${err}`);
    }
  }
  
  if (process.env.SEED_DB) {
    loadUsers();
    loadGenres();
    loadMovies();
    loadShows();
    loadActors();
  }