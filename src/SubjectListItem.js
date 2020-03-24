import React from 'react';

// this is a functional component
const SubjectListItem = props => {
  // note that with functional components, you don't have the render function

  // the JS code you placed inside the render function for class components should be
  // outside the return function in the case of functional components

  // the props passed to the component will be a paramenter of the functional component
  // and can just be referenced as props
  const subject = props.subject;
  return (
    <li>
      {subject.code} - {subject.description}
    </li>
  );
};

export default SubjectListItem;
