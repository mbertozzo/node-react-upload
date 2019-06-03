/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './styles.css';

import Upload from 'components/Upload'

export default function HomePage() {
  return (
    <div className="HomePage">
      <div className="Card">
        <Upload />
      </div>
    </div>
  );
}
