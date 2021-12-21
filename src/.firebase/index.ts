import firebaseConfig from './config'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

initializeApp(firebaseConfig)

export const db = getFirestore()
