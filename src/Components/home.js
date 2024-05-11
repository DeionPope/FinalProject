import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h1 className="box-shadow-md">Welcome to BackCountry RealEstate</h1>
      <div className="d-flex flex-column align-items-center">
        <Card className="bg" style={{ width: "700px", marginTop: "20px" }}>
          <Card.Img
            variant="top"
            src="/Photos/homepage.jpg"
          />
          <Card.Body className="text-center">
            <Card.Title className="text-color">Our Mission</Card.Title>
            <Card.Text className="text-color">
            Welcome to BackCountry RealEstate
            At BackCountry RealEstate, we believe in more than just buying and selling properties. We believe in creating lasting relationships, offering unparalleled service, and guiding you through every step of your real estate journey.
            With 10 years of experience in the industry, we understand that each client's needs are unique. That's why we take the time to listen, to understand your goals, and to tailor our approach to meet your specific requirements.
            Our commitment to excellence is reflected in our attention to detail, our dedication to transparency, and our unwavering integrity. Whether you're a first-time homebuyer, a seasoned investor, or looking to sell your property, we are here to provide you with the guidance and support you deserve.
            At BackCountry RealEstate, we don't just sell houses; we help you find your dream home, your perfect investment, or the ideal buyer for your property. We are passionate about what we do, and we are dedicated to helping you achieve your real estate goals.
            Thank you for considering BackCountry RealEstate for your real estate needs. We look forward to the opportunity to serve you and to exceed your expectations.

            </Card.Text>
          </Card.Body>

        </Card>
      </div>
    </div>
  );
};

export default Home;

//I have a card element with an image and text below it.  The bottom of the page will also have a navbar.
