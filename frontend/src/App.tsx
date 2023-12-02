import { getAllJobs, postJob } from './api-calls/api-calls'
import JobSearch from './components/JobSearch'
import NewJobPost from './components/NewJobPost'
import { job } from './types/jobType'
import { useState , useEffect } from "react"

function App() {
  const jobData=async (job:job)=>{
    await postJob(job)
  }

  const [jobs,setJobs]=useState<job[]>([])

   const allJobs=async()=>{
    const result:job[]=await getAllJobs()
    setJobs(result)
  }
  useEffect(()=>{
    allJobs()
  },[])

  return (
    <>
      <NewJobPost jobData={jobData} />
      <br />
      <br />
      <br />
      <JobSearch  jobs={jobs} />
    </>
  )
}

export default App
