import Select from "react-select";
import React, { PureComponent } from "react";

const CustomSelect = (props) => {
  const colourStyles = {
    control: (styles) => ({
      ...styles,
      width: "29%",
      cursor: "pointer",
      height: "40px",
      color: "#595959",
      background: "#fff",
      border: "1px solid #a09f9f",
      borderRadius: "0px",
      justifyContent: "space-between",
      outline: "0.5px solid white !important",
      "&:hover": {
        backgroundColor: "none",
      },
      "&:focus": {
        backgroundColor: "none",
        outline: "1px solid #595959 !important",
      },
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        "&:hover": {
          backgroundColor: "#fffaeb",
          fontWeight: "600",
          boxShadow: "none !important",
          outline: "1px solid #595959 !important",
        },
        "&:focus": {
          backgroundColor: "#fffaeb",
          fontWeight: "600",
          boxShadow: "none !important",
          outline: "1px solid #595959 !important",
        },
        color: "#231f20",
        cursor: "pointer",
        height: "40px",
        marginTop: "-2px",
        marginBottom: "-2.5px",
        backgroundColor: "#fff",
        // top: '98% !important',
        // transform: 'translate3d(0, 0, 0) !important'
      };
    },
    menu: (base) => ({
      ...base,
      marginTop: "1px",
      width: "fit-content",
      minWidth: "29%",
      outline: "1px solid #595959 !important",
      borderRadius: "0px",
    }),
  };

  return (
    <Select
      name={props.name}
      defaultValue={{ label: "Select Province", value: 0 }}
      label="Single select"
      styles={colourStyles}
      isSearchable={false}
      components={{
        IndicatorSeparator: () => null,
      }}
      onBlur={props.onBlur} 
      onChange={(e) => {
        props.onChange(e.value);
      }} 
      checked={props.value}
      inputRef={props.ref}
      options={props.options}
      rules={{ required: true }}
    />
  );
};
export default CustomSelect;
