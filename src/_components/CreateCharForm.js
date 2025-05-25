import prisma from '@/lib/prisma';

export default function CreateCharForm({ seriesId }) {
    async function CreateChar(formData) {
        'use server'
        const name = formData.get('name');
        const description = formData.get('description');
        const image = formData.get('image');
        await prisma.character.create({ data: { name, description, image, seriesId } });
    }

    return (
        <div>
            <h1 className='text-2xl'>Create a new Character</h1>
            <form action={CreateChar} className='flex flex-col items-start gap-5 mt-3'>
                <input type='text' name='name' placeholder='name' required className='border p-1 rounded' />
                <textarea name='description' placeholder='Character description' className='border p-1 rounded'></textarea>

                <select name="image" className='border p-1 rounded'>
                    <option value="" disabled defaultValue={''}>Choose a character image</option>
                    <option value="/chars/carl.jpg" className='text-gray-950'>Carl Grimes</option>
                    <option value="/chars/daryl.jpg" className='text-gray-950'>Daryl Dixon</option>
                    <option value="/chars/frank.jpg" className='text-gray-950'>Frank Gallagher</option>
                    <option value="/chars/hank.jpg" className='text-gray-950'>Hank Schrader</option>
                    <option value="/chars/jesse.jpg" className='text-gray-950'>Jesse Pinkman</option>
                    <option value="/chars/jim.jpg" className='text-gray-950'>Jim Halpert</option>
                    <option value="/chars/john.jpg" className='text-gray-950'>John Nolan</option>
                    <option value="/chars/lincoln.jpg" className='text-gray-950'>Lincoln Burrows</option>
                    <option value="/chars/lip.jpg" className='text-gray-950'>Lip Gallagher</option>
                    <option value="/chars/lucy.jpg" className='text-gray-950'>Lucy Chen</option>
                    <option value="/chars/michaelscofield.jpg" className='text-gray-950'>Michael Scofield</option>
                    <option value="/chars/michaelscott.jpg" className='text-gray-950'>Michael Scott</option>
                    <option value="/chars/morty.jpg" className='text-gray-950'>Morty Smith</option>
                    <option value="/chars/rick.jpg" className='text-gray-950'>Rick Grimes</option>
                    <option value="/chars/ricksanchez.jpg" className='text-gray-950'>Rick Sanchez</option>
                    <option value="/chars/thomas.jpg" className='text-gray-950'>Tommy Shelby</option>
                    <option value="/chars/walter.jpg" className='text-gray-950'>Walter White</option>
                </select>

                <button type='submit' className='text-indigo-50 border border-amber-500 rounded-lg p-2 cursor-pointer'>Create character</button>
            </form>
        </div>
    );
}
