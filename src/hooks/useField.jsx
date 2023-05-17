import React, { useState } from "react";

export const useField = ({ type }) => {
  const [value, setValue] = useState("");

  const onChanchange = (event) => {
    setValue(event.tartget.value);
  };

  return type, value, onChanchange;
};
