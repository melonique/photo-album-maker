import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const FileInputWithPreview = ({ label, onSelect }) => {
  const [preview, setPreview] = useState();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.substr(0, 5) === 'image') {
      setPreview(URL.createObjectURL(file));
      onSelect(file);
    } else {
      setPreview(null);
    }
  };

  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div>
          <h3>Preview:</h3>
          <img src={preview} alt="File Preview" style={{ maxWidth: "100%" }}/>
        </div>
      )}
    </Form.Group>
  );
};

export default FileInputWithPreview;
