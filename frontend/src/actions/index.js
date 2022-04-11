export const signin = (userid) => {
    return {
        type: 'SIGNIN',
        payload: userid
    }
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    }
};