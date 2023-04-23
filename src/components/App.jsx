import React, { Component } from 'react';
import Searchbar from '../components/Searchbar';
import ImageGallery from '../components/ImageGallery';

class App extends Component{
  state = {
    data: {
      id:'',
      webformatURL:'',
      largeImageURL:'',
    },
  }

  componentDidMount() {
    
    fetch('https://pixabay.com/api/?q=cat&page=1&key=34322980-08373f8358d1fe63d0b7301a8&image_type=photo&orientation=horizontal&per_page=12')
      .then(result => result.json())
      .then(data => this.setState({data}))
    }
    
  render() {
      return (
        <div>
          <Searchbar onSubmit={this.handleSubmit} />
          <ImageGallery images={images} onImageClick={this.handleGalleryItem} />
        </div>
    ); 
  }
};
export default App;
