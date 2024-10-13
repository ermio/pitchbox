"use client"

import React, { useState, useEffect, useRef } from 'react'
import PresentationSection from './PresentationSection'
import ConfigPanel from './ConfigPanel'
import Watermark from './Watermark'
import DemoSection from './DemoSection'
import { Moon, Sun } from 'lucide-react'

export default function PitchBox() {
  const [presentationIframe, setPresentationIframe] = useState('<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="100%" height="100%" src="https://embed.figma.com/slides/8nUWgpXbRR2HWFOlnWwc36/Untitled?node-id=1-447&embed-host=share" allowfullscreen></iframe>')
  const [demoUrl, setDemoUrl] = useState('http://localhost:3000/')
  const [showConfig, setShowConfig] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const presentationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  useEffect(() => {
    if (presentationRef.current) {
      presentationRef.current.innerHTML = presentationIframe
    }
  }, [presentationIframe])

  const handleSave = () => {
    setShowConfig(false)
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden flex bg-gray-100 dark:bg-black transition-colors duration-200">
      <div className="w-full lg:w-[70%] h-full">
        <PresentationSection presentationRef={presentationRef} />
      </div>
      <div className="hidden lg:block w-[30%] h-full">
        <DemoSection demoUrl={demoUrl} />
      </div>
      <Watermark />
      <div className="absolute top-4 right-4 flex space-x-2 z-50">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <ConfigPanel
          showConfig={showConfig}
          setShowConfig={setShowConfig}
          presentationIframe={presentationIframe}
          setPresentationIframe={setPresentationIframe}
          demoUrl={demoUrl}
          setDemoUrl={setDemoUrl}
          handleSave={handleSave}
        />
      </div>
    </div>
  )
}
