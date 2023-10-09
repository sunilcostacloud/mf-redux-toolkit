import { mount } from 'petsApp/PetsApp';
import { useRef, useEffect } from 'react';

const Pets = () => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return (
        <div ref={ref} />
    )
}

export default Pets