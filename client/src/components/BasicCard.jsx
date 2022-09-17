import * as React from 'react';
import axios from "axios";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';

export default function BasicCard({ id, title, authors, recent_editors }) {

  const getDocData = () => {
    axios.get({
      method: 'get',
      url: ''
    })
      .then((res) => {
        setData(res.data);
      });
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardActionArea href="https://google.com">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Last edited by... {recent_editors}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {authors}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
