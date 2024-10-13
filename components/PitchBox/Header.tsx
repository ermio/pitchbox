import { Switch } from "@/components/ui/switch"

interface HeaderProps {
  showConfig: boolean;
  setShowConfig: (show: boolean) => void;
}

export default function Header({ showConfig, setShowConfig }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">PitchBox</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">Configure</span>
          <Switch
            checked={showConfig}
            onCheckedChange={setShowConfig}
            aria-label="Toggle configuration"
          />
        </div>
      </div>
    </header>
  )
}