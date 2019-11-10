import React, { Component, useCallback } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { withStyles, Box } from '@material-ui/core';
import { Dashboard as DashboardLayout } from '../../layouts';
import { images } from './preload-images.json';
import Gallery from 'react-photo-gallery';

const styles = theme => ({
  root: {
    justifyContent: 'space-around',
    zIndex: '200',
    marginTop: '30px',
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      viewerIsOpen: false,
    };
  }

  openLightbox = (event, {photos, index}) => {
    console.log(index);
    this.setState({ currentImage: index, viewerIsOpen: true });
  };
  
  closeLightbox = () => {
    this.setState({ currentImage: 0, viewerIsOpen: false});
  };

  render() {
    const { classes } = this.props;
    const { currentImage, viewerIsOpen } = this.state;
    var imageArray = [];
    images.forEach(function( img ) { imageArray.push({"src":require(img.src+""),"width":img.width,"height":img.height}) });
    // document.addEventListener('contextmenu', event => event.preventDefault());
    return (
      <>
        <DashboardLayout title="genlouise.art">
            <Box class={classes.root}>
              <Gallery photos={imageArray} onClick={this.openLightbox}/>
                <ModalGateway>
                {viewerIsOpen ? (
                  <Modal
                    onClose={this.closeLightbox}
                    styles={{
                      dialog: base => ({
                        ...base,
                        maxWidth: 640,
                      }),
                    }}>
                    <Carousel
                      styles={{
                        header: (base, state) => ({
                          ...base,
                          color: 'black',
                          minHeight: 42,
                          paddingTop: 90,
                          zIndex: 2,
          
                          '& a': {
                            color: state.interactionIsIdle ? 'black' : '#00d7ff',
                            transition: 'color 300ms',
                          },
                          '& strong': { textTransform: 'uppercase' },
                        }),
                        navigationItem: base => ({
                          ...base,
                          backgroundColor: 'transparent',
          
                          ':hover': {
                            backgroundColor: '#00d7ff',
                          },
                          ':active': {
                            backgroundColor: '#00d7ff',
                            transform: 'translateY(2px)',
                          },
                        }),
                      }}
                      class={classes.root}
                      currentIndex={currentImage}
                      views={imageArray.map(x => ({
                        ...x,
                        srcset: x.srcSet,
                        caption: x.title
                      }))}
                    />
                  </Modal>
                ) : null }
              </ModalGateway>
            </Box>
        </DashboardLayout>
      </>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);

// styles={{
                    //   blanket: base => ({
                    //     ...base,
                    //     backgroundColor: 'rgba(40,60,20,0.85)',
                    //   }),
                    //   dialog: base => ({
                    //     ...base,
                    //     maxWidth: 640,
                    //   }),
                    // }}>
