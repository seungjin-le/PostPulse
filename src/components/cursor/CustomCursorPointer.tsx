'use client'
import React, {memo, useCallback, useState} from 'react'

const CustomCursorPointer = () => {
  const [position, setPosition] = useState({x: 0, y: 0})
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const handleMouseMove = useCallback((event: any) => {
    setIsHovered(true)
    setPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  return (
    <div
      className={'w-full h-full top-0 left-0 rounded-default overflow-hidden absolute'}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div
          className={'w-0 h-0  pointer-events-none ease-in-out absolute shadow-cursor'}
          style={{top: `${position.y}px`, left: `${position.x}px`, pointerEvents: isHovered ? 'auto' : 'none'}}
        />
      )}
    </div>
  )
}
export default memo(CustomCursorPointer)
