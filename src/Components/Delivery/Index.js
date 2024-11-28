import React from "react";
import "./Delivery.css";
import Filters from "../Common/Filters/Index";
import DeliveryCollections from "./Delivery Collections/Index";
import TopBrands from "./Top Brands/Index";
import ExploreSection from "../Common/Explore Section/Index";
import { restaurants } from "../../data/restaurants";

const deliveryFilters = [
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
const restaurantList = restaurants;
const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filters filterList={deliveryFilters} />
      </div>
      <DeliveryCollections />
      <TopBrands />
      <ExploreSection
        list={restaurantList}
        collectionName="Lucknow Restaurants"
      />
    </div>
  );
};

export default Delivery;
