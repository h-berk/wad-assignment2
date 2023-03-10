import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Navigate, Route, Routes, Link } from "react-router-dom";
import { PublicPage, Movies, Profile, HomePage, Shows } from "./pages";
import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import PrivateRoute from "./privateRoute";
import AuthHeader from "./authHeader";
import SignUpPage from "./signUpPage";
import MoviesProvider from "./moviesContext";
import ShowsProvider from "./showsContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AuthHeader />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/public">Public</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/shows">TV Shows</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <MoviesProvider>
          <ShowsProvider>
          <Routes>
            <Route path="/public" element={<PublicPage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/movies"
              element={
                <PrivateRoute>
                  <Movies />
                </PrivateRoute>
              }
            />
            <Route
              path="/shows"
              element={
                <PrivateRoute>
                  <Shows />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          </ShowsProvider>
        </MoviesProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
