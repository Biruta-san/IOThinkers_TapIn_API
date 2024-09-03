export interface getUser {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};

export interface postUser {
    name: string;
    email: string;
};

export interface putUser {
    id: number;
    name: string;
    email: string;
};

export interface dbUser {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
};