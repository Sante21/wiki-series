import prisma from "@/lib/prisma";

export default function DeleteSerieForm({ serieId }) {
    async function deleteSerie(formData) {
        "use server";
        const id = Number(formData.get("id"));
        await prisma.series.delete({ where: { id } });
    }

    return (
        <form action={deleteSerie}>
            <input type="hidden" name="id" value={serieId} />
            <button type="submit" className="border rounded-lg p-1 cursor-pointer">Delete</button>
        </form>
    );
}