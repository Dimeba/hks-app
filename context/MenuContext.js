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
			name: 'Notable Transactions',
			url: '/notable-transactions'
		},
		{
			name: 'Research',
			url: '/research'
		},
		{
			name: 'Media',
			url: '/media'
		},
		{
			name: 'Index Rates',
			url: '/index-rates'
		},
		{
			name: 'Careers',
			url: '/careers'
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
