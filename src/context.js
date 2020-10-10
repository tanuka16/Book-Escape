import React, { Component } from 'react';
// context api
// create a new context obj, because the api comes from react; context obj comes with 2 components (1)provider, provide all the info for all the application
// & (2)comsumer
const BookContext = React.createContext();
//Provider
//Consumer


class BookProvider extends Component {

  render() {
    return (
      <BookContext.Provider value="hello from phone app">
        {this.props.children}
      </BookContext.Provider>
    );
  }

}

const BookConsumer = BookContext.Consumer;

export {BookProvider, BookConsumer};
