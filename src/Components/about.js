import React from "react";
import { Card } from "react-bootstrap";

const About = () => {
  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: "100vh" }}
    >
      <h1 className="box-shadow-md">Available Homes</h1>
      
      
      
      <Card className="bg" style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="/Photos/house1.png"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Lord Of The Rings House"</Card.Title>
          <Card.Text className="text-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in convallis lacus. Nulla facilisi. 
          Integer non libero non ex varius tincidunt. Vestibulum eu lorem sit amet lacus consequat commodo. 
          Donec ac efficitur est. Quisque auctor eros nec magna tristique, nec tincidunt odio ultricies. 
          Integer quis augue vitae enim vehicula bibendum. Nulla non tincidunt leo. Phasellus non efficitur turpis. 
          Suspendisse potenti. Nulla facilisi. Nunc sed venenatis magna. Sed sollicitudin tellus sed tellus finibus, at semper odio vehicula.
          </Card.Text>
        </Card.Body>
      </Card>


      <Card className="bg" style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img variant="top" src="/Photos/house2.jpg"/>
        <Card.Body className="text-center">
          <Card.Title className="text-color">"The Rockies"</Card.Title>
          <Card.Text className="text-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in convallis lacus. Nulla facilisi. 
          Integer non libero non ex varius tincidunt. Vestibulum eu lorem sit amet lacus consequat commodo. 
          Donec ac efficitur est. Quisque auctor eros nec magna tristique, nec tincidunt odio ultricies. 
          Integer quis augue vitae enim vehicula bibendum. Nulla non tincidunt leo. Phasellus non efficitur turpis. 
          Suspendisse potenti. Nulla facilisi. Nunc sed venenatis magna. Sed sollicitudin tellus sed tellus finibus, at semper odio vehicula
          </Card.Text>
        </Card.Body>
      </Card>



      <Card className="bg" style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="/Photos/house3.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Farm House"</Card.Title>
          <Card.Text className="text-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in convallis lacus. Nulla facilisi. 
          Integer non libero non ex varius tincidunt. Vestibulum eu lorem sit amet lacus consequat commodo. 
          Donec ac efficitur est. Quisque auctor eros nec magna tristique, nec tincidunt odio ultricies. 
          Integer quis augue vitae enim vehicula bibendum. Nulla non tincidunt leo. Phasellus non efficitur turpis. 
          Suspendisse potenti. Nulla facilisi. Nunc sed venenatis magna. Sed sollicitudin tellus sed tellus finibus, at semper odio vehicula
          </Card.Text>
        </Card.Body>
      </Card>




      <Card className="bg" style={{ width: "700px", marginTop: "20px" }}>
        <Card.Img
          variant="top"
          src="/Photos/house4.jpg"
        />
        <Card.Body className="text-center">
          <Card.Title className="text-color">"Down By the Creek"</Card.Title>
          <Card.Text className="text-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in convallis lacus. Nulla facilisi. 
          Integer non libero non ex varius tincidunt. Vestibulum eu lorem sit amet lacus consequat commodo. 
          Donec ac efficitur est. Quisque auctor eros nec magna tristique, nec tincidunt odio ultricies. 
          Integer quis augue vitae enim vehicula bibendum. Nulla non tincidunt leo. Phasellus non efficitur turpis. 
          Suspendisse potenti. Nulla facilisi. Nunc sed venenatis magna. Sed sollicitudin tellus sed tellus finibus, at semper odio vehicula
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;