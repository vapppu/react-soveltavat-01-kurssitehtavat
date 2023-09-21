const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Content = (props) => {
  const courseData = props.courseData

  return courseData.map((course) => (
    <Part name={course.part} exercises={course.exercises} key={course.part} />
  ));
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const exercises = props.exercises;
  return (
    <p>Number of exercises {exercises[0] + exercises[1] + exercises[2]}</p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header text={course} />
      <Content
        courseData={[
          {
            part: part1,
            exercises: exercises1,
            key: part1,
          },
          {
            part: part2,
            exercises: exercises2,
            key: part2,

          },
          {
            part: part3,
            exercises: exercises3,
            key: part3,

          },
        ]}
      />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  );
};

export default App;
