//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { checkServerIdentity } from 'tls';

export class GradeSchool {
  constructor() {
    this.children = [];
  }

  roster() {
    const graded_children = this.children.reduce((result, child) => {
      result[child.grade] = result[child.grade] || [];
      result[child.grade].push(child.name);
      result[child.grade].sort();

      return result;
    }, {});

    return graded_children;
  }

  add(name, grade) {
    const existing_children = this.children;
    const unique_children = existing_children.filter((child) => {
      return child.name !== name;
    });

    this.children = [...unique_children, { name: name, grade: grade }];
  }

  grade(number) {
    const grade = this.roster()[number];
    if (grade === undefined) return [];

    const sorted_grade = grade.sort();
    return sorted_grade;
  }
}
