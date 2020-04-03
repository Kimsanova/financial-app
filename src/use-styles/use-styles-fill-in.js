import {makeStyles} from "@material-ui/core/styles";

const useStylesFillIn = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default useStylesFillIn