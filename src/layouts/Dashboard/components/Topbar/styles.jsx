import { fontSize } from "@material-ui/system";
import { white } from "../../../../common/colors";

export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: white,
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  src: {
    height: '100%',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing.unit,
    fontSize: '40px',
    // position: 'relative',
    // float: 'left',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, 0%)',
    color: '#fb6e6e',
    // 'margin-left': '8px',
    'font-family': '-apple-system',
    'font-style': 'normal'
  },
  menuButton: {
    marginLeft: '-4px'
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing.unit
  },
  optionText: {
    marginTop: '2px',
    marginLeft: '5px',
  }
});
