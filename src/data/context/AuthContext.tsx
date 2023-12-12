import User from "../../model/User";
import { createContext, useEffect, useState } from "react";

import Cookies from 'js-cookie';
import axios from "axios";
import router from "next/router";
import AuthContextProps from "../../interfaces/AuthContextProps";

const AuthContext = createContext<AuthContextProps>({});

function gerenciarCookie(logged: boolean, token: string) {
    if (logged) {
        Cookies.set("ovinos-auth", logged.toString(), { expires: 1 });
        Cookies.set("ovinos-token", token, { expires: 1 });
    } else {
        Cookies.remove("ovinos-auth");
        Cookies.remove("ovinos-token");
    }
}

export function AuthProvider(props) {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<User>(null);

    async function configurarSessao(userRecebido: User) {
        if (userRecebido?.token) {
            setUser(userRecebido);
            gerenciarCookie(true, userRecebido.token);
            setLoading(false);
            return userRecebido.id;
        } else {
            setUser(null);
            gerenciarCookie(false, null);
            setLoading(false);
            return false;
        }
    }

    async function login(userRecebido: string, password: string) {
        let usuarioRecebido = {
            user: userRecebido,
            password
        }

        try {
            setLoading(true);
            const retorno = await axios.post("http://localhost:8080/users/auth", { usuarioRecebido });
            configurarSessao(retorno.data);
            router.push("/");
        } catch (error) {
            //todo colocar a msg aq
            throw new Error('erro');
        } finally {
            setLoading(false);
        }
    }

    async function logout() {
        try {
            setLoading(true);
            await configurarSessao(null);
        } finally {
            setLoading(false);
        }
    }

    async function register(name: string, username: string, password: string) {
        let user = {
            name,
            username,
            password,
        };

        try {
            if (name && username && password) {
                setLoading(true);
                let retorno = await axios.post("http://localhost:8080/users", user);

                
            } else {
                throw new Error('Informe todos os valores.');
            }
        } catch (err) {
            //todo colocar a msg aq
            throw new Error('erro');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        let token = Cookies.get("ovinos-token");

        if (token) {
            axios.get(`https://urldaapi/auth/valida/?token=${token}`)
                .then((retorno) => {
                    retorno.data.valid ? configurarSessao(retorno.data.decoded) : configurarSessao(null);
                }).catch((err) => {
                    console.log(err);

                })
        } else {
            configurarSessao(null);
        }
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                login,
                logout,
                register
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;

