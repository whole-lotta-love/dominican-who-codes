import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDipatch, useAppSelecto } from '@src/hooks/store';
import type { NextPage } from 'next';
import { developersActions } from '@src/store/developer';
import { IDeveloperProfile } from '@src/store/developer/models/profile.entity';

type initialProps = {
  developers: {
    profiles: IDeveloperProfile[];
  };
};

const Home: NextPage<initialProps> = ({ developers }) => {
  const devProfiles = useAppSelecto((state) => state.developer);
  const dispatch = useAppDipatch();

  useEffect(() => {
    dispatch(developersActions.setupData(developers.profiles));
  }, [dispatch, developers.profiles]);

  return <></>;
};

Home.getInitialProps = async (ctx): Promise<initialProps> => {
  const res = await fetch(process.env.DEVELOPERS_API_ENDPOINT);
  const profiles: IDeveloperProfile[] = await res.json();

  profiles.forEach((elm) => {
    elm.id = nanoid();
  });

  return {
    developers: {
      profiles,
    },
  };
};

export default Home;
