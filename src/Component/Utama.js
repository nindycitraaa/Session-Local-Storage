import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Dashboard from './Dashboard';
import Siswa from './Siswa';
import Petugas from './Petugas';
import Spp from './Spp';
import Kelas from './Kelas';
import Transaksi from './Transaksi';
import Laporan from './Laporan';

const Utama = () => (

    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/siswa" component={Siswa} />
        <Route path="/petugas" component={Petugas} />
        <Route path="/spp" component={Spp} />
        <Route path="/kelas" component={Kelas} />
        <Route path="/transaksi" component={Transaksi} />
        <Route path="/laporan" component={Laporan} />
    </Switch>
)

export default Utama; 