import { FC } from "react";
import NavigationComponent from "./navigation";
import style from './header.module.scss';

const HeaderComponent: FC<any> = ({ title }) => {
    return (
      <div className={style.header}>
        <div className={style.header_title}>{title}</div>
      </div>
    );
  };
  

export default HeaderComponent;