import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTablesLists } from '../actions';
import { createList } from '../actions';

class GetTablesLists extends Component {
  componentDidMount() {
    //if(!this.props.post) { - opcja
    let cookieEmail = showCookie("cookieEmail");
    let cookieToken = showCookie("cookieToken");
    const { id } = this.props.match.params;//możemy to napisac dzięki React-Router; z adresu url pobieramy id ( z wildcarda /:id)
    this.props.getTablesLists(id, cookieEmail, cookieToken);
    //}
  }

  fetchLists() {
      // console.log('fetchLists get_tables_lists.js:', this.props.tables )
      return _.map(this.props.tables, list => {
        return (
          <li className="list-group-item" key={list.id}>
            <Link to={`/get-tables-lists/${list.id}`}>
              {list.name}
            </Link>
          </li>
        );
      }
    );
  }

  post() {
    const { id } = this.props.match.params;//możemy to napisac dzięki React-Router; z adresu url pobieramy id ( z wildcarda /:id)
    return id
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <div id="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          {/* <a href="#" onClick={this.signOut2}>
            Click me
          </a> */}
          <Link id='block' to="/">
          <div>
            Wyloguj się
          </div>
          </Link>
        </div>
        <h3>Lists:</h3>
        <ul className="list-group">
          {/* {this.post()} */}
          {this.fetchLists()}
            <Link className="btn btn-primary" to={`/get-tables-lists/${this.post()}/create-list`}>
              Utwórz nową listę
            </Link>
            <Link className="btn btn-danger" to={`/get-user-tables`}>
              Anuluj
            </Link>
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tables }) { //{posts} to application state
  return { tables: tables};
}

export default connect(mapStateToProps, { getTablesLists })(GetTablesLists);

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
