import React from 'react';
import { useGetAllCharactersQuery } from '../store/apis/characters';

import { CircularProgress, Typography } from '@mui/material';
import { Character } from '../components/Character';

export const HomePage: React.FC = () => {
  const { data, error, isLoading } = useGetAllCharactersQuery();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography variant="h4">Error when fetching characters</Typography>;
  }

  if (!data) {
    return <Typography variant="h4">No have any characters</Typography>;
  }

  return (
    <div className="characters-grid">
      {data.map((obj) => (
        <Character key={obj.id} id={obj.id} name={obj.name} status={obj.status} image={obj.image} />
      ))}
    </div>
  );
};
