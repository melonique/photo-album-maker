// AddAlbumForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAlbum } from '../../store/albumSlice';
import { Form, Button } from 'react-bootstrap';

const AddAlbumForm = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dispatch the action to add the album
    dispatch(addAlbum({
      id: `album${Date.now()}`, // Generate a unique ID for the album
      title: title,
      photos: [] // Start with an empty array of photos
    }));

    setTitle(''); // Reset the title input after submission
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formAlbumTitle">
        <Form.Label>Album Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter album title"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Album
      </Button>
    </Form>
  );
};

export default AddAlbumForm;
