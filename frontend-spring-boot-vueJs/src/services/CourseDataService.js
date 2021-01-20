import axios from "axios";
/* Rota que vai ser utilizada */
const COURSE_API_URL = "http://localhost:8081";

class CourseDataService {

  retrieveAllCourses() {
    return axios.get(`${COURSE_API_URL}/course/all`);
  }
  deleteCourse(id){
      return axios.delete(`${COURSE_API_URL}/course/delete/${id}`)

  }
  retrieveCourse(id) {
    return axios.get(`${COURSE_API_URL}/course/${id}`);
}
  updateCourse(course) {
  return axios.put(`${COURSE_API_URL}/course/update`, course);
}

  createCourse(course, file) {    
    let formData = new FormData();    
    formData.append('file', file);
  return axios.post(`${COURSE_API_URL}/course/save`,course, formData, { 
    headers: { 'Content-type' : 'multipart/form-data' }
  });
}

}

export default new CourseDataService();
