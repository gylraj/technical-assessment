import Carousel from "react-bootstrap/Carousel";
import CustomImage from "./CustomImage";

function ImageSlider({ imageUrls, defaultImage }) {
  const carouselItems = imageUrls?.map((url, i) => {
    return (
      <Carousel.Item key={url + i}>
        <CustomImage src={url} width={240} alt="First slide" />
      </Carousel.Item>
    );
  });

  return (
    <div style={{ width: "240px", height: "360px" }}>
      <Carousel variant="dark" style={{ width: "240px", height: "360px" }}>
        <Carousel.Item key="defaultImage">
          <CustomImage src={defaultImage} width={240} alt="First slide" />
        </Carousel.Item>
        {carouselItems}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
