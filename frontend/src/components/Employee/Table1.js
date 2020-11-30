import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive' data={this.props.data}>
          <TableHeaderColumn isKey dataField='crop_id' width='5%'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='crop_name' width='13%'>
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
          <TableHeaderColumn dataField='harvest_status' width='12%'>
            Harvest Status
          </TableHeaderColumn>
          <TableHeaderColumn dataField='discount'>
            Discount
          </TableHeaderColumn>
          <TableHeaderColumn dataField='item_purchased_qty' width='20%'>
            Item Purchased Quantity
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table1;