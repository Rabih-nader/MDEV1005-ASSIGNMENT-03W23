import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Report() {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Report</h1>
          <hr></hr>
          <p>Welcome to Report</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, mi ac rhoncus bibendum, nunc velit pharetra mi, vel tincidunt odio quam eget ipsum. Proin finibus suscipit lectus, eu tincidunt ipsum. Ut at elementum massa. Integer et convallis enim. Donec tincidunt porta arcu ac blandit. Etiam vel bibendum tellus. Nunc hendrerit, velit id ullamcorper interdum, velit massa lacinia magna, ut fringilla orci sapien eu felis.</p>
          <p>Mauris non massa aliquam, molestie turpis vel, lacinia quam. Fusce euismod purus nisl, eget aliquam velit cursus in. Nam gravida sapien id risus tristique, id pellentesque tellus luctus. Nulla eu volutpat elit, non rhoncus elit. Sed sit amet magna et mauris auctor dictum a sed odio. Suspendisse at tortor ut lorem pellentesque laoreet eu ac nunc.</p>
        </Col>
      </Row>

      <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Service 2</h5>
            <p className="card-text">Donec at felis a mi imperdiet cursus. Donec porttitor, magna et luctus sagittis, turpis massa bibendum erat, at ultricies turpis quam sit amet massa.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Last updated 5 mins ago</small>
          </div>
        </div>

      <Row className="mt-3">
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is the content for card 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is the content for card 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150" />
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is the content for card 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <style jsx>{`
        @media screen and (max-width: 768px) {
          .card-title {
            font-size: 1.5rem;
          }
          .card-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </Container>
  );
}

export default Report;
