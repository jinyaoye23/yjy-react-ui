import React from "react";
import classNames from "classnames";
import './index.less';

export interface ButtonProps {
  type?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  size?: 'small' | 'middle' | 'large';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { type = 'default', size = 'middle', onClick, children, className, disabled } = props;
  const classes = classNames('btn', `btn-${type}`, `btn-${size}`, {'btn-disabled': disabled}, className)

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button;