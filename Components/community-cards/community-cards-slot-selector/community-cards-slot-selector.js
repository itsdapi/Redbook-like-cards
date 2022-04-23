// Component/cards/community-cards/community-cards-slot-selector/community-cards-slot-selector.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		width: {type: String,value: "345"},
		gap: {type: String,value: "20"},
		backgroundImage: {type: String,value: ""},
		title: {type: String,value: "标题（限14字）"},
		userinfo_username: {type: String,value: "用户名（限9字）"},
		userinfo_headshot: {type: String,value: "/images/cat02.jpg"},
		likesCounter: {type: Number,value: "0"},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		isPhoto: 'true',
		isText: 'false',
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

	},
	
	lifetimes: {
		attached: function mode_switcher() {
			if(this.properties.backgroundImage === ""){
				this.setData({
					isText: 'true',
					isPhoto: 'false'
				})
			}
			else{
				this.setData({
					isText: 'false',
					isPhoto: 'true'
				})
			}
		}
	}
})
