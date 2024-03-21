import React from 'react'
import { Link } from 'gatsby'
import { Button } from 'theme-ui'
import { Layout, Stack, Main } from '@layout'
import PageTitle from '@components/PageTitle'
import Section from '@components/Section'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'

const Page404 = props => (
  <Layout {...props}>
    <Seo title='404 | Page Not Found| the hpl company' />
    <Divider />
    <Stack>
      <Main>
        <Section>
          <PageTitle
            header="Sorry, y'all, this page isn't available."
            subheader='You might have mistyped the address, the page may have moved, it might not have ever existed at all. Sorry about that!'
          />
        </Section>
        <Section>
          <Button variant='primary' as={Link} to='/'>
            Go to homepage
          </Button>
        </Section>
      </Main>
    </Stack>
  </Layout>
)

export default Page404
