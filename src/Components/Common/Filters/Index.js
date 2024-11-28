import React from "react";
import "./Filters.css";
import FilterItem from "./FilterItems/index";

const Filters = ({ filterList }) => {
  return (
    <div className="filters">
      {filterList &&
        filterList.map((filter) => {
          return (
            <div>
              <FilterItem filter={filter} key={filter.id} />
            </div>
          );
        })}
    </div>
  );
};

export default Filters;
