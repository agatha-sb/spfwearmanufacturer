import './Home.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

import HeroImg1 from '../../assets/hero-img-1.jpg'
import HeroImg2 from '../../assets/hero-img-2.jpg'
import HeroImg3 from '../../assets/hero-img-3.jpg'
import HeroImg4 from '../../assets/hero-img-4.jpg'

import ShipImg1 from '../../assets/ship-img-1.png'
import ShipImg2 from '../../assets/ship-img-2.png'
import ShipImg3 from '../../assets/ship-img-3.png'

import BtnLinkArrow from '../../assets/btn-link-icon.png'

const Home = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">0' + (index + 1) + '</span>'
    }
  }
  const heroSliderItems = [
    { imgUrl: HeroImg1, title: "Sports", btnText: "Discover", btnUrl: "#" },
    { imgUrl: HeroImg2, title: "Travel", btnText: "Discover", btnUrl: "#" },
    { imgUrl: HeroImg3, title: "Sports", btnText: "Discover", btnUrl: "#" },
    { imgUrl: HeroImg4, title: "Fitness", btnText: "Explore", btnUrl: "#" }
  ]
  const shipItems = [
    { imgUrl: ShipImg1, title: "Shipping", desc: "Free Shipping World Wide" },
    { imgUrl: ShipImg2, title: "Hassle Free", desc: "24*7 Customer Support", btnUrl: "#" },
    { imgUrl: ShipImg3, title: "Secured", desc: "Safe Packaging", btnUrl: "#" }
  ]
  return (
    <>
      <section className="dgSpf-hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 p-0">
              <div className="dgSpf-hero__wrap">
                <Swiper
                  slidesPerView={2}
                  spaceBetween={0}
                  navigation={true}
                  pagination={pagination}
                  modules={[Navigation, Pagination]}
                  className="dgSpf-hero__swiper"
                >
                  {heroSliderItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="dgSpf-hero__single">
                        <div className="bg-image">
                          <img src={item.imgUrl} alt="" />
                        </div>
                        <div className="dgSpf-hero__content text-white">
                          <h2>{item.title}</h2>
                          <a className="dgSpf-button dgSpf-button__link" href={item.btnUrl}>
                            {item.btnText}
                            <span>
                              <img src={BtnLinkArrow} alt="" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dgSpf-ship">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="dgSpf-ship__wrap">
                <ul>
                  {shipItems.map((item, index) => (
                    <li key={index} className="dgSpf-ship__single">
                      <div className="icon">
                        <img src={item.imgUrl} alt="" />
                      </div>
                      <div className="content">
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home