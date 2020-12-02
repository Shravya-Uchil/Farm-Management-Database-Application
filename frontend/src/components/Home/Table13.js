// SJSU CMPE 226 Fall 2020 TEAM3
import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';

class Table13 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable
          class='table-responsive-xl'
          data={this.props.data}
          width='100%'
        >
          <TableHeaderColumn isKey dataField='raw_material_id' width='150'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_name' width='150'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_quantity' width='150'>
            Actual Quanity
          </TableHeaderColumn>

          <TableHeaderColumn dataField='qty_threshold' width='150'>
            Threshold Quantity
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='150'>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_provider_id' width='150'>
            Provider ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table13;
