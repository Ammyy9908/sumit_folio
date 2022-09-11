import React from 'react'
import styles from "./index.module.css"

function SmallField({type,name,value,setValue,placeholder}){
        return <div className="small-field bg-gray-100 dark:bg-gray-300 w-full rounded-md dark:rounded-none" style={{
            height:70
        }}>
            <input type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)} className="rounded-md dark:rounded-none h-full w-full bg-transparent px-3"/>
        </div>
}

function LargeField({name,value,setValue,placeholder}){
    return <div className="small-field bg-gray-100 dark:bg-gray-300 w-full rounded-md dark:rounded-none" style={{
        height:215
    }}>
        <textarea  name={name} id={name} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)} className="h-full w-full bg-transparent px-3 py-3 resize-none rounded-md dark:rounded-none"></textarea>
    </div>
}

function Footer() {
    const [name,setName] = React.useState('')
    const [email,setEmail] = React.useState('')
    const [message,setMessage] = React.useState('')
  return (
    <footer className={`${styles.footer} py-12 grid grid-cols-1 lg:grid-cols-2 gap-32`}>
        <div className="about-footer">
            <h3 className='text-3xl mb-8'>Lets work together</h3>
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
        </div>
        <form className="contact-footer flex flex-col gap-3 items-start">
            <SmallField value={name} setValue={setName} type="text" placeholder="Name" name="Name"/>
            <SmallField value={email} setValue={setEmail} type="email" placeholder="Email" name="Email"/>
            <LargeField value={message} setValue={setMessage}  placeholder="Message" name="message"/>
            <input type="submit" value="Submit" className='px-3 py-2 bg-black/80 dark:bg-white dark:text-black text-white w-32 h-12'/>
        </form>
    </footer>
  )
}

export default Footer