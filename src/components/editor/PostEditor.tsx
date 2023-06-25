'use client'
import React, {memo, useCallback, useEffect, useRef, useState} from 'react'
import '@toast-ui/editor/dist/toastui-editor.css'
import {Editor} from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import uploadFile from '../../utility/utility'
import {uploadBytesResumable} from 'firebase/storage'
import PostBtn from '../buttons/PostBtn'

const PostEditor = () => {
  const editorRef = useRef<any>(null)
  const [post, setPost] = useState({
    title: '',
    content: '',
  })
  const [images, setImages] = useState('')

  const handlePostOnChange = useCallback(
    ({target: {id, value}}: EventTarget) => {
      setPost({
        ...post,
        [id]: value,
      })
    },
    [post.title],
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
    const downURL = await uploadFile('qweqwfasfad')
    console.log(downURL)
  }

  const addImage = async (blob, callback) => {
    if (!blob.name) return alert('이미지 이름을 추가해주세요.')
    try {
      const file = new File([blob], blob.name, {type: blob.type})
      //const downloadURL = await uploadFile(file)
      console.log(editorRef.current.getInstance().getMarkdown())

      callback('downloadURL', 'alt text')
    } catch (error) {
      console.error('Failed to upload image:', error)
    }
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
          id={'title'}
          className={'border-none w-full  text-[black] rounded-container bg-[gray] px-4 py-2'}
          value={post.title || ''}
          onChange={handlePostOnChange}
        />
      </div>

      {editorRef && (
        <div className={'h-full w-full'}>
          <Editor
            ref={editorRef}
            initialValue={post.content}
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
        <PostBtn text={'Add Post'} onClick={handleAddPostOnClick} />
      </div>
    </>
  )
}

export default memo(PostEditor)
