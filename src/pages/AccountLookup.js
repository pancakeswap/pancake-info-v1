import React, { useEffect } from 'react'
import 'feather-icons'
import { withRouter } from 'react-router-dom'
import { TYPE } from '../Theme'
import { PageWrapper, FullWrapper } from '../components'
import styled from 'styled-components'
import AccountSearch from '../components/AccountSearch'
import { RowBetween } from '../components/Row'
import { useMedia } from 'react-use'
import Search from '../components/Search'

const AccountWrapper = styled.div`
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

function AccountLookup() {
  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below600 = useMedia('(max-width: 600px)')

  return (
    <PageWrapper>
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>Wallet analytics</TYPE.largeHeader>
          {!below600 && <Search small={true} />}
        </RowBetween>
        <AccountWrapper>
          <AccountSearch />
        </AccountWrapper>
      </FullWrapper>
    </PageWrapper>
  )
}

export default withRouter(AccountLookup)
