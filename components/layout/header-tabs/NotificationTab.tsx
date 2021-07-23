import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'
import { useQuery } from 'react-query'
import styled from 'styled-components'
import getAdminNotifications from '../../../actions/notifications/get-admin-notifications'
import NotificationCard from '../../notifications/NotificationCard'
import HeaderTabTitle from './HeaderTabTitle'
import TabsOverlay from './TabsOverlay'
import Loader from 'react-loader-spinner'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Styles = styled.div`
  overflow-y: scroll;
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pagination__control {
    color: orange;
    margin: 0 10px;
    cursor: pointer;
  }
  .pagination__number {
    color: #385c78;
    padding: 2px 5px;
    border: 1.5px solid #ccc;
    min-width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    margin: 0 5px;
    font-size: 12px;
  }
`

export default function NotificationTab({ showNotification }) {
  const limit: number = 5
  const [page, setPage] = useState<number>(1)
  const [query, setQuery] = useState({
    hasMore: true,
    totalPages: 2,
    totalAdminAnnouncements: 9,
    currentPage: 1,
    adminAnnouncements: [],
  })
  const { refetch, isFetching, isSuccess, data, isLoading, isPreviousData } = useQuery(
    ['admin notifications', page, limit],
    () => getAdminNotifications({ page, limit }),
    {
      keepPreviousData: true,
      onSuccess: (data) => {
        setQuery(data)
      },
    }
  )
  const router = useRouter()
  const handleNextPage = () => {
    if (!isPreviousData && data?.hasMore) {
      setPage((prev) => prev + 1)
    }
  }
  const handlePrevPage = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }
  return (
    <>
      {showNotification && (
        <Styles>
          <TabsOverlay>
            <HeaderTabTitle>
              Notifications
              {isFetching && (
                <div className="loader__window">
                  <Loader
                    style={{ marginLeft: '5px' }}
                    type="Oval"
                    color="black"
                    height={15}
                    width={15}
                  />
                </div>
              )}
            </HeaderTabTitle>
            <PerfectScrollbar>
              {isSuccess &&
                query.adminAnnouncements.map((item) => <NotificationCard item={item} />)}
              {isSuccess && query?.totalPages > 1 ? (
                <div className="pagination">
                  <HiArrowNarrowLeft
                    onClick={() => handlePrevPage()}
                    onKeyPress={() => handlePrevPage()}
                    className="pagination__control"
                    style={{ color: data?.currentPage === 1 && 'gray' }}
                  />
                  <div className="pagination__number">{data?.currentPage}</div>
                  {isFetching && (
                    <div className="loader__window">
                      <Loader
                        style={{ marginLeft: '5px' }}
                        type="Oval"
                        color="black"
                        height={15}
                        width={15}
                      />
                    </div>
                  )}
                  <div className="pagination__number">{data?.totalPages}</div>
                  <HiArrowNarrowRight
                    onClick={() => handleNextPage()}
                    onKeyPress={() => handleNextPage()}
                    className="pagination__control"
                    style={{ color: !data?.hasMore && 'gray' }}
                  />
                </div>
              ) : null}
            </PerfectScrollbar>
          </TabsOverlay>
        </Styles>
      )}
    </>
  )
}