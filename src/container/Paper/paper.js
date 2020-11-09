import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const GridPaper = (props) => {
    const useStyles = makeStyles((theme) => ({
        root:{
            flexgrow:1,
            marginRight:20,
            bottom:100
        },
        paper:{
            padding: theme.spacing(2),
            margin: 20,
            width: 1000,
        }, image: {
            width: 128,
            height: 128,
          },
          img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
          },
        }));
        const classes = useStyles();

    return(<div className={classes.root}>
        <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://i.gifer.com/wfV.gif" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                <b>{props.title}</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {props.desc}
                </Typography>
                
              </Grid>
              <Grid item>
                <Typography variant="body2" color="primary" style={{ cursor: 'pointer' }}>
                 Details
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
    <Typography variant="subtitle1">{props.cat}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </div>


    )

    
}
export default GridPaper