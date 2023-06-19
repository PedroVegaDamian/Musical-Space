import { db } from '@/.firebase'
import { getDocs, collection } from 'firebase/firestore'
import { Song } from '@/interfaces/Song'

const songsRef = collection(db, 'list_music')

export async function getAllSongs(): Promise<Song[]> {
  const songs = await getDocs(songsRef)
  return songs.docs.map((song, index) => ({
    id: song.id,
    order: index,
    ...song.data()
  })) as Song[]
}
