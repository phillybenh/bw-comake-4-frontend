import React, {useState, useEffect} from 'react';
import * as yup from 'yup';
import styled from 'styled-components';


const NewButton = styled.button `
  cursor: pointer;
  background-color: #8A2BE2;
  width: 180px;
  color: #fff;
  padding: 8px 11px;
  fontsize: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  
`


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
        e.persist();
        const newIssueDate = {
            ...issue, [e.target.name] : e.target.value
        }
        validateIssue(e)
        setIssue(newIssueDate)
    }

    return (
       <form onSubmit={submitIssue}>
           <label htmlFor='title'>
           <input 
           id='title' 
           name='title' 
           type='text' 
           onChange={issueChange} 
           value={issue.title} 
           placeholder='Title'
           />
           {errors.title.length > 0 ? <p className='error'>{errors.title}</p> : null }
           </label>
           <label htmlFor='description'>
           <textarea id ='description' 
           name='description' 
           onChange={issueChange} 
           value={issue.description}
           placeholder='Description' 
           />
           {errors.description.length > 0 ? <p className='error'>{errors.description}</p> : null}

           </label>
           <NewButton type='submit' disabled={buttonOff}>Submit</NewButton>
       </form> 
    )
}

export default IssueForm;