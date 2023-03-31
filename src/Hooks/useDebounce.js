import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounce, setdebounce] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setdebounce(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debounce;
}

export default useDebounce;
