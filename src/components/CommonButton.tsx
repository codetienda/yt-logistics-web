import React from 'react';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import clsx from 'clsx';

type CommonButtonProps = {
  title: string;
  onClick?: () => void;
  className?: string;
  outlined?: boolean;
  gradient?: boolean;
  rightIcon?: boolean;
  icon?: LucideIcon;
  iconColor?: string;
  iconBackground?: string;
  iconSize?: number;
  titleStyle?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
};

const CommonButton: React.FC<CommonButtonProps> = ({
  title,
  onClick,
  className = '',
  outlined = false,
  gradient = false,
  rightIcon = true,
  iconSize = 12,
  titleStyle,
  size = 'medium',
  icon: Icon = ArrowRight,
}) => {
  const sizeClasses = {
    small: 'text-xs py-1 px-3 gap-2',
    medium: 'text-sm py-1.5 px-4 gap-2.5',
    large: 'text-base py-2 px-5 gap-3',
    xl: 'text-lg py-2.5 px-6 gap-3.5',
  };

  const baseClasses = clsx(
    'inline-flex items-center justify-between rounded-full font-medium transition-all duration-200 group',
    sizeClasses[size]
  );

  const bgClasses = gradient
    ? 'bg-gradient-to-r from-blue-900 to-teal-600 text-white'
    : outlined
    ? 'border border-[#011E62] bg-transparent hover:bg-[#011E62] hover:text-white'
    : 'bg-[#011E62] hover:text-white hover:bg-blue-950';

  const iconWrapperClasses = clsx(
    'rounded-full p-1 transition-all duration-200',
    outlined
      ? 'bg-white group-hover:bg-white'
      : 'bg-white group-hover:bg-blue-950',
    outlined
      ? 'text-[#011E62] group-hover:text-[#011E62]'
      : 'text-[#011E62] group-hover:text-white',
    outlined && 'border border-[#011E62]'
  );

  return (
    <button onClick={onClick} className={clsx(baseClasses, bgClasses, className)}>
      <span className={titleStyle}>{title}</span>
      {rightIcon && (
        <span className={iconWrapperClasses}>
          <Icon size={iconSize} />
        </span>
      )}
    </button>
  );
};

export default CommonButton;
