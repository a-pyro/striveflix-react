import React, { Component } from 'react';
import {
  ListGroup,
  Spinner,
  Row,
  Col,
  Image,
  Container,
} from 'react-bootstrap';

export default class ShowDetail extends Component {
  state = {
    movie: null,
    comments: [],
    isLoading: true,
    isError: false,
    errorMsg: '',
  };

  componentDidMount = async () => {
    console.log('MOUNTED!');

    const movieID = this.props.match.params.id;
    console.log(movieID);
    // fetch movie
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=95717d44&i=${movieID}`
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ movie: data, isLoading: false });
      } else {
        this.setState({ isError: true });
        console.log('theres an error');
      }
    } catch (error) {
      console.log(error);
    }

    //fetch comments
    try {
      const response = await fetch(
        ` https://striveschool-api.herokuapp.com/api/comments/${movieID}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDUyMDNjNDg5YzI2ZjAwMTU3ZjljNDMiLCJpYXQiOjE2MjUxNDgyMDQsImV4cCI6MTYyNjM1NzgwNH0.3HhdK6t7oeXt5LpONAYiU2a_Ap043ucIpJxFfUQTVDA',
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        this.setState({ comments: [...data], isLoading: false });
      } else {
        this.setState({ isError: true });
        console.log('theres an error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    console.log(this.state.comments);
    console.log(this.state.movie);
    return (
      <>
        {/* {this.state.isLoading || this.state.movie === 'null' ? (
          <Spinner animation='grow' />
        ) : (
          <h1>the movie id is {this.state.movie.title}</h1>
        )} */}

        <Container fluid className='min-vh-100'>
          <Row className='justify-content-start'>
            <Col className='d-flex flex-column'>
              <h2 className='text-white'>{this.state.movie?.Title ?? ''}</h2>{' '}
              <Image fluid alt='movie cover' src={this.state.movie?.Poster} />{' '}
            </Col>
            <Col className='mt-5'>
              <h3 className='text-white'>Plot:</h3>
              <p className='text-white'>{this.state.movie?.Plot}</p>
              <ListGroup>
                <ListGroup.Item>
                  Director: {this.state.movie?.Director}
                </ListGroup.Item>
                <ListGroup.Item>
                  Imdb rating: {this.state.movie?.imdbRating}
                </ListGroup.Item>
                <ListGroup.Item>
                  Genre: {this.state.movie?.Genre}
                </ListGroup.Item>
                <ListGroup.Item>Year: {this.state.movie?.Year}</ListGroup.Item>
                <ListGroup.Item>
                  BoxOffice: {this.state.movie?.BoxOffice}
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
