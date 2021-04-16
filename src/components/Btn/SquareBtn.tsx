import React from "react";
import classNames from "classnames";
import { RawBtn } from "@components/Btn/Btn";
import "./SquareBtn.less";

export interface IconBtnOptions extends StyledProps {
  disabled?: boolean;
  title?: string;
  message?: string;
  icon?: string;
  size?: string | number;
  onClick?: any;
  children?: React.ReactNode;
  iconBackground?: string;
}

export function SquareBtn({
  onClick,
  icon,
  size,
  iconBackground,
  style,
  className,
  title,
  // message,
  children,
}: IconBtnOptions) {
  const btnSize = size ? { width: size, height: size } : {};

  return (
    <div
      className={classNames("square-btn-container", className)}
      style={{
        ...style,
      }}
    >
      {title && <div className="square-btn-title text-overflow">{title}</div>}

      {icon ? (
        <RawBtn
          className="square-btn"
          onClick={onClick}
          style={{
            background: iconBackground,
            ...btnSize,
          }}
        >
          <img className="btn-icon" src={icon as string} />
        </RawBtn>
      ) : (
        children
      )}

      {/* {Boolean(message) && (
        <div className="square-btn-msg text-overflow">{message}</div>
      )} */}
    </div>
  );
}
