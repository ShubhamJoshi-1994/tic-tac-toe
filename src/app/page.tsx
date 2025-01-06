// import Image from "next/image";
import Game from "./Components/Game";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <div>
            <p className="text-2xl font-bold text-white">Tic Tac Toe</p>
          </div>
        </div>
        <div>
          <Game />
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        Footer
      </footer> */}
    </div>
  );
}
