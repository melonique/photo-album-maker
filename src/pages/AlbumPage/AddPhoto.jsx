// AddAlbumForm.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPhotoToAlbum } from '../../store/albumSlice';
import { Form, Button, Row, Col } from 'react-bootstrap';
import RecordButton from './RecordButton';
import FileInputWithPreview from './FileInputWithPreview';

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
      <Form onSubmit={handleSubmit}>

        <RecordButton />

        <Row>
          <Col md={6}>


            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe the audio"
                name="description"
                defaultValue="Oh, look at this! This was Christmas back in the '90s. There's your mother and father, both looking so young. Next to your father is me, your grandmother, and beside me is your grandfather. We were all smiling, happy to be together. Those two children are you and your sibling, both so small then! Over there are your great uncles and aunts. We gathered around the fireplace, the tree lights twinkling. It was a special time, full of laughter and joy, a lovely moment captured forever in this faded photo."
                rows={7}
              />
            </Form.Group>

            <FileInputWithPreview label="photo" onSelect={(a) => { console.log('log', a); }} />

          </Col>
          <Col>

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
          </Col>
        </Row>


      </Form>
   </>
  );
};

export default AddAlbumForm;
