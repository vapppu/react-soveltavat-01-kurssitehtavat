const Header = (props) => {
  return <h1>{props.text}</h1>;
};

const Content = (props) => {
  const courseData = props.parts

  return courseData.map((course) => (
    <Part name={course.name} exercises={course.exercises} key={course.name} />
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
  const parts = props.parts;
  const sum = parts.reduce((total, part) => total + part.exercises, 0)
  console.log(sum)
  return (
    <p>Number of exercises {sum}</p>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header text={course} />
      <Content
        parts={parts}
      />
      <Total parts={parts} />
    </div>
  );
};

export default App;
