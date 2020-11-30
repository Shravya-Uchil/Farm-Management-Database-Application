import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table5 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
        <TableHeaderColumn isKey dataField='raw_material_purchase_id' width='150'>
            Purchase ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_id' width='150'>
            Raw Material ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total_price' width='150'>
            Total
          </TableHeaderColumn>
          <TableHeaderColumn dataField='purchase_qty' width='150'>
            Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='purchase_date' width='150'>
            Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='employee_id' width='150'>
            Employee ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table5;