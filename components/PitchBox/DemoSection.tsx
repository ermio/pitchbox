import React from 'react';

interface DemoSectionProps {
  demoUrl: string;
}

export default function DemoSection({ demoUrl }: DemoSectionProps) {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-[380px] h-[720px] bg-white dark:bg-gray-900 rounded-[32px] shadow-lg overflow-hidden relative">
        <iframe
          src={demoUrl}
          className="w-full h-full"
          style={{ borderRadius: '32px' }}
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </div>
    </div>
  )
}
