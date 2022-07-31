import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { LocationsList } from '../../components/LocationsList';
import { useGetCharacterByIdQuery } from '../../store/apis/characters';

import styles from './CharacterDetails.module.scss';

export const CharacterDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetCharacterByIdQuery(Number(id) || 0);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Navigate to="/" replace />;
  }

  if (!data) {
    return <Typography variant="h4">Empty data</Typography>;
  }

  const locationId = data.location.url.split('/').pop();

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <img src={data.image} alt={data.name} />
      </div>
      <div className={styles.details}>
        <Typography variant="h3">{data.name}</Typography>
        <ul className={styles.detailsList}>
          <li>
            <Typography variant="body2" color="text.secondary">
              Status:<b> {data.status}</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Species:<b> {data.species}</b>
            </Typography>
          </li>
          <li>
            <Typography variant="body2" color="text.secondary">
              Gender:<b> {data.gender}</b>
            </Typography>
          </li>
        </ul>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aliquam dolore illo,
          asperiores molestias, sed nostrum a debitis consequatur inventore, tempora blanditiis
          voluptas quo totam ea eveniet architecto quaerat dolorum pariatur. Voluptate animi
          exercitationem laborum, itaque totam quo quibusdam sequi quasi ratione dolorum error natus
          dicta sed, magnam nulla recusandae deleniti voluptas voluptatibus officia tempora. Quia
          enim maiores ipsam odio cum provident eos commodi aliquid necessitatibus autem sed officia
          cumque esse quod iste molestiae, impedit optio quas quis debitis quae nesciunt! Ex,
          molestias qui! Optio deleniti non quis earum a dolorem mollitia corporis, aliquam labore
          esse, pariatur accusantium beatae culpa!
        </p>

        <Typography classes={{ root: styles.blockTitle }} variant="h4" color="text.secondary">
          Episodes
        </Typography>
        <LocationsList ids={Number(locationId)} />
      </div>
    </div>
  );
};
