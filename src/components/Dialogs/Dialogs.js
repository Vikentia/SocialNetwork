import React from "react";
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import s from './Dialogs.module.scss';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator } from '../../utils/validators';


function Dialogs(props) {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(dialog => <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />);
    let messagesElements = state.messages.map(mess => <Message key={mess.id} message={mess.message} />)

    // let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>

        </div>
    )
}


const maxLength100 = maxLengthCreator(100) 

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                    name='newMessageBody'
                    placeholder="Enter your message"
                    validate={[required, maxLength100]} />
                {/* onChange={onNewMessageChange} value={newMessageBody}  */}
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)
export default Dialogs;

