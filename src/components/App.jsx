import { Component } from 'react';
import axios from 'axios';

import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    isLoading: false,
    modalImage: '',
    isModalOpen: false,
  };

  apiKey = '40510236-388f5567c4a0a863bef97b410';
  apiUrl = `https://pixabay.com/api/?key=${this.apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

  handleSearch = async query => {
    await this.setState({
      searchQuery: query,
      page: 1,
      images: [],
    });

    this.fetchImages();
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      this.fetchImages
    );
  };

  handleImageClick = largeImageURL => {
    this.setState({
      isModalOpen: true,
      modalImage: largeImageURL,
    });
  };

  handleCloseModal = () => {
    this.setState({
      isModalOpen: false,
      modalImage: '',
    });
  };

  async fetchImages() {
    const { searchQuery, page } = this.state;

    try {
      this.setState({ isLoading: true });

      const response = await axios.get(this.apiUrl, {
        params: {
          key: this.apiKey,
          q: searchQuery,
          page: page,
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      });

      const newImages = response.data.hits;

      this.setState(prevState => ({
        images: [...prevState.images, ...newImages],
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { images, isLoading, isModalOpen, modalImage } = this.state;

    return (
      <div style={{ padding: '10px 10px 10px 10px' }}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onClick={this.handleImageClick} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            image={modalImage}
            onClose={this.handleCloseModal}
          />
        )}
      </div>
    );
  }
}

export default App;
