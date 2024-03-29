import React from 'react'
import {compose} from "redux";
import Dialogs from './Dialogs';
import {actions } from "../../redux/dialogs-reducer";
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { AppStateType } from "../../redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {sendMessage:actions.sendMessageCreater}),withAuthRedirect)(Dialogs);

