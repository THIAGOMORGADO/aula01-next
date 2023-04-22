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
        <li><Link href="/sobre/thiago">thiago </Link></li>
        <li><Link href="/sobre/fernando">thiago </Link></li>
      </ul>

      <button onClick={handleCountPlus}> aumentar </button>
      <button onClick={handlerminCount}> diminuir </button>
    </div>
  );
}