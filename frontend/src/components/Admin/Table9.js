// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table9 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
        <TableHeaderColumn isKey dataField='customer_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='customer_name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='email_id'>
            Email
          </TableHeaderColumn>
          <TableHeaderColumn dataField='customer_type'>
            Customer Type
          </TableHeaderColumn>
          <TableHeaderColumn dataField='order_count'>
            Order Count
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table9;