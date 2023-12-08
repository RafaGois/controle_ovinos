import { createContext, useEffect, useState } from 'react';
import AppContextProps from '../../interfaces/AppContextProps';

const AppContext = createContext<AppContextProps>({});

export function AppProvider(props: any) {
    const [theme, setTheme] = useState("light");
    const [navbarVisibility, setNavbarVisibility] = useState(false);
    const [selectedTab, setSelectedTab] = useState("/");
    const [loading, setLoading] = useState(false);
    const [reloading, setReloading] = useState(false);

    function changeTheme() {
        const newTheme = theme === "" ? "dark" : "";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    function changeSelectedTab(newTab: string) {
        setSelectedTab(newTab);
        localStorage.setItem("selectedTab", newTab);
    }

    function changeVisibility(newVisibility: boolean) {
        setNavbarVisibility(newVisibility);
    }

    function changeLoading(newLoading: boolean) {
        setLoading(newLoading);
    }

    function changeReloading(newReloading: boolean) {
        setReloading(newReloading);
    }

    useEffect(() => {
        setTheme(localStorage.getItem("theme"));
        setSelectedTab(localStorage.getItem("selectedTab") ?? "/");
    }, []);

    return (
        <AppContext.Provider
            value={{
                theme,
                changeTheme,
                navbarVisibility,
                changeVisibility,
                loading,
                changeLoading,
                reloading,
                changeReloading,
                selectedTab,
                changeSelectedTab
            }}>
            {props.children}
        </AppContext.Provider>
    )
}


export default AppContext;