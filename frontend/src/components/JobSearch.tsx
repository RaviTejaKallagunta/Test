import { useState } from "react"
import { job, search } from "../types/jobType"

const JobSearch=({jobs}:{jobs:job[]})=>{
    const [search,setSearch]=useState<search>({
        skill_set:'',
        experience:0
    })
    const {skill_set,experience}=search

    const onSelectChange=(select: React.ChangeEvent<HTMLSelectElement>)=>{
        setSearch({...search,[select.target.name]:select.target.value})
    }

    const find=()=>{
        
    }
    return(
        <>
        <table>
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
                <td><button onClick={find}>Search</button></td>
            </tr>
            <tr></tr>
            <tr>
                <th>Company</th>
                <th>Skill</th>
            </tr>
            {
                jobs.map((element,index)=>{
                    return(
                        <tr key={index}>
                            <td>{element.id}</td>
                            <td>{element.skill_set}</td>
                            <td><button>Apply</button></td>
                        </tr>
                    )
                })
            }
        </table>
        </>
    )
}
export default JobSearch