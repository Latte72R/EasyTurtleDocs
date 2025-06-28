
import { Metadata } from "next";
import MainContent from "../components/MainContent";
import Container from "@/app/components/Container";

export const metadata: Metadata = {
    title: "Notice",
    openGraph: {
        title: "Notice",
    },
    alternates: {
        canonical: "/notice",
    },
};

export default function NoticePage() {
    return (
        <MainContent>
            <Container>
                <section className="home" id="home">
                    <h2 className="title">追加情報</h2>
                    <div>
                        <ol>
                            <li>
                                <p>EasyTurtleはPython及び、それに付属するソフトウェアを同梱しています。</p>
                                <p>
                                    Pythonのライセンスについては{" "}
                                    <a
                                        href="https://docs.python.org/3/license.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        History and License - docs.python.org
                                    </a>{" "}
                                    をご覧ください。
                                </p>
                            </li>
                            <li>
                                <p>EasyTurtleのWindows版をビルドするに当たりcx_Freezeを使用しています。</p>
                                <p>
                                    cx_Freezeのライセンスについては{" "}
                                    <a
                                        href="https://cx-freeze.readthedocs.io/en/latest/license.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Licensing - cx-freeze.readthedocs.io
                                    </a>{" "}
                                    をご覧ください。
                                </p>
                            </li>
                        </ol>
                        <br />
                        <p>
                            EasyTurtleを制作するに当たり、使用しているソフトウェアの制作に関わる方々に感謝いたします。
                        </p>
                    </div>
                </section>
            </Container>
        </MainContent>
    );
}
