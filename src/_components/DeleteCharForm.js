import prisma from "@/lib/prisma";

export default function DeleteCharForm({ charId }) {
    async function deleteChar(formData) {
        "use server";
        const id = Number(formData.get("id"));
        await prisma.character.delete({ where: { id } });
    }

    return (
        <form action={deleteChar}>
            <input type="hidden" name="id" value={charId} />
            <button type="submit" className="border rounded-lg p-1 cursor-pointer">Delete</button>
        </form>
    );
}
