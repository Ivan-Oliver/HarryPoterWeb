import { getToken } from "../storage";

export type StaffResponse = {
  id: string;
  staffId: string;
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
};

const BASE_API_URL = "http://localhost:8000/staff";

export const getStaff = async () => {
  try {
    const token = getToken();
    const response = await fetch(BASE_API_URL, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response)
    const data: StaffResponse[] = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncStaff = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncStaff", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};