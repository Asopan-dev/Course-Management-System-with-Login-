import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  const API_URL = "http://localhost:8080/course";

  const [courses, setCourses] = useState([]);

  const [editId,setEditId]=useState(null)

  const [coursData, setCourseData] = useState({
    courseId: "",
    courseName: "",
    duration: "",
    courseFees: ""
  });

  const handleChange =async (e) => {
    setCourseData({
      ...coursData,
      [e.target.name]: e.target.value,
    });
  };

  const getCourse = async () => {
    try {
      const response = await axios.get(`${API_URL}/get_course`)
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

    const handleEdit=(course)=>{
    setEditId(course.courseId);
    setCourseData({
        courseId:course.courseId,
        courseName:course.courseName,
        duration:course.duration,
        courseFees:course.courseFees
    });
    }

    const handleDelete=async(id)=>{
      try{
        await axios.delete(`${API_URL}/delete/${id}`)
        alert ("Course Deleted Successfully ✅")
        getCourse();

      }catch(error){
        console.log(error)
      }
    }


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    if (editId) {
      await axios.put(`${API_URL}/update/${editId}`, coursData);
      alert("Course Updated Successfully ✅");
    } else {
      await axios.post(`${API_URL}/add_course`, coursData);
      setCourses([...courses,response.data]);
      alert("Course Added Successfully ✅");
    }

    setCourseData({
      courseId: "",
      courseName: "",
      duration: "",
      courseFees: "",
    });

    getCourse();
    setEditId(null)
  } catch (error) {
    alert("Something went wrong ❌");
  };
}
  

  return (
    <div className="container py-5">

      <div className="card shadow-lg border-0">
        
        <div className="card-header bg-primary text-white text-center py-4">
          <h2>📚 -𝚂𝚌𝚘𝚛𝚙- Course Management</h2>
          <p className="mb-0">Manage Courses Easily</p>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course ID"
                  name="courseId"
                  value={coursData.courseId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Course Name"
                  name="courseName"
                  value={coursData.courseName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Duration"
                  name="duration"
                  value={coursData.duration}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Course Fees"
                  name="courseFees"
                  value={coursData.courseFees}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 text-center">
                <button className="btn btn-success px-5">
                 {editId!=null?"Update Course":"Add Course"}
                </button>
              </div>

            </div>
          </form>

          <hr className="my-4" />

          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered text-center align-middle">

              <thead className="table-primary">
                <tr>
                  <th>Course ID</th>
                  <th>Course Name</th>
                  <th>Duration</th>
                  <th>Fees</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <tr key={course.courseId}>
                        <td>{course.courseId}</td>
                        <td>{course.courseName}</td>
                        <td>{course.duration}</td>
                        <td>Rs. {course.courseFees}</td>
                        <td>
                          <div className="d-flex justify-content-center gap-3">
                            <button
                              className="btn btn-warning"
                              onClick={() => handleEdit(course)}>
                              Edit
                            </button>

                            <button className="btn btn-danger" onClick={()=>handleDelete(course.courseId)}>
                              Delete
                            </button>
                          </div>
                        </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">
                      No Courses Available
                    </td>
                  </tr>
                )}
              </tbody>

            </table>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Product;