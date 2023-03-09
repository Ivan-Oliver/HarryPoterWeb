import { getToken } from "../storage";

export type CharacterResponse = {
    id: string;
    characterId: string;
    name: string;
    species: string;
    house: string;
    wizard: string;
    ancestry: string;
    wand: {
        wood: string;
        core: string;
        length: string;
    };
    patronus: string;
    actor: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

const Base_Url_Api = "http://localhost:8000/characters";

export const getCharacters = async () => {
    try {
      const token = getToken();
      const response = await fetch(Base_Url_Api, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data: CharacterResponse[] = await response.json();
      return data;
    } catch (error) {
      console.log((error as Error).message);
    }
    return [];
  };

  export const syncCharacters = async () => {
    try {
      const token = getToken();
      await fetch("http://localhost:8000/syncCharacters", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.log((error as Error).message);
    }
  };