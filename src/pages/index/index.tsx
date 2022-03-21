import React, { useState } from 'react'
import { MenuProps } from "@/types";

import { getApp } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
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
const infos1 = "更多功能开发中";
const infos2 = "拯救选择困难症和纠结患者";

/** 内容更新组件 */

const UpdateInfo = () => {
  return (
    <View className='modal' onClick={closeModal}>
      <View className='card' onClick={clickModal}>
        <Image src='/images/home/close.svg' className='closeModal' onClick={closeModal}></Image>
        <View className='title'>功能更新</View>
        <View className='info'>叮咚决策器「今天吃什么」功能更新</View>
        <View className='info'>我们新增了「附近美食」功能，随机挑选你附近的美食店，并能快速查看店家地址和点外卖啦～</View>
        <Image className='updateInfo' src='/images/home/updateInfo.png'></Image>
      </View>
    </View>
  )
}

const Home = () => {
  const [hidden, setHidden] = useState('hidden')
  const [showUpdate, setShowUpdate] = useState(false)

  /** 跳转到相应的详情页面 */
  const gotoDetail = (e) => {
    let url = e.currentTarget.dataset.url;
    if (url) {
      Taro.navigateTo({
        url: url,
        success: function (data) {
        },
        fail: function (err) {
          console.log(err);
        }
      });
    }
  }


  return (
    <>
      <View className={showUpdate ? 'page_container  fix' : 'page_container'}>
        <header id='header' ></header>

        <Image src='/images/home/header.png' className='header' id='headerbg'></Image>
        <View className='container'>
          <View className='menu'>
            <View className='title'>
              <View className='name'>叮咚决策器</View>
              <View className='tips'>不要纠结啦，帮你做决定!</View>
              <View hover-className='hoverStatus'>
                <Image src='/images/setting.svg' className='setting' onClick={gotoDetail} data-url='../setting/setting'></Image>
              </View>

            </View>
            <View className='list'>
              {
                Menu.map((item, index) => (
                  <View hover-className='hoverStatus' key={index} className={`gamelist ${item.className}`} onClick={gotoDetail} data-url={item.pagePath}>
                    <Image src={item.imgSrc}></Image>
                    <View className='itemname'>{item.name}</View>
                    <View className='itemtips'> {item.tips}</View>
                  </View>
                ))
              }

            </View>

            <View className='infos'>
              <View className='tips1'>{infos1}</View>
              <View className='tips2'>{infos2}</View>
              <Image src='/images/home/snow.png'></Image>
            </View>
            <View className='more'>
            </View>
          </View>
        </View>
        {UpdateInfo}
      </View>
    </>
  )
}

export default Home
