import React, {Component} from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={s.person}>
            <div className={s.personImgWrap}>
                <img className={s.personImg} src='https://github.com/Ivan-F-Dev/imgs/blob/main/Mando.jpg?raw=true'/>
            </div>
            <div className={s.personData}>
                <div className={s.dataName}>
                    Din Jarren
                </div>
                <div className={s.dataOther}>
                    <div className={s.points}>
                        <div>Date of Birth:</div>
                        <div>Planet:</div>
                        <div>Job:</div>
                        <div>Coordinate:</div>
                    </div>
                    <div className={s.values}>
                        <div>No data</div>
                        <div>No data</div>
                        <div>Head hunter</div>
                        <div>No data</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;