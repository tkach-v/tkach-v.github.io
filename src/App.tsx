import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';
import ErrorScreen from './components/ErrorScreen';
import Layout from './components/Layout';
import AssetsTab from './components/tabs/AssetsTab';
import SourcesTab from './components/tabs/SourcesTab';
import UserTab from './components/tabs/UserTab';
import { useTelegram } from './contexts/TelegramContext';
import { useUser } from './contexts/UserContext';
import './index.css';
import ConfigPage from './pages/ConfigPage';
import NewAssetsPage from './pages/NewAssetsPage';
import { RootPathes, TabPathes } from './types';
import WalletTab from './components/tabs/WalletTab';

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
      fetchUserData();
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
          <Route index element={<Navigate to={TabPathes.DASHBOARD} replace />} />

          <Route path={TabPathes.DASHBOARD} element={<UserTab />} />

          <Route path={TabPathes.DATA} element={<SourcesTab />} />

          <Route path={TabPathes.ASSETS} element={<AssetsTab />} />

          <Route path={TabPathes.WALLET} element={<WalletTab/>} />
        </Route>

        <Route path={RootPathes.CONFIG} element={<ConfigPage />} />

        <Route path={RootPathes.NEW_ASSET} element={<NewAssetsPage />} />
      </Routes>

      {/* ) : (
        <SplashScreen setIsReady={setIsReady} />
      )} */}
    </BrowserRouter>
  );
};

export default App;
