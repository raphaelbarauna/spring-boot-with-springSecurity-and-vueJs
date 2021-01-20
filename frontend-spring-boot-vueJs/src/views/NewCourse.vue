<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <meta name="_csrf" content="${_csrf.token}"/>
      <meta name="_csrf_header" content="${_csrf.headerName}"/>
      <div class="form-group">
        <label for="username">User Name</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="course.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="course.description"
          name="description"
        />
      </div>
      <div class="form-group">
        <label class="file">
        Read File
          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()">
        </label>
      </div>
      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>
    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>    
  </div>
</template>

<script>
import CourseDataService from "../services/CourseDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      course: {
        url: '',
        statusCode: '',
        method: '',
        msg: '',
        xsrfToken: '',
        id: null,
        username: "",
        description: "",
        file: "",
        published: false
      },
      submitted: false
    };
  },   
  
  methods: { 
        saveTutorial() {   
      var data = {
        username: this.course.username,
        description: this.course.description,
        file: this.course.file
      };
      CourseDataService.createCourse(
          data
      ).then(response => {
          this.course.id = response.data.id;
          this.submitted = true;
          this.$router.push("/courses");
        })
        .catch(e => {
          console.log(e);
        });
    },
     handleFileUpload(){
        this.file = this.$refs.file.files[0];
    },    
    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
