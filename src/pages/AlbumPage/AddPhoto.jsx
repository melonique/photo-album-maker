// AddAlbumForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhotoToAlbum } from '../../store/albumSlice';
import { Form, Button } from 'react-bootstrap';
import RecordButton from './RecordButton';

const AddAlbumForm = ({ albumId }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    const newPhoto = {
      id: `photo${Date.now()}`, // or another method for unique IDs
      date: form.elements.date.value,
      summary: form.elements.summary.value,
      description: form.elements.description.value,
      location: form.elements.location.value,
      people: form.elements.people.value.split(',').map(person => person.trim()), // Assuming comma-separated input for people
      fileURL: form.elements.fileURL.value,
    };

    // Dispatch the action to add the photo to the album
    dispatch(addPhotoToAlbum({ albumId, photo: newPhoto }));
    console.log("Photo added!", newPhoto);
    // Here you might want to reset the form or handle post-submit UI changes
  };

  return (
   <>
      <h2>Add a Photo</h2>
      <RecordButton />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" name="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter a description" name="description" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Summary</Form.Label>
          <Form.Control type="text" placeholder="Enter a summary" name="summary" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter a location" name="location" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>People</Form.Label>
          <Form.Control type="text" placeholder="Who's in the photo?" name="people" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control placeholder="http://example.com/photo.jpg" name="fileURL" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Photo
        </Button>
      </Form>
   </>
  );
};

export default AddAlbumForm;
