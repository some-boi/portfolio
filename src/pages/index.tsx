import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portolfio</title>
      </Head>
      <main>
        <div className="TextBubble">
          <h1>Hello There! &#128075;</h1>
          <ul>
            <a>
              Hello I am Lonely Dev, a Self Taught Fullstack Developer that
              enjoys coding for fun
              <br />
              <br />
              This portfolio is still not finished and will probably go through
              alot of changes
            </a>
          </ul>
        </div>
      </main>
    </div>
  );
}
