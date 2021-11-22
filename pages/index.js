import Head from "next/head";
import MenuSection from "../components/MenuSection";

export default function Home() {
  return (
    <div className="bg-primary min-h-screen py-2 text-white">
      <Head>
        <title>Resto App</title>
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-20 px-6 text-center">
        <MenuSection />
      </main>
    </div>
  );
}
