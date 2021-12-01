import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3552440748579508"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "inline-block", width: 300, height: 250 }}
            data-ad-client="ca-pub-3552440748579508"
            data-ad-slot="8923990174"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <Script strategy="beforeInteractive">
            (adsbygoogle = window.adsbygoogle || []).push({});
          </Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
