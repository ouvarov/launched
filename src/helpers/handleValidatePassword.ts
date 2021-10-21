const handleValidatePassword = (password: string, confirmPassword: string): boolean => {
    return password.length >= 6 && password === confirmPassword;
};

export default handleValidatePassword;
