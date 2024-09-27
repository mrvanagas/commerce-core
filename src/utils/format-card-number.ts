export const formatCardNumber = (value: string) => {
  const cleaned = value.replace(/\D/g, '');
  const limited = cleaned.slice(0, 16);
  const match = limited.match(/.{1,4}/g);
  return match ? match.join(' ') : limited;
};

export const formatSecurityCode = (value: string) => {
  const cleaned = value.replace(/\s+/g, '').replace(/[^0-9]/g, '');
  return cleaned.slice(0, 3);
};

export const formatExpiryDate = (value: string) => {
  const cleaned = value.replace(/\D/g, '');

  let month = cleaned.slice(0, 2);
  const year = cleaned.slice(2, 4);

  if (month.length === 2) {
    if (parseInt(month, 10) < 1) {
      month = '01';
    } else if (parseInt(month, 10) > 12) {
      month = '12';
    }
  }

  if (cleaned.length >= 3) {
    return `${month}/${year}`;
  } else {
    return month;
  }
};
