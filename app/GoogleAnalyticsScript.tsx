import React from "react";
import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      {/*<!-- Google Tag Manager -->*/}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GB6T63FBEY"
      />
      <Script id="GoogleAnalytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GB6T63FBEY');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
