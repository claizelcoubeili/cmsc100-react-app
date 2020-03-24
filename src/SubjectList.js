import React from 'react';
import SubjectListItem from './SubjectListItem';

// still using class components
class SubjectList extends React.Component {
  render() {
    // you can use JS syntax inside the render function, mostly the variable
    // declarations and other component logic

    // every class component
    const subjects = this.props.info;
    const title = this.props.title;

    return (
      // JS inside the return function should be enclosed inside { }
      // better to put JS here only if it is a .map() function or JS ready for display
      <div>
        <h1 className="title">{title}</h1>
        <ol>
          {/* the .map() function takes a callback function that executes for each
              item on the list, then returns a list of values (the values for each
              item on the list). The following code generates a <li> element for each
              item in the subjects list. These <li> elements are inserted inside the 
              parent element, <ol> */}
          {subjects.map(subject => {
            {
              /* not adding a 'key' attribute will show an error because React JS can't
                distinguish between dynamically generated elements like these. The
                implications of this is that these components might not be re-rendered
                correctly later on by React JS if they ever need re-rendering. */
            }
            {
              /* The key must be a unique identifier. Normally, you can use database IDs,
                or you can also use the array index. */
            }
            {
              /* ReactJS errors and warnings typically appear in the browser console,
                not in the terminal where you ran npm start beacuse this is a front-end
                library and front end errors will appear in your browser. Compilation errors
                such as syntax errors will appear in the terminal. */
            }
            return <SubjectListItem key={subject.id} subject={subject} />;
          })}
        </ol>
      </div>
    );
  }
}

export default SubjectList;
