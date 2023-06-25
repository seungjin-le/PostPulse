import React from 'react'
import {Switch} from '@headlessui/react'

const EditorSwitch = ({enabled, setEnabled}: any) => {
  return (
    <div className='py-16 '>
      <Switch checked={enabled} onChange={setEnabled} className={'rounded-full'}>
        <span className='bg-white rounded-full shadow p-2 h-12 w-20 flex bg-item '>
          <span
            className={`block bg-[red] h-full w-1/2 rounded-full transition duration-300 ease-in-out transform ${
              enabled ? 'bg-green-500 translate-x-full' : 'bg-red-500'
            }`}
          />
        </span>
        <span>{enabled ? '마크다운' : '일반'}</span>
      </Switch>
    </div>
  )
}

export default EditorSwitch
