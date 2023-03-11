import { getToken } from "../storage";

export type StudentResponse = {
  id: string;
  studentId: string;
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

const Base_Url_Api = "http://localhost:8000/students";

export const getStudents = async () => {
  try {
    const token = getToken();
    const response = await fetch(Base_Url_Api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data: StudentResponse[] = await response.json();
    return data;
  } catch (error) {
    console.log((error as Error).message);
  }
  return [];
};

export const syncStudents = async () => {
  try {
    const token = getToken();
    await fetch("http://localhost:8000/syncStudents", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log((error as Error).message);
  }
};

export const removeStudent = async (id: string) => {
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
