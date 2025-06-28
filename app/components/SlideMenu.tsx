'use client';

import styles from '@/app/styles/SlideMenu.module.css';

import Link from 'next/link';
import React from 'react';

interface SlideMenuProps {
    isOpen: boolean;
    sRef: React.RefObject<HTMLDivElement | null>;
}

const SlideMenu = (props: SlideMenuProps) => {
    return (
        <div className={`${styles.slideMenu} ${props.isOpen ? styles.open : ""}`} ref={props.sRef}>
            <p><Link href="/" className={styles.menuLink}>TopPage</Link></p>
            <div className={styles.divider}></div>
            <p><Link href="/download" className={styles.menuLink}>Download</Link></p>
            <p><Link href="/install-windows" className={styles.menuLink}>Install Windows</Link></p>
            <p><Link href="/install-linux" className={styles.menuLink}>Install Linux</Link></p>
            <div className={styles.divider}></div>
            <p><Link href="/license" className={styles.menuLink}>License</Link></p>
            <div className={styles.divider}></div>
            <p><Link href="/tutorial" className={styles.menuLink}>Tutorial</Link></p>
            <p><Link href="/widgets" className={styles.menuLink}>Widgets</Link></p>
            <div className={styles.divider}></div>
            <p><Link href="https://github.com/latte72r/EasyTurtle/releases" className={styles.menuLink} target="_blank">Release Notes (GitHub)</Link></p>
            <div className={styles.divider}></div>
            <p><Link href="https://latte72.net" className={styles.menuLink} target="_blank">About the Author</Link></p>
        </div>
    )
}

export default SlideMenu;
