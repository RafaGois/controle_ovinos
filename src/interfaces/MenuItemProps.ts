interface MenuItemProps {
    url?: string;
    icon: any;
    className?: string;
    onClick?: (event: any) => void;
    type: 'normal' | 'especial';
  }