export default class ErrorRepository {
    constructor() {
      this.errors = new Map();
    }
  
    add(code, description) {
      this.errors.set(code, description);
    }
  
    translate(code) {
      if (this.errors.has(code)) {
        return this.errors.get(code);
      }
      return 'Unknown error';
    }
  }
  