import { Metadata } from "next";
import Image from "next/image";
import MainContent from "@/app/components/MainContent";
import Container from "@/app/components/Container";
import styles from "@/app/styles/PageContent.module.css";

export const metadata: Metadata = {
    title: "Tutorial",
    openGraph: {
        title: "Tutorial",
    },
    alternates: {
        canonical: "/tutorial",
    },
};

export default function TutorialPage() {
    return (
        <MainContent>
            <Container>
                {/* 操作方法セクション */}
                <section className="main">
                    <h2 id="Widget">ウィジェット操作</h2>
                    <h3>ウィジェットの追加</h3>
                    <p>
                        右側のリストでウィジェットを選択すると左側のリストにウィジェットが追加されます。
                    </p>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.sectionImage}
                            src="/Photos/photo2.webp"
                            alt="ウィジェット追加後"
                            width={600}
                            height={300}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>

                    <h3>ウィジェットの変更</h3>
                    <p>ウィジェットを右クリックすることでメニューが表示されます。</p>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.sectionImage}
                            src="/Photos/photo13.webp"
                            alt="ウィジェット右クリックメニュー"
                            width={600}
                            height={300}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>説明</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>一番上に移動</td>
                                <td>ウィジェットを一番上に移動する</td>
                            </tr>
                            <tr>
                                <td>一番下に移動</td>
                                <td>ウィジェットを一番下に移動する</td>
                            </tr>
                            <tr>
                                <td>一個上に移動</td>
                                <td>ウィジェットを一個上に移動する</td>
                            </tr>
                            <tr>
                                <td>一個下に移動</td>
                                <td>ウィジェットを一個下に移動する</td>
                            </tr>
                            <tr>
                                <td>コピー</td>
                                <td>ウィジェットをコピーする</td>
                            </tr>
                            <tr>
                                <td>切り取り</td>
                                <td>ウィジェットを切り取る</td>
                            </tr>
                            <tr>
                                <td>削除</td>
                                <td>ウィジェットを削除する</td>
                            </tr>
                            <tr>
                                <td>複製</td>
                                <td>ウィジェットを複製する</td>
                            </tr>
                            <tr>
                                <td>オプション</td>
                                <td>オプションを表示する<span style={{ float: "right" }}>※１</span></td>
                            </tr>
                            <tr>
                                <td>有効化</td>
                                <td>ウィジェットを有効化する<span style={{ float: "right" }}>※２</span></td>
                            </tr>
                            <tr>
                                <td>無効化</td>
                                <td>ウィジェットを無効化する</td>
                            </tr>
                            <tr>
                                <td>上にペースト</td>
                                <td>ウィジェットを上にペーストする</td>
                            </tr>
                            <tr>
                                <td>下にペースト</td>
                                <td>ウィジェットを下にペーストする</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><strong>※１：一部のウィジェットのみで有効です。</strong></p>
                    <p><strong>※２：有効にできないウィジェットもあります。</strong></p>

                    <h3>ウィジェットの追加位置</h3>
                    <p>ウィジェットの追加・ペースト位置を指定します</p>
                    <h4>プログラムの最初</h4>
                    <p>プログラムの最初に追加します。</p>
                    <h4>プログラムの最後</h4>
                    <p>プログラムの最後に追加します。</p>
                    <h4>指定位置</h4>
                    <p>指定した位置に追加します。</p>
                    <p>指定できる値は１～プログラムの最後までです。</p>
                    <h4>位置の自動調整</h4>
                    <p>位置を自動で調整するかどうかを指定します。</p>
                </section>
            </Container>
            <Container>
                {/* 操作方法セクション */}
                <section className="main">
                    <h2 id="TabBar">タブ操作</h2>
                    <p>タブバーには設定タブとプログラミングタブが置かれます</p>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.sectionImage}
                            src="/Photos/photo4.webp"
                            alt="タブバー"
                            width={600}
                            height={300}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <h3>タブの選択</h3>
                    <p>タブをクリックすることで選択できます</p>
                    <h3>タブの削除</h3>
                    <p>タブの右端の❌をクリックすることで削除できます</p>
                    <h3>タブの移動</h3>
                    <p>タブをドラッグすることで移動できます</p>
                    <p><strong>※Windowsのみの機能です</strong></p>
                    <h3>タブの追加</h3>
                    <p>タブバーの➕をクリックすることで新しいタブを追加できます</p>
                </section>
            </Container>
            <Container>
                <section className="main">

                    <h2 id="MenuBar">メニューバー</h2>
                    <p>メニューバーを利用するとより細かい操作が行なえます</p>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.sectionImage}
                            src="/Photos/photo3.webp"
                            alt="メニューバー"
                            width={600}
                            height={300}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>

                    <h3>ファイル</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>説明</th>
                                <th>ショートカット</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>新しいタブ</td>
                                <td>新しいタブを作成する</td>
                                <td><code>Ctrl</code>+<code>N</code></td>
                            </tr>
                            <tr>
                                <td>新しいウィンドウ</td>
                                <td>新しい画面を開く</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>N</code></td>
                            </tr>
                            <tr>
                                <td>ファイルを開く</td>
                                <td>プログラムを開く</td>
                                <td><code>Ctrl</code>+<code>O</code></td>
                            </tr>
                            <tr>
                                <td>上書き保存</td>
                                <td>プログラムを上書き保存する</td>
                                <td><code>Ctrl</code>+<code>S</code></td>
                            </tr>
                            <tr>
                                <td>名前を付けて保存</td>
                                <td>プログラムを名前を付けて保存する</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>S</code></td>
                            </tr>
                            <tr>
                                <td>現在のタブを閉じる</td>
                                <td>現在開いているタブを閉じる</td>
                                <td><code>Ctrl</code>+<code>W</code></td>
                            </tr>
                            <tr>
                                <td>保存済みのタブを閉じる</td>
                                <td>保存済みのタブのみを閉じる</td>
                                <td><code>Ctrl</code>+<code>T</code></td>
                            </tr>
                            <tr>
                                <td>再起動</td>
                                <td>アプリケーションを再起動する</td>
                                <td><code>Ctrl</code>+<code>R</code></td>
                            </tr>
                            <tr>
                                <td>終了</td>
                                <td>アプリケーションを終了する</td>
                                <td><code>Ctrl</code>+<code>Q</code></td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>編集</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>説明</th>
                                <th>ショートカット</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>取り消し</td>
                                <td>動作を一つ取り消す</td>
                                <td><code>Ctrl</code>+<code>Z</code></td>
                            </tr>
                            <tr>
                                <td>やり直し</td>
                                <td>取り消しを一つやり直す</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>Z</code></td>
                            </tr>
                            <tr>
                                <td>コピー</td>
                                <td>選択されたウィジェットをコピーする</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>C</code></td>
                            </tr>
                            <tr>
                                <td>切り取り</td>
                                <td>選択されたウィジェットを切り取る</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>X</code></td>
                            </tr>
                            <tr>
                                <td>貼り付け</td>
                                <td>コピーされたウィジェットを貼り付ける</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>V</code></td>
                            </tr>
                            <tr>
                                <td>削除</td>
                                <td>選択されたウィジェットを削除する</td>
                                <td><code>Ctrl</code>+<code>D</code></td>
                            </tr>
                            <tr>
                                <td>有効化</td>
                                <td>選択されたウィジェットを有効化する</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>E</code></td>
                            </tr>
                            <tr>
                                <td>無効化</td>
                                <td>選択されたウィジェットを無効化する</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>D</code></td>
                            </tr>
                            <tr>
                                <td>すべて選択</td>
                                <td>すべてのウィジェットを選択する</td>
                                <td><code>Ctrl</code>+<code>Shift</code>+<code>A</code></td>
                            </tr>
                            <tr>
                                <td>選択解除</td>
                                <td>すべてのウィジェットの選択を解除する</td>
                                <td><code>Ctrl</code>+<code>L</code></td>
                            </tr>
                            <tr>
                                <td>行へ移動</td>
                                <td>指定した行に移動する</td>
                                <td><code>Ctrl</code>+<code>G</code></td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>実行</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>説明</th>
                                <th>ショートカット</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>実行</td>
                                <td>プログラムを実行する</td>
                                <td><code>F5</code></td>
                            </tr>
                            <tr>
                                <td>最速実行</td>
                                <td>プログラムを最大限高速に実行する</td>
                                <td><code>Shift</code>+<code>F5</code></td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>オプション</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>名称</th>
                                <th>説明</th>
                                <th>ショートカット</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>設定</td>
                                <td>設定タブを開く</td>
                                <td><code>Ctrl</code>+<code>,</code></td>
                            </tr>
                            <tr>
                                <td>オンラインヘルプ</td>
                                <td>ブラウザでオンラインヘルプを表示する</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>オフラインヘルプ</td>
                                <td>ブラウザでオフラインヘルプを表示する</td>
                                <td><code>F1</code></td>
                            </tr>
                            <tr>
                                <td>バージョン情報</td>
                                <td>バージョン情報を開く</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>GitHubで表示</td>
                                <td>ブラウザでGitHubのページを開く</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </Container>
            <Container>
                <section className="main">
                    <h2 id="Configure">設定変更</h2>
                    <p>設定は設定タブで変更できます</p>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.sectionImage}
                            src="/Photos/photo14.webp"
                            alt="設定画面"
                            width={600}
                            height={300}
                            style={{ maxWidth: "100%", height: "auto" }}
                        />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>設定</th>
                                <th>内容</th>
                                <th>デフォルト</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>save_more_info</code></td>
                                <td>より多くの情報を保存する</td>
                                <td>無効</td>
                            </tr>
                            <tr>
                                <td><code>ask_save_new</code></td>
                                <td>古いファイルを変更するか確認する</td>
                                <td>有効</td>
                            </tr>
                            <tr>
                                <td><code>show_warning</code></td>
                                <td>警告と追加情報を表示する</td>
                                <td>有効</td>
                            </tr>
                            <tr>
                                <td><code>expand_window</code></td>
                                <td>画面の大きさを調整する<span style={{ float: "right" }}>※１</span></td>
                                <td>有効</td>
                            </tr>
                            <tr>
                                <td><code>user_document</code></td>
                                <td>ユーザードキュメントを使用する</td>
                                <td>実行形式で有効</td>
                            </tr>
                            <tr>
                                <td><code>auto_update</code></td>
                                <td>起動時にアップデートを確認する</td>
                                <td>有効</td>
                            </tr>
                            <tr>
                                <td><code>open_last_file</code></td>
                                <td>前回開いていたファイルを開く</td>
                                <td>有効</td>
                            </tr>
                            <tr>
                                <td><code>share_copy</code></td>
                                <td>コピーを他のタブと共有する</td>
                                <td>無効</td>
                            </tr>
                            <tr>
                                <td><code>scroll_center</code></td>
                                <td>中クリックでの移動を有効化する<span style={{ float: "right" }}>※１</span></td>
                                <td>有効<span style={{ float: "right" }}>※２</span></td>
                            </tr>
                            <tr>
                                <td><code>enable_backup</code></td>
                                <td>バックアップを有効化する</td>
                                <td>有効</td>
                            </tr>
                        </tbody>
                    </table>
                    <p><strong>※１：再起動後に有効になる設定です。</strong></p>
                    <p><strong>※２：不具合が確認されているためLinuxではデフォルトで無効です。</strong></p>
                </section >
            </Container>
        </MainContent >
    );
}
