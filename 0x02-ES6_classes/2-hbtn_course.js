class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'Name');
    this._length = this._validateNumber(length, 'Length');
    this._students = this._validateArray(students, 'Students');
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = this._validateString(name, 'Name');
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(length) {
    this._length = this._validateNumber(length, 'Length');
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(students) {
    this._students = this._validateArray(students, 'Students');
  }

  // Private method to validate string type
  _validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${propertyName} must be a string`);
    }
    return value;
  }

  // Private method to validate number type
  _validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${propertyName} must be a number`);
    }
    return value;
  }

  // Private method to validate array type
  _validateArray(value, propertyName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${propertyName} must be an array`);
    }
    return value;
  }
}

export default HolbertonCourse;
