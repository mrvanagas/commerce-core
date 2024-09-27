const formatCardNumber = (value: string) => {
  const cleaned = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const match = cleaned.match(/.{1,4}/g);
  return match ? match.join(' ') : value;
};

export default formatCardNumber;