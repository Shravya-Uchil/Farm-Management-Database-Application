import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table14 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
          <TableHeaderColumn isKey dataField='event_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='event_name'>
            Event Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='date'>
            Event Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total_count'>
            Event Attendance
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table14;