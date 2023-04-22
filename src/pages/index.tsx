import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState(0)

  function handleCountPlus() {
    setContador(contador + 1)
  }
  function handlerminCount() {
    setContador(contador - 1)
  }

  return(
    <div>
      <h1>Tela Home ({contador})</h1>
      <ul>
        <Link href="/sobre/thiago">
          Thiago
        </Link>
      </ul>

      <button onClick={handleCountPlus}> aumentar </button>
      <button onClick={handlerminCount}> diminuir </button>
    </div>
  );
}