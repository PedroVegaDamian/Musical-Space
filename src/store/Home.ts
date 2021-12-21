import { defineStore } from 'pinia'
import { getAllSongs } from '@/services/songs'
import { Song } from '@/interfaces/Song'
import { Howl } from 'howler'

interface HomeStore {
  songs: Song[]
  songToPlay: null | Howl
  songSelected: Song
  isPlayingSong: boolean
  lengthArraySongs: number
  durationSong: number
  currentSectionsSong: number
  interval: number
  mouseover: boolean
}

export const useHomeStore = defineStore('HomeStore', {
  state: () =>
    ({
      songs: [],
      songToPlay: null,
      songSelected: {
        id: '',
        url: '',
        nombre: '',
        artista: '',
        portada: '',
        order: 0
      },
      isPlayingSong: false,
      lengthArraySongs: 0,
      durationSong: 0,
      currentSectionsSong: 0,
      interval: 0,
      mouseover: false
    } as HomeStore),
  getters: {
    getSongs: state => state.songs,
    getSongSelected: state => state.songSelected,
    getIsPlayingSong: state => state.isPlayingSong
  },
  actions: {
    async loadSongs() {
      this.songs = await getAllSongs()
      this.lengthArraySongs = this.songs.length
      this.setSongToPlay(this.songs[0])
    },
    setSongToPlay(song: Song) {
      this.songSelected = song
      this.songToPlay = new Howl({ src: song.url, html5: true })

      this.songToPlay.on('end', () => {
        this.nextSong()
      })

      this.songToPlay.on('load', () => {
        this.durationSong = this.songToPlay?.duration() as number
      })
    },
    playNewSong(song: Song) {
      this.cancelInterval()
      this.songToPlay?.stop()
      this.setSongToPlay(song)
      this.playCurrentSong()
    },
    playCurrentSong() {
      this.songToPlay?.play()
      this.isPlayingSong = true
      this.setInterval()
    },
    pauseCurrentSong() {
      this.songToPlay?.pause()
      this.isPlayingSong = false
      this.cancelInterval()
    },
    previousSong() {
      if (this.songSelected?.order) {
        this.playNewSong(this.songs[this.songSelected?.order - 1])
      }
    },
    nextSong() {
      if (this.songSelected) {
        if (this.songSelected.order < this.lengthArraySongs - 1) {
          this.playNewSong(this.songs[this.songSelected.order + 1])
        }
      }
    },
    setInterval() {
      this.interval = requestAnimationFrame(() => {
        this.currentSectionsSong = this.songToPlay?.seek() as number
        if (!this.mouseover && this.isPlayingSong) {
          this.setInterval()
        }
      })
    },
    cancelInterval() {
      cancelAnimationFrame(this.interval)
    },
    setCurrentSection(sectionSong: number) {
      this.cancelInterval()
      this.songToPlay?.seek(sectionSong)
      this.currentSectionsSong = sectionSong
      this.setInterval()
    },
    mouseOut() {
      this.mouseover = false
      this.setInterval()
    },
    mouseEnter() {
      this.mouseover = true
    }
  }
})
