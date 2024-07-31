class HandleErrors {
    constructor(error){
        this.error = error;
        this.errorResponse = { errors: [] };
    }

    handleDuplicateKeyError() {
        if (this.error.name === 'MongoServerError' && this.error.code === 11000) {
          const field = Object.keys(this.error.keyValue)[0];
          this.errorResponse.errors.push({
            field,
            message: `${field.charAt(0).toUpperCase() + field.slice(1) + ' ' + this.error.keyValue[field]} already exists.`
          });

        }
    }

    handleError() {
        this.handleDuplicateKeyError();
        // this.handleValidationError();
    
        // If there are no specific errors captured, return a generic error message
        if (this.errorResponse.errors.length === 0) {
          this.errorResponse.errors.push({
            message: this.error.message || 'An unknown error occurred.'
          });
        }
    
        return this.errorResponse;
      }
}
module.exports = HandleErrors;