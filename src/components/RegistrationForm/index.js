// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstName: false,
    isLastName: false,
    isSuccess: false,
  }

  checkFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstName: true})
    } else {
      this.setState({isFirstName: false})
    }
  }

  checkLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastName: true})
    } else {
      this.setState({isLastName: false})
    }
  }

  updateFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  updateLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onRegisterForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const isFormFill = firstName !== '' && lastName !== ''
    if (isFormFill === false) {
      if (isFormFill) {
        this.setState({isFirstName: true, isLastName: true})
      } else if (lastName === '') {
        this.setState({isLastName: true})
      } else {
        this.setState({isFirstName: true})
      }
    } else {
      this.setState({isSuccess: true})
    }
  }

  renderForm = () => {
    const {firstName, lastName, isFirstName, isLastName} = this.state
    return (
      <form className="formCont" onSubmit={this.onRegisterForm}>
        <label htmlFor="first name">FIRST NAME</label>
        <input
          value={firstName}
          type="text"
          placeholder="First name"
          id="first name"
          onChange={this.updateFirstName}
          onBlur={this.checkFirstName}
        />
        {isFirstName && <p>*Required</p>}
        <label htmlFor="last name">LAST NAME</label>
        <input
          value={lastName}
          type="text"
          placeholder="Last name"
          id="last name"
          onChange={this.updateLastName}
          onBlur={this.checkLastName}
        />
        {isLastName && <p>*Required</p>}
        <div className="btnCont">
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }

  anotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      isFirstName: false,
      isLastName: false,
      isSuccess: false,
    })
  }

  renderSubmission = () => (
    <div className="formCont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success-icon"
        className="successIcon"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.anotherResponse}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isSuccess} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Registration</h1>
        {isSuccess ? this.renderSubmission() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
