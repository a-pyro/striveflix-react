import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

export default class ShowDetail extends Component {
  state = {
    movie: null,
    isLoading: true,
    isError: false,
    errorMsg: '',
  };
  componentDidMount = async () => {
    console.log('MOUNTED!');

    const movieID = this.props.match.params.id;
    console.log(movieID);
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
  };
  render() {
    return (
      <>
        {/* {this.state.isLoading || this.state.movie === 'null' ? (
          <Spinner animation='grow' />
        ) : (
          <h1>the movie id is {this.state.movie.title}</h1>
        )} */}
        <h1>{this.state.movie?.Title ?? 'hello'}</h1>
      </>
    );
  }
}
