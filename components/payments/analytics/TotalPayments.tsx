import { IconCreditCard } from '@tabler/icons'
import React from 'react'
import { useQuery } from 'react-query'
import paymentsCount from '../../../actions/payments/analytics/payments-count'
import CountOne from '../../analytics/counters/CountOne'

export default function TotalPayments() {
  const { isLoading, data, isSuccess } = useQuery('total payments', paymentsCount)
  return (
    <CountOne
      itemCount={data}
      itemName="Payments"
      icon={<IconCreditCard width={20} color="#FFC300" strokeWidth={1.5} />}
      // style={{ borderRight: '1px solid #eeeeee' }}
    />
  )
}
