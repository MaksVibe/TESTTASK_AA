import React from "react";
import { Button } from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import "./Hero.scss";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <Title hero />
        <p style={{ marginBottom: "32px" }}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button signUp />
      </div>
    </div>
  );
};

export default Hero;
