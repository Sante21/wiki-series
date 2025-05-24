import CreateSerieForm from "@/_components/CreateSerieForm";
import SeriesCard from "@/_components/SeriesCard";
import prisma from '@/lib/prisma';

export default async function Series() {
  const series = await prisma.series.findMany();
  console.log('Serie recibida:', series)


  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-10 gap-10 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">All the series</h1>
      <main className="flex flex-row gap-[32px] mt-15 row-start-2 items-center justify-center sm:items-start flex-wrap">

        {series.map((serie) => (
          <SeriesCard key={serie.id} serie={serie} />
        ))}

        {/* <div className="flex flex-col gap-3 items-center">
          <Image
            className="rounded-xl"
            aria-hidden
            src="/series/twd.jpg"
            alt="Banner The Walking Dead"
            width={375}
            height={375}
          />
          <h2 className="text-xl">The Walking Dead</h2>
          < Link href="#" className="border p-2 pr-4 pl-4 rounded-lg"> More info </Link>
        </div> */}
      </main>
      <div className="mt-15">
        <CreateSerieForm />
      </div>
    </div>
  );
}
