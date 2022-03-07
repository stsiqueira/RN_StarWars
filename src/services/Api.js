import axios from "axios";

const baseUrl = 'https://swapi.dev/api/';

export const GetData = async (option) => {
  let array = [];
  for (let i = 1; i > 0; i++) {
    const res = await axios.get(`${baseUrl}${option}/?page=${i}`);
    array = [...array, ...res.data.results];
    if (res.data.next === null) {
      break;
    }
  }
  if (option === 'starships') {
    const starships = array.filter((starship) => starship.pilots.length > 0);
    return starships;
  }
  let pilots = [];
  array.map((pilot) => {
    if (pilot.starships.length > 0) {
      const newPilot = {
        name: pilot.name,
        gender: pilot.gender,
        starships: pilot.starships,
        url: pilot.url,
        favorite: false,
      };
      pilots.push(newPilot);
      return;
    }
  });
  return pilots;
};
