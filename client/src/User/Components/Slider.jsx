import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-30%"
          src="https://static.vecteezy.com/system/resources/previews/002/478/302/original/sale-electronics-banner-background-free-vector.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wowtrk.com/wp-content/uploads/2021/01/ecommerce-image.png?strip=all&lossy=1&ssl=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://t3.ftcdn.net/jpg/05/85/44/88/360_F_585448816_LnqFD8DpB5du1qQ9N9oyFQsZDAyAvqmO.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;