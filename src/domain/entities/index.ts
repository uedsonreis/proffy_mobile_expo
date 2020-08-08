
export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

export interface Class {
    id: number;
    subject: string;
    cost: number;
    user: Teacher;
}