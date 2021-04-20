import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
export default function OutlinedCard({ obj, token }) {
  return (
    <Card variant="outlined" style={{ marginTop: 10 }}>
      <CardContent>
        <Typography variant="h5">{obj.grade}</Typography>
        <Typography variant="h5">{obj.module}</Typography>
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
        <Link
          to={{
            pathname: "/CreateCoursePage/edit",
            state: { ...obj, token },
          }}
        >
          <Button size="small">Edit</Button>
        </Link>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}
