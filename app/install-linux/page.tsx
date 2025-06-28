
import { Metadata } from "next";
import Link from "next/link";
import MainContent from "@/app/components/MainContent";
import Container from "@/app/components/Container";

export const metadata: Metadata = {
    title: "Install Linux",
    openGraph: {
        title: "Install Linux",
    },
    alternates: {
        canonical: "/install-linux",
    },
};

export default function InstallLinuxPage() {
    return (
        <MainContent>
            <Container>
                <section className="content">
                    <h1 className="title">Linuxでのインストールと実行</h1>

                    <h2>Pythonファイル</h2>
                    <p>Pythonファイルを利用する場合は<Link href="/download">ダウンロード</Link>してから任意のディレクトリで解凍してください。</p>
                    <p><code>git clone https://github.com/latte72r/EasyTurtle.git</code>を利用してクローンすることもできます。</p>
                    <p>Pythonファイルはインストールする必要がないため、ターミナルを起動して、<code>python3 easy_turtle.py</code>と実行してください。</p>
                    <p><strong>権限に関するエラーが表示された場合には初回のみroot権限で実行してください。</strong></p>

                    <h2>必要なパッケージ</h2>
                    <p>Python形式ファイルをLinuxで利用する場合は以下のパッケージが必要です。</p>
                    <ul>
                        <li><code>python3</code> - Python3.7以上が必要です</li>
                        <li><code>python3-tk</code> - GUI処理に利用します</li>
                        <li><code>x11-xserver-utils</code> - 画面サイズの取得に利用します</li>
                    </ul>

                    <p>以下の条件が満たされていないと正常に表示されないことがあります。</p>
                    <ul>
                        <li><a href="http://ftp.gnu.org/gnu/freefont/" target="_blank" rel="noopener noreferrer">GNU FreeFont</a>が利用可能である</li>
                        <li>日本語が表示できるフォントがインストールされている</li>
                    </ul>

                    <p>GNU FreeFontは<a href="http://ftp.gnu.org/gnu/freefont/freefont-ttf-20120503.zip" target="_blank" rel="noopener noreferrer">ここ</a>からダウンロードできます。</p>
                </section>
            </Container>
        </MainContent>
    );
}
