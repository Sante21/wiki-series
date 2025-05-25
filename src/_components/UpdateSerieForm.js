'use client'

import { useState, useEffect } from 'react';
import { updateSerie } from './updateSerie';

export default function UpdateUserForm({ serie }) {
    const [title, setTitle] = useState(serie?.title || '')
    const [description, setDescription] = useState(serie?.description || '')
    const [imageUrl, setImageUrl] = useState(serie?.imageUrl || '')

    async function handleSubmit(formData) {
        await updateSerie(serie.id, formData)
    }

    return (
        <div>
            <h1 className='text-2xl'>Update serie</h1>
            <form action={handleSubmit} className='flex flex-col items-start gap-5 mt-3'>

                <input type='text' name='title' placeholder='Serie title' value={title} onChange={(e) => setTitle(e.target.value)} required className='border p-1 rounded' />
                <textarea name='description' placeholder='Serie descrip`tion' value={description} onChange={(e) => setDescription(e.target.value)} className='border p-1 rounded'></textarea>
                <select name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className='border p-1 rounded' required>
                    <option value="" disabled>Choose a serie image</option>
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

                <button type='submit' className='text-indigo-50 border border-amber-500 rounded-lg p-2 cursor-pointer'>Update serie</button>
            </form>
        </div>
    );
}