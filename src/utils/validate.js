export const validateEmail = (email) => {
    // Regular expression to validate email format
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return emailRegex.test(email);
  };
  



export const validatePassword = (string)=>{
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d@$!%*?&#^]{8,}$/;
    if(!regex.test(string)) {
        return false;
    }
    return true;
};


export const validateUsername = (string) => {
    const regex = /^[a-zA-Z0-9_-]{3,15}$/;
    if(!regex.test(string)) {
        return false;
    }
    return true;
};