import Script from 'next/script'
import { Poppins } from 'next/font/google'
import './globals.scss'

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
	title: 'HKS Real Estate Advisors',
	description: `HKS Real Estate Advisors is the nation's premier real estate advisory firm`,
	icons: {
		icon: '/favicon.jpg'
	}
}

export default function RootLayout({ children }) {
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

			<body className={poppins.className}>{children}</body>
		</html>
	)
}
