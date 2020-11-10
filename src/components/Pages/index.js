import React, { useEffect, useMemo, useState} from 'react';
import Container from '@material-ui/core/Container';
import GridPaper from '../../container/Paper/paper';
import InputBox from '../Search';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useFullPageLoader from '../../hooks/useFullPageLoader'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import parse from 'html-react-parser';

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
      
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      
      backgroundColor: 'lightblue',
      padding: theme.spacing(2),
      margin: 0,
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
  }));
  const classes = useStyles();
  
  const parse = require('html-react-parser');
    return(
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <h1>Maelfa's Portal</h1>
        <h2> For Job Seekers</h2>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Grid container
  direction="column"
  justify="flex-start"alignItems="center"


>
            <Grid item xs={18} sm={6}>
            <InputBox onSearch={value => 
                        setSearch(value)}/> 
            </Grid>
            <Grid item xs={18} sm={6}>
                    <b>JOB TYPE</b><br/>
                    <FormControlLabel
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
            </Grid>
            <Grid  item xs={18} sm={6}>
                    <FormControlLabel
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
            </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>

                    {loader}
                    {showedData.map( (data,index)=> (
                        <GridPaper key={index}
                        title={data.title}
                        desc={data.job_type +', '+ data.publication_date}
                        cat={data.category}
                        des={parse(`${data.description}`)}
                        />
                    ))}
        
          </Paper>
        </Grid>
            </Grid>
         </div>
    
  
    )

}

export default Home
