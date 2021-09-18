import Link from 'next/link';

export default function MenuPrincipal() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/">
            Antecedentes
          </Link>
        </li>
        <li>
          <Link href="/">
            Situación
          </Link>
        </li>
        <li>
          <Link href="/">
            Pago de servicios
          </Link>
        </li>
        <li>
          <Link href="/">
            Medios de pago
          </Link>
        </li>
      </ul>
    </div>
  )
}