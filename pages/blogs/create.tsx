import React from 'react'
import CreateBlog from '../../components/blog/CreateBlog'
import ContainerMainHeader from '../../components/layout/ContainerMainHeader'
import Layout from '../../components/layout/Layout'
import MobileContainerHeader from '../../components/layout/MobileContainerHeader'
import styled from 'styled-components'
import ContainerMainAction from '../../components/layout/ContainerMainAction'
import ContainerMainColumn from '../../components/layout/ContainerMainColumn'
import ScrollableContainer from '../../components/layout/ScrollableContainer'
import ActionButtonWrapper from '../../components/shared/ActionButtonWrapper'
import { useRouter } from 'next/router'
import ContainerMainWrapper from '../../components/layout/ContainerWrapper'

export default function CreateBlogPost() {
  const router = useRouter()
  const overlayItems: Array<{ title: string; url: string; isActive: boolean }> = [
    { title: 'Create Blog', url: '', isActive: true },
    { title: 'Blogs', url: '/blogs', isActive: false },
    { title: 'All Categories', url: '/blogs/categories', isActive: false },
    { title: 'Create Categories', url: '/blogs/categories/create', isActive: false },
  ]
  return (
    <Layout>
      <ContainerMainWrapper>
        <ContainerMainColumn>
          <ContainerMainHeader
            pageTitle="Blog"
            createButtonUrl="/blogs/create"
            createButtonTitle="Create Blog"
            overlayItems={overlayItems}
          />
          <MobileContainerHeader
            overlayItems={overlayItems}
            pageTitle="Blog"
            createButtonUrl="/blogs/create"
          />
          <ScrollableContainer>
            <CreateBlog />
          </ScrollableContainer>
        </ContainerMainColumn>
        <ContainerMainAction>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/blogs/create')}
              onClick={() => router.push('/blogs/create')}
            >
              Create Blog
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span onKeyPress={() => router.push('/blogs')} onClick={() => router.push('/blogs')}>
              All Posts
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/blogs/categories')}
              onClick={() => router.push('/blogs/categories')}
            >
              See Categories
            </span>
          </ActionButtonWrapper>
          <ActionButtonWrapper>
            <span
              onKeyPress={() => router.push('/blogs/categories/create')}
              onClick={() => router.push('/blogs/categories/create')}
            >
              Create Categories
            </span>
          </ActionButtonWrapper>
        </ContainerMainAction>
      </ContainerMainWrapper>
    </Layout>
  )
}
