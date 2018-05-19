import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserTables, createTable, signIn } from '../actions';
import { Link } from 'react-router-dom';

class GetUserTables extends Component {
  componentDidMount() {
    let cookieEmail = showCookie("cookieEmail");
    let cookieToken = showCookie("cookieToken");
    this.props.getUserTables(cookieEmail, cookieToken)//służy do zapamiątania emaili i tokenów
  }

  fetchTables() {
      console.log('fetchTables get_user_tables.js:', this.props.tables )
      return _.map(this.props.tables, table => {
        return (
          <li className="list-group-item" key={table.id}>
            {table.name}
          </li>
        );
      }
    );
  }

  render() {
    return (
      <div>
        <h3>Tablice:</h3>
          <ul className="list-group">
            {this.fetchTables()}
          </ul>
      </div>
    );
  }
}
// {this.fetchTables()} //służy do wyświetlenia tablic
function mapStateToProps(state) {
  return { tables: state.tables };
}

export default connect(mapStateToProps, { getUserTables, signIn })(GetUserTables);

function showCookie(name) {//służy do pokazania w zakładce Application w konsoli nazw emaili i tokenów zapamiętanych w ciasteczkach
    if (document.cookie != "") {
        const cookies = document.cookie.split(/; */);

        for (let i=0; i<cookies.length; i++) {
            const cookieName = cookies[i].split("=")[0];
            const cookieVal = cookies[i].split("=")[1];
            if (cookieName === decodeURIComponent(name)) {
                return decodeURIComponent(cookieVal);
            }
        }
    }
}
