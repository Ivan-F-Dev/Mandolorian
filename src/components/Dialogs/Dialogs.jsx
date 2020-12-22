import React, {Component} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements =
        props.stateDialogsPage.dialogs.map( d => <DialogItem url={d.url} name={d.name} id={d.id}/>);

    let messagesElements =
        props.stateDialogsPage.messages.map( m => <Message message={m.message} />);

    let newMessageText = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = newMessageText.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.write}>
                    <textarea
                        value={props.stateDialogsPage.newMessageText}
                        onChange={onMessageChange}
                        ref={newMessageText}
                        className={s.textarea} />
                    <button onClick={addMessage} className={s.button}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;