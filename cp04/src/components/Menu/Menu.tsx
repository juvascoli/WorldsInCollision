import Link from "next/link";


export default function Menu() {
    return (
        <div>
            <nav >
                <ul className="menu">
                    <li><Link href="/api"> Api </Link></li>
                    <li><Link href="/error/notfound"> Página não encontrada </Link></li>
                </ul>
            </nav>
        </div>
    )
}