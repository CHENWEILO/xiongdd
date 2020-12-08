// pages/search/search.js
const request = require('../../common/request/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerSrc: [],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    about: [
      // {
      //   "name": "每日打卡",
      //   "icon": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/05/VS9U2F9UMSHU8NStuF2tQHBuZMz2t2.png"
      // },
      // {
      //   "name": "阅读排行榜",
      //   "icon": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/05/S5f3tipsPhTd7iTpZPddQZ9II3Iist.png"
      // },
      // {
      //   "name": "我的小目标",
      //   "icon": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/05/iR1L2y8rBmvarpJymBxgsa1M77RlAj.png"
      // },
      // {
      //   "name": "哄睡神器",
      //   "icon": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/05/XL2Tu2Z2r5R9889Fc9C72aLDqdr29l.png"
      // }
    ],

    feeBook: [
      // {
      //   "title": "风暴过后",
      //   "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/szCx8cDAPJJRDqWD8RqQfcDdWcDr88.jpg",
      //   "bf_count": "11.6万"
      // },
      // {
      //   "title": "鳄鱼怕怕 牙医怕怕",
      //   "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/YKaXVKx7mS5JUj2L5fLJq0m5lK0FkT.jpg",
      //   "bf_count": "15.8万"
      // },
      // {
      //   "title": "飞鸟集",
      //   "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/nE66n2CgF55ET5C5n5c5h2sc6R25S9.jpg",
      //   "bf_count": "25.0万"
      // },
      // {
      //   "title": "小小迷路了",
      //   "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/10/MNN73XIg37PnzzNuPLD7n6tDPvPuPi.jpg",
      //   "bf_count": "7.0万"
      // },
      // {
      //   "title": "我的情绪小怪兽",
      //   "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/g71cK9ZNpNdQ79Xwn0Pz1KQQp33kP0.jpg",
      //   "bf_count": "25.4万"
      // }
    ],
    til: [{
      "title": "免费专区",
      "subhead": "每天看一本 宝贝更聪明",
    }],
    topTen: [{
        "title": "险峰",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/flUKUuxKzbBBeRU5Rxugu2v3qLwiub.jpg",
        "bf_count": "1.9万"
      },
      {
        "title": "蜜蜂",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/wmAKnXDXsF84K56AXF84zZ7gGz5NpF.jpg",
        "bf_count": "7.3万"
      },
      {
        "title": "野兽国",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/fDGv5UpClcd5GdJK5oHPpvxZJmXmO7.jpg",
        "bf_count": "6.6万"
      },
      {
        "title": "云端的哈利",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/BkKMwk1jk1K1m9M1L1b0O8LPL5JDsL.jpg",
        "bf_count": "25.0万"
      },
      {
        "title": "狐狸与星",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/o3b4boqe9rzQurOUL3XRQdbqH9xD14.jpg",
        "bf_count": "35.1万"
      }
    ],
    star: [1, 1, 1, 1, 0],

    topTen1: [{
        "title": "等等，等等",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/sIIxq9I19GZ9HXYxPhgH1YY2ZzdDqZ.jpg",
        "bf_count": "8.0万"
      },
      {
        "title": "我才不放手呢",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/V6X6g8kGq8gvpgO9Yj2Wk8PM88vYx9.jpg",
        "bf_count": "0"
      },
      {
        "title": "我是霸王龙",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/10/VDBsROEhOdPsrdfDRRGorsBJdohrto.jpg",
        "bf_count": "10万"
      },
      {
        "title": "好饿的老狼和猪的小镇",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/TOVlSbnen0BokIXbYXL1sNVSOKfDEd.jpg",
        "bf_count": "9.7万"
      },
      {
        "title": "遇到你，真好",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/PhW677U7vQ552Dqxm5v67i3Q5b3hZ5.jpg",
        "bf_count": "13.6万"
      },
      {
        "title": "你看起来好像很好吃",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/b4U6CroenYXYx45ixF6yorNO4CytFO.jpg",
        "bf_count": "24.1万"
      },
      {
        "title": "你真好",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/onuulPZbMghuOmM8TjOBlpoz3OU8Ht.jpg",
        "bf_count": "5.3万"
      },
      {
        "title": "青蛙的水坑",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/VzEJ8Jocs8HSpDjbbjEHdECONYjyJS.jpg",
        "bf_count": "14.3万"
      },
      {
        "title": "哒哒哒 爸爸超人",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/DI7711D226q2197ih6hDpXd6pA2121.jpg",
        "bf_count": "12.4万"
      },
      {
        "title": "跟屁虫",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/AKTa799919kTakqvuRBPtJZkzVkR6v.jpg",
        "bf_count": "15.6万"
      },
      {
        "title": "妈妈，你看！",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/iI0cXWDDJ7dwlZ6C75Zpc77BuzxWwI.jpg",
        "bf_count": "1.2万"

      },
      {

        "title": "走啊走",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/OBvLLYyBGsBBbsPbgBLakNVBK3pY8T.jpg",
        "bf_count": "1.4万"
      },
      {
        "title": "小兔阿布和布娃娃",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/i3iE56rB7FR3U1F999bFbWLIHUe5Sb.jpg",
        "bf_count": "1.0万"
      },
      {

        "title": "水精灵和污泥怪",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/oMDWfUu2wiv6u4DZ7IwMD4D72uIdzU.jpg",
        "bf_count": "2.0万"
      },
      {
        "title": "我是熊猫",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/Kb32aUidicPikAAR02121oin2zkOUl.jpg",
        "bf_count": "1.6万"
      },
      {

        "title": "小红与小黄",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/RBFn0wla0f6zxTEelLnxIxE00nF6n6.jpg",
        "bf_count": "8261"
      },
      {
        "title": "好饿的小蛇",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/kXdfcAbX5Lm3VF1Vl9ESLeAhXLtZl3.jpg",
        "bf_count": "1.6万"
      },
      {

        "title": "小蛇散步",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/Y0FN16J6F7MNNkGmfmaU4FJO216O1Z.jpg",
        "bf_count": "1.4万"
      },
      {
        "title": "正义之士",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/mEfEOue4z7l7xxObBIfuB9UIiFEFbX.jpg",
        "bf_count": "1.5万"
      },
      {
        "title": "神奇种子店",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/wcUNSJorAVaOsQUDdRQ8rdZgNuU61O.jpg",
        "bf_count": "6807"
      },
      {
        "title": "我爸爸超厉害",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/zu799KWmkz0eKm0KZMpwKmi79uwWF9.jpg",
        "bf_count": "1.3万"
      },
      {

        "title": "今天运气怎么这么好",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/I6b61b2i1gUdGGbobAbOr961OPBob1.jpg",
        "bf_count": "1.5万"
      },

    ],
    mifei: [
      {
        "title": "我的家人",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/eKQD6JkxSMpsJxXsQd6px1KSDsqS1I.jpg",
        "bf_count": "6.3万"
      }, 
      {
        "title": "养成好习惯",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/Ku4z3f59ZL25Et4fF7zTOu9lL2cU2o.jpg",
        "bf_count": "6.6万"
      },
      {
        "title": "你想吃什么",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/uf11wV39ydLv31L0et0csqQ4d4E111.jpg",
        "bf_count": "9.1万"
      },
      {
        "title": "好多家务活",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/chFdeDtsio6AVJTd9PHcbtA6B9Tdee.jpg",
        "bf_count": "5.7万"
      },
      {
        "title": "我最好的朋友",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/H1hh9TLALfmz6v8lb3EfHSbeEVS6AR.jpg",
        "bf_count": "11.2万"
      }
    ],
    English: [
      {
        "title": "Brown Bear,Brown Bear",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/BIz5VUqQCLq5TnN400H3wANwlwQt3M.jpg",
        "bf_count": "16.6万"
      }, 
      {
        "title": "FOREST",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/Eq8GEUqD8gU3zQAq8dQE8tE8NGHQQa.jpg",
        "bf_count": "12.5万"
      },
      {
        "title": "诺瑞捉迷藏",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/R8aF4T1CTWG1Lz6Z8Lw1482gC14Ba8.jpg",
        "bf_count": "17.1万"
      },
      {
        "title": "晚安，诺瑞",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/mj5MBYcAfnbf8UrU588BfeaM4tOeYd.jpg",
        "bf_count": "12.8万"
      },
      {
        "title": "Maisys plane",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/qx0X0Zm0MyA0YaYT202Z4Sr08MAAZ0.jpg",
        "bf_count": "10.5万"
      }
    ],
    quanqiu: [
      {
        "title": "田鼠阿佛",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/KoZ7Ap8nmZa5zBV6gJo7g5vBrcbV5M.jpg",
        "bf_count": "14.5万"
      }, 
      {
        "title": "小黑鱼",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/UitqT46ctWXZ564ce4QjQty0T060cG.jpg",
        "bf_count": "12.9万"
      },
      {
        "title": "鱼就是鱼",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/v6C5cTTanTwNIXmcC38twoamt6Z33s.jpg",
        "bf_count": "10.4万"
      },
      {
        "title": "这是我的",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/B93vWd8CZHwhXTWHvo9Ytpd82OOhzt.jpg",
        "bf_count": "8.4万"
      },
      {
        "title": "鳄鱼哥尼流",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/Ja19YsKSSYrSdqDmzs5SsX7d9RxM9s.jpg",
        "bf_count": "5.7万"
      }
    ],
    liti: [
      {
        "title": "圣诞星",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/03/YsCq9mPN0PPtTCcPQt9ocNnq0N09Ns.jpg",
        "bf_count": "13.6万"
      }, 
      {
        "title": "我的情绪小怪兽",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/O9ha6K69VpVhVS4SmP9shs6jS6j4an.jpg",
        "bf_count": "25.4万"
      },
      {
        "title": "大闹天宫",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/Y8HMzaT88VvExC8834vyfC88VEa588.jpg",
        "bf_count": "18.4万"
      },
      {
        "title": "蒙德里安",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/yfT30NDn2J3tWj40T0hwN06dR00hDT.jpg",
        "bf_count": "15.5万"
      },
      {
        "title": "璀璨星空",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/hHbDGb2255532Kc5pn0ny05c05y032.jpg",
        "bf_count": "10.8万"
      }
    ],
    jimi: [
      {
        "title": "微笑的鱼",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/uKgG5nGM9eZ98w4g5k554LX4keTt42.jpg",
        "bf_count": "5.4万"
      }, 
      {
        "title": "月亮忘记了 1",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/vYh9nTFR92T9h959ZTNR319fULKYZl.jpg",
        "bf_count": "16.2万"
      },
      {
        "title": "月亮忘记了 2",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/c8gyIgz4CZiCc46wd64GdCIngiYw6g.jpg",
        "bf_count": "8.5万"
      },
      {
        "title": "向左走，向右走 1",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/pRNvSnROOAVvSK5G0pv0pNVNVzTavv.jpg",
        "bf_count": "11.7万"
      },
      {
        "title": "向左走，向右走 2",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/vn33njDDT6ETsycC3fEyyN3zbY688C.jpg",
        "bf_count": "6.9万"
      }
    ],
    dujia: [
      {
        "title": "100层的房子",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/to0ts4d1DCtzfDO00585DfXanqTTT4.jpg",
        "bf_count": "18.3万"
      }, 
      {
        "title": "地下100层的房子",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/PUUn6Mvb39HO6slIfIM036cgsVxGnC.jpg",
        "bf_count": "19.0万"
      },
      {
        "title": "海底100层的房子",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/DO9ugS9G7xsFvY52PtOUvYspFupF2p.jpg",
        "bf_count": "9.6万"
      },
      {
        "title": "天空100层的房子",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/kkYb6Z9T4uZpFySC6KfhM3nDk1f637.jpg",
        "bf_count": "15.8万"
      },
      {
        "title": "这个好吃的是谁的呀？",
        "thumb": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/10/I6IBIAcn6pAnm76CAaf6bvNAVNCnNa.jpg",
        "bf_count": "15.4万"
      }
    ],
    nanhai: [
      {
        "title": "面具丛林",
      "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/l1P9hcDdGduAQRaQ9pRZJQ39RXPXuQ.jpg",
        "bf_count": "18.8万"
      },       {
        "title": "一模一样的在哪里？",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/CSVQdbQZnpVVQ0ds69r0npqMUNuEnr.jpg",
        "bf_count": "13.2万"
      },
      {
        "title": "与众不同的站出来",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/hnBJUvW8nrJNNjvwjknYj7ro22DYJk.jpg",
        "bf_count": "19.4万"
      },
      {
        "title":"谁吃谁",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/LdUUsggJ7GIDJzgJgcSGXLduihq9fG.jpg",
        "bf_count": "8.8万"
      },
      {
        "title":"冷山",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/MZ5l8ejowoW558JX1o1Xly8OAl5L5y.jpg",
        "bf_count": "8.4万"
      }
    ],
    nvhai: [
      {
        "title": "飞鸟集",
      "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/OlLge7L3N83d2ju32e6JEj7K5Ne37w.jpg",
        "bf_count": "25.0万"
      },       {
        "title": "别放手",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/wsaQz7sjQb4097pJ0Ja3ZpOn4PH4jj.jpg",
        "bf_count": "10.3万"
      },
      {
        "title": "小美人鱼的鞋子",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/04/j825o28tE28oHioi8ZOh0wI8E622j0.jpg",
        "bf_count": "15.3万"
      },
      {
        "title":"流星划过天空的夜晚",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/cbGnt6zV122bB522aNBGNt222Nb511.jpg",
        "bf_count": "6.4万"
      },
      {
        "title": "小金鱼逃走了",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/e3BneB13VBZnVj7Zvpv3eIof1d8Bv1.jpg",
        "bf_count": "11.1万"
      }
    ],
    cheche: [
      {
        "title": "蒸汽火车，梦幻火车",
      "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/08/LC6OCoc06G0r1DODdD6d300g6r263T.jpg",
        "bf_count": "1.3万"
      },       {
        "title": "好酷炫的小汽车",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/XufgFYF9F934X4nC84NNLG9CGpnZZa.jpg",
        "bf_count": "1.3万"
      },
      {
        "title": "好能干的工程车",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/10/VDBsROEhOdPsrdfDRRGorsBJdohrto.jpg",
        "bf_count": "1.5万"
      },
      {
        "title": "晚安，工地上的车",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/KkKkzRRvTkVrkkzln2kxDmLdm9rNLM.jpg",
        "bf_count": "1.6万"
      },
      {
        "title": "好玩的车车",
        "thumb":"https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/mUqoVIULfi6ceUoFEV6EOVllhLV1qr.jpg",
        "bf_count": "1.7万"
      }
    ],

    zhutiTop: [
      // {
      //   "title": "100层的房子",
      //   "reason":"这个好吃的是谁的呀？",
      //   "image": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/to0ts4d1DCtzfDO00585DfXanqTTT4.jpg",
      //   "text":"20本",
      //   "type": "18.3万"
      // }, 
      // {
      //   "title": "地下100层的房子",
      //   "reason":"这个好吃的是谁的呀？",
      //   "image": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/PUUn6Mvb39HO6slIfIM036cgsVxGnC.jpg",
      //   "text":"20本",
      //   "type": "19.0万"
      // },
      // {
      //   "title": "海底100层的房子",
      //   "reason":"这个好吃的是谁的呀？",
      //   "image": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/DO9ugS9G7xsFvY52PtOUvYspFupF2p.jpg",
      //   "text":"20本",
      //   "type": "9.6万"
      // },
      // {
      //   "title": "天空100层的房子",
      //   "reason":"这个好吃的是谁的呀？",
      //   "image": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/09/kkYb6Z9T4uZpFySC6KfhM3nDk1f637.jpg",
      //   "text":"20本",
      //   "type": "15.8万"
      // },
      // {
      //   "title": "这个好吃的是谁的呀？",
      //   "reason":"这个好吃的是谁的呀？",
      //   "image": "https://xxbd-1301723499.file.myqcloud.com/images/1/2020/10/I6IBIAcn6pAnm76CAaf6bvNAVNCnNa.jpg",
      //   "text":"20本",
      //   "type": "15.4万"
      // }
    ],

    video_list:[

    ],

    love:[

    ],



  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var bookList;
    request({
        url: 'http://121.196.111.215:8080/app/ewei_shopv2_api.php?i=1&r=shop.get_shopindex&comefrom=wxapp&openid=sns_wa_oXBzJ5S3FygW-VyWhCTA1_D-vHpk&mid=&merchid=&authkey=&timestamp=1606636353535',
      }).then((res) => {
        bookList = res.data.booklist;
        bookList = bookList.slice(0,4);
        console.log(bookList)
        console.log(res)
        this.setData({
          bannerSrc:res.data.banners,
          about:res.data.nav,
          feeBook:res.data.newrecommand.list,

          

          video_list:res.data.video_list,
          zhutiTop:bookList,
          love:res.data.recommand
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
})