import React, { useState, useEffect } from 'react'
import getDeviceDetails from '../actions/analytics/get-device-details'
import getUserLocation from '../actions/get-user-location'

const AnalyticsContext = React.createContext(null)

export function useAnalytics() {
  return React.useContext(AnalyticsContext)
}

export default function AnalyticsProvider({ children }) {
  const [ip, setIp] = useState(null)
  const [weather, setWeather] = useState(null)
  const [device, setDevice] = useState(null)

  const getIp = async () => {
    const ip = await getUserLocation()
    if (ip) {
      setIp(ip)
    }
  }

  useEffect(() => {
    getIp()
    const device = getDeviceDetails()
    if (device) {
      setDevice(device)
    }
  }, [])

  const recordPageVisit = async () => {
    console.log('We are recording page right now')
  }

  const recordEventTracker = async () => {
    console.log(
      'We are recording event tracker right now and am very happy and am sure ayou are happy'
    )
  }
  return (
    <AnalyticsContext.Provider
      value={{
        ip,
        device,
        weather,
        recordPageVisit,
        recordEventTracker,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}
