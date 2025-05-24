import Image from "next/image";
import Link from "next/link";
import prisma from '@/lib/prisma';
import CharacterCard from "@/_components/CharacterCard";
// import CharacterCard from '@/components/CharacterCard';

export default async function SeriesDetail({ params }) {
    const series = await prisma.series.findUnique({
        where: { id: Number(params.id) },
        include: { characters: true }
    });

    if (!series) return <p>Serie no encontrada</p>

    return (
        <div className="flex flex-col items-center min-h-screen pb-10 gap-11 font-[family-name:var(--font-geist-sans)]">
            <header className="flex flex-col items-center min-w-full gap-3">
                <div className="relative flex justify-center items-center min-w-full h-[480px] bg-cover bg-center text-white border-b border-b-amber-50" style={{ backgroundImage: `url(${series.imageUrl})` }}>
                    {/* Capa negra semitransparente */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Contenido */}
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl font-bold">{series.title}</h1>
                        <p>{series.description}</p>
                    </div>
                </div>


            </header>

            <h2 className="text-3xl font-bold">Personajes</h2>

            <main className="flex flex-row gap-[32px] row-start-2 items-center justify-center sm:items-start flex-wrap">
                {series.characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))}
            </main>

            <div className="mt-15">
                <CreateCharForm />
            </div>
        </div>
    );
}

