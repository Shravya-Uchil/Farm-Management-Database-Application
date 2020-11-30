// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table6 extends Component {
    render() {
        return (
          <div>
            <BootstrapTable class='table-responsive' data={this.props.data}>
              <TableHeaderColumn isKey dataField='crop_id' width='150'>
                ID
              </TableHeaderColumn>
              <TableHeaderColumn dataField='crop_name' width='150'>
                Crop Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField='quantity' width='150'>
                Quantity
              </TableHeaderColumn>
              <TableHeaderColumn dataField='cost_price' width='150'>
                Cost Price
              </TableHeaderColumn>
              <TableHeaderColumn dataField='crop_status' width='150'>
                Crop Status
              </TableHeaderColumn>
              <TableHeaderColumn dataField='selling_price' width='150'>
                Selling Price
              </TableHeaderColumn>
              <TableHeaderColumn dataField='harvest_status' width='150'>
                Harvest Status
              </TableHeaderColumn>
              <TableHeaderColumn dataField='discount' width='150'>
                Discount
              </TableHeaderColumn>
              <TableHeaderColumn dataField='item_purchased_qty' width='250'>
                Item Purchased Quantity
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        );
      }
    }

export default Table6;