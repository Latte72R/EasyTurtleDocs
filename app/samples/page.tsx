import { Metadata } from "next";
import Image from "next/image";
import MainContent from "../components/MainContent";
import Container from "@/app/components/Container";
import styles from "@/app/styles/PageContent.module.css";

export const metadata: Metadata = {
    title: "Samples",
    openGraph: {
        title: "Samples",
    },
    alternates: {
        canonical: "/samples",
    },
};

export default function SamplesPage() {
    return (
        <MainContent>
            <Container>
                <section className="home" id="home">
                    <h2 className="title">サンプル</h2>
                    <div>
                        <article>
                            <p>インストール用のファイルには３種類のサンプルが同梱されています。</p>
                            <br />

                            <h3>日の丸のサンプル</h3>
                            <p>
                                <code>/Samples/JapaneseFlag.json</code>を開くボタンで開き、実行することで利用できます。
                            </p>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.sectionImage}
                                    src="/Photos/photo8.png"
                                    alt="日の丸のサンプル"
                                    width={400}
                                    height={300}
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>

                            <h3>三色団子のサンプル</h3>
                            <p>
                                <code>/Samples/Dumpling.json</code>を開くボタンで開き、実行することで利用できます。
                            </p>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.sectionImage}
                                    src="/Photos/photo9.png"
                                    alt="三色団子のサンプル"
                                    width={460}
                                    height={220}
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>

                            <h3>リンゴのサンプル</h3>
                            <p>
                                <code>/Samples/Apple.json</code>を開くボタンで開き、実行することで利用できます。
                            </p>
                            <div className={styles.imageContainer}>
                                <Image
                                    className={styles.sectionImage}
                                    src="/Photos/photo10.png"
                                    alt="リンゴのサンプル"
                                    width={320}
                                    height={320}
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>
                        </article>
                    </div>
                </section>
            </Container>
        </MainContent>
    );
}
