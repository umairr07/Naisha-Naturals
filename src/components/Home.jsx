import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "../images/Product Images/naishanaturals.jpg";
import image2 from "../images/Product Images/dairyy.jpg";
import image3 from "../images/Product Images/famrprod.jpg";
import image4 from "../images/Product Images/vegetablee.jpg";
import image5 from "../images/Product Images/grains.jpg";

const images = [
  {
    link: image1,
  },
  {
    link: image2,
  },
  {
    link: image3,
  },
  {
    link: image4,
  },
  {
    link: image5,
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
  return (
    <div className="relative w-full">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
      >
        {images.map((img, idx) => (
          <div key={idx} className="flex justify-center">
            <img
              src={img.link}
              alt={`Carousel image ${idx + 1}`}
              className="w-full lg:h-[89vh] "
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
