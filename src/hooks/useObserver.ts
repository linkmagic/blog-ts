import { useEffect, useRef } from 'react';

export const useObserver = (
    ref: any,
    canLoad: boolean,
    isLoading: boolean,
    callback: () => void,
) => {
    let observer = useRef<any>(null);
    useEffect(() => {
        if (isLoading) {
            return;
        }
        if (observer.current) {
            observer.current.disconnect();
        }
        const cb = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            if (entries[0].isIntersecting && canLoad) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current);
    }, [isLoading]);
};