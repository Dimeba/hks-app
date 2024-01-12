'use client'

// hooks
import { createContext } from 'react'
import { usePathname } from 'next/navigation'

export const MenuContext = createContext()

export const MenuContextProvider = ({ children }) => {
	const pathname = usePathname()

	const menu = [
		{
			name: 'About',
			url: '/about'
		},
		{
			name: 'Investment Opportunities',
			url: '/investment-opportunities'
		},
		{
			name: 'Market Reports',
			url: '/market-reports'
		},
		{
			name: 'In The News',
			url: '/in-the-news'
		},
		{
			name: 'Index Rates',
			url: '/index-rates'
		},
		{
			name: 'Careers',
			url: '/#careers'
		},
		{
			name: 'Contact',
			url: `${pathname}#contact`
		}
	]

	return (
		<MenuContext.Provider value={{ menu }}>{children}</MenuContext.Provider>
	)
}
