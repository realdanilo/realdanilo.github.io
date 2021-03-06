import React from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import '../css/Contact.css'
export default function Contact() {
    return (
        <div className="contact-container">
            <h3>You can find me at:</h3>
            <a rel="noopener noreferrer" href="https://github.com/realdanilo" target="_blank"><AiFillLinkedin /></a>
            <a rel="noopener noreferrer" href="https://github.com/realdanilo" target="_blank"><AiFillGithub /></a>
        </div>
    )
}
