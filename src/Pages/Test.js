import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const testQuestions = [
  { React: [{ Q1: 'A1' }, { Q2: 'A2' }] },
  { Angular: [{ Q1: 'A1' }] },
];

function Test() {
  var [time, settime] = useState(15);
  useEffect(() => {
    setInterval(() => {
      settime((prevState) => prevState - 1);
      console.log(time);
    }, 10000);
  }, []);

  let params = useParams();
  let course = params.coursetitle;
  let id = params.id;
  let questionSet = testQuestions.map((courseSet) => {
    // console.log(courseSet);
    if (Object.keys(courseSet)[0] == course) {
      return courseSet;
    }
  });

  questionSet = Object.values(questionSet[0])[0];
  // console.log(questionSet);
  const qalist = questionSet.map((qa) => {
    return (
      <div>
        <div>{Object.keys(qa)[0]}</div>
        <div>{Object.values(qa)[0]}</div>
      </div>
    );
  });

  return (
    <div>
      <div>{course} Test</div>
      <div>TestID:{id}</div>
      <div>{qalist}</div>
    </div>
  );
}

export default Test;
