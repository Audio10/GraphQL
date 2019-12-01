'use strict'

const courses = [
  {
    _id: "anyid",
    title: "Mi titulo",
    teacher: "Mi profesor",
    description: "Una descripcion",
    topic: "Programacion"
  },
  {
    _id: "anyid2",
    title: "Mi titulo2",
    teacher: "Mi profesor2",
    description: "Una descripcion2",
    topic: "Programacion2"
  },
  {
    _id: "anyid3",
    title: "Mi titulo3",
    teacher: "Mi profesor3",
    description: "Una descripcion3",
    topic: "Programacion3"
  }
];

// Resolver que exporta todos los cursos
module.exports = {
  getCourses: () => {
    return courses
  }
}
