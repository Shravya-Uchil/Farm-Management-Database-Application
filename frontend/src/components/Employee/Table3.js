import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table3 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
          <TableHeaderColumn isKey dataField='order_id' width='150'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='order_status' width='150'>
            Order Status
          </TableHeaderColumn>
          <TableHeaderColumn dataField='order_date' width='150'>
            Order Date
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

export default Table3;