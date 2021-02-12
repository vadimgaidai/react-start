import { FC } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { LoaderProps } from './types'

import style from './loading.module.scss'

const Loader: FC<LoaderProps> = ({
  loading: isLoading = true,
  children,
}: LoaderProps) => (
  <SwitchTransition>
    <CSSTransition
      key={isLoading ? 'load' : 'loading'}
      classNames="fade"
      timeout={500}
      unmountOnExit
    >
      {isLoading ? (
        <div className={style.content}>Loading...</div>
      ) : (
        <>{children}</>
      )}
    </CSSTransition>
  </SwitchTransition>
)

export default Loader
