import UpdateCharForm from "@/_components/UpdateCharForm";
import prisma from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

export default async function CharacterDetailPage({ params }) {
    const { charId } = params;

    const character = await prisma.character.findUnique({
        where: { id: Number(charId) },
        include: { serie: true }
    });

    if (!character) return <p className='text-red-600'>Personaje no encontrado</p>;

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-950 text-white font-[family-name:var(--font-geist-sans)]">
            <div className="max-w-4xl bg-zinc-900 rounded-2xl shadow-lg p-10 flex flex-col md:flex-row gap-10 items-center">
                <div className="w-64 h-83 relative rounded-xl overflow-hidden shadow-lg border border-zinc-800">
                    <Image
                        src={character.image}
                        alt={character.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl"
                        priority
                    />
                </div>

                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold text-amber-400 mb-4">{character.name}</h1>
                    <p className="text-gray-300 text-lg leading-relaxed">{character.description}</p>
                    <Link href={`/series/${character.serie.id}`}>
                        <button className="mt-6 px-6 py-2 bg-amber-500 text-zinc-950 rounded-lg font-semibold hover:bg-amber-400 transition">
                            ← Volver a la serie
                        </button>
                    </Link>
                </div>
            </div>

            <hr className="border w-10/12 m-7" />

            <UpdateCharForm character={character} />
        </main>
    );
}
