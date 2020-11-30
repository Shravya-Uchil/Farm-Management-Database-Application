import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
 
 
class Table5 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable class='table-responsive-xl' data={this.props.data} width='100%'>
        <TableHeaderColumn isKey dataField='raw_material_purchase_id'>
            Purchase ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='raw_material_id'>
            Raw Material ID
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total_price'>
            Total
          </TableHeaderColumn>
          <TableHeaderColumn dataField='purchase_qty'>
            Qty
          </TableHeaderColumn>
          <TableHeaderColumn dataField='purchase_date'>
            Date
          </TableHeaderColumn>
          <TableHeaderColumn dataField='employee_id'>
            Employee ID
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table5;