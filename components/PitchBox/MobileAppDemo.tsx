import { Phone } from 'lucide-react'

interface MobileAppDemoProps {
  mobileAppUrl: string;
  isCollapsed: boolean;
}

export default function MobileAppDemo({ mobileAppUrl, isCollapsed }: MobileAppDemoProps) {
  return (
    <div className={`w-full ${isCollapsed ? 'lg:w-[5%]' : 'lg:w-1/4'} h-1/2 lg:h-full bg-gray-100 p-4 flex items-center justify-center transition-all duration-300 ease-in-out overflow-hidden`}>
      <div className="relative w-full max-w-[300px] h-[600px] bg-gray-800 rounded-[3rem] shadow-xl overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105">
        {/* Phone frame */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gray-800 rounded-t-[3rem] z-10">
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-800 rounded-b-[3rem] z-10">
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center">
            <Phone className="w-6 h-6 text-gray-600" />
          </div>
        </div>
        {/* Mobile app iframe */}
        <iframe
          src={mobileAppUrl}
          className="w-full h-full pt-20 pb-20"
          style={{ borderRadius: '3rem' }}
        />
      </div>
    </div>
  )
}