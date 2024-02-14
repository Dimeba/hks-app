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
			url: '/about',
			dropdown: 'Meet Our Team',
			dropdownUrl: '/about#meet-our-team'
		},
		{
			name: 'Investment Opportunities',
			url: '/investment-opportunities',
			dropdown: 'Notable Transactions',
			dropdownUrl: '/investment-opportunities#notable-transactions'
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
