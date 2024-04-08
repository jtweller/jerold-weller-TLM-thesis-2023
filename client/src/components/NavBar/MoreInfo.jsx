import React from 'react'
import { Popover } from 'react-bootstrap'


const MoreInfo = React.forwardRef((props, ref) => (
  <Popover ref={ref} id="popover-trigger-focus" title={props.title} {...props}>
      { props.children }
  </Popover>
))

export default MoreInfo

