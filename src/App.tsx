import React, { useState } from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Form, Input } from 'common/components';
import { MaleIcon, OtherIcon, FemaleIcon } from 'common/components/Svg';

import { cleanError, setErrorEmail, setErrorPassword, setList } from 'store/actions';
import { StateTypes } from 'store/types';
import { handleValidateEmail, handleValidatePassword } from 'helpers';

import 'assets/sass/style.scss';

const genderButton = [
    {
        type: 'Male',
        icon: <MaleIcon fill="currentColor" className="gender-button__icon" />,
    },
    {
        type: 'Female',
        icon: <FemaleIcon fill="currentColor" className="gender-button__icon" />,
    },
    {
        type: 'Other',
        icon: <OtherIcon fill="currentColor" className="gender-button__icon" />,
    },
];

const App: React.FunctionComponent = () => {
    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('');
    const [genderValue, setGenderValue] = useState<string>('');

    const user = useSelector((state: StateTypes) => state.auth);

    const dispatch = useDispatch();

    const isDisabled = ![emailValue, passwordValue, confirmPasswordValue, genderValue].every(Boolean);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!handleValidateEmail(emailValue)) {
            dispatch(setErrorEmail());
        }
        if (!handleValidatePassword(passwordValue, confirmPasswordValue)) {
            dispatch(setErrorPassword());
        }
        if (handleValidateEmail(emailValue) && handleValidatePassword(passwordValue, confirmPasswordValue)) {
            dispatch(
                setList({
                    email: emailValue,
                    password: passwordValue,
                    chekPassword: confirmPasswordValue,
                    gender: genderValue,
                }),
            );
        }
    };

    return (
        <div className="page">
            <div className="page__form-wrap">
                <figure className="page__logo" />
                <h1 className="page__title">Sign Up with email</h1>
                <Form
                    className="form"
                    isDisabled={isDisabled}
                    onSubmit={e => {
                        handleSubmit(e);
                    }}
                >
                    <div className="label">Gender</div>
                    <div className="form__gender-wrap">
                        {genderButton.map(({ type, icon }) => (
                            <button
                                key={type}
                                className={classNames('gender-button', {
                                    'gender-button--active': genderValue === type,
                                })}
                                onClick={() => {
                                    setGenderValue(type);
                                }}
                                type="button"
                            >
                                {icon}
                                <span className="gender-button__text">{type}</span>
                            </button>
                        ))}
                    </div>
                    <Input
                        id="email"
                        name="email"
                        label="E-mail"
                        value={emailValue}
                        onChange={e => {
                            setEmailValue(e.target.value);
                        }}
                        onFocus={() => {
                            dispatch(cleanError());
                        }}
                        type="text"
                        hasError={user.errorEmail}
                    />
                    <Input
                        id="password"
                        name="password"
                        label="Create Password"
                        value={passwordValue}
                        onChange={e => {
                            setPasswordValue(e.target.value);
                        }}
                        onFocus={() => {
                            dispatch(cleanError());
                        }}
                        type="password"
                        placeholder="***********"
                        hasError={user.errorPassword}
                    />
                    <Input
                        id="ConfirmPassword"
                        name="ConfirmPassword"
                        label="Confirm Password"
                        value={confirmPasswordValue}
                        onChange={e => {
                            setConfirmPasswordValue(e.target.value);
                        }}
                        onFocus={() => {
                            dispatch(cleanError());
                        }}
                        placeholder="***********"
                        type="password"
                        hasError={user.errorPassword}
                    />
                    <Button type="submit" isDisabled={isDisabled}>
                        Sign Up
                    </Button>
                </Form>
                <p className="page__text">
                    Already have an account?{' '}
                    <a className="page__link" href="/">
                        Log In
                    </a>
                </p>
                <p className="page__text">
                    Review privacy and disclosures{' '}
                    <a className="page__link" href="/">
                        here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default App;
