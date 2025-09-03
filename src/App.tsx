import React, { useState, useEffect } from 'react';
import { useTelegram } from './contexts/TelegramContext';
import Layout from './components/Layout';
import UserTab from './components/tabs/UserTab';
import SourcesTab from './components/tabs/SourcesTab';
import ErrorScreen from './components/ErrorScreen';
import SplashScreen from './components/SplashScreen';
import { BrowserRouter, Routes, Route } from 'react-router';
import { RootPathes, TabPathes } from './types';
import './index.css';
import AssetsTab from './components/tabs/AssetsTab';
import NewAssetsTab from './components/tabs/NewAssetsTab';
import { useUser } from './contexts/UserContext';

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const { tgApp, tgUser } = useTelegram();
  const { fetchUserData } = useUser();

  useEffect(() => {
    if (tgApp) {
      tgApp.ready();
      tgApp.expand();
      tgApp.setHeaderColor('#1a1a1a');
      tgApp.setBackgroundColor('#0a0a0a'); // TODO: take from vars
    }
  }, []);

  useEffect(() => {
    if (tgUser) {
      void fetchUserData();
    }
  }, [tgUser]);

  if (!tgUser) {
    return <ErrorScreen />;
  }

  return (
    <BrowserRouter>
      {/* {isReady ? ( */}
      <Routes>
        <Route path={RootPathes.ROOT} element={<Layout />}>
          <Route path={TabPathes.DASHBOARD} element={<UserTab />} />

          <Route path={TabPathes.DATA} element={<SourcesTab />} />

          <Route path={TabPathes.ASSETS} element={<AssetsTab />} />

          <Route path={TabPathes.WALLET} element={<></>} />
        </Route>

        <Route path={RootPathes.CONFIG} element={<></>} />

        <Route path={RootPathes.NEW_ASSET} element={<NewAssetsTab />} />
      </Routes>

      {/* ) : (
        <SplashScreen setIsReady={setIsReady} />
      )} */}
    </BrowserRouter>
  );
};

export default App;
