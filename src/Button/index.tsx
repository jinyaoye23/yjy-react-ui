import React from "react";
import classNames from "classnames";
import './index.less';

export interface ButtonProps {
  /**
   * 按钮类型
   */
  variant?: 'primary' | 'default' | 'dashed' | 'text' | 'link';
  /**
   * 按钮大小
   */
  size?: 'small' | 'middle' | 'large';
  /**
   * 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * 按钮内容
   */
  children?: React.ReactNode;
  /**
   * 自定义类名
   */
  className?: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { variant = 'default', size = 'middle', onClick, children, className, disabled } = props;
  const classes = classNames('btn', `btn-${variant}`, `btn-${size}`, {'btn-disabled': disabled}, className)

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>{children}</button>
  )
}

export default Button;