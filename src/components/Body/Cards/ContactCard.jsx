import React, { useState } from 'react'

const ContactCard = ({handleFormSubmit}) => {
    const focusEl = (el) => {
        setFocus(el)
    }
    const [focus, setFocus] = useState('')
    const [fname, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [messageError, setMessageError] = useState(false)

    const validateName = (name) => {
        if (name.length < 3 ) {
            return false
        }
        return true
    }
    const validateEmail = (email) => {
        const value = email;
        const regex = /\S+@\S+\.\S+/;
        if(!regex.test(value)){
            return false;
          } else {
            return true;
          }
    }
    const validateMessage = (message) => {
        if (message.length < 1 ) {
            return false
        }
        return true
    }
    const handleForm = (data) => {
        const name = validateName(data.fname)
        const email = validateEmail(data.email)
        const message = validateMessage(data.message)
        if ( !name ) {
            setNameError(true)
            return
        }
        if ( !email ) {
            setEmailError(true)
            return
        }
        if( !message ) {
            setMessageError(true)
            return
        }
        if ( handleFormSubmit ) {
            handleFormSubmit(data)
        }
        clearForm()
    }
    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }
    const acceptMessage = (type) => {
        if ( type === 'name' ) {
            setNameError(false)
        }
        if ( type === 'email' ) {
            setEmailError(false)
        }
        if ( type === 'message' ) {
            setMessageError(false)
        }
    }
    const errorMessage = ( type ) => {
        let message = (
            <div className={'error-message'} onClick={() => acceptMessage(type)}>Please enter a valid {type}.</div>
        )
        return message
    }

    const contactInfo = (
        <div className={'contact-info-container'}>
            <div className="description">
                <span>
                    Contact information
                </span>
            </div>
            <div className="description-container">
                <div className="contact-info-item">
                    <div>
                        <span>Country:</span>
                        <span>Macedonia</span>
                    </div>
                    <div>
                        <span>City:</span>
                        <span>Skopje</span>
                    </div>
                </div>
                <div className="contact-info-item">
                    <div>
                        <span>Email:</span>
                        <span>
                            <a href="mailto: alenvatic7@gmail.com">alenvatic7@gmail.com</a>
                        </span>
                    </div>
                    <div>
                        <span>Mobile:</span>
                        <span>+389 78 314 238</span>
                    </div>
                </div>
            </div>
        </div>
    )
    const contactForm = (
        <div className="contact-form">
            <div className="description">
                <span>
                    Have an idea ? Let's talk!
                </span>
            </div>
            <div className="contact-form-container">
                <div className={`name-input ${focus}`}>
                    <div className="icon-container">
                        {<i className="fas fa-user"></i>}
                    </div>
                        {nameError ? errorMessage('name') : null}
                        <input onFocus={() => {focusEl('name')}} onChange={(e) => setName(e.target.value)} className={'input'} type="text" placeholder={'Name'} value={fname} />
                </div>
                <div className={`email-input ${focus}`}>
                    <div className="icon-container">
                        {<i className="fas fa-at"></i>}
                    </div>
                        {emailError ? errorMessage('email') : null}
                        <input onFocus={() => {focusEl('email')}} onChange={(e) => setEmail(e.target.value)} className={'input'} type="text" placeholder={'Email'} value={email} />
                </div>
                <div className={`message-input ${focus}`}>
                    <div className="icon-container">
                        {<i className="fas fa-envelope-open-text"></i>}
                    </div>
                        {messageError ? errorMessage('message') : null}
                        <textarea onFocus={() => {focusEl('textarea')}} onChange={(e) => setMessage(e.target.value)} className={'input'} type="text" placeholder={'Message'} value={message} />
                </div>
                <div className="send-message" onClick={() => handleForm({fname, email, message})} >
                    <span>send message</span>
                </div>
            </div>
        </div>
    )

    const contactPage = (
        <div className='contact-container'>
            {contactInfo}
            {contactForm}
        </div>
    )
    return contactPage
}

export default ContactCard