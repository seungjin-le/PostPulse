'use client'
import PostListContainer from '../container/posts/PostListContainer'
import {useRouter} from 'next/navigation'
import PostBtn from '../components/buttons/PostBtn'
import useUserStore from '../utility/zustand/UserZustand'
import {getSession} from 'next-auth/react'

const Home = () => {
  const router = useRouter()
  const {isLoggedIn} = useUserStore()

  return (
    <div className='w-full h-full p-12 pt-6 flex flex-col items-center border-t border-texts'>
      {isLoggedIn && (
        <div className={'w-full text-right pb-6'}>
          <PostBtn text={'New Post'} onClick={() => router.push('post')} />
        </div>
      )}
      <PostListContainer />
    </div>
  )
}

export default Home
