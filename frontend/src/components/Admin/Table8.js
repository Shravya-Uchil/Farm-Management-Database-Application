// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table8 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
        <TableHeaderColumn isKey dataField='raw_material_provider_id'>
            Provider ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_id'>
            RM ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_name'>
            RM Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_quantity'>
            Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='qty_threshold'>
            Min Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='rmp_name'>
            Provider Name
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table8;