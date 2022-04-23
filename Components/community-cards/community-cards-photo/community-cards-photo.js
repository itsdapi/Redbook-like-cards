// Component/cards/communityCards/communityCards.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		width: {type: String,value: ""},
		gap: {type: String,value: ""},
		backgroundImage: {type: String,value: ""},
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
		backupHeight: "",
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
		},

		handleImageInfo(e){
			var titleHeight
			var imageHeight
			var titleHeight
			var that=this
			var windowsWidth = wx.getSystemInfoSync().windowWidth
			var obj=this.createSelectorQuery();
			imageHeight =  ( this.properties.width / e.detail.width ) * e.detail.height
			//先计算图片高度
			obj.selectAll('#title-id').boundingClientRect(function (rect) {
				titleHeight = rect[0].height * (750 / windowsWidth)
				//计算卡片下方文字预留位置尺寸
				that.setData({
					cardsHeight: imageHeight + titleHeight
					//计算总卡片高度
				})
				// console.log(titleHeight)
			})
			obj.exec();
		},
		//计算卡片高度 图片bindload会返回一个event 里面有图片的原始信息 目前还做不到限制图片高度233

		handleLoadError(){
			this.setData({
				backgroundImage: "/images/nevergonnagiveyouup.jpg"
			})
			this.handleImageInfo()
		},
	},

	options: {
		addGlobalClass: true
	},


	lifetimes: {

	},
})
