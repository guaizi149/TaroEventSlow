import React, { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'

import './index.scss'

export default class Index extends Component {
	state = {
		showBackTop: false,
		count: 0
	}

	onScrollOuter = (e) => {
		console.log('outer e: ', e)
		const scrollTop = e.detail.scrollTop,
			state = scrollTop > 40
		if (state !== this.state.showBackTop) {
			this.setState({
				showBackTop: state,
			})
		}
	}

	onScrollInner = (e) => {
		console.trace()
		console.log(
			'%c 🍠 e: ',
			'font-size:20px;background-color: #3F7CFF;color:#fff;',
			e,
		)
	}

	render() {
		const { showBackTop, count } = this.state
		return (
			<View className="index" onClick={this.clickOut}>
				<Text>{count}</Text>
				<ScrollView
					onScroll={this.onScrollOuter}
					scrollY
					className="outer-scroll"
					id="outer-scroll"
				>
					<ScrollView
						scrollX
						scrollWithAnimation="true"
						className="inner-scroll"
						scrollIntoView={'target'}
						enableFlex
						onScroll={this.onScrollInner}
						id="inner-scroll"
					>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner" id="target">
							wo
						</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">2</View>
						<View className="inner">3</View>
						<View className="inner">4</View>
					</ScrollView>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
					<View className="outer">1</View>
				</ScrollView>
				{showBackTop && <View className="Back">backTop</View>}
			</View>
		)
	}
}
