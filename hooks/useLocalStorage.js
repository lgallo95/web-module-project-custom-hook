import {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const item = window.localStorage.getItem(key);

    const [storedValue, setStoredValue] = useState(() => {
        return item ? JSON.parse(item) : initialValue;
    })
    const setValue = (value) => {
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    }
    return [storedValue, setValue]
}

export default useLocalStorage
