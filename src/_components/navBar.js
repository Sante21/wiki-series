import Image from "next/image";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between border-b-1 border-white/[.15] p-5">
            <div>
                <Image
                    src="/logo.png"
                    alt="Iker.st logo"
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
                    src="/instagram.png"
                    alt="File icon"
                    width={16}
                    height={16}
                />
                <Image
                    aria-hidden
                    src="/x.png"
                    alt="Window icon"
                    width={16}
                    height={16}
                />
                <Image
                    aria-hidden
                    src="/tiktok.png"
                    alt="Globe icon"
                    width={16}
                    height={16}
                />
            </div>
        </nav>
    );
}
