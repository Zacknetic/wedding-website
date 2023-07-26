// SequenceForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSequence } from '../redux/hotelSlice';
import { useHistory } from 'react-router-dom';

function SequenceForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSequence(input));
    history.push(`/${input}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SequenceForm;
