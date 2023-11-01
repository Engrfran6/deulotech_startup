import {LoadJsAndExitPopUp} from '@/components/exit-popup/exit-popup';
import './globals.css';
import {Footer} from '@/components/footer/footer';
import {Navbar} from '@/components/navbar/navbar';
import Head from 'next/head';

// const headScripts = () => {
//   useEffect(() => {

//     const script1 = document.createElement('script');
//     script1.src = '../../dws-assets/js/blazy.min.js';
//     script1.type = 'text/javascript';
//     script1.async = true;
//     document.head.appendChild(script1);

//     const script2 = document.createElement('script');
//     script2.src = '/assets/script/dws-script.js';
//     script2.type = 'text/javascript';
//     script2.async = true;
//     document.head.appendChild(script2);

//     console.log('Script Loading..');
//   }, []);

//   const script1 = {
//     __html: JSON.stringify({
//       '@context': 'https://schema.org',
//       '@type': 'Organization',
//       name: 'DeuLo Web Solutions',
//       url: 'https://www.deulowebsolutions.com/',
//       logo: 'https://www.deulowebsolutions.com/assets/img/LogoWhite.svg',
//       contactPoint: [
//         {
//           '@type': 'ContactPoint',
//           telephone: '+917284933224',
//           contactType: 'sales',
//           areaServed: ['US', 'GB', 'CA', 'AU', 'UAE', 'IN'],
//           availableLanguage: 'en',
//         },
//         {
//           '@type': 'ContactPoint',
//           telephone: '+61434671029',
//           contactType: 'sales',
//           areaServed: ['US', 'GB', 'CA', 'AU', 'UAE'],
//           availableLanguage: 'en',
//         },
//         {
//           '@type': 'ContactPoint',
//           telephone: '+441618189519',
//           contactType: 'sales',
//           areaServed: ['US', 'GB', 'CA', 'AU', 'UAE'],
//           availableLanguage: 'en',
//         },
//       ],
//       sameAs: [
//         'https://www.facebook.com/deulowebsolutions.com',
//         'https://www.instagram.com/deulowebsolutions.com',
//         'https://www.linkedin.com/company/dws',
//       ],
//     }),
//   };

//   const script2 = {
//     __html: JSON.stringify({
//       '@context': 'https://schema.org/',
//       '@type': 'WebSite',
//       name: 'DeuLo Web Solutions',
//       url: 'https://www.deulowebsolutions.com/',
//       potentialAction: {
//         '@type': 'SearchAction',
//         target: 'https://www.deulowebsolutions.com/search?q={search_term_string}',
//         'query-input': 'required name=search_term_string',
//       },
//     }),
//   };

//   return (
//     <head>

//       <script type="application/ld+json" dangerouslySetInnerHTML={script1} />

//       <script type="application/ld+json" dangerouslySetInnerHTML={script2} />

//       <script
//         type="text/javascript"
//         dangerouslySetInnerHTML={{
//           __html: `
//           (function(w,d,s,l,i){
//             // Insert your script here
//           })(window,document,'script','dataLayer','GTM-TQQFCFK');
//         `,
//         }}
//       />
//     </head>
//   );
// };

export const pageTitle = 'DeuLo Web Solutions';

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://www.googletagmanager.com" /> */}
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Top Mobile App, Web, MVP, MERN Development Company | {pageTitle}</title>
        <meta name="keywords" content="IT Services, IT Consulting, Digital Transformation " />
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
        <meta charset="utf-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="author" content="DeuLo Web Solutions" />
        <meta name="language" content="english" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="noodp" />
        <meta
          property="og:title"
          content={`IT Services & Consulting, Digital Transformation | ${pageTitle}`}
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.deulowebsolutions.com" />
        <meta
          property="og:image"
          content="https://www.deulowebsolutions.com/assets/img/assets-img/og_image/GroovyWeb-Top-Web-and-App-Development-Company.jpg"
        />
        <meta
          property="og:description"
          content="DeuLo Web Solutions, a leading IT services and consulting company provide custom web solutions, react native App, Software Development Services with trending Node JS framework."
        />
        <link rel="canonical" href="index.html" />
        <meta
          name="title"
          content="Top Mobile App, Web, MVP, MERN Development Company | DeuLo Web Solutions"
        />
        <meta
          name="description"
          content="DeuLo Web Solutions - A Best Rated Web, Mobile App, MERN, &amp; MVP Development Company in India, USA, UK &amp; Australia. Provides Top Solutions &amp; Services from Startups to Enterprises."
        />
        {/* <meta name="csrf-param" content="_csrf" /> */}
        {/* <meta
          name="csrf-token"
          content="l6v5zKEhOpOubaWKBfiW9Fmzkw7Fb94Jj_XjehkBsH_FxJelxmgO6fo67dgzv6CfaOP0I_wFmyTqsrAlLTSHBQ=="
        /> */}
        <link type="image/png" href="../dws-assets/img/favicon.png" rel="icon" />
        {/* <link
          href="assets/css-compress/0de0660358a095ee59ccbfa9c0a1a7c7.css%3Fv=1697202461.css"
          rel="stylesheet"
        /> */}
        {/* <script rel="preload" as="script" type="f399b29743c1a14eb7a2d7f9-text/javascript">
          const baseUrl = "https://www.deulowebsolutions.com"; const contactCaptcha = "Disable"
        </script> */}
        {/* 
        <script rel="preload" as="script" type="f399b29743c1a14eb7a2d7f9-text/javascript">
          var imNotARobot = function() {console.info('Button was clicked aagin')}
        </script> */}

        {/* {headScripts} */}

        {/* Google Tag Manager script */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TQQFCFK');
        `,
          }}
        /> */}
        {/* <script rel="preload" as="script" type="f399b29743c1a14eb7a2d7f9-text/javascript">
          var googlemanager = function() {console.info('google manager script loaded')}
        </script> */}

        {/* scrpt after footer */}
        {/* <script
          src="/dws-assets/js/blazy.min.js"
          rel="preload"
          as="script"
          type="f399b29743c1a14eb7a2d7f9-text/javascript"></script> */}

        {/* ================================================= */}
        {/* <script
          src="/assets/script/dws-script.js"
          type="f399b29743c1a14eb7a2d7f9-text/javascript"></script>
        <script rel="preload" as="script" type="f399b29743c1a14eb7a2d7f9-text/javascript">
          var dwsscript = function() {console.info('dws-script loaded')}
        </script> */}

        {/* <script
          src="/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js"
          data-cf-settings="f399b29743c1a14eb7a2d7f9-|49"
          defer></script>
        <script rel="preload" as="script" type="f399b29743c1a14eb7a2d7f9-text/javascript">
          var cdn = function() {console.info('cdn-script loaded')}
        </script> */}
      </Head>
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* <LoadJsAndExitPopUp /> */}
      </body>
    </html>
  );
}
