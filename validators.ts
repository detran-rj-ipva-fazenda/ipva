export const validateRenavam = (renavam: string): boolean => {
  const cleanRenavam = renavam.replace(/\D/g, '');
  return cleanRenavam.length === 11;
};

export const validatePlaca = (placa: string): boolean => {
  const placaRegex = /^[A-Z]{3}[0-9]{4}$/;
  return placaRegex.test(placa);
};