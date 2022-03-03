const validateEmail = function (email) {
    const validate = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    return validate.test(email)
};

module.exports = validateEmail;