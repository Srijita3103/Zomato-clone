import React from "react";
import "./TopBrands.css";
import Slider from "react-slick";
import NextArrow from "../../Common/Carousel/nextArrow";
import PrevArrow from "../../Common/Carousel/prevArrow";

const topBrandsList = [
  {
    id: 1,
    title: "Domino's Pizza",
    time: "28 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png",
  },
  {
    id: 2,
    title: "McDonald's",
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604387296.png",
  },
  {
    id: 1,
    title: "Burger King",
    time: "21 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/a6927d83d9185b7788814049b4a9fc8c_1726604935.png",
  },
  {
    id: 1,
    title: "The Hazelnut Factory",
    time: "22 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1f9e533211a32f12a534f824879b9de2_1703038990.png",
  },
  {
    id: 1,
    title: "La Pino'z Pizza",
    time: "23 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png",
  },
  {
    id: 1,
    title: "Grandson of Tunday Kababi",
    time: "33 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/1c69c696c67a0791937fab960a9bdf0a_1611298398.png",
  },
  {
    id: 1,
    title: "KFC",
    time: "25 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f1dc700c8be881b9a17be904971a0644_1726609842.png",
  },
  {
    id: 1,
    title: "Aryan Family's Delight",
    time: "31 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c62c886c7d28bbb895407f4a3a4a4e5f_1676961058.png",
  },
  {
    id: 1,
    title: "Pizza Hut",
    time: "32 min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
  },
  {
    id: 1,
    title: "Sharma Chai",
    time: "32min",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7162970d4c4b94a60e25d91facab0407_1600683841.png",
  },
];
const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};
const TopBrands = () => {
  return (
    <div className="top-brands max-width">
      <div className="collection-title">Top brands for you</div>
      <Slider {...settings}>
        {topBrandsList.map((brand) => {
          return (
            <div>
              <div className="top-brands-cover">
                <img
                  src={brand.cover}
                  className="top-brands-image"
                  alt={brand.time}
                />
              </div>
              <div className="top-brands-title">{brand.title}</div>
              <div className="top-brands-time">{brand.time}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopBrands;
