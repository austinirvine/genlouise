import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './Sample.less';
import pdfFile from './files/resume.pdf';

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

    return (
      <div className="Example">
        <div className="Example__container">
          <div className="Example__container__document">
            <Document
              file={pdfFile}
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
        </div>
      </div>
    );
  }
}

export default PdfView;