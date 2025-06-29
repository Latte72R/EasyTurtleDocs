"use client";

import React from "react";
import Link from "next/link";
import styles from "@/app/styles/Header.module.css";

// 型定義
interface NavigationChild {
    title: string;
    href: string;
    external?: boolean;
}

interface NavigationItem {
    title: string;
    href?: string;
    isHome?: boolean;
    children?: NavigationChild[];
}

interface HeaderProps {
    sRef: React.RefObject<HTMLDivElement | null>;
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
}

const HamburgerMenu = (props: HeaderProps) => {
    return (
        <svg className={`${styles.hamburgerMenu} ${props.isOpen ? styles.open : ""}`} viewBox="0 0 500 500"
            aria-hidden="true" onClick={() => props.setIsOpen(!props.isOpen)}>
            <path className={`${styles.border1} ${styles.border}`}
                d="M44.6,151.6h409.9c18.9,0,34.2-15.2,34.2-34.1c0-18.8-15.3-34-34.2-34H44.6c-18.8,0-34.1,15.2-34.1,34 C10.4,136.4,25.7,151.6,44.6,151.6z" />
            <path className={`${styles.border2} ${styles.border}`}
                d="M454.5,219.9H44.5c-18.8,0-34.1,15.3-34.1,34.1c0,18.9,15.3,34.2,34.1,34.2h409.9c18.9,0,34.2-15.3,34.2-34.2 C488.7,235.2,473.3,219.9,454.5,219.9z" />
            <path className={`${styles.border3} ${styles.border}`}
                d="M454.5,356.7H44.5c-18.8,0-34.1,15.2-34.1,34.1c0,18.8,15.3,34.1,34.1,34.1h409.9c18.9,0,34.2-15.3,34.2-34.1 S473.3,356.7,454.5,356.7z" />
        </svg>
    );
}

// ナビゲーションコンポーネント
const Navigation = () => {
    const navigationItems: NavigationItem[] = [
        {
            title: "EasyTurtle",
            href: "/",
            isHome: true
        },
        {
            title: "Download",
            children: [
                { title: "ダウンロード", href: "/download" },
                { title: "Windows環境での実行", href: "/install-windows" },
                { title: "Linux環境での実行", href: "/install-linux" }
            ]
        },
        {
            title: "License",
            children: [
                { title: "ライセンス", href: "/license" },
                { title: "追加情報", href: "/notice" }
            ]
        },
        {
            title: "Tutorial",
            children: [
                { title: "操作方法", href: "/tutorial" },
                { title: "ウィジェットの説明", href: "/widgets" }
            ]
        },
        {
            title: "Samples",
            children: [
                { title: "付属するサンプル", href: "/samples" }
            ]
        },
        {
            title: "Release of EasyTurtle",
            children: [
                { title: "リリース - (GitHub)", href: "https://github.com/latte72r/EasyTurtle/releases", external: true }
            ]
        }
    ];

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                {navigationItems.map((item, index) => (
                    <li
                        key={`nav-${index}-${item.title}`}
                        className={item.isHome ? styles.navigationItemHome : styles.navigationItem}
                    >
                        {item.href ? (
                            <Link href={item.href} className={styles.navigationLink}>
                                {item.title}
                            </Link>
                        ) : (
                            <>
                                <span className={styles.navigationLink}>{item.title}</span>
                                {item.children && (
                                    <ul className={styles.subNavigationList}>
                                        {item.children.map((child, childIndex) => (
                                            <li key={`sub-${index}-${childIndex}-${child.title}`} className={styles.subNavigationItem}>
                                                {child.external ? (
                                                    <a
                                                        href={child.href}
                                                        className={styles.subNavigationLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {child.title}
                                                    </a>
                                                ) : (
                                                    <Link href={child.href} className={styles.subNavigationLink}>
                                                        {child.title}
                                                    </Link>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// ヘッダーコンポーネント
const Header = (props: HeaderProps) => {
    return (
        <header className={styles.header}>
            <HamburgerMenu sRef={props.sRef} setIsOpen={props.setIsOpen} isOpen={props.isOpen} />
            <Navigation />
        </header>
    );
};

export default Header;
