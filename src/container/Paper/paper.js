import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const GridPaper = (props) => {
    const useStyles = makeStyles((theme) => ({
        root:{
          display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
        },
        paper:{ textOverflow: 'ellipsis',
              overflow: 'hidden',
              display: 'block',
              whiteSpace: 'nowrap',
               padding: theme.spacing(2),
                  margin:'auto',
               width: "100%",
        },
        image: {width: '100%',
          maxWidth: 100,
          height: 'auto'
        },
        img: { overflow: 'ellipsis',
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
          },
         modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        paperM: {marginTop: 100,
          marginBottom: 100,
          paddingTop: 50,
            display: 'block',
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width: '100%',
          maxWidth: 600,
          height: '100%',
          overflow:'scroll',

          },
        }));
      
        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
         setOpen(true);
       };

        const handleClose = () => {
          setOpen(false);
       };
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
              <Button onClick={handleOpen} variant="outlined" size="small" color="primary" >
                    Details
              </Button>
                <Modal
                      aria-labelledby="transition-modal-title"
                      aria-describedby="transition-modal-description"
                      className={classes.modal}
                      open={open}
                      onClose={handleClose}
                      closeAfterTransition
                      BackdropComponent={Backdrop}
                      BackdropProps={{
                        timeout: 500,
                      }}
                  >                 
                  <Fade in={open}>
                    <div className={classes.paperM}>
                    <h2 id="transition-modal-title"><center><h3><u><b>{props.title}</b></u></h3></center></h2>
                    <p id="transition-modal-description">{props.des}</p>
                    </div>
                  </Fade>
                </Modal>
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