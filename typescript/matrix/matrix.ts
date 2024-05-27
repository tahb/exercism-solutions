export class Matrix {
  matrix: string
  
  constructor(matrix: string) {
    this.matrix = matrix
  }

  get rows(): Array<Array<number>> {
    return this.matrix.split('\n').map(
      x => x.split(' ').map(
        y => Number(y)
      )
    );
  }

  get columns(): Array<Array<number>> {
    const rowLength = this.rows[0].length
    let columns: Array<Array<number>> = this.createColumnArrays(rowLength)

    const numbers = this.matrix.split('\n').join(' ').split(' ')

    return this.placeNumberIntoMatchingColumn(numbers, columns, rowLength)
  }

  private createColumnArrays(rowLength: number): Array<Array<any>> {
    let columns: Array<Array<any>> = []
    for (let index = 0; index < rowLength; index++) {
      columns.push([])
    }
    return columns
  }

  private placeNumberIntoMatchingColumn(numbers: Array<any>, columns: Array<Array<number>>, rowLength: number) {
    for (let index = 0; index < numbers.length; index++) {
      const indexOfCurrentNumber = numbers.indexOf(numbers[index])

      columns[indexOfCurrentNumber % rowLength].push(Number(numbers[index]))

      delete numbers[indexOfCurrentNumber]
    }

    return columns
  }
}
