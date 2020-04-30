import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import styled from 'styled-components';
import { axiosWithAuth } from "../utils/axiosWithAuth";


const NewButton = styled.button`
  cursor: pointer;
  background-color: #8A2BE2;
  width: 180px;
  color: #fff;
  padding: 8px 11px;
  fontsize: 1.4rem;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;  
`
const issueSchema = yup.object().shape({
    short_description: yup.string().required('Title is required'),
    description: yup.string().required('Description is required'),
    zip_code: yup.string().required('ZipCode is required')
})


const IssueForm = props => {
    const [issue, setIssue] = useState({
        short_description: '',
        description: '',
        zip_code: '',
        user_id: parseInt(localStorage.getItem("userID")),
    })

    const [errors, setErrors] = useState({
        short_description: '',
        description: '',
        zip_code: ''
    })

    const [buttonOff, setButtonOff] = useState(true)

    useEffect(() => {
        issueSchema.isValid(issue).then(valid => {
            setButtonOff(!valid)
        })
    }, [issue])



    const [postData, setPostData] = useState([]);

    const validateIssue = e => {
        yup.reach(issueSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors, [e.target.name]: ''
                })
            })

            .catch(er => {
                setErrors({
                    ...errors, [e.target.name]: er.errors[0]
                })
            })

    }

    const submitIssue = e => {
        e.preventDefault();
        console.log({issue})
        // props.addNewIssue(issue)
        // setIssue({short_description:'', description:'', zip_code:''})
        axiosWithAuth()
            .post('/issues', issue)
            .then(res => {
                setPostData([...postData, res.postData]);
                console.log('success', res)

                setIssue({
                    short_description: '',
                    description: '',
                    zip_code: '',
                    user_id: parseInt(localStorage.getItem("userID")),
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    const issueChange = e => {
        e.persist();
        const newIssueDate = {
            ...issue, [e.target.name]: e.target.value
        }
        validateIssue(e)
        setIssue({
            ...issue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={submitIssue}>
            <label htmlFor='short_description'>
                <input
                    id='short_description'
                    name='short_description'
                    type='text'
                    onChange={issueChange}
                    value={issue.short_description}
                    placeholder='Title'
                />
                {errors.short_description.length > 0 ? <p className='error'>{errors.short_description}</p> : null}
            </label>
            <label htmlFor='description'>
                <textarea id='description'
                    name='description'
                    onChange={issueChange}
                    value={issue.description}
                    placeholder='Description'
                />
                {errors.description.length > 0 ? <p className='error'>{errors.description}</p> : null}
            </label>
            <label htmlFor='zipcode'>
                <input
                    id='zipcode'
                    name='zip_code'
                    type='number'
                    onChange={issueChange}
                    value={issue.zip_code}
                    placeholder='ZipCode'
                />
                {errors.zip_code.length > 0 ? <p className='error'>{errors.zip_code}</p> : null}
            </label>
            <NewButton type='submit' disabled={buttonOff}>Submit</NewButton>
        </form>
    )
}

export default IssueForm;