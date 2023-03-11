import React from "react";

const CheckBox = ({ data, title, checkboxHandler }) => {
  return (
    <div>
      <p>{title}</p>
      {data.map((item) => {
        return (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={item}
              onChange={(e) => {
                checkboxHandler(e, item);
              }}
              className="text-align-left"
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              {item.name}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CheckBox;
