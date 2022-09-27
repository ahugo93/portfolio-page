import Carousel from 'react-bootstrap/Carousel';
import Brooklyn from './images/brooklyn.jpeg'
import Travel from './images/travel.jpeg'
import Taz from './images/taz.jpeg'
import Hugo from './images/hugo.jpeg'
import '../App.css'


function HomePage() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Brooklyn}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Home sweet home</h3>
          <p>Brooklyn native</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Travel}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Travel addict</h3>
          <p>I love to take any chance I get to travel</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Taz}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>My Child</h3>
          <p>
            Proud dog dad of my rescue pup
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {Hugo}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>It's me!</h3>
          <p>
            Photo of me in the deserts of Dubai
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomePage;