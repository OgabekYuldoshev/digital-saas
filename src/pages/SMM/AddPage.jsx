import React from 'react'
import {PageHeader} from 'antd'

function AddPage() {
  return (
    <div>
        <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Go Back"
      />
    </div>
  )
}

export default AddPage