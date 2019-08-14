import { useState, useEffect } from "react";

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
      setValue(initialValue);
  }, [initialValue] );

  const handleChange = ({ target }) => {
    setValue(target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

export default useFormInput;
