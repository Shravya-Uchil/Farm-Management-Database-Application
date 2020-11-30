import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table4 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
          <TableHeaderColumn isKey dataField='raw_material_id' width='8%'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_name' width='33%'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_quantity' width='15%'>
            Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='qty_threshold'>
            Min Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price' width='15%'>
            Price
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_provider_id'>
            Provider ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table4;