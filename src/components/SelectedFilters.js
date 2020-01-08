import React from "react";

class SelectedFilters extends React.Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div>
        <h3>Selected Filters</h3>
        <button type="button" class="btn">
          filter
          <span className="icon" />
        </button>
      </div>
    );
  }
}

export default SelectedFilters;
