import {useState, useEffect} from 'react'

/**
 * Custom hoot that handles to get current screen size 
 * @returns current width of the screen
 */
const useScreenSize = () => {
    const [width, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        const handleResize = () => 
            setWidth(window.innerWidth);
        
        window.addEventListener("resize", handleResize);

        return () =>       
            window.removeEventListener("resize", handleResize);
        
    }, []);

    return width;
}

export default useScreenSize;