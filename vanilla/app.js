async function fetchData() {
  const res = await fetch("https://firstact-api.thinc.in.th/courses");
  const data = await res.json();
  console.log(data);

  document.querySelector("#year").innerHTML = data.academicYear;
  document.querySelector("#semester").innerHTML = data.semester;
  document.querySelector("#program").innerHTML = data.studyProgram;

  // let appendData = "";
  // for (let index = 0; index < data.courses.length; index++) {
  //   appendData += `
  //   <div class="course-card">
  //       <h3>${data.courses[index].courseNo} ${data.courses[index].courseNameEn}</h3>
  //       <div>
  //           <h4>จำนวนหน่วยกิต</h4>
  //           <p>${data.courses[index].credit} หน่วยกิต</p>
  //       </div>
  //       <div>
  //           <h4>ชั่วโมงเรียน</h4>
  //           <p>${data.courses[index].creditHours}</p>
  //       </div>
  //       <div>
  //           <h4>จำนวนที่นั่ง</h4>
  //           <p>${data.courses[index].totalSeats}/300</p>
  //       </div>
  //   </div>`;
  // }

  data.courses.forEach((element) => {
    // Create Root Element
    const node = document.createElement("div");
    node.classList.add("course-card");

    // Create Head <h3> with text
    const headingNode = document.createElement("h3");
    const headingText = document.createTextNode(
      element.courseNo + " " + element.courseNameEn
    );
    headingNode.appendChild(headingText);
    node.appendChild(headingNode);

    // Create Credit Part <div>
    const creditNode = document.createElement("div");

    const creditHeading = document.createElement("h4");
    const creditHeadingText = document.createTextNode("จำนวนหน่วยกิต");
    creditHeading.appendChild(creditHeadingText);
    creditNode.appendChild(creditHeading);

    const creditParagraph = document.createElement("p");
    const creditParagraphText = document.createTextNode(
      `${element.credit} หน่วยกิต`
    );
    creditParagraph.appendChild(creditParagraphText);
    creditNode.appendChild(creditParagraph);

    node.appendChild(creditNode);

    // Create Hours Part <div>
    const hoursNode = document.createElement("div");

    const hoursHeading = document.createElement("h4");
    const hoursHeadingText = document.createTextNode("ชั่วโมงเรียน");
    hoursHeading.appendChild(hoursHeadingText);
    hoursNode.appendChild(hoursHeading);

    const hoursParagraph = document.createElement("p");
    const hoursParagraphText = document.createTextNode(element.creditHours);
    hoursParagraph.appendChild(hoursParagraphText);
    hoursNode.appendChild(hoursParagraph);

    node.appendChild(hoursNode);

    // Create Seats Part <div>
    const seatsNode = document.createElement("div");

    const seatsHeading = document.createElement("h4");
    const seatsHeadingText = document.createTextNode("จำนวนที่นั่ง");
    seatsHeading.appendChild(seatsHeadingText);
    seatsNode.appendChild(seatsHeading);

    const seatsParagraph = document.createElement("p");
    const seatsParagraphText = document.createTextNode(
      `${element.totalSeats}/300`
    );
    seatsParagraph.appendChild(seatsParagraphText);
    seatsNode.appendChild(seatsParagraph);

    node.appendChild(seatsNode);

    document.querySelector(".grid-container").appendChild(node);
  });

  document.querySelector(".grid-container").innerHTML = appendData;
}

fetchData();
