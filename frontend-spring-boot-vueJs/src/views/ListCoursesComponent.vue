<template>
  <div class="container">
    <header class="jumbotron">
    <h3>Todos os Cursos</h3>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>User Name</th>
            <th>Description</th>
            <th>File Path</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" v-bind:key="course.id">
            <td>{{course.id}}</td>
            <td>{{course.username}}</td>
            <td>{{course.description}}</td>
            <td>{{course.filePath}}</td>
            <td>
              <button class="btn btn-success" v-on:click="updateCourseClicked(course.id)">Update</button>
            </td>
            <td>
                <button class="btn btn-warning" v-on:click="deleteCourseClicked(course.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
    <button class="btn btn-success" v-on:click="addCourseClicked()">Add</button>
</div>
    </div>
    </header>
  </div>
</template>

<script>
import CourseDataService from '../services/CourseDataService';
export default {
  name: "CoursesList",
  data() {
    return {
        courses: [],
        message: null,
        INSTRUCTOR: "in28minutes"
    };
  },
  methods: {
    refreshCourses() {
      CourseDataService.retrieveAllCourses() //HARDCODED
        .then(response => {
          this.courses = response.data;
        });
    },addCourseClicked() {
    this.$router.push('/courses/novo');
  },
    deleteCourseClicked(id){
        CourseDataService.deleteCourse(id)
            .then(response => {
                response = `Delete of course ${id} Successful`;
                this.message = response;
                this.refreshCourses();
        });
     },
     updateCourseClicked(id) {
    this.$router.push(`/courses/${id}`);
  }
  },
  created() {
    this.refreshCourses();
  }
};
</script>

<style>
</style>