// "use client";
// import React, { createContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
// import Lenis from "@studio-freight/lenis";

// interface ScrollContextProps {
//     lenis: Lenis | null;
// }

// export const ScrollContext = createContext<ScrollContextProps>({ lenis: null });

// export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
//     const [top, setTop] = useState<number>(0);
//     const [lenis, setLenis] = useState<Lenis | null>(null);
//     const reqIdRef = useRef<number | null>(null);
    

//     useEffect(() => {
//         const animate = (time: number) => {
//             lenis?.raf(time);
//             reqIdRef.current = requestAnimationFrame(animate);
//         };

//         reqIdRef.current = requestAnimationFrame(animate);

//         return () => cancelAnimationFrame(reqIdRef.current!);
//     }, [lenis]);

//     useLayoutEffect(() => {
//         const lenisInstance = new Lenis({
//             duration: 2,
//             easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

//             direction: 'vertical',
//             gestureDirection: 'vertical',
//             smooth: true,
//             smoothTouch: true,
//             touchMultiplier: 2,
//         } as any);

//         lenisInstance.on('scroll', ({ scroll }: { scroll: any }) => {
//             //   debounce(() => (lastHeight = scroll))();
//             setTop(scroll)
//         });

//         setLenis(lenisInstance);

//         return () => {
//             lenisInstance.destroy();
//             setLenis(null);
//         };
//     }, []);

//     const memoedValue = useMemo(() => ({ lenis }), [lenis]);
//     const value:any = {
//         memoedValue,
//         top
//     }
//     return (
//         <ScrollContext.Provider value={value}>
//             {children}
//         </ScrollContext.Provider>
//     );
// };
