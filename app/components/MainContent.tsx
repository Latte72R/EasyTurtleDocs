'use client';

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SlideMenu from "@/app/components/SlideMenu";
import styles from "@/app/styles/MainContent.module.css";
import type { ReactNode } from "react";
import { useState, useRef } from "react";

const MainContent = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const slideRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className={styles.wrapper}>
            <SlideMenu isOpen={isOpen} sRef={slideRef} />
            <Header setIsOpen={setIsOpen} isOpen={isOpen} sRef={slideRef} />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default MainContent;
