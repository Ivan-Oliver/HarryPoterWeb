import { getToken } from "../storage";
import { normalizeSpells, SpellInput, Spells } from "../../models/spells";


export type SpellResponse = {
  id: string;
  spellId: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};

const BASE_URL_API = "http://localhost:8000/spells";

export const getSpells = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_URL_API, {
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

export const getSpellById = async (id: string): Promise<Spells | null> => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_URL_API}/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: SpellResponse = await response.json();
    console.log({ data });
    return normalizeSpells(data);
  } catch (error) {
    console.log((error as Error).message);
  }
  return null;
};

export const updateSpells = async (id: string, data: Partial<SpellInput>) => {
  try {
    const token = getToken();
    const response = await fetch(`${BASE_URL_API}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const staff: SpellResponse = await response.json();
    return normalizeSpells(staff);
  } catch (error) {
    console.log((error as Error).message);
  }
};
