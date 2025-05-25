'use client'

import { useState, useEffect  } from 'react';
import { updateChar } from './updateChar';

export default function UpdateCharForm({ character }) {
    const [name, setName] = useState(character?.name || '')
    const [description, setDescription] = useState(character?.description || '')
    const [image, setImage] = useState(character?.image || '')

    async function handleSubmit(formData) {
        await updateChar(character.id, formData)
    }

    return (
        <div>
            <h1 className='text-2xl'>Update Character</h1>
            <form action={handleSubmit} className='flex flex-col items-start gap-5 mt-3'>

                <input type='text' name='name' placeholder='name' value={name} onChange={(e) => setName(e.target.value)} required className='border p-1 rounded' />
                <textarea name='description' placeholder='Character description' value={description} onChange={(e) => setDescription(e.target.value)} className='border p-1 rounded'></textarea>
                <select name="image" value={image} onChange={(e) => setImage(e.target.value)} className='border p-1 rounded' required>

                {/* <input type='text' name='name' placeholder='name' defaultValue={character.name} required className='border p-1 rounded' />
                <textarea name='description' placeholder='Character description' defaultValue={character.description} className='border p-1 rounded'></textarea>
                <select name="image" defaultValue={character.image} className='border p-1 rounded'> */}
                    <option value="" disabled>Choose a character image</option>
                    <option value="/chars/carl.jpg">Carl Grimes</option>
                    <option value="/chars/daryl.jpg">Daryl Dixon</option>
                    <option value="/chars/frank.jpg">Frank Gallagher</option>
                    <option value="/chars/hank.jpg">Hank Schrader</option>
                    <option value="/chars/jesse.jpg">Jesse Pinkman</option>
                    <option value="/chars/jim.jpg">Jim Halpert</option>
                    <option value="/chars/john.jpg">John Nolan</option>
                    <option value="/chars/lincoln.jpg">Lincoln Burrows</option>
                    <option value="/chars/lip.jpg">Lip Gallagher</option>
                    <option value="/chars/lucy.jpg">Lucy Chen</option>
                    <option value="/chars/michaelscofield.jpg">Michael Scofield</option>
                    <option value="/chars/michaelscott.jpg">Michael Scott</option>
                    <option value="/chars/morty.jpg">Morty Smith</option>
                    <option value="/chars/rick.jpg">Rick Grimes</option>
                    <option value="/chars/ricksanchez.jpg">Rick Sanchez</option>
                    <option value="/chars/thomas.jpg">Tommy Shelby</option>
                    <option value="/chars/walter.jpg">Walter White</option>
                </select>

                <button type='submit' className='text-indigo-50 border border-green-600 rounded-lg p-2 cursor-pointer'>
                    Update character
                </button>
            </form>
        </div>
    );
}
