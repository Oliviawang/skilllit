'use strict'

const transformArray = (array) => array.split('----')
  .map(el => {
    let obj = new Object(),
      keyVal = el.split('####'),
      keyValArray = keyVal.map(el => el.split(':'))

    keyValArray.forEach(el => {
      obj[el[0]] = el[1]
    })

    return obj
  })

const Experience = (data) => new Promise((resolve, reject) => {

    const experience = JSON.parse(JSON.stringify(data)),
      transformed = experience.map(el => {

        el.projects = transformArray(el.projects)

        el.skills = transformArray(el.skills)

        return el
      })

    resolve(transformed)

  })

module.exports = {
  Experience: Experience
}
