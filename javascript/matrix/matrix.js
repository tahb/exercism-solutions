//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { lchown } from 'fs';

export class Matrix {
  constructor(string) {
    this.matrix = string;
  }

  get rows() {
    return this.matrix
      .split('\n')
      .map((elements) => this.convertStringsToNumbers(elements));
  }

  get columns() {
    let rows = this.matrix.split('\n');
    let col_length = this.convertStringsToNumbers(rows[0]).length;
    let row_length = rows.length;
    let columns = [];

    let longest_edge_length = row_length > col_length ? row_length : col_length;

    for (var i = 0; i < longest_edge_length; i++) {
      columns[i] = [];
      for (var row_item of rows) {
        let numbers = this.convertStringsToNumbers(row_item);

        columns[i].push(numbers[i]);
      }
    }

    return columns;
  }

  convertStringsToNumbers(string_of_numbers) {
    return string_of_numbers.split(' ').map((e) => parseInt(e));
  }
}
