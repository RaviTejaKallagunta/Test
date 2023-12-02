import { useState } from "react"
import { job } from "../types/jobType"

const NewJobPost=({jobData}:{jobData:(job:job)=>void})=>{

    const [jobPost,setJobPost]=useState<job>({
        id:'',
        job_description:'',
        skill_set:'',
        experience:0
    })

    const {id,job_description,skill_set,experience} = jobPost

    const onInputChange=(change: React.ChangeEvent<HTMLInputElement>)=>{
        setJobPost({...jobPost,[change.target.name]:change.target.value})
    }

    const onTextareaChange=(change: React.ChangeEvent<HTMLTextAreaElement>)=>{
        setJobPost({...jobPost,[change.target.name]:change.target.value})
    }

    const onSelectChange=(select: React.ChangeEvent<HTMLSelectElement>)=>{
        setJobPost({...jobPost,[select.target.name]:select.target.value})
    }
    const send=()=>{
        jobData(jobPost)

    }
    const [skillshow,setSkillShow]=useState('')
    const show=()=>{
        setSkillShow(`${skill_set}(${experience} years)`)
    }
    return(
        <>
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>Company :</td>
                    <td><input type="text" name="id" value={id} onChange={(change)=>onInputChange(change)} /></td>
                </tr>
                <tr>
                    <td>Job Description</td>
                    <td><textarea name="job_description" value={job_description} onChange={(change)=>onTextareaChange(change)}></textarea></td>
                </tr>
                <tr>
                    <td>
                        <select name="skill_set" value={skill_set} onChange={(select)=>onSelectChange(select)}>
                            <option value="">Skill Set</option>
                            <option value="java">Java</option>
                            <option value="c#">C#</option>
                            <option value="nodejs">NodeJS</option>
                            <option value="react">React</option>
                        </select>
                    </td>
                    <td><button onClick={show}>Add</button></td>
                </tr>
                <tr>
                    <td>
                        <select name="experience" value={experience} onChange={(select)=>onSelectChange(select)}>
                            <option value="">Experience</option>
                            <option value={0.1}>0.1</option>
                            <option value={0.2}>0.2</option>
                            <option value={0.3}>0.3</option>
                            <option value={0.4}>0.4</option>
                            <option value={0.5}>0.5</option>
                            <option value={0.6}>0.6</option>
                            <option value={0.7}>0.7</option>
                            <option value={0.8}>0.8</option>
                            <option value={0.9}>0.9</option>
                            <option value={0.10}>0.10</option>
                            <option value={0.11}>0.11</option>
                            <option value={1.0}>1.0</option>
                            <option value={1.1}>1.1</option>
                            <option value={1.2}>1.2</option>
                            <option value={1.3}>1.3</option>
                            <option value={1.4}>1.4</option>
                            <option value={1.5}>1.5</option>
                            <option value={1.6}>1.6</option>
                            <option value={1.7}>1.7</option>
                            <option value={1.8}>1.8</option>
                            <option value={1.9}>1.9</option>
                            <option value={1.10}>1.10</option>
                            <option value={1.11}>1.11</option>
                            <option value={2.0}>2.0</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>{skillshow}</td>
                    <td><button onClick={send}>Submit</button></td>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default NewJobPost