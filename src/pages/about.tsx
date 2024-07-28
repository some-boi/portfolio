import Image from "next/image";
import nodejs from "../../public/nodejs.svg";
import py from "../../public/python.png";
import rust from "../../public/rust.png";
import ts from "../../public/typescript.svg";
import C from "../../public/Clang.png";
import Cpp from "../../public/Cpp.png";

export default function about() {
  return (
    <div className="TextBubble">
      <h1>About Me</h1>
      <ul>
        <a>
          I am a 19 year old developer that began coding since I was 12, I find
          coding enjoyable and had been doing it since and currently I am
          studying CS major so I could turn it into a living, I currently do
          freelance to expand my knowledge and make a bit of a side income for
          the time being
        </a>
      </ul>
      <h1>Skills</h1>
      <ul>
        <a>
          I can currently work with:
          <br />
          NodeJS <Image alt="NodeJS" src={nodejs} width={40} height={20} /> |
          Python <Image alt="Python" src={py} width={25} height={20} />
          <br />
          Rust <Image alt="rust" src={rust} width={40} height={20} /> |
          TypeScript <Image alt="TS" src={ts} width={40} height={20} />
          <br />
          C <Image alt="C" src={C} width={23} height={22} /> | C++{" "}
          <Image alt="C++" src={Cpp} width={23} height={22} />
        </a>
      </ul>
    </div>
  );
}
