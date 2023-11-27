export default interface AppContextProps {
    theme?: string;
    navbarVisibility?: boolean;
    loading?: boolean;
    reloading?: boolean;
    selectedTab?: string;
    changeTheme?: () => void;
    changeVisibility?: (visibility: boolean) => void;
    changeLoading?: (loading: boolean) => void;
    changeReloading?: (reloading: boolean) => void;
    changeSelectedTab?: (selectedTab: string) => void;
  }