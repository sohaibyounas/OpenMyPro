import React from 'react'
import {
  useInRouterContext,
  Link as RouterLink,
  useLocation as useRouterLocation,
} from 'react-router-dom'

/**
 * SafeLink works whether or not the component is wrapped in a <BrowserRouter>.
 * If inside a Router, it renders <RouterLink to={to}>.
 * If outside a Router, it gracefully falls back to <a href={to}>.
 */
export const SafeLink = ({ to, href, children, ...props }) => {
  const inRouter = useInRouterContext()
  const target = to || href || '#'

  if (inRouter) {
    return (
      <RouterLink to={target} {...props}>
        {children}
      </RouterLink>
    )
  }

  return (
    <a href={target} {...props}>
      {children}
    </a>
  )
}

/**
 * useSafeLocation safely retrieves the current location without throwing
 * if the component is rendered outside of a <Router>.
 */
export const useSafeLocation = () => {
  const inRouter = useInRouterContext()
  if (inRouter) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useRouterLocation()
  }
  return {
    pathname: typeof window !== 'undefined' ? window.location.pathname : '/',
  }
}
