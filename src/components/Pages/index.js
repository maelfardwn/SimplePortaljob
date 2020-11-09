import React, { useEffect, useMemo, useState} from 'react';
import Container from '@material-ui/core/Container';
import GridPaper from '../../container/Paper/paper';
import InputBox from '../Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useFullPageLoader from '../../hooks/useFullPageLoader'

const Home = () =>{
    
    const [loader, showLoader, hideLoader] = useFullPageLoader()
    const [data, setData] = useState([{}])
    const [comments, setComments] = useState([])
    const [search, setSearch] = useState("")
    const [state, setState] =useState({
        checkedB: false,
        checkedF: false,
      });
    
   

    useEffect(()=> {
        const getData = () => {
            showLoader();
            fetch('https://remotive.io/api/remote-jobs?limit=20')
            .then(res => res.json())
            .then(json => {
                hideLoader()
                setData(json.jobs)
                setComments(json)
                console.log(json.jobs)
            })
        };
        getData()
    }, [])
    const showedData = useMemo(()=> {
        let computedData = data;
        
        if(search){
            computedData = computedData.filter(
                (comment) =>
                comment.title.toLowerCase().includes(search.toLowerCase()) ||
                comment.category.toLowerCase().includes(search.toLowerCase())
            )
            }
        if(state.checkedB){
            computedData = computedData.filter(
                (comment) =>
                comment.job_type.toLowerCase().includes('full_time')
            )
        }
        if(state.checkedF){
            computedData = computedData.filter(
                (comment) =>
                comment.job_type.toLowerCase().includes('part_time')
            )
        }
        

        return computedData
    },[data, search, state.checkedB, state.checkedF])

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
    return(
        <>
        <div className='App' >
            <div className="header">
            <h1>Maelfa's Portal</h1>
            <h2> For Job Seekers</h2>
            </div>
            <div className='side'>
            <ul>
                    <li>
            <InputBox onSearch={value => 
                        setSearch(value)}/>  </li>
                    <li><b>JOB TYPE</b></li>
                    <li> <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                     />
                           }
                    label="Full Time"
                          />
                    </li>
                    <li> <FormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedF}
                        onChange={handleChange}
                        name="checkedF"
                        color="primary"
                     />
                           }
                    label="Part Time"
                          />
                    </li>
            </ul>
           </div>
           
        <div className="container">
       
    {loader}
                    {showedData.map( (data,index)=> (
                        <GridPaper key={index}
                        title={data.title}
                        desc={data.job_type +', '+ data.publication_date}
                        cat={data.category}
                        />
                    ))}
        
         </div> 
         <div className="footer">
         <h2> <b>Created by Ridwan Maelfa</b></h2>
         </div>
    </div>
    </>
    )

}

export default Home
