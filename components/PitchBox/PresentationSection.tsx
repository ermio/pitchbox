import React from 'react'

interface PresentationSectionProps {
  presentationRef: React.RefObject<HTMLDivElement>;
}

export default function PresentationSection({ presentationRef }: PresentationSectionProps) {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-black flex items-center justify-center p-4">
      <div 
        ref={presentationRef}
        className="w-full h-[90%] bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg" 
      />
    </div>
  )
}
