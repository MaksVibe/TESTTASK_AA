import React from "react";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import "./App.scss";
import Users from "./sections/Users/Users";
import SignUpForm from "./sections/SignUpForm/SignUpForm";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <main className="main">
          <Hero />
          <Users />
          <SignUpForm />
        </main>
      </div>
    </>
  );
}

export default App;
