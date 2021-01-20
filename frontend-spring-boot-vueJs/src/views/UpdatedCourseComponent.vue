<template>
  <div>
    <h3>Course</h3>
    <div class="container">
      <form @submit="validadeAndSubmit">
          <div v-if="errors.length">
    <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors"></div>
    </div>
        <fieldset class="form-group">
          <label>Id</label>
          <input type="text" class="form-control" v-model="id" disabled>
        </fieldset>
        <fieldset class="form-group">
          <label>Description</label>
          <input type="text" class="form-control" v-model="description">
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import CourseDataService from '../service/CourseDataService';
export default {
  name: "courseDetails",
  data() {
    return {
      description: "",
      INSTRUCTOR: "in28minutes",
      errors: []
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    refreshCourseDetails() {
        CourseDataService.retrieveCourse(this.id).then(res => {
          this.description = res.data.description;
        });
    },
    validadeAndSubmit(e) {
        console.log({
            id: e.id,
            description: e.description
        })
    },validate(e) {
    e.preventDefault();
    this.errors = [];
    if(!this.description) {
        this.errors.push("Enter valid values");
    } else if(this.description.length < 5) {
        this.errors.push("Enter atleast 5 characters in Description");
    }
}

  },
  created() {
    this.refreshCourseDetails();
  }
};
</script>

<style>
</style>