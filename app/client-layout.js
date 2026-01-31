'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
    const [loading, setLoading] = useState(true);
    const pathname = usePathname();


    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            {loading && <SplashScreen />}
            {/* <div className={loading ? 'hidden' : ''}> */}
            {children}
            {/* </div> */}
        </>
    );
}
