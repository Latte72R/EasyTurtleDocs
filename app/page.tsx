
import Image from "next/image";
import Link from "next/link";
import MainContent from "@/app/components/MainContent";
import Container from "@/app/components/Container";
import { GitHubIcon, TwitterIcon, QiitaIcon } from "@/app/components/SnsIcon";
import styles from "@/app/styles/PageContent.module.css";
import LatteLogo from "@/app/icon.ico";

// セクションコンポーネント
const WelcomeSection = () => (
  <Container>
    <section className={styles.welcomeSection}>
      <h2 className={styles.sectionTitle}>EasyTurtleへようこそ</h2>
      <p className={styles.sectionText}>EasyTurtleへようこそ！</p>
      <p className={styles.sectionText}>EasyTurtleを使ってTurtleを動かすプログラムを書きましょう！</p>
    </section>
  </Container>
);

const AboutSection = () => (
  <Container>
    <section className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>EasyTurtleとは</h2>
      <div className={styles.sectionContent}>
        <p className={styles.sectionText}>
          EasyTurtleとは、GUIを利用してPythonのTurtleモジュールを簡単に扱えるプログラムであり、完全に無料で使用することができます。また、Windows 10とLinux環境で実行が可能です。
        </p>
        <p className={styles.sectionText}>
          値の入力とクリックのみでPythonのTurtleモジュールをプログラムできます。詳しくは
          <a
            href="https://github.com/latte72r/EasyTurtle"
            className={styles.externalLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          を御覧ください。
        </p>
        <p className={styles.sectionText}>
          最新版はGitHubからダウンロードできます。詳しくは
          <Link href="/download" className={styles.internalLink}>こちら</Link>
          をご覧ください。
        </p>
        <p className={styles.sectionText}>
          このソフトウェアを使用する場合、
          <Link href="/license" className={styles.internalLink}>ライセンス</Link>
          に同意して頂く必要があります。
        </p>
        <p className={styles.sectionText}>
          このソフトウェアの使い方については
          <Link href="/tutorial" className={styles.internalLink}>こちら</Link>
          をご覧ください。
        </p>
        <p className={styles.sectionText}>
          また、このソフトウェアにはサンプルが付属しています。サンプルについての説明は
          <Link href="/samples" className={styles.internalLink}>こちら</Link>
          をご覧ください。
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/Photos/photo11.webp"
            alt="EasyTurtle スクリーンショット"
            width={600}
            height={300}
            className={styles.sectionImage}
          />
        </div>
      </div>
    </section>
  </Container>
);

const AuthorSection = () => (
  <Container>
    <section className={styles.authorSection}>
      <h2 className={styles.sectionTitle}>作者について</h2>
      <div className={styles.sectionContent}>
        <h3>Portfolio</h3>
        <p className={styles.sectionText}>
          作者のホームページはこちらからご覧いただけます：
        </p>
        <p>
          <a
            href="https://latte72.net/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={LatteLogo}
              alt="Latte72 Logo"
              width={24}
              height={24}
              className={styles.portfolioIcon}
            />
            Latte72
          </a>
        </p>
        <h3>Social Media</h3>
        <p className={styles.sectionText}>
          作者のSNSアカウントはこちらからご覧いただけます：
        </p>
        <div className={styles.socialLinksContainer}>
          <a
            href="https://github.com/Latte72R"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            @Latte72R
          </a>
          <a
            href="https://x.com/Latte72R"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
            @Latte72R
          </a>
          <a
            href="https://qiita.com/Latte72R"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <QiitaIcon />
            @Latte72R
          </a>
        </div>
      </div>
    </section>
  </Container>
);

// メインコンテンツコンポーネント
const TopPage = () => {
  return (
    <>
      <MainContent>
        <WelcomeSection />
        <AboutSection />
        <AuthorSection />
      </MainContent>
    </>
  );
};

export default TopPage;
