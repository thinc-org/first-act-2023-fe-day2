import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [academicYear, setAcademicYear] = useState("");
  const [semester, setSemester] = useState("");
  const [program, setProgram] = useState("");
  const [courses, setCourses] = useState(null);

  const fetchData = async () => {
    const res = await fetch("https://firstact-api.thinc.in.th/courses");
    const data = await res.json();
    console.log(data);

    setAcademicYear(data.academicYear);
    setSemester(data.semester);
    setProgram(data.studyProgram);
    setCourses(data.courses);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <nav className="navbar">
        <h1>Mini Reg</h1>
        <ul className="menus">
          <li>Course List</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <main className="container">
        <div className="badge">Mini Reg is a demo website</div>
        <br />
        <h2>Courses</h2>
        <p>
          Academic Year : {academicYear} Semester : {semester} Study Program :{" "}
          {program}
        </p>
        <br />
        <div className="grid-container">
          {courses &&
            courses.map((element) => (
              <div className="course-card">
                <h3>
                  {element.courseNo} {element.courseNameEn}
                </h3>
                <div>
                  <h4>จำนวนหน่วยกิต</h4>
                  <p>{element.credit} หน่วยกิต</p>
                </div>
                <div>
                  <h4>ชั่วโมงเรียน</h4>
                  <p>{element.creditHours}</p>
                </div>
                <div>
                  <h4>จำนวนที่นั่ง</h4>
                  <p>{element.totalSeats}/300</p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}

export default App;
