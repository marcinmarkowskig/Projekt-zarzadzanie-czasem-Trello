import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserGroups } from '../actions';
import { Link } from 'react-router-dom';

class GetUserGroups extends Component {
  componentDidMount() {
    this.props.getUserGroups();
  }

  fetchTables() {
    return _.map(this.props.groups, group => {
         return (
           <li className="list-group-item" key={group.id}>
               {group.name}
           </li>
         );
       });
  }

//{this.fetchTables()}
  render() {
    return (
      <div>
        <h3>Tablice:</h3>
          {this.fetchTables()}
          <Link className="btn btn-danger" to="/create-table">
            {fetchTables()}
          </Link>
      </div>
    );
  }
//{this.fetchTables()}
  render() {
    return (
      <div>
        <h3>Tablice:</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { groups: state.groups };
}

export default connect(mapStateToProps, { getUserGroups })(GetUserGroups);
