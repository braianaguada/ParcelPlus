import { useState } from 'react';
import validate from '../functions/validation';
import cvValidation from '../functions/cvValidation';

export const useForm = (initialForm, type) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(type === "packageForm"){
      setErrors(validate(form))
    } else  if (type === "cvForm"){
      setErrors(cvValidation(form))
    }
  };

  return {
    form,
    errors,
    handleChange,
    handleSubmit
  }
};