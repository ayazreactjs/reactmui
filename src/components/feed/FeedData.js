import { Favorite, FavoriteBorder, Share, MoreVert } from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import Datas from './data.json';

const FeedData = () => {
  return Datas.map((data) => {
    return (
      <Card key={data.id}>
        <CardHeader
          avatar={
            <Avatar sx={{ border: '1px dotted blue' }}>
              <img src={data.path2} alt="none" width="100%" />
            </Avatar>
          }
          title={data.title}
          subheader={data.sub}
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
        />
        <CardMedia component="img" alt={data.title} image={data.path} />
        <CardContent>
          <Typography variant="body2" textAlign="justify">
            {data.typo}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <IconButton>
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    );
  });
};

export default FeedData;
