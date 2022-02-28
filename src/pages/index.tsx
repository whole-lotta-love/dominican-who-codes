import Layout from '@src/components/layout';
import { IDeveloper } from '@src/modules/devs/dtos/developer.dto';
import { setData } from '@src/modules/devs/slice';
import { RootState } from '@src/store/store';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

type initialProps = {
  developers: IDeveloper[];
};

const Home: NextPage<initialProps> = ({ developers }) => {
  const developersState = useSelector((state: RootState) => state.developers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(developers));
  }, []);

  return (
    <>
      <Layout devs={developers} />
    </>
  );
};

Home.getInitialProps = async (ctx): Promise<initialProps> => {
  const res = await fetch(process.env.DEVELOPERS_API_ENDPOINT);
  const developers = await res.json();

  return {
    developers,
  };
};

export default Home;
