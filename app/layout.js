import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600", "700"], // pick weights you need
  display: "swap",
});

const siteUrl = "https://fingerlimes.com"

export const metadata = {
  metadataBase: new URL(`${siteUrl}`),
  title: "Fingerlimes: All about tech",
  description:
    "Lets help you build solutions in one click",
  canonical: "/",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title:
      "Fingerlimes: All about tech",
    description:
      "Lets help you build solutions in one click",
    url: `${siteUrl}`,
    siteName: "Fingerlimes",
    images: "/opengraph-image.png",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}

         {/* Lottie player script */}
        <Script
          src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.js"
          strategy="afterInteractive"
        />
        
        {/* ✅ Quickchat Widget */}
        <Script id="quickchat-widget" strategy="afterInteractive">
          {`
            (function(e,a,d,i,c,t=a.createElement(d)){
              e[c]=e[c]||function(){
                (e[c].q=e[c].q||[]).push(arguments)
              },
              t.src=i,
              t.async=1,
              a.body.insertAdjacentElement("beforeend",t)
            })(window,document,"script","https://widget.quickchat.ai/chat.js","_quickchat");

            _quickchat("host", "app.quickchat.ai");
            _quickchat("init", "bnxob5tks2");
          `}
        </Script>
      </body>
    </html>
  );
}
