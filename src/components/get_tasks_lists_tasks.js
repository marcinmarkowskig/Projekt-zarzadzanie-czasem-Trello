import _ from 'lodash';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTasksListsTasks, deleteTask } from '../actions';
import { Link } from 'react-router-dom';

class GetTasksListsTasks extends Component {
  componentDidMount() {
    let cookieEmail = showCookie("cookieEmail");
    let cookieToken = showCookie("cookieToken");
    this.props.getTasksListsTasks(cookieEmail, cookieToken, this.props.id_table, this.props.id_list, this.props.id_card, this.props.id_taskList);
  }

  onDeleteClickTask(id_task) {
    let cookieEmail = showCookie("cookieEmail");
    let cookieToken = showCookie("cookieToken");
    this.props.deleteTask(cookieEmail, cookieToken, this.props.id_table, this.props.id_list, this.props.id_card, this.props.id_taskList, id_task, () => {
      alert('Usunięto zadanie')
    });
  }

  fetchGroups() {
    console.log('fetchGroups.js: ', this.props.tasks)
    return _.map(this.props.tasks, task => {
      if (task.is_finished === false) {
      task.is_finished === 'false'
    }
         return (
           <li className="list-group-item" key={task.id}>
             Id: {task.id}
             <p></p>
             Opis: {task.content}
             <p></p>
             Stan: {String(task.is_finished)}


             <p></p>
             Id usera: {task.assigned_to}
             <p></p>
             <button
               className="btn btn-danger pull-xs-right"
               onClick={this.onDeleteClickTask.bind(this, task.id)}
             >
               Usuń zadanie
             </button>

           </li>
         );
       });
  }

  render() {
    return (
      <div>
        <p></p>
        ----Tasks------
        <p></p>
        <h3>Zadania:</h3>
          {this.fetchGroups()}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps, { getTasksListsTasks, deleteTask })(GetTasksListsTasks);

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
