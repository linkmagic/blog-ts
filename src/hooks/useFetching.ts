import { useState } from 'react';

export const useFetching = (callback: () => Promise<void>) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    
    const fetching = async () => {
        try {
            setLoading(true);
            await callback();
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return [fetching, isLoading, error] as const;
};
