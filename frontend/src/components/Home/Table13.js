import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table13 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
          <TableHeaderColumn isKey dataField='raw_material_id'>
            ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_name'>
            Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_quantity'>
            Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='price'>
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

export default Table13;