import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getCardsComments, deleteComment } from '../actions';
import { Link } from 'react-router-dom';
import CreateComment from './create_comment';
import DeleteComment from './delete_comment';

class OpenCard extends Component {
  componentDidMount() {
    let cookieEmail = showCookie("cookieEmail");
    let cookieToken = showCookie("cookieToken");
    const { id_table } = this.props.match.params;
    const { id_list } = this.props.match.params;
    const { id_card } = this.props.match.params;
    console.log('componentDidMount')
    console.log('id_table', id_table)
    console.log('id_list', id_list)
    console.log('id_card', id_card)
    this.props.getCardsComments(cookieEmail, cookieToken, id_table, id_list, id_card)
  }


  fetchListsCards() {
      // const { id_table } = this.props.match.params;
      // const { id_list } = this.props.match.params;
      console.log('open_card.js:', this.props.tables )
      return _.map(this.props.tables, table => {
        return (
           <li className="list-group-item" key={table.id}>
             Id: {table.id}
              <p></p>
             Opis: {table.content}
             <button
               className="btn btn-danger pull-xs-right"
               onClick={this.onDeleteClick.bind(this, table.id)}
             >
               Usuń komentarz
             </button>
           </li>
        );
      }
    );
  }

  onDeleteClick(id_comment) {
    const { id_table } = this.props.match.params;
    const { id_list } = this.props.match.params;
    const { id_card } = this.props.match.params;
    let cookieEmail = showCookie("cookieEmail");
    let cookieToken = showCookie("cookieToken");
    console.log(id_table)//działa dobrze
    this.props.deleteComment(cookieEmail, cookieToken, id_table, id_list, id_card, id_comment, () => {
      alert('Usunięto komentarz')
    });
  }

  render() {
    const { id_table } = this.props.match.params;
    const { id_list } = this.props.match.params;
    const { id_card } = this.props.match.params;

    return (
      <div>
        ----KOMENTARZE----
        <p></p>
          <ul className="list-group">
            {this.fetchListsCards()}
          </ul>
          <CreateComment id_table={id_table} id_list={id_list} id_card={id_card} />
          {/* <DeleteComment id_table={id_table} id_list={id_list} id_card={id_card}/> */}
          <Link className="btn btn-danger" to={`/get-lists-cards/v1/tables/${id_table}/lists/${id_list}/cards`}>
            Powrót
          </Link>
          <p></p>
          ----------------
      </div>
    );
  }
  }
function mapStateToProps(state) {
  return { tables: state.tables };
}

export default connect(mapStateToProps, { getCardsComments, deleteComment })(OpenCard);

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
