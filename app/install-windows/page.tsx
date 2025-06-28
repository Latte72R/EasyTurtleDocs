
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MainContent from "@/app/components/MainContent";
import Container from "@/app/components/Container";
import styles from "@/app/styles/PageContent.module.css";

export const metadata: Metadata = {
    title: "Install Windows",
    openGraph: {
        title: "Install Windows",
    },
    alternates: {
        canonical: "/install-windows",
    },
};

export default function InstallWindowsPage() {
    return (
        <MainContent>
            <Container>
                <section className="content">
                    <h1 className="title">Windowsでのインストールと実行</h1>

                    <h2>Pythonファイル</h2>
                    <p>Pythonファイルを利用する場合は<Link href="/download">ダウンロード</Link>してから任意のディレクトリで解凍してください。</p>
                    <p>Pythonファイルを実行するには<a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">Python</a>3.7以上がインストールされていて、<code>tcl/tk</code>のオプションを有効にしている必要があります。</p>
                    <p>コマンドプロンプトを起動して、<code>python easy_turtle.py</code>と実行してください。</p>

                    <h2>Zipファイル</h2>
                    <p>Zipファイルを利用する場合は<Link href="/download">ダウンロード</Link>してから任意のディレクトリで解凍してください。</p>
                    <p>そして <code>EasyTurtle-[version]-amd64/EasyTurtle.exe</code>を起動してください。</p>

                    <h2>Msiファイル</h2>
                    <p>Msiファイル版はインストールが必要です。EasyTurtleを利用する場合はMsiファイルを<Link href="/download">ダウンロード</Link>してダブルクリックし、インストールをしてから実行してください。</p>
                    <p>デフォルトではProgram Filesにインストールしてデスクトップにショートカットを作成します。</p>
                    <br />

                    <p><strong>※msiファイルを実行するときに「WindowsによってPCが保護されました」と表示されることがありますが、これはこのファイルがウイルスであることを示すものではありません。</strong></p>
                    <p><strong>表示された場合は「詳細を表示」を押してから「実行」を押してください。</strong></p>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.sectionImage}
                            src="/Photos/windows.png" alt="Windows警告画面" width={600} height={400} />
                    </div>
                    <p><strong>※インストール後アプリケーションを実行したときにエラーが発生する場合は、一度再起動してから実行してみてください。</strong></p>

                </section>
            </Container>
        </MainContent>
    );
}
