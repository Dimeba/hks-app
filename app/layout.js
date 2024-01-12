import Script from 'next/script'

// styles & fonts
import { Poppins } from 'next/font/google'
import './globals.scss'

// components
import Footer from '@/components/global/Footer'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

// context
import { MenuContextProvider } from '@/context/MenuContext'

// contentful
import { createClient } from 'contentful'

export const metadata = {
	title: 'HKS Real Estate Advisors',
	description: `HKS Real Estate Advisors is the nation's premier real estate advisory firm`,
	icons: {
		icon: '/favicon.jpg'
	}
}

export default async function RootLayout({ children }) {
	const client = createClient({
		space: process.env.space,
		accessToken: process.env.accessToken
	})

	const contact = await client.getEntries({
		content_type: 'contactSection'
	})

	return (
		<html lang='en'>
			<head>
				{/* Google Analytics */}
				<Script
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
					strategy='afterInteractive'
				/>
				<Script id='google-analytics' strategy='afterInteractive'>
					{`
            			window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}
            			gtag('js', new Date());
            			gtag('config', '${process.env.GOOGLE_ANALYTICS}', {
              			page_path: window.location.pathname,
            			});
          			`}
				</Script>
			</head>

			<body className={poppins.className}>
				<MenuContextProvider>
					{children}
					<Footer contact={contact.items[0]} />
				</MenuContextProvider>
			</body>
		</html>
	)
}
