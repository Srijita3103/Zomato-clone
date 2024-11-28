import React from "react";
import "./Nightlife.css";
import Collection from "../Common/Collection/Index";
import Filters from "../Common/Filters/Index";
import { nightlife } from "../../data/nightlife";
import ExploreSection from "../Common/Explore Section/Index";

const collectionList = [
  {
    id: 1,
    title: "Top Trending Spots",
    cover:
      "https://b.zmtcdn.com/data/collections/684397cd092de6a98862220e8cc40aca_1709810207.png",
    places: "28 places",
  },
  {
    id: 2,
    title: "Best Rooftop Places",
    cover:
      "https://b.zmtcdn.com/data/collections/2b9361aa328a43b08986f77bbec280bd_1709810493.png",
    places: "45 places",
  },
  {
    id: 3,
    title: "Newly Opened Places",
    cover:
      "	https://b.zmtcdn.com/data/collections/6922d49fb675d0490edb652abf5ca45f_1727171292.png",
    places: "23 places",
  },
  {
    id: 4,
    title: "It's a Date",
    cover:
      "https://b.zmtcdn.com/data/collections/2e8b954961d07f927802853d5944d67b_1709812883.png",
    places: "27 places",
  },
  {
    id: 5,
    title: "Best Luxury Dining Places",
    cover:
      "https://b.zmtcdn.com/data/collections/088c7eea7df002b1fef0c1d257935be4_1709812426.png?output-format=webp",
    places: "28 places",
  },
  {
    id: 6,
    title: "Asian Restaurants",
    cover:
      "https://b.zmtcdn.com/data/collections/dbfb118fb614c663b22373f49db73085_1729509104.png?output-format=webp",
    places: "21 places",
  },
  {
    id: 7,
    title: "Lit Party Places",
    cover:
      "https://b.zmtcdn.com/data/collections/6ee7ed91c03e8d37bff6248caac44816_1730965627.jpg?output-format=webp",
    places: "27 places",
  },
  {
    id: 8,
    title: "The Legends of Bangalore",
    cover:
      "https://b.zmtcdn.com/data/collections/ce8f94a179d859d01f94c441d67ef5ad_1706256879.png?output-format=webp",
    places: "21 places",
  },
];
const nightlifeFilters = [
  {
    id: 1,
    icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Ratings 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    icon: <i class="fi fi-rr-apps-sort absolute-center"></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const nightlifeList = nightlife;
const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className="max-width">
        <Filters filterList={nightlifeFilters} />
      </div>
      <ExploreSection
        list={nightlifeList}
        collectionName="Nightlife: Night clubs, pubs and bar in Bengaluru"
      />
    </div>
  );
};

export default Nightlife;
