export const formatId = (id) => {
  if (id.length === 1) {
    return `#000${id}`;
  }
  if (id.length === 2) {
    return `#00${id}`;
  }
  if (id.length === 3) {
    return `#0${id}`;
  } else {
    return id;
  }
};

export const formatHeight = (height) => {
  return `#${height * 10}cm`;
};

export const formatWeight = (weight) => {
  return `#${weight / 10}kg`;
};

export const searchPokemonsByName = ({ data, name }) => {
  return data.filter((item) => item.name.indexOf(name) !== -1);
};
