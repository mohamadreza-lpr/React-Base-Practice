import React from "react";


function CourseCard(props) {
    console.log(props);
    
    return (
        <div>
            {props.course.title}
        </div>
    )
}
export default CourseCard