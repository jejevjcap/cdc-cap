
import '../../styles/main.css';
import '../../styles/main.min.css';
import '../../assets/plugins/bootstrap/css/bootstrap.min.css';
import '../../assets/plugins/perfectscroll/perfect-scrollbar.css';
import '../../assets/plugins/pace/pace.css';


import type { AppProps } from 'next/app'
import Script from 'next/script';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                {/* Google Fonts */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
                    rel="stylesheet"
                />
            </Head>
            {/* Load scripts in order */}
            <Script src="/assets/plugins/jquery/jquery-3.5.1.min.js" strategy="beforeInteractive" />
            <Script src="/assets/plugins/bootstrap/js/bootstrap.min.js" strategy="afterInteractive" />
            <Script src="/assets/plugins/perfectscroll/perfect-scrollbar.min.js" strategy="afterInteractive" />
            <Script src="/assets/plugins/pace/pace.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/main.min.js" strategy="afterInteractive" />
            <Script src="/assets/js/custom.js" strategy="afterInteractive" />

            {/* Render the page */}
            <Component {...pageProps} />
        </>
    );
}