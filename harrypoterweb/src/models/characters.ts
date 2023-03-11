import type { CharacterResponse } from "../services/api/characters";

export type CharacterInput = {
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
    size: string;
  };
  patronus: string;
  actor: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
};


export const normalizeCharacter = (input: CharacterResponse) => {
 

  return {
    id: input?.id || "",
    characterId: input?.characterId || "",
    name: input?.name || "",
    species: input?.species || "",
    house: input?.house || "",
    wizard: input?.wizard || "",
    ancestry: input?.ancestry || "",
    wand: {
      wood: input?.wand?.wood || "",
      core: input?.wand?.core || "",
      size: input?.wand?.length || "",
    },
    patronus: input?.patronus || "",
    actor: input?.actor || "",
    image: input?.image || "",
    createdAt: input?.createdAt || Date(),
    updatedAt: input?.updatedAt || Date(),
  };
};

export type Character = ReturnType<typeof normalizeCharacter>;
