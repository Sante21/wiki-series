'use server'

import prisma from '@/lib/prisma'

export async function updateSerie(id, formData) {
  const title = formData.get('title')
  const description = formData.get('description')
  const imageUrl = formData.get('imageUrl')

  await prisma.series.update({
    where: { id },
    data: { title, description, imageUrl },
  })
}
