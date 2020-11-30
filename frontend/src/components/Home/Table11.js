// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table11 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='crop_id' width='150'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='crop_name' width='150'>
            Crop Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='item_purchased_qty' width='150'>
            Item Purchased Qty
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table11;