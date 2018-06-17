import React, {Component} from 'react';
import wind from './icon.svg';

export class IconWind extends Component {
  render() {
    return (
      //<div>Icons made by <a href="https://www.flaticon.com/authors/hirschwolf" title="hirschwolf">hirschwolf</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      <img height={this.props.size} width={this.props.size} src={wind} alt="wind" />
    );
  }

}