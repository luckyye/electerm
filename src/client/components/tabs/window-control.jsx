/**
 * btns
 */

import { memo } from 'react'
import {
  Icon
} from 'antd'

const { prefix } = window
const m = prefix('menu')

export default memo(props => {
  let {
    isMaximized,
    closeApp
  } = props
  let minimize = () => {
    window.getGlobal('minimize')()
  }
  let maximize = () => {
    window.getGlobal('maximize')()
  }
  let unmaximize = () => {
    window.getGlobal('unmaximize')()
  }
  return (
    <div className='window-controls'>
      <div className='window-control-box'>
        <Icon
          type='minus'
          title={m('minimize')}
          className='iblock font20 widnow-control-icon'
          onClick={minimize}
        />
      </div>
      <div className='window-control-box'>
        <span
          title={
            isMaximized ? m('unmaximize') : m('maximize')
          }
          className={
            'iblock font20 icon-maximize widnow-control-icon ' +
              (isMaximized ? 'is-max' : 'not-max')
          }
          onClick={
            isMaximized ? unmaximize : maximize
          }
        />
      </div>
      <div className='window-control-box'>
        <Icon
          type='close'
          title={m('close')}
          className='iblock font20 widnow-control-icon'
          onClick={closeApp}
        />
      </div>
    </div>
  )
})
