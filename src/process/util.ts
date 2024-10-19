function validateRequest(filename: string, width: string, height: string) {
    var message = null;
    if(!filename || !width || !height) {
        message = "Please fill full parameter!";
    }
    return message;
}
export default validateRequest;