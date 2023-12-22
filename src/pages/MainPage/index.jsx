// MainPage.js
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, ListGroup } from 'react-bootstrap';
import AddAlbum from './AddAlbum'

const MainPage = () => {
  const albums = useSelector((state) => state.album.albums);

  return (
    <Container fluid>
      <h1>Photo Albums</h1>

      <ListGroup>
        {albums.map((album) => (
          <ListGroup.Item key={album.id} as="div">
            <Link to={`/album/${album.id}`} style={{ textDecoration: 'none' }}>
              {album.title} - {album.photos.length} Photos
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />
      <AddAlbum />
    </Container>
  );
};

export default MainPage;
