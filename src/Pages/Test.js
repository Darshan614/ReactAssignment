import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const testQuestions = [
  { React: [{ Q1: 'A1' }, { Q2: 'A2' }] },
  { Angular: [{ Q1: 'A1' }, { Q2: 'A2' }] },
];

function Test() {
  const [time, settime] = useState(15);
  const [showtimer,setshowtimer] = useState(true);
  useEffect(() => {
    const id = setInterval(() => {
      settime((prev) => prev - 1);
      if(time<0){
        setshowtimer(false);
      };
      
    }, 1000);
    return () => {
      clearInterval(id)
    }
  }, []);

  let params = useParams();
  let course = params.coursetitle;
  let id = params.id;
  let questionSet = testQuestions.filter((courseSet) => {
    // console.log(courseSet, Object.keys(courseSet)[0]);
    if (Object.keys(courseSet)[0] == course) {
      return courseSet;
    }
  });

  // questionSet = Object.values(questionSet[0])[0];
  // console.log(questionSet[0]);
  // console.log(Object.values(questionSet[0])[0]);
  const qalist = Object.values(questionSet[0])[0].map((qa) => {
    return (
      <div key={Object.keys(qa)[0]}>
        <div>{Object.keys(qa)[0]}</div>
        <div>{Object.values(qa)[0]}</div>
      </div>
    );
  });

  return (
    <div>
      <div>{course} Test</div>
      <div>TestID:{id}</div>
      {showtimer && <div>{time}</div>}
      <div>{qalist}</div>
    </div>
  );
}

export default Test;
