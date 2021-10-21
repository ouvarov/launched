import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import { StateTypes } from 'store/types';

const Alert: React.FC = () => {
    const user = useSelector((state: StateTypes) => state.auth.data);
    const { email, password, chekPassword, gender } = user;
    const isShow = [email, password, chekPassword, gender].every(Boolean);

    return (
        <div className={classNames('alert', { 'alert--show': isShow })}>
            <div className="alert__grid">
                <p className="alert__text">
                    {email} {password} {chekPassword} {gender}
                </p>
            </div>
        </div>
    );
};

export default Alert;
