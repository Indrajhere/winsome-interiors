// components/SplashScreen.jsx
export default function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-olive flex items-center justify-center z-100 animate-shutter">
     
        <div className="my-8 text-center">
                    <h2 className="text-4xl md:text-6xl font-light 
         bg-gradient-to-r from-[#C6B98B] via-sand to-[#7A6B3A]
         bg-clip-text text-transparent"> <strong>W</strong>insome
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-light 
         bg-gradient-to-r from-[#C6B98B] via-sand to-[#7A6B3A]
         bg-clip-text text-transparent ml-2"> <strong>I</strong>nteriors
                    </h2>

                </div>
    </div>
  );
}
