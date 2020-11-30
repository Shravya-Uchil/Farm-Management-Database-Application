import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table11 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive' data={this.props.data}>
          <TableHeaderColumn isKey dataField='crop_id' width='15%'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='crop_name' width='50%'>
            Crop Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='item_purchased_qty'>
            Item Purchased Qty
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table11;