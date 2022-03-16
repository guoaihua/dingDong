import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { MenuProps } from "@/types";

import { getApp } from '@tarojs/taro'
import './index.scss'

const app = getApp()



/** 菜单 */
const Menu: MenuProps[] = [
  {
    imgSrc: '/images/home/packet.png',
    name: '天天领红包',
    tips: '饿了么 & 美团外卖',
    className: 'packet.png',
    pagePath: '../packet/packet'
  },
  {
    imgSrc: '/images/home/coin.png',
    name: '抛硬币',
    tips: '二选一',
    className: 'coin',
    pagePath: '../coin/coin'
  },
  {
    imgSrc: '/images/home/dice.png',
    name: '掷骰子',
    tips: '随机数',
    className: 'dice',
    pagePath: '../dice/dice'
  },
  {
    imgSrc: '/images/home/turnplate.png',
    name: '大转盘',
    tips: '多选一',
    className: 'turnplate',
    pagePath: '../turnplate/turnplate'
  }, {
    imgSrc: '/images/home/eatting.png',
    name: '今天吃什么',
    tips: '随机词',
    className: 'eatting',
    pagePath: '../eatting/eatting'
  },
  {
    imgSrc: '/images/home/sport.png',
    name: '今天运动吗',
    tips: '二选一',
    className: 'sport',
    pagePath: "../sport/sport"
  },
  {
    imgSrc: '/images/home/random.png',
    name: '随机数生成',
    tips: '随机数',
    className: 'random',
    pagePath: '../random/random'
  }
]


/** 内容更新组件 */

const UpdateInfo = () => {
  return (
    <View className="modal" wx:if="{{showUpdate}}" catchtap="closeModal">
      <View className="card" catchtap="clickModal">
        <image src="/imges/close.svg" className="closeModal" catchtap="closeModal"></image>
        <View className="title">功能更新</View>
        <View className="info">叮咚决策器「今天吃什么」功能更新</View>
        <View className="info">我们新增了「附近美食」功能，随机挑选你附近的美食店，并能快速查看店家地址和点外卖啦～</View>
        <image className="updateInfo" src="/imges/updateInfo.png"></image>
      </View>

    </View>
  )
}

const Home = () => {
  return (
    <>
      <View className="page_container {{showUpdate ? 'fix': ''}}">
        <header id="header" ></header>
        <image src="/imges/header.png" className="header" id="headerbg"></image>
        <View className="container">
          <View className="menu">
            <View className="title">
              <View className="name">叮咚决策器</View>
              <View className="tips">不要纠结啦，帮你做决定!</View>
              <View hover-className="hoverStatus">
                <image src="/imges/setting.svg" className="setting" bindtap="gotoDetail" data-url="../setting/setting"></image>
              </View>

            </View>
            <View className="list">
              <View wx:for="{{gamelist}}" hover-className="hoverStatus" className="gamelist {{item.classNamename}}" bindtap="gotoDetail" data-url="{{item.url}}">
                <image src="{{item.imgsrc}}"></image>
                <View className="itemname">{{ item.name }}</View>
                <View className="itemtips"> {{ item.tips }}</View>
              </View>
            </View>

            <View className="infos">
              <View className="tips1">{{ infos1 }}</View>
              <View className="tips2">{{ infos2 }}</View>
              <image src="/imges/snow.png"></image>
            </View>
            <View className="more">
            </View>
          </View>
        </View>
        {UpdateInfo}
      </View>
    </>
  )
}

export default Home
