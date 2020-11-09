import React, {useState, uses} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { colors } from '@material-ui/core'


const InputBox = ({onSearch}) => {
    const [search, setSearch] = useState()
    const onInputChange = value => {
        setSearch(value)
        onSearch(value)
    }
    const useStyles = makeStyles({
        textField: {
            width: '90%',
            marginLeft: 'auto',
            paddingRight: 10,           
            paddingBottom: 0,
            marginTop: 0,
            fontWeight: 500
        },
        input: {
            color: 'white'
        }
    });
    const classes = useStyles()
      return  (<div className={classes.textField}>
          <TextField  id="filled-secondary"
        label="Search"
        variant="filled"
        color="secondary"
          multiline   placeholder="Search"  
      value={search}
      onChange={e => onInputChange(e.target.value)}/>
  </div>
)
}

export default InputBox