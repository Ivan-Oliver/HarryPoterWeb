import { getToken } from "../storage";

export type SpellResponse = {
  id: string;
  spellId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

const BASE_API_URL = "http://localhost:8000/spells";

export const getSpells = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: SpellResponse[] = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncSpells = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncSpells", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
