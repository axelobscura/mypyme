import Link from 'next/link';
import { BsChevronRight } from "react-icons/bs";

export default function MenuPrincipal() {
  return (
    <div className="menuprincipal">
      <ul>
        <li>
          <Link href="/inicio">
            <p><BsChevronRight/>Inicio</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p><BsChevronRight/>Antecedentes</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p><BsChevronRight/>Situación</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p><BsChevronRight/>Pago de servicios</p>
          </Link>
        </li>
        <li>
          <Link href="/">
            <p><BsChevronRight/>Medios de pago</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}