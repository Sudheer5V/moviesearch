import Head from "next/head";
import Movie from "./components/Movie";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MovieSearch</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Movie />
    </div>
  );
}
