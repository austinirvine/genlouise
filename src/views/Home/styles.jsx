export default theme => ({
  root: {
    padding: theme.spacing.unit * 3
  },
  pdfDoc: {
    width: '100% !important',
    height: 'auto !important',
  },
  topGrid: {
    background: 'linear-gradient(white, white, pink)',
  },
  imageStyle: {
    height: 'auto',
    width: 'auto',
  },
  content: {
    marginTop: theme.spacing.unit * 2
  },
  progressWrapper: {
    paddingTop: '48px',
    paddingBottom: '24px',
    display: 'flex',
    justifyContent: 'center'
  },
  pagination: {
    marginTop: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});
