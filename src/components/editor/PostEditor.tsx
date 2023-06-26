'use client'
import React, {ChangeEvent, memo, useCallback, useEffect, useRef} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import {Editor} from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import {uploadFile} from '../../utility/utility'
import PostBtn from '../buttons/PostBtn'
import {createdData} from '../../utility/apiModuls'
import {EndPoint} from '../../dataManaget/apiMapper'
import {postState} from '../../recoil/PostAtom'
import {useRecoilState} from 'recoil'
import {PostStateTypes} from 'lodash'
import {storage} from '../../utility/firebase/firebaseConfig'
import {deleteObject, ref} from 'firebase/storage'
import {useRouter} from 'next/navigation'

const PostEditor = () => {
  const editorRef = useRef<any>(null)
  const [post, setPost] = useRecoilState(postState)
  const router = useRouter()
  const handlePostOnChange = useCallback(
    ({target: {id, value}}: ChangeEvent<HTMLInputElement>) => {
      setPost({
        ...post,
        [id]: value,
      })
    },
    [post.postTitle],
  )

  const toolbarItems = [
    ['heading', 'bold', 'italic', 'strike'],
    ['hr'],
    ['ul', 'ol', 'task'],
    ['table', 'link'],
    ['image'],
    ['code'],
    ['scrollSync'],
  ]

  const handleAddPostOnClick = async () => {
    const content = editorRef.current.getInstance().getMarkdown()
    const json = JSON.stringify({
      userEmail: 'dltmdwls@sdfj;asjf.com',
      userNickName: 'Bibibibg',
      postTitle: post.postTitle,
      postContent: content,
      postImages: post.postImages,
    })

    createdData(EndPoint.POST_POST, json)
      .then(() => {
        router.back()
      })
      .catch(err => console.log(err))
  }

  const addImage = async (blob: any, callback: any) => {
    if (!blob.name) return alert('이미지를 추가해주세요.')
    try {
      const file = new File([blob], blob.name, {type: blob.type})
      const imageDescription: string = (document.getElementById('toastuiAltTextInput') as HTMLInputElement).value
      const downloadURL = await uploadFile(file)
      setPost((post: PostStateTypes) => ({
        ...post,
        postImages: [...post.postImages, downloadURL],
      }))
      callback(downloadURL, imageDescription)
    } catch (error) {
      console.error('Failed to upload image:', error)
    }
  }

  const handleCancel = async (): Promise<void> => {
    if (!confirm('Go Back?')) return
    for (const url of post.postImages) {
      const imageRef = ref(storage, url)
      await deleteObject(imageRef).then(() => {
        setPost((post: PostStateTypes) => ({
          ...post,
          postImages: [],
        }))
      })
    }
    router.back()
  }

  useEffect(() => {
    const editorIns = editorRef.current.getInstance()
    editorIns.removeHook('addImageBlobHook') //<- 제거
    editorIns.addHook('addImageBlobHook', addImage) //<- 추가
  }, [])

  return (
    <>
      <div className={'w-full pb-4 flex flex-col  justify-end '}>
        <input
          type='text'
          id={'postTitle'}
          className={'border-none w-full  text-[black] rounded-container bg-[gray] px-4 py-2'}
          value={post.postTitle || ''}
          onChange={handlePostOnChange}
        />
      </div>
      {editorRef && (
        <div className={'h-full w-full'}>
          <Editor
            ref={editorRef}
            initialValue={post.postContent}
            initialEditType={'markdown'} // 'wysiwyg'
            previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'} // tab, vertical
            hideModeSwitch={true}
            theme={'dark'}
            height='calc(100%)'
            usageStatistics={false}
            toolbarItems={toolbarItems}
            useCommandShortcut={true}
            plugins={[colorSyntax]}
          />
        </div>
      )}
      <div className={'w-full text-right mt-4'}>
        <PostBtn text={'Go Back'} onClick={handleCancel} />
        <PostBtn text={'Add Post'} onClick={handleAddPostOnClick} />
      </div>
    </>
  )
}

export default memo(PostEditor)
