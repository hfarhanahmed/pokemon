// Pokemon details datatype
export type pokemon = {
  name: String;
  height: Number;
  weight: Number;
  sprites: pokemonSprites;
  types: Array<pokemonTypeArray>;
};

// Pokemon types array in pokemon details
type pokemonTypeArray = {
  slot: Number;
  type: pokemonType;
};

// Pokemon type in pokemon details types
type pokemonType = {
  name: String;
  url: String;
};

// Pokemon sprites object in pokemon details
type pokemonSprites = {
  front_default: String;
};
