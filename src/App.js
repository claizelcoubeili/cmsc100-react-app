// import the React package
import React from 'react';

// import the SubjectList component from another file
import SubjectList from './SubjectList';

// import the image and reference it as 'cats'
import cats from './assets/cat.jpeg';

// using the class component approach
// We created a component which is a class, and it inherits the functionalities
// from a React JS class named Component
class App extends React.Component {
  render() {
    return (
      // JSX expressions must only return one parent element
      // returning two top-level nodes will return an error
      <div>
        {/* this is a comment */}
        {/* We pass data to the component by adding an attribute inside the component, called props.
              You can name the attribute with anything you want, but preferably something
              that is self-documenting. Here, we pass the array of objects named CMSCSubjects.
              Since we are inserting JS syntax into HTML ones, we need to put all the JS elements
              inside React JS's interpolation symbols: { }   */}
        {/* Even if you are just passing a string, make sure to put it inside the
              interpolation symbol */}
        <SubjectList info={CMSCSubjects} title={'CMSC Subjects'} />
        <SubjectList info={CHEMSubjects} title={'CHEM Subjects'} />

        {/* when adding images, import the image first to generate the string path
            of the image. Then reference the variable name inside the interpolation
            symbol for the src attribute. Putting the path as a string only will not
            work since we created the project using create-react-app. Using create-react-app
            to create your project will make your public folder accessible. So if you want
            to use relative path directly, the you should add an images folder in the public
            directory and reference it. However, since we established that we are not going
            to edit anything inside the public folder, importing the image is the way to go. */}
        <img src={cats} alt="" />
      </div>
    );
  }
}

// sample data
const CMSCSubjects = [
  { code: 'CMSC100', description: 'Web programming', id: 1 },
  { code: 'CMSC150', description: 'Scientific Computing', id: 2 },
  { code: 'CMSC22', description: 'OOP', id: 3 }
];

const CHEMSubjects = [
  { code: 'CHEM100', description: 'Intro to Organic Chemistry', id: 1 },
  { code: 'CHEM10', description: 'Chemical Kinetics', id: 2 },
  { code: 'CHEM11', description: 'Intro to BioChem', id: 3 }
];

export default App;
