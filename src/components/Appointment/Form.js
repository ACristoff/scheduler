import React, { useState }from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';


function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);

  function reset() {
    setStudent("");
    setInterviewer("");
  }

  function cancel() {
    reset();
    props.onCancel();
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            /*
              This must be a controlled component
              your code goes here
            */
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <InterviewerList 
          interviewers={props.interviewers}
          value={interviewer}
          onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={(event) => {props.onSave(student, interviewer)}}>Save</Button>
        </section>
      </section>
    </main>
  )
}


export default Form;


// As part of our Edit story, the Form component should take the following props:

//     student:String
//     interviewer:Number
//     interviewers:Array
//     onSave:Function
//     onCancel:Function

// As part of our Create story, the Form component should take the following props:

//     interviewers:Array
//     onSave:Function
//     onCancel:Function

// Add the stories for Create and Edit and chain them to our previous Appointment stories.

// In the Edit story, for the student and interviewer values, you may hard-code your own name and put a number between 0 - 4 for the ID. This is mock data that simulates editing a form that already contains information.





