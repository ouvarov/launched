export type AuthReduceTypes = {
    type: string;
    data: AuthTypes;
};

export type AuthDataTypes = {
    data: AuthTypes;
    errorEmail?: string;
    errorPassword?: string;
};

export type AuthTypes = {
    email?: string;
    password?: string;
    chekPassword?: string;
    gender?: string;
};

export type StateTypes = {
    auth: AuthDataTypes;
};
