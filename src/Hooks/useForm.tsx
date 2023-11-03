import { useState } from 'react';

const useForm = () => {
  const [value, setValue] = useState('');
  const [box, setBox] = useState(false);

  function onChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setValue(target.value);
  }

  return { value, setValue, onChange, box, setBox };
};

export default useForm;
