import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage'
import {storage} from './firebase/firebaseConfig'

async function uploadFile(file: any) {
  const storageRef = ref(storage, '/' + file.name)
  const uploadTask = uploadBytesResumable(storageRef, file)

  return new Promise((resolve, reject) => {
    uploadTask.on(
      'state_changed',
      (snapshot: any) => {
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

export default uploadFile
