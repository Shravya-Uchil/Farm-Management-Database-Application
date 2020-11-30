import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table10 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
          <TableHeaderColumn isKey dataField='order_id' width='5%'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='item_quantity'>
            Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='order_status'>
            Order Status
          </TableHeaderColumn>
          <TableHeaderColumn dataField='order_date'>
            Order Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total_price'>
            Total
          </TableHeaderColumn>
          <TableHeaderColumn dataField='customer_id'>
            Customer ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='customer_name'>
            Customer Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='crop_name'>
            Crop Name
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table10;