const hexToRGB = (color: string): number[] => {
  const validated = validateColor(color);

  if (validated.length === 6) {
    const colors = validated.match(/..?/g);

    return colors?.map(hex => parseInt(hex, 16)) || [];
  } else {
    throw Error('The HEX should be 6 symbols long');
  }
};

const validateColor = (color: string) => {
  if (color[0] === '#') {
    return color.substring(1);
  }

  return color;
};

const hextToRGBString = (color: string) => {
  const colorsArray = hexToRGB(color);

  return (
    'rgb(' +
    colorsArray.reduce(
      (acc, rgb, index) => (acc += `${rgb}${index === 2 ? '' : ','}`),
      '',
    ) +
    ')'
  );
};

export {hexToRGB, hextToRGBString};
