// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (width, height) {
  this.width = width
  this.height = height
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (x, y) {
  this.x = x
  this.y = y
}

export class ProgramWindow {
  constructor() {
    this.size = new Size()
    this.position = new Position()
    this.screenSize = new Size(800, 600)
  }

  resize(newSize) {
    if (newSize.height < 1 || newSize.width < 1) {
      this.size = new Size(1, 1)
      return 
    } 

    if (this.position.x + newSize.width > this.screenSize.width) {
      newSize.width = this.screenSize.width - this.position.x
    }

    if (this.position.y + newSize.height > this.screenSize.height) {
      newSize.height = this.screenSize.height - this.position.y
    }
    
    this.size = newSize  
  }

  move(newPosition) {
    if (newPosition.x < 0 || newPosition.y < 0) {
      this.position = new Position(0, 0)
      return
    }

    if (newPosition.x + this.size.width > this.screenSize.width) {
      newPosition.x = this.screenSize.width - this.size.width
    }

    if (newPosition.y + this.size.height > this.screenSize.height) {
      newPosition.y = this.screenSize.height - this.size.height
    }

    this.position = newPosition
  }
}


export function changeWindow(programWindow) {
  programWindow.size.width = 400
  programWindow.size.height = 300
  programWindow.position.x = 100
  programWindow.position.y = 150
  return programWindow
}
