import React, {Component} from 'react';
import s from './Message.module.css';

const Message = (props) => {

    return (
        <div className={s.message}>
            <div className={s.from}>
                <img className={s.fromImg} src="https://github.com/Ivan-F-Dev/imgs/blob/main/Boba.jpg?raw=true"
                     alt=""/>
                <div className={s.messageFrom}>{props.message}</div>
            </div>
            <div className={s.answer}>
                <div className={s.messageAnswers}>my answer</div>
                <img className={s.answerImg} src="https://github.com/Ivan-F-Dev/imgs/blob/main/Mando.jpg?raw=true"
                     alt=""/>
            </div>
        </div>

    )
}

export default Message;