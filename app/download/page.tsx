
import { Metadata } from "next";
import Link from "next/link";
import MainContent from "@/app/components/MainContent";
import Container from "@/app/components/Container";

export const metadata: Metadata = {
    title: "Download",
    openGraph: {
        title: "Download",
    },
    alternates: {
        canonical: "/download",
    },
};

export default function DownloadPage() {
    return (
        <MainContent>
            <Container>
                <section className="content">
                    <h1 className="title">ダウンロードとインストール</h1>

                    <h2>実行環境</h2>
                    <p>EasyTurtleは、Windows環境向けのビルド済みファイルと、Python3が実行可能な環境で動作するPython形式のファイルが提供されます。</p>
                    <p>リリースされているビルド済みファイルはPython for Windowsの３系を利用してビルドされています。</p>
                    <p>これらのファイルはWindows 64bit上で動作します。</p>
                    <p>リリースされているPython形式のファイルはPython3.7以上を実行可能なWindows 10, Linuxで動作します。</p>
                    <p><code>EasyTurtle-[version]</code>内にある<code>easy_turtle.py</code>を実行してください。</p>
                    <p>※初期設定の場合、Windowが大きく表示される可能性があります。Windowサイズを小さくする場合は&ldquo;ユーザー設定 -&gt; 画面の大きさを調節する&rdquo;のチェックを外し、ソフトウェアを再起動してください。</p>
                    <p>※Python形式のファイルはWindows 10(実機), Ubuntu(WSL), Fedora(実機)の環境で動作確認をしました。</p>

                    <h2>ダウンロード</h2>
                    <p>最新版は<a href="https://github.com/latte72r/EasyTurtle/releases" target="_blank" rel="noopener noreferrer">GitHub</a>からダウンロードできます。</p>
                    <p>Python形式のファイル、圧縮形式のZipファイル、インストーラー形式のMsiのファイルがダウンロードできます。</p>
                    <p>Windowsで実行する場合は<Link href="/install-windows">こちら</Link>、Linuxで実行する場合は<Link href="/install-linux">こちら</Link>を御覧ください。</p>
                </section>
            </Container>
        </MainContent>
    );
}
