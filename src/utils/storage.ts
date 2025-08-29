export const storage = {
    setToken: (token: string) => localStorage.setItem("token", token),
    getToken: () => localStorage.getItem("token"),

    setUser: (user: any) => localStorage.setItem("user", JSON.stringify(user)),
    getUser: () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    },

    setRoles: (roles: any) => localStorage.setItem("roles", JSON.stringify(roles)),
    getRoles: () => {
        const roles = localStorage.getItem("roles");
        return roles ? JSON.parse(roles) : []
    },

    clear: () => localStorage.clear()
};