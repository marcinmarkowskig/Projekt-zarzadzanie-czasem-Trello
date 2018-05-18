import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserTables, createTable, signIn } from '../actions';
import { Link } from 'react-router-dom';

class GetUserTables extends Component {
  //te dwie rzeczy poniżej są dobrze

  componentDidMount() {
    let cookieEmail = showCookie("cookieEmail");
    let cookieToken = showCookie("cookieToken");
    // console.log('Wartość cookieEmail c: ', cookieEmail); //działa dobrze 18_05
    // console.log('Wartość cookieToken c: ', cookieToken); //działa dobrze 18_05
    // console.log('Wywołuje się GetUserTables') //działa dobrze 18_05
        console.log('didMount')
    this.props.getUserTables(cookieEmail, cookieToken)
  }

  fetchTables() {
    console.log('fetchTables:', this.props.tables.promise)
    // return _.map(this.props.tables.data, table => {
    //      return (
    //        <li className="list-group-item" key={table.id}>
    //            {table.name}
    //        </li>
    //      );
    //    });
  }

//{this.fetchTables()}

  // fetchTables() {
  //   this.getUserTables(email, authentication_token)
  // }
      //{this.fetchTables()}

  render() {
    return (
      <div>
        <h3>Tablice:</h3>

          <Link className="btn btn-primary" to="/create-table">
            Pokaż wszystkie tablice
          </Link>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.fetchTables()}
          </ul>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tables: state.tables };
}

export default connect(mapStateToProps, { getUserTables, signIn })(GetUserTables);

function showCookie(name) {
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
