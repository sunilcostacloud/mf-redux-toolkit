import { useEffect } from 'react';
import Pets from "./components/Pets"
import { useSelector, useDispatch } from 'react-redux'
import { saveData } from './redux/features/dataSlice';

const App = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.dataI);


  useEffect(() => {
    const handleEvent = (event) => {
      if (event.detail.type === 'buttonClick') {
        dispatch(saveData(event.detail.data))
      }
    };

    document.addEventListener('microfrontendEvent', handleEvent);

    return () => {
      document.removeEventListener('microfrontendEvent', handleEvent);
    };
  }, []);

  return (
    <div>
      <Pets />
      {JSON.stringify(data)}
    </div>
  )
}

export default App