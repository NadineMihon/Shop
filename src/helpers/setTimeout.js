export const getString = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('string');
        }, 2000); 
    });
};