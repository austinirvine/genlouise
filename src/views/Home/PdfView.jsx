import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import pdfFile from './files/resume.pdf';

import styles from './styles';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
};
 
class PdfView extends Component {
    state = {
        file: pdfFile,
        numPages: null,
    }

    onFileChange = (event) => {
        this.setState({
            file: event.target.files[0],
        });
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
 
  render() {
    const { file, numPages } = this.state;
    const { classes } = this.props;

    return (
        <div className={classes.pdfDoc}>
          <Document
            file={file}
            onLoadSuccess={this.onDocumentLoadSuccess}
            options={options}
            
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
        </div>
    );
  }
}

PdfView.propTypes = {
  /** Material UI Styling */
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PdfView);