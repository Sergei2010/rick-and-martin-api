import React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from './Character.module.scss';

interface CharacterProps {
  id: number;
  name: string;
  status: string;
  image: string;
}

export const Character: React.FC<CharacterProps> = ({ id, name, status, image }) => {
  return (
    <div className={styles.root}>
      <Card>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.length > 20 ? name.substring(0, 20) + '...' : name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Status: {status}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`character/${id}`} className={styles.linkMore}>
            <Button variant="outlined" size="small">
              More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
