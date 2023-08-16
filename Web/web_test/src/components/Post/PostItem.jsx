import React from "react";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./PostItem.css";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const PostItem = (props) => {
  return (
    <article className="post">
      <header className="post__header">
        <h1 className="project__meta">{props.title}</h1>
      </header>

      <div className="post__content">{props.body}</div>
      
    </article>
  );
};

export default PostItem;