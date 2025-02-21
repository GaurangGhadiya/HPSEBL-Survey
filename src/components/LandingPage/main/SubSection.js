import React from 'react';
import { Grid, Typography, Button, Box, createTheme, ThemeProvider } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { getImagePath } from '../../../utils/CustomImagePath';

const timeline = {
    backgroundColor: "#2D6095",
    color: "white",
    fontSize: "40px",
    height: "100px",
    width: "100px",
    display: "grid",
    placeItems: "center",
}

const theme = createTheme({
    components: {
      MuiTimelineConnector: {
        styleOverrides: {
          root: {
            backgroundColor: '#074465', // Change the background color to red
          },
        },
      },
    },
  });

const SubSection = () => {

    return (

        <Box style={{
            backgroundColor: '#e7f1f6',
            paddingLeft: "2.5rem",
            paddingTop: 100
        }}>

            <Typography variant="h2" fontWeight={600} style={{
                fontSize: '1rem',
                color: "#074465",

            }}>
                HOW IT WORKS
            </Typography>

            <Typography variant="h2" fontWeight={600} style={{
                fontSize: '2rem',
                color: "#074465",

            }}>
                Conducting a survey with ease in three simple steps.
            </Typography>
            <ThemeProvider theme={theme}>
            <Timeline
            style={{marginTop : "70px"}}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot style={timeline}>01</TimelineDot>
          <TimelineConnector style={{backgroundColor: "#2D6095"}}/>
        </TimelineSeparator>
        <TimelineContent>
        <Grid container spacing={5} style={{
                    display: 'flex',
                    // alignItems: 'center',
                }}>

                    <Grid item xs={12} md={6} >


                        <Typography variant="h4" fontWeight={700} style={{
                            paddingBottom: '15px',
                            marginTop : 20
                        }}>
                            Login into the Application
                        </Typography>

                        <Typography
                            fontWeight={500}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                paddingBottom: '30px',
                            }}>
                            Easily log into the application using the credentials provided by the department, ensuring secure access to your authorized account. The Application user-friendly interface simplifies the login process for your convenience. Once logged in, you can explore the applications features and resources, making it a seamless experience.
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} container justifyContent="center" style={{

                    }}>
                        <img src={getImagePath('/images/step111.png')} alt="My Team" style={{
                            height: 350,
                            marginBottom : 50
                        }} />
                        <img src={getImagePath('/images/step12.png')} alt="My Team" style={{
                            height: 350,
                            marginBottom : 50,
                            marginLeft : 20
                        }} />
                    </Grid>


                </Grid>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot  style={timeline}>02</TimelineDot>
        <TimelineConnector style={{backgroundColor: "#2D6095"}}/>
        </TimelineSeparator>
        <TimelineContent>  <Grid container spacing={5} style={{
                    display: 'flex',
                    // alignItems: 'center',
                }}>

                    <Grid item xs={12} md={6}>


                        <Typography variant="h4" fontWeight={700} style={{
                            paddingBottom: '15px',
                            marginTop : 20
                        }}>
Conducting Survey
                        </Typography>

                        <Typography
                            fontWeight={500}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                paddingBottom: '30px',
                            }}>
                                    The Electricity Board Survey Application offers a streamlined data collection process for both domestic consumers and hotels. Users can verify existing registrations in the Electricity Board Database or conduct surveys for unregistered consumers. The application also facilitates the easy addition of new entries, ensuring up-to-date and accurate electricity consumption data. With these features, the application enhances efficiency and supports effective electricity management and planning.

                                    </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} container justifyContent="center" style={{

                    }}>
                        <img src={getImagePath('/images/step2.png')} alt="My Team" style={{
                            height: 350,
                            marginBottom : 50

                        }} />
                    </Grid>


                </Grid></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
        <TimelineDot  style={timeline}>03</TimelineDot>
        {/* <TimelineConnector />  */}
        </TimelineSeparator>
        <TimelineContent>  <Grid container spacing={5} style={{
                    display: 'flex',
                    // alignItems: 'center',
                }}>

                    <Grid item xs={12} md={6}>


                        <Typography variant="h4" fontWeight={700} style={{
                            paddingBottom: '15px',
                            marginTop : 20
                        }}>
Data to be Captured
                        </Typography>

                        <Typography
                            fontWeight={500}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                paddingBottom: '30px',
                            }}>
                                    The State Electricity Survey Application captures essential data elements for accurate and reliable information. This includes building premises details, meter information, and searches for ration cards and Him Parivar records.

                                    Aadhaar authentication ensures consumer identity verification, while hotel details help manage electricity usage in commercial establishments. Together, these components create a robust database that supports informed decision-making in electricity management and service delivery.
                                </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} container justifyContent="center" style={{

                    }}>
                        <img src={getImagePath('/images/step31.png')} alt="My Team" style={{
                            height: 350,
                            marginBottom : 50

                        }} />
                        <img src={getImagePath('/images/step32.png')} alt="My Team" style={{
                            height: 350,
                                    marginBottom: 50,
                            marginLeft : 20

                        }} />
                    </Grid>


                </Grid></TimelineContent>
      </TimelineItem>
    </Timeline>

    </ThemeProvider>









        </Box>
    );
};

export default SubSection;