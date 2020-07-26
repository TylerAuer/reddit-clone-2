const truncate = (str, len) => {
  if (str.length <= len) {
    return str;
  }

  const roughTrimmedStr = str.substring(0, len);
  // Find last " " before end of string (the + 1 cuts the " " too)
  const lastSpace = roughTrimmedStr.split('').reverse().indexOf(' ') + 1;

  // Trim at last space and concatenate ""..."
  const cleanTrimmedStr = roughTrimmedStr.substring(0, len - lastSpace) + '...';
  return cleanTrimmedStr;
};

export default truncate;
