import type { StaffResponse } from "../services/api/staff";

export type StaffInput = {
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

export const normalizeStaff = (input: StaffResponse) => {

    return {
        id: input?.id || "",
        staffId: input?.staffId || "",
        name: input?.name || "",
        species: input?.species || "",
        house: input?.house || "",
        wizard: input?.wizard || "",
        ancestry: input?.ancestry || "",
        wand: {
            wood: input?.wand?.wood || "",
            core: input?.wand.core || "",
            size: input?.wand.length || "",
        },
        patronus: input?.patronus || "",
        actor: input?.actor || "",
        image: input?.image || "",
        createdAt: input?.createdAt || Date(),
        updatedAt: input?.updatedAt || Date(),
    };
};

export type Staff = ReturnType<typeof normalizeStaff>;