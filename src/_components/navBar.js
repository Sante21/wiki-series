import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between border-b-1 border-white/[.15] p-5">
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
            <ul className="flex gap-6 text-xl">
                <li><a href="/">Inicio</a></li>
                <li><a href="/series">Series</a></li>
                <li><a href="#">Sobre nosotros</a></li>
            </ul>
            <div className="flex gap-2">
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
