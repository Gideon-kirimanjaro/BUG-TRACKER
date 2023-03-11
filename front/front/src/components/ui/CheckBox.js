import React from "react";

const CheckBox = ({ data }) => {
  return data.map((item) => {
    return (
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          {item.name}
        </label>
      </div>
    );
  });
};

export default CheckBox;
