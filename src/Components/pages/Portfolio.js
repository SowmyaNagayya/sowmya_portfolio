import React from 'react';
import Movieadvisor from "../../images/movie.jpg";
import Bookreview from "../../images/Bookimage.jpg";
import Codequiz from "../../images/quiz.jpg";
import Techblog from "../../images/tech.jpg";
import Weatherdashboard from "../../images/weather.jpg";
import PasswordGen from "../../images/password.png";

export default function Portfolio() {

  return (
    <div id="project" className="offset container mt-3 pb-5">
        <div className="post-heading text-center">
            <h3 className="display-4 font-weight-bold">Projects</h3>
            
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-6 col-12 pb-5">
                <div className="card">
                    <img src={Bookreview} className="card-img-top" alt="BookReview Image"/>
                    <div className="card-body">
                      <h5 className="card-title">Book Review</h5>
                      <p className="card-text">The objective of this website was to create an application where you can publish and rate books they have previously read.</p>
                      <a href="https://github.com/annsabie/bookreviews" target="_blank" className="btn btn-success">GitHub Repo</a>
                      <a href="https://sabiebookreview.herokuapp.com/" className="btn btn-success">Book App</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pb-5">
                <div className="card">
                    <img src={Movieadvisor} className="card-img-top" alt="Picture website showing Movie Advisor App" />
                    <div className="card-body">
                      <h5 className="card-title">Movie Advisor</h5>
                      <p className="card-text">The app is for a user to search popular movies to see what they may want to watch. It gives the rating, genre, release date, description and title of the movie.</p>
                      <a href="https://github.com/Joe96/movies_api" target="_blank" className="btn btn-success">GitHub Repo</a>
                      <a href="https://joe96.github.io/movies_api/" className="btn btn-success">Movie App</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pb-5">
                <div className="card">
                  <img src={Weatherdashboard} className="card-img-top" alt="WeatherDashboard Image"/>
                    <div className="card-body">
                      <h5 className="card-title">Weather Forecast</h5>
                      <p className="card-text">Here weather-dashboard app to see the weather outlook for multiple cities for current weather forecast and 5days forecast SO THAT we can plan a trip accordingly.</p>
                      <a href="https://github.com/SowmyaNagayya/weather-dashboard" target="_blank" className="btn btn-success">GitHub Repo</a>
                      <a href="https://sowmyanagayya.github.io/weather-dashboard/" className="btn btn-success">Weather App</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pb-5">
                <div className="card">
                    <img src={Codequiz} className="card-img-top" alt="CodeQuiz Image"/>
                    <div className="card-body">
                      <h5 className="card-title">Code Quiz</h5>
                      <p className="card-text">Here a Beginner JavaScript quiz that ask timed questions, deducts time for wrong answers, and allows user to set initials if they have reached the highest score.</p>
                      <a href="https://github.com/SowmyaNagayya/codequiz" target="_blank" className="btn btn-success">GitHub Repo</a>
                      <a href="https://sowmyanagayya.github.io/codequiz/" className="btn btn-success">Quiz App</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pb-5">
                <div className="card">
                    <img src={Techblog} className="card-img-top" alt="TechBlog Image"/>
                    <div className="card-body">
                      <h5 className="card-title">Tech Blog</h5>
                      <p className="card-text">Here created a Tech Blog that facilitates communication between developers.</p>
                      <a href="https://github.com/SowmyaNagayya/Tech-Blog" target="_blank" className="btn btn-success">GitHub Repo</a>
                      <a href="https://sowmyatech-blog.herokuapp.com/" className="btn btn-success">TechBlog App</a>
                    </div>
                  </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 pb-5">
                <div className="card">
                    <img src={PasswordGen} className="card-img-top" alt="Password Image"/>
                    <div className="card-body">
                      <h5 className="card-title">Password Generator</h5>
                      <p className="card-text">Here Generating a new password when we click randamoly on Generate Password.</p>
                      <a href="https://github.com/SowmyaNagayya/hw03" target="_blank" className="btn btn-success">GitHub Repo</a>
                      <a href="https://sowmyanagayya.github.io/hw03/" className="btn btn-success">Password Generator</a>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  );
}
