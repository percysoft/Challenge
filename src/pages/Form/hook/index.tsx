import {useState} from 'react';
import {
  validateDate,
  validateId,
  validateLength,
  validateRequired,
} from '../validation';

interface FormValues {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: Date | null;
  revisionDate: Date | null;
}

interface FormErrors {
  id: string;
  name: string;
  description: string;
  logo: string;
  releaseDate: string;
  revisionDate: string;
}

const useFormValidation = (initialValues: FormValues) => {
  const [values, setValues] = useState<FormValues>({
    id: initialValues.id || '',
    name: initialValues.name || '',
    description: initialValues.description || '',
    logo: initialValues.logo || '',
    releaseDate: initialValues.releaseDate || new Date(),
    revisionDate: initialValues.revisionDate || new Date(),
  });

  const [errors, setErrors] = useState<FormErrors>({
    id: '',
    name: '',
    description: '',
    logo: '',
    releaseDate: '',
    revisionDate: '',
  });

  const handleChange = (name: keyof FormValues, value: any) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const isIdValid = validateId(values.id);
    const isNameValid = validateLength(values.name, 5, 100);
    const isLogoRequired = validateRequired(values.logo);
    const isDescriptionValid = validateLength(values.description, 10, 200);
    const isReleaseDateValid = validateDate(values.releaseDate);
    const isRevisionDateValid = validateDate(values.revisionDate);

    setErrors({
      id: isIdValid ? '' : 'ID no válido',
      name: isNameValid ? '' : 'El nombre debe tener entre 5 y 100 caracteres',
      description: isDescriptionValid
        ? ''
        : 'La descripción debe tener entre 10 y 200 caracteres',
      logo: isLogoRequired ? '' : 'El logo es requerido',
      releaseDate: isReleaseDateValid ? '' : 'Fecha de liberación inválida',
      revisionDate: isRevisionDateValid ? '' : 'Fecha de revisión inválida',
    });

    return {
      isValid:
        isIdValid &&
        isNameValid &&
        isDescriptionValid &&
        isReleaseDateValid &&
        isRevisionDateValid,
      values,
    };
  };

  const handleReset = () => {
    setValues({
      id: '',
      name: '',
      description: '',
      logo: '',
      releaseDate: new Date(),
      revisionDate: new Date(),
    });
    setErrors({
      id: '',
      name: '',
      description: '',
      logo: '',
      releaseDate: '',
      revisionDate: '',
    });
  };

  const initializeForm = (formData: FormValues) => {
    setValues({
      id: formData.id || '',
      name: formData.name || '',
      description: formData.description || '',
      logo: formData.logo || '',
      releaseDate: formData.releaseDate || new Date(),
      revisionDate: formData.revisionDate || new Date(),
    });
    setErrors({
      id: '',
      name: '',
      description: '',
      logo: '',
      releaseDate: '',
      revisionDate: '',
    });
  };

  return {
    values,
    setValues,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
    initializeForm,
  };
};

export default useFormValidation;
