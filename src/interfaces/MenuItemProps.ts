interface MenuItemProps {
    url?: string;
    text: string;
    icon: any;
    className?: string;
    onClick?: (event: any) => void;
    type: 'normal' | 'especial';
  }