import Image from "next/image";
import Link from 'next/link'

export default function CharacterCard({ character }) {
    return (
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg">
            <Image
                className="rounded-xl hover:scale-105 transition duration-175"
                aria-hidden
                src={character.image}
                alt={character.name}
                width={116}
                height={152}
            />
            <h2 className="text-xl mt-3 mb-5">{character.name}</h2>
            <Link href={`/series/${character.seriesId}/characters/${character.id}`} className="border p-2 pr-4 pl-4 rounded-lg mt-5"> Learn more </Link>
        </div>
    )
}
