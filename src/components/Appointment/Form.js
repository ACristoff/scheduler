import React, { useState }from 'react';
import Button from 'components/Button';
import InterviewerList from 'components/InterviewerList';

//the form card for appointments
function Form(props) {

  //relevant states
  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //resets all states to blank
  function reset() {
    setStudent("");
    setInterviewer("");
    setError("")
  }

  //calls reset then runs the prop callback
  function cancel() {
    reset();
    props.onCancel();
  }
  //validates for student name and interviewer then runs onSave
  function validate(name, selectedInterviewer) {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (!selectedInterviewer) {
      setError("You must select an interviewer")
      return;
    }  
    setError("")
    console.log(name, selectedInterviewer)
    props.onSave(name, interviewer);
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
            onChange={(event) => setStudent(event.target.value)}
            data-testid="student-name-input"
          />
        <section className="appointment__validation">{error}</section>
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
          <Button confirm onClick={(event) => {validate(student, interviewer)}}>Save</Button>
        </section>
      </section>
    </main>
  )
}

export default Form;