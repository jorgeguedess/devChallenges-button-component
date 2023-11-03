import React from "react";

const useForm = () => {
  const [value, setValue] = React.useState("");
  const [box, setBox] = React.useState(false);

  function onChange({ target }) {
    setValue(target.value);
  }

  return { value, setValue, onChange, box, setBox };
};

export default useForm;
