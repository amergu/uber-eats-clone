import { Grid, Paper, Typography, Link} from "@mui/material";



function UserOptions(){
    return (
        <Grid container p="120px 40px" spacing={2}>

            <Grid item xs={4}>
                <PaperCard imageLink="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/dd109bb1f7572eed.png" textContent="Feed your employees" linkContent="Create business account"/>
            </Grid>
            <Grid item xs={4}>
                <PaperCard imageLink="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/8148ef38ec4096b7.png" textContent="Your restaurant, delivered" linkContent="Add your restaurant"/>
            </Grid>
            <Grid item xs={4}>
                <PaperCard imageLink="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/7a9d4feba62d2c0b.png" textContent="Deliver with Uber Eats" linkContent="Sign up to deliver"/>
            </Grid>
        </Grid>
    )
}

function PaperCard(props){
    return (
        <Paper elevation={0}>
            <img width={"100%"} src={props.imageLink} alt=""/>
            <Typography variant="h5" pt={2} pb={2}>{props.textContent}</Typography>
            <Link href="/" variant="body2" sx={{marginBottom:"50px", color:"black"}}>{props.linkContent}</Link>
        </Paper>
    )
}

export default UserOptions;