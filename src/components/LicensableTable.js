/*=============================================================================
 * Copyright (C) 2016 Stephen F. Norledge and Alces Flight Ltd.
 *
 * This file is part of Alces Prime.
 *
 * All rights reserved, see LICENSE.txt.
 *===========================================================================*/
import React, { PropTypes } from 'react';
import { Pagination, Table } from 'react-bootstrap';

import Icon from './Icon';
import LicensesLinks from './LicensesLinks';

const LicensableTable = ({ licensables, footer }) => (
  <Table striped bordered >
    <colgroup>
      <col span="1" style={{ width: '50%' }} />
      <col span="1" style={{ width: '10%' }} />
      <col span="1" style={{ width: '15%' }} />
      <col span="1" style={{ width: '12.5%' }} />
      <col span="1" style={{ width: '12.5%' }} />
    </colgroup>
    <thead>
      <tr>
        <th>Component</th>
        <th>Type</th>
        <th>Author</th>
        <th>Version</th>
        <th>License</th>
      </tr>
    </thead>
    <tbody>
      {
        licensables.map(licensable => (
          <tr key={licensable.id}>
            <td>
              {
                licensable.icon ?
                  <span>
                    <Icon iconSrc={licensable.icon} />
                    &mdash;
                  </span>
                  :
                null
              }
              <strong>{licensable.name}</strong>
              &mdash;
              <a
                className="flight-link--external"
                href={licensable.homePage}
                rel="noopener noreferrer"
                target="_blank"
              >
                {licensable.homePage}
              </a>
            </td>
            <td>
              {licensable.componentType}
            </td>
            <td>
              {licensable.publisher || <span>&mdash;</span>}
            </td>
            <td>
              {licensable.version || <span>&mdash;</span>}
            </td>
            <td>
              <LicensesLinks licenses={licensable.licenses} />
            </td>
          </tr>
          ))
      }
    </tbody>
    <tfoot>
      {footer}
    </tfoot>
  </Table>
);

LicensableTable.propTypes = {
  licensables: PropTypes.arrayOf(PropTypes.object).isRequired,
  footer: PropTypes.node.isRequired,
};


class PaginatedLicensableTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      activePage: 1,
    };
    this.perPage = 10;

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page) {
    this.setState({
      activePage: page,
    });
  }

  render() {
    const activePage = this.state.activePage;
    const startIndex = (activePage - 1) * this.perPage;
    const endIndex = activePage * this.perPage;
    const licensables = this.props.licensables;

    return (
      <LicensableTable
        licensables={licensables.slice(startIndex, endIndex)}
        footer={<tr>
          <td className="paginator" colSpan={5}>
            <Pagination
              items={Math.ceil(licensables.length / this.perPage)}
              activePage={activePage}
              onSelect={this.handlePageChange}
              prev
              next
              first
              last
              ellipsis
              maxButtons={10}
            />
          </td>
        </tr>
        }
      />
    );
  }
}

PaginatedLicensableTable.propTypes = {
  licensables: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PaginatedLicensableTable;
