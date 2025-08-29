export interface AuthRequest {
    identifier: string;
    password: string;
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    password?: string;
    confirmPassword?: string;
}

export interface Role {
    id: number;
    name: string;
}

export interface RoleRegister {
    role_id: number;
    role_name: string;
}


export interface User extends Role {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    profilePicUrl?: string;
    roles: Role[];
}


export interface AuthResponse extends User {
    success: boolean;
    message: string;
    statusCode: 200;
    data: {
        user: User;
        token: string;
    },
}