// Component/cards/communityCards/communityCards.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		width: {type: String,value: ""},
		gap: {type: String,value: ""},
		title: {type: String,value: ""},
		userinfo_username: {type: String,value: ""},
		userinfo_headshot: {type: String,value: ""},
		likesCounter: {type: Number,value: ""},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		cardsHeight: "",
		redHeart: "/images/heart_red.svg",
		greyHeart: "/images/heart_grey.svg",
		isLiked: false,
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		handleLikes() {
			var original = this.properties.likesCounter
			if (this.data.isLiked === false) {
				this.setData({
					isLiked: true,
					likesCounter: original + 1
				})
			}
			else {
					this.setData({
						isLiked: false,
						likesCounter: original - 1
					})
			}	
		}
	},

	options: {
		addGlobalClass: true
	},


	lifetimes: {
		attached: function bodyWidthCalculate() {
			var windowsWidth = wx.getSystemInfoSync().windowWidth
			var that=this
			var obj=this.createSelectorQuery();
			obj.selectAll('#titleBox-id').boundingClientRect(function (rect) {
				that.setData({
					cardsHeight: rect[0].height + 70 * (windowsWidth / 750)
					//计算卡片下方文字预留位置尺寸
				})
			})
			obj.exec() ;
		},
	},
})
