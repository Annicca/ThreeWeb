import { FC } from "react";
import classNames from "classnames";
import { socials } from "../../Constants";
import { List } from "uikit/list/List";
import { ImageLinkItem } from "../link/ImageLinkItem";

import styles from './Footer.module.scss'

export const Footer: FC = () =>{

    return(
        <footer className={styles.footer}>
            <div className={classNames('container', styles.footer__container)} >
                <div className = {styles.footer__title}>Мы в соц сетях:</div>
                <List items={socials} className = {styles.footer__social} renderItem={(img) => <ImageLinkItem key = {img.link} img={img} />} />
            </div>
        </footer>
    )
}