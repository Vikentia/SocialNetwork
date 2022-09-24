import {compose} from "redux";
import Dialogs from './Dialogs';
import {actions } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => dispatch(actions.sendMessageCreater(newMessageBody)),
    }
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose(connect(mapStateToProps, mapDispatchToProps),withAuthRedirect)(Dialogs);

