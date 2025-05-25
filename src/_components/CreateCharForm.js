import prisma from '@/lib/prisma';

export default function CreateCharForm() {
    async function CreateChar(formData) {
        'use server'
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        await prisma.series.create({ data: { title, description, imageUrl } });
    }

    return (
        <div>
            <h1 className='text-2xl'>Create a new Character</h1>
            <form action={CreateChar} className='flex flex-col items-start gap-5 mt-3'>
                <input type='text' name='name' placeholder='name' required className='border p-1 rounded'/>
                <textarea name='description' placeholder='Character description' className='border p-1 rounded'></textarea>

                <select name="imageUrl" className='border p-1 rounded'>
                    <option value="" disabled defaultValue={''}>Choose a serie image</option>
                    <option value="/series/twd.jpg" className='text-gray-950'>The Walking Dead</option>
                    <option value="/series/breakingbad.jpg" className='text-gray-950'>Breaking Bad</option>
                    <option value="/series/shameless.jpg" className='text-gray-950'>Shameless</option>
                    <option value="/series/rickymorty.jpg" className='text-gray-950'>Rick y Morty</option>
                    <option value="/series/theoffice.jpeg" className='text-gray-950'>The Office</option>
                    <option value="/series/casapapel.jpg" className='text-gray-950'>La Casa de Papel</option>
                    <option value="/series/peakyblinder.jpeg" className='text-gray-950'>Peaky Blinder</option>
                    <option value="/series/prison-break.jpg" className='text-gray-950'>Prison Break</option>
                    <option value="/series/therookie.jpg" className='text-gray-950'>The Rookie</option>
                    <option value="/series/stranger-things.jpg" className='text-gray-950'>Stranger Things</option>
                </select>

                <button type='submit' className='text-indigo-50 border border-indigo-600 rounded-lg p-2 cursor-pointer'>Create character</button>
            </form>
        </div>
    );
}
