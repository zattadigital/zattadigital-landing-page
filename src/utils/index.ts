export const isValidEmail = (email: string) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) return true;

    return false;
}

export const isValidPhoneNumber = (phone:string) => {
    if(phone.length < 11) return false;

    const ddd = phone.substring(0,2);
    if(ddd < '09') return false;

    return true;
}