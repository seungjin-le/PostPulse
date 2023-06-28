import React from 'react'
import {TitleTextProps} from 'lodash'

const TitleText = ({title, level}: TitleTextProps) => {
  return (
    <div className={'mb-2'}>
      <span className={`text-${level}`}>{title}</span>
    </div>
  )
}

export default TitleText
