import React, {useState, useEffect} from 'react';
import * as yup from 'yup';


const issueSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
})


const IssueForm = props => {
    const [issue, setIssue] = useState({
       title: '',
       description: ''
    })

    const [errors, setErrors] = useState({
        title: '',
        description: ''
    })

    const [buttonOff, setButtonOff] = useState(true)

    useEffect(() => {
        issueSchema.isValid(issue).then(valid => {
            setButtonOff(!valid)
        })
    },[issue])

    const validateIssue = e => {
        yup.reach(issueSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
            setErrors({
                ...errors, [e.target.name] : ''
            })
        })

        .catch(er => {
            setErrors({
                ...errors, [e.target.name] : er.errors[0]
            })
        })

    }

    const submitIssue = e => {
        e.preventDefault();
        props.addNewIssue(issue)
        setIssue({title:'', description:''})
    }

    const issueChange = e => {
        e.persist()
        const newIssueDate = {
            ...issue, [e.target.name] : e.target.type === e.target.value
        }
        validateIssue(e)
        setIssue(issueChange)
    }

    return (
       <form onSubmit={submitIssue}>
           <label htmlFor='title'>Title
           <input 
           id='title' 
           name='title' 
           type='text' 
           onChange={issueChange} 
           value={issue.title} 
           />
           {errors.title.length > 0 ? <p className='error'>{errors.name}</p> : null }
           </label>
           <label htmlFor='description'>Description
           <textarea id ='description' 
           name='description' 
           onChange={issueChange} 
           value={issue.description} 
           />
           {errors.description.length > 0 ? <p className='error'>{errors.description}</p> : null}

           </label>
           <button type='submit' disabled={buttonOff}>Submit</button>
       </form> 
    )
}

export default IssueForm;