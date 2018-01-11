import React, { createClass, PropTypes } from 'react'
import { Pagination } from 'react-bootstrap'
import app from 'xadmin-core'
import { ModelWrap } from '../base'

const ModelPagination = createClass({

  propTypes: {
    bsSize: PropTypes.string,
    items: PropTypes.number,
    activePage: PropTypes.number,
    changePage: PropTypes.func
  },

  render() {
    const { _t } = app.context
    const { emptyComponent } = this.props

    if(this.props.items > 1) {
      return (
        <Pagination
            style={{ marginTop: 0 }}
            bsSize={this.props.bsSize || ''}
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            items={this.props.items}
            activePage={this.props.activePage}
            onSelect={this.props.changePage}
            maxButtons={5} />
        )
    } else {
      return emptyComponent !== undefined ? emptyComponent : (
        <ul style={{ marginTop: 0 }} className="pagination pagination-sm">
          <li className="disabled"><a>{_t('No paging')}</a></li>
        </ul>
        )
    }
  }

})

export default ModelWrap('model.list.pagination')(ModelPagination)