export const validateId = (id: string): boolean => {
  return id.length >= 3 && id.length <= 10;
};

export const validateLength = (
  value: string,
  minLength: number,
  maxLength: number,
): boolean => {
  return value.length >= minLength && value.length <= maxLength;
};

export const validateRequired = (value: string): boolean => {
  return value.trim().length > 0;
};

export const validateDate = (date: Date | null): boolean => {
  if (!date) return false;
  const currentDate = new Date();
  return date >= currentDate;
};
  