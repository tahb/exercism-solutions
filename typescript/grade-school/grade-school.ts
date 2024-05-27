export class GradeSchool {
  private database: { [key: number]: Array<string> } = {}
  private rosterNames: Set<string> = new Set()

  roster() {
    return JSON.parse(JSON.stringify(this.database));
  }

  add(name:string, grade:number) {  
    if (this.rosterNames.has(name)) {
      this.removeExistingName(name)
      return
    }
    
    this.initializeGrade(grade)

    this.database[grade].push(name)
    this.database[grade].sort()

    this.rosterNames.add(name)
  }

  grade(grade:number) {
    const result = this.database[grade] || []
    return JSON.parse(JSON.stringify(result))
  }

  private initializeGrade(grade:number) {
    let gradeExists:boolean = false
    
    for (let key of Object.keys(this.database)) {
      if(parseInt(key) === grade) {
        gradeExists = true
        break
      }
    }
    
    if (gradeExists === false) {
      this.database[grade] = []
    }
  }

  private removeExistingName(name:string) {
    for (let key of Object.keys(this.database)) {
      this.database[parseInt(key)] = this.database[parseInt(key)].filter(
        (existingName) => existingName !== name
      )
    }
  }
}
