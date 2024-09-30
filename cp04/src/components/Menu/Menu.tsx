import Link from "next/link";


export default function Menu() {
    return (
        <div>
            <nav className="menu">
                <ul>
                    <li><Link href="/api"> Api </Link></li>
                    <li><Link href="/error"> Página não encontrada </Link></li>
                </ul>
            </nav>
        </div>
    )
}