import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table2 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data} width='100%'>
          <TableHeaderColumn isKey dataField='event_id' width='150'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='event_name' width='150'>
            Event Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='description' width='250'>
            Description
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='150'>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='date' width='150'>
            Event Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total_count' width='150'>
            Event Attendance
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table2;