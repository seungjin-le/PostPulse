import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {storage} from './firebase/firebaseConfig'

export const isEmpty = function (value: any) {
  return (
    value === '' || value === null || value === undefined || (typeof value === 'object' && !Object.keys(value).length)
  )
}

export async function uploadFile(file: File): Promise<string> {
  const storageRef = ref(storage, '/' + file.name)
  const uploadTask = uploadBytesResumable(storageRef, file)

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot: any) => {
        console.log(snapshot)
        // You can use this to track the upload progress
      },
      error => {
        // Handle unsuccessful uploads
        reject(error)
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
          resolve(downloadURL)
        })
      },
    )
  })
}
