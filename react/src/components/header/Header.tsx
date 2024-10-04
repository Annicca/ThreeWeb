import { FC } from "react"
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { List } from "uikit/list/List";
import { LinkItem } from "../link/LinkItem";
import { IS_MOBILE, header } from "../../Constants";
import { Button } from "uikit/button/Button";
import Logo from "assets/icons/logo.svg?react";
import ArrowLeft from 'assets/icons/arrow-left.svg?react'

import styles from './Header.module.scss';

export const Header: FC = () => {
    const navigate = useNavigate()
    if (!IS_MOBILE) return (
        <header className={classNames('container',styles.header)}>
            <Link to = "/"><Logo /></Link>
            <List 
            items={header} 
            renderItem={(item) => <LinkItem key = {item.title} item={item} className={styles.header__link} />} className={styles.header__list} />
        </header>
    )
    else return (
        <header className={classNames('container',styles.header_mobile)}>
            <div>
                <Button isClear onClick={() => navigate(-1)} className={styles.header__back}>
                    <ArrowLeft width={30} height={30}/>
                </Button>
            </div>
        </header>
    )
}