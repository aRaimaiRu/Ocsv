import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function OutlinedCard(props) {
  return (
    <Card variant="outlined" style={{ marginTop: 10 }}>
      <CardContent>
        <Typography variant="h5">{props.grade}</Typography>
        <Typography variant="h5">{props.module}</Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button size="small" href={"/CreateCoursePage/" + props.id+"/edit"}>
          Edit
        </Button>
        <Button size="small" >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
