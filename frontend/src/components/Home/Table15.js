// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table15 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
          <TableHeaderColumn dataField='customer_name' width='150'>
            Customer Name
          </TableHeaderColumn>
          <TableHeaderColumn isKey dataField='order_id' width='150'>
            Order ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total_price' width='150'>
            Order Total
          </TableHeaderColumn>
          <TableHeaderColumn dataField='customer_id' width='150'>
            Customer ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table15;