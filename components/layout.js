import Head from "next/head";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className={`bg-light-gray container mx-auto px-2 ${jakarta.className}`}>
      <Head>
        <title>dino.codes</title>
      </Head>
      {children}
    </div>
  );
}
