' use client'
import Table from 'react-bootstrap/Table';

import stype from '../style/app.module.css'

function Tables() {
  return (
    <Table striped bordered hover className={stype['red']}>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td> Thế Bảo</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Tables;