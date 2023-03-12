import { getToken } from "../storage";
import {
  Student,
  StudentInput,
  normalizeStudent,
} from "../../models/students"

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

export const getStudentById = async (id: string): Promise<Student | null> => {
  try {
    const token = getToken();
    const response = await fetch(`${Base_Url_Api}/${id}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data: StudentResponse = await response.json();
    return normalizeStudent(data);
  } catch (error) {
    console.log((error as Error).message);
  }
  return null;
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

export const updateStudent = async (
  id: string,
  data: Partial<StudentInput>
) => {
  try {
    const token = getToken();
    const response = await fetch(`${Base_Url_Api}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const student: StudentResponse = await response.json();
    console.log({ student });
    return normalizeStudent(student);
  } catch (error) {
    console.log((error as Error).message);
  }
};