import React, { Component } from 'react';
import { Notify } from 'notiflix';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import getImages from '../services/api';
import ImageGallery from '../components/ImageGallery';
import css from './App.module.css';

class App extends Component{
  state = {
      images: [],
      query: '',
      page: 1,
      isLoading: false,
      showModal: false,
      largeImageURL: '',
      tags: '',
      total:0,
      error: null,
  };
  
  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }
  fetchImages = async (query, page) => {
    try {
      this.setState({ isLoading: true });
      const data = await getImages(query, page);
      if (data.hits.length === 0) {
        return Notify.failure('No matches found!');
      }
      this.setState(({ images }) => ({
        images: [...images, ...data.hits],
        total: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };
  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };
  onModalOpen = (largeImage, tags) => {
    this.setState({ showModal: true, largeImage, tags });
  };
  onModalClose = () => {
    this.setState({ showModal: false, largeImage: '', tags:'' });
  };

  render() {
    const { images, isLoading,total,error, showModal,largeImage,tags } = this.state;
    const totalPage = total / images.length;
    return (
      <div className={css.app}>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {images.length !== 0 && (
          <ImageGallery gallery={images} onModalOpen={this.onModalOpen} />
        )}
        {totalPage > 1 && !isLoading && images.length !== 0 && (
          <Button onClick={this.onLoadMore} />
        )}
        {showModal && (
          <Modal
            largeImage={largeImage}
            tags={tags}
            onModalClose={this.onModalClose}
          />
        )}
        {error &&(<span>Try another option</span>)}
      </div>
    );
  }
}
export default App;
