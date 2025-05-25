'use server'

import prisma from '@/lib/prisma'

export async function updateChar(id, formData) {
    const name = formData.get('name');
    const description = formData.get('description');
    const image = formData.get('image');

    await prisma.character.update({
        where: { id },
        data: { name, description, image },
    });
}
