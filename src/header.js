import React, { Component } from 'react';
import Moment from 'moment';

class Header extends Component {
  render(){
    let idLocale = require('moment/locale/id');
    Moment.updateLocale('id', idLocale);
    return (
      <div>
      <img src="https://img2.apk.tools/150/2/f/a/com.koller.lukas.todolist.png" alt="avatar" />
      <h3>Aplikasi Aktivitas Harian</h3>
      <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
      </div>
    );
  }
}

export default Header;
