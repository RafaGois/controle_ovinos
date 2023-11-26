import User from "../model/User";

export default interface AuthContextProps {
    user?: User;
    loading?: boolean;
    login?: (usuario: string, senha: string) => Promise<void>;
    logout?: () => Promise<void>;
}