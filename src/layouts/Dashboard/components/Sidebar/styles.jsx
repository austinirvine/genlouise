import { grey } from "../../../../common/colors";

export default theme => ({
  root: {
    backgroundColor: grey,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  titleText: {
    'font-size': '24px',
    'font-weight': '500',
    'line-height': '28px',
    'letter-spacing': '-0.06px',
    'font-family': '-apple-system',
    'font-style': 'normal',
    color: '#fb6e6e'
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0,
  },
  logoLink: {
    fontSize: 0,
    display: 'contents',
    flexDirection: 'row'
  },
  logoImage: {
    cursor: 'pointer',
    // width: '48px'
  },
  logoDivider: {
    marginBottom: theme.spacing.unit * 2
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  nameText: {
    marginTop: theme.spacing.unit * 2
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '4px',
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: '-4px'
      }
    },
    '& + &': {
      marginTop: theme.spacing.unit
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
    '& $listItemText': {
      color: theme.palette.text.primary
    },
    '& $listItemIcon': {
      color: theme.palette.primary.main,
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    marginLeft: theme.spacing(2),
    minWidth: 60,
    marginRight: 'auto'
  },
  icon: {
    width: '24px',
    'border-width': '2px',
    'border-color': '#ae4848',
    'border-style': 'solid'
  },
});
