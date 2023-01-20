import React from 'react';
import { Jumbotron, Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function LandingPage() {
  return (
    <div>
      <div className="landing-page">
      <Jumbotron className="text-center">
      <h3 className="display-4"><em>Manipal University Jaipur</em></h3>
        <br/>
        <h5 className="lead"><em>Activity Reporting and Document Storage</em></h5>
        <hr className="my-4" />
        <a className="btn btn-secondary btn-lg"  href="/reactdata" role="button"><em>Enter Event Details</em></a>
      </Jumbotron>
      <br />
      <br />
      <div class="picone">

        </div>
        <div class="picthree">

        </div>

        <div class="picfour">

        </div>

        <div class="pictwo">

        </div>
      </div>
    </div>
  );
}

export default LandingPage;
