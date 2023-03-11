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

const Base_Url_Api = "http://localhost:8000/staff";

export const getStaff = async () => {
  try {
    const token = getToken();
    const response = await fetch(Base_Url_Api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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

export const removeStaff = async (id: string) => {
  try {
    const token = getToken();
    await fetch(`${Base_Url_Api}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};
