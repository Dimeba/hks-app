'use client'

// styles
import styles from './Filter.module.scss'

// components
import Select from 'react-select'

// hooks
import { useState, useEffect } from 'react'

const Filter = ({ values, setOptionValue, placeholder }) => {
	const [isMounted, setIsMounted] = useState(false)

	const options = [
		...values.map(item => {
			return {
				value: item,
				label: item
			}
		})
	]

	const [option, setOption] = useState([])

	useEffect(() => {
		setOptionValue(option.value)
	}, [option])

	const customStyles = {
		control: (provided, state) => ({
			...provided,
			backgroundColor: 'white',
			borderColor: state.isFocused ? '#c3c7d0' : '#c3c7d0',
			boxShadow: state.isFocused ? 'none' : 'none',
			'&:hover': {
				borderColor: state.isFocused ? '#c3c7d0' : '#c3c7d0'
			},
			cursor: 'pointer'
		}),
		option: (provided, state) => ({
			...provided,
			color: state.isSelected ? 'white' : '#152348',
			backgroundColor: state.isSelected ? '#152348' : 'white',
			'&:hover': {
				backgroundColor: state.isSelected ? '#152348' : '#e7e8ec'
			},
			cursor: 'pointer'
		}),
		dropdownIndicator: (provided, state) => ({
			...provided,
			color: '#c3c7d0',
			transition: '#c3c7d0',

			':hover': {
				color: '#152348'
			}
		}),
		indicatorSeparator: (provided, state) => ({
			...provided,
			backgroundColor: '#c3c7d0'
		})
	}

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}

	return (
		<div className={styles.filter}>
			<Select
				options={options}
				onChange={setOption}
				styles={customStyles}
				className={styles.select}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default Filter
