import React, { useState } from "react";
import Style from "./Dropdown.module.css";

function Dropdown() {
  // array which feeds the actual dropdown
  const options = ["Yes", "Probably Not", "Not"];

  // variable to check whether any option is selected or not
  const [selected, setSelected] = useState(false);

  // variable to show the selected option
  const [option, setOption] = useState("");

  // array as shown options in dropdown
  const [list, setList] = useState([]);

  // function to set elements of options array into list array when hovering on the dropdown switch
  const handleDropdown = () => {
    setList(options);
  };

  // function to set selected variable to true after clicking on any option in dropdown,
  // also to collapse the dropdown and set the selected option value.
  const closeDropdown = (item) => {
    setSelected(true);
    setOption(item);
    setList([]);
  };

  return (
    <div className={Style.body}>
      <h2>Should you use a Dropdown</h2>
      <div className={Style.dropdownBox}>
        <div className={Style.heading} onMouseOver={() => handleDropdown()}>
          Select
        </div>
        <div className={Style.dropdown}>
          {/* traversing the items in list array to show in dropdown */}
          {list.map((item, index) => (
            <div
              className={Style.options}
              key={index}
              onClick={() => closeDropdown(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {/* showing the selected option value only when the option is Selected */}
      {selected && <h3>Selected : {option}</h3>}
    </div>
  );
}

export default Dropdown;
