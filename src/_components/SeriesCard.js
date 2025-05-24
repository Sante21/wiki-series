import Image from "next/image";
import Link from 'next/link';

const SeriesCard = ({ serie }) => {
    if (!serie) return null

    return (
        <div className="flex flex-col gap-3 items-center">
            <Image
                className="rounded-xl hover:scale-105 transition duration-175"
                aria-hidden
                src={serie.imageUrl}
                alt={serie.title}
                width={375}
                height={375}
            />
            <h2 className="text-xl">{serie.title}</h2>
            <Link href={`/series/${serie.id}`} className="border p-2 pr-4 pl-4 rounded-lg"> More info </Link>
        </div>
    );
};

export default SeriesCard;

