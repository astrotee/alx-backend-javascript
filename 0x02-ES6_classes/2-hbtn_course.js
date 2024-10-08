export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  /**
     * @param {Number} length
     */
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;
  }

  get length() {
    return this._length;
  }

  /**
     * @param {Array} students
     */
  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an Array of strings');
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
