// AlbumPage.js
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import AddPhoto from './AddPhoto';


const AlbumPage = () => {
  const { albumId } = useParams();
  const album = useSelector(state =>
    state.album.albums.find(album => album.id === albumId)
  );

  if (!album) {
    return <div>Album not found!</div>;
  }



  return (
    <Container fluid>
      <h1>{album.title}</h1>
      <AddPhoto albumId={album.id} />
      <hr />
    <Row>
        {album.photos.map((photo, index) => (
          <div className="col-md-3" key={photo.id}>
            <ListGroup>
              <ListGroup.Item>
                <img src={photo.fileURL} alt={photo.description} style={{ width: '100%' }} />
                <div><strong>Date:</strong> {photo.date}</div>
                <div><strong>Summary:</strong> {photo.summary}</div>
                <div><strong>Description:</strong> {photo.description}</div>
                <div><strong>Location:</strong> {photo.location}</div>
                <div><strong>People:</strong> {photo.people.join(', ')}</div>
              </ListGroup.Item>
            </ListGroup>
          </div>
        ))}
    </Row>
    </Container>
  );
};

export default AlbumPage;
