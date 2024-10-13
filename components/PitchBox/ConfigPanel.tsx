import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Settings } from 'lucide-react'

interface ConfigPanelProps {
  showConfig: boolean;
  setShowConfig: (show: boolean) => void;
  presentationIframe: string;
  setPresentationIframe: (iframe: string) => void;
  demoUrl: string;
  setDemoUrl: (url: string) => void;
  handleSave: () => void;
}

export default function ConfigPanel({
  showConfig,
  setShowConfig,
  presentationIframe,
  setPresentationIframe,
  demoUrl,
  setDemoUrl,
  handleSave
}: ConfigPanelProps) {
  return (
    <>
      <button
        onClick={() => setShowConfig(!showConfig)}
        className="p-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 rounded-full shadow-lg"
        aria-label="Toggle configuration"
      >
        <Settings size={20} />
      </button>
      {showConfig && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4 dark:text-white">Configuration</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="presentationIframe" className="dark:text-white">Presentation Iframe Code</Label>
                <Input
                  id="presentationIframe"
                  value={presentationIframe}
                  onChange={(e) => setPresentationIframe(e.target.value)}
                  className="mt-1 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="demoUrl" className="dark:text-white">Demo App URL</Label>
                <Input
                  id="demoUrl"
                  value={demoUrl}
                  onChange={(e) => setDemoUrl(e.target.value)}
                  className="mt-1 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <Button onClick={handleSave} className="dark:bg-gray-700 dark:text-white">Save Configuration</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
