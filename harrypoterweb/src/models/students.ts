import type { StudentResponse } from "../services/api/students";

export type StudentInput = {
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
        size: string;
    };
    patronus: string;
    actor: string;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
};

export const normalizeStudent = (input: StudentResponse) => {
    
    return {
        id: input?.id || "",
        studenId: input?.studentId || "",
        name: input?.name || "",
        species: input?.species || "",
        house: input?.house || "",
        wizard: input?.wizard || "",
        ancestry: input?.ancestry || "",
        wand: {
            wood: input?.wand?.wood || "",
            core: input?.wand?.core || "",
            size: input?.wand.length || "",
        },
        patronus: input?.patronus || "",
        actor: input?.actor || "",
        image: input?.image || "",
        createdAt: input?.createdAt || Date(),
        updatedAt: input?.updatedAt || Date(),
  };
};

export type Student = ReturnType<typeof normalizeStudent>;