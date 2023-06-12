import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Container } from "react-bootstrap"
import SlideCard from "./SliderCard/SlideCard"
import { SliderData } from "../utils/products"

const SliderHome = () => {
  const settings = {
    nav:false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 0,
    autoplay: false,
  }
  return (
      <section className='homeSlide'>
        <Container>
          <Slider {...settings}>
          {SliderData.map((value, index) => {
            return (
              <SlideCard key={index} title={value.title} cover={value.cover} desc={value.desc} />
            )
          })}
        </Slider>
        </Container>
      </section>
  )
}

export default SliderHome
