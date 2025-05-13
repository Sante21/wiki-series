import Image from "next/image";

export default function NavBar() {
    return (
        <nav>
            <div>
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    href="/"
                    width={180}
                    height={38}
                    priority
                />
            </div>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/series">Series</a></li>
                <li><a href="#">Sobre nosotros</a></li>
            </ul>
            <div class="redes">
                <Image
                    aria-hidden
                    src="/file.svg"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                <Image
                    aria-hidden
                    src="/window.svg"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                <Image
                    aria-hidden
                    src="/globe.svg"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
            </div>
        </nav>
    );
}
