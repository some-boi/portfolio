import NavBar from "../components/NavBar";
import "../styles/global.css";
import "../styles/TextBubble.css";
import "../styles/NavBar.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
    </div>
  );
}
