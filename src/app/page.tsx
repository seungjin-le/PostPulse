'use client'
import PostListContainer from '../container/posts/PostListContainer'
import {RecoilRoot} from 'recoil'
import {useRouter} from 'next/navigation'
import PostBtn from '../components/buttons/PostBtn'

export default function Home() {
  const router = useRouter()
  return (
    <RecoilRoot>
      <div className='w-full h-full p-12 pt-6 flex flex-col items-center border-t border-texts'>
        <div className={'w-full text-right pb-6'}>
          <PostBtn text={'New Post'} onClick={() => router.push('post')} />
        </div>
        <PostListContainer />
      </div>
    </RecoilRoot>
  )
}
