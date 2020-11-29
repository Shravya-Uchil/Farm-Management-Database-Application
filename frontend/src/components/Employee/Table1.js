import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='crop_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='crop_name'>
            Crop Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='quantity'>
            Quantity
          </TableHeaderColumn>
          <TableHeaderColumn dataField='cost_price'>
            Cost Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='crop_status'>
            Crop Status
          </TableHeaderColumn>
          <TableHeaderColumn dataField='selling_price'>
            Selling Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='harvest_status'>
            Harvest Status
          </TableHeaderColumn>
          <TableHeaderColumn dataField='discount'>
            Discount
          </TableHeaderColumn>
          <TableHeaderColumn dataField='item_purchased_qty'>
            Item Purchased Quantity
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table1;