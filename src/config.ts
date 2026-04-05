import type {
	AnnouncementConfig,
	CommentConfig,
	ExpressiveCodeConfig,
	FooterConfig,
	FullscreenWallpaperConfig,
	LicenseConfig,
	MusicPlayerConfig,
	NavBarConfig,
	ProfileConfig,
	SakuraConfig,
	SidebarLayoutConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

// 绉婚櫎i18n瀵煎叆浠ラ伩鍏嶅惊鐜緷璧?
// 瀹氫箟绔欑偣璇█
const SITE_LANG = "en"; // 璇█浠ｇ爜锛屼緥濡傦細'en', 'zh_CN', 'ja' 绛夈€?
export const siteConfig: SiteConfig = {
	title: "Herd1s",
	subtitle: "blog",

	lang: SITE_LANG,

	themeColor: {
		hue: 35, // 涓婚鑹茬殑榛樿鑹茬浉锛岃寖鍥翠粠 0 鍒?360銆備緥濡傦細绾㈣壊锛?锛岄潚鑹诧細200锛岃摑缁胯壊锛?50锛岀矇鑹诧細345
		fixed: false, // 瀵硅闂€呴殣钘忎富棰樿壊閫夋嫨鍣?	},

	// 鐗硅壊椤甸潰寮€鍏抽厤缃?鍏抽棴涓嶅湪浣跨敤鐨勯〉闈㈡湁鍔╀簬鎻愬崌SEO,鍏抽棴鍚庣洿鎺ュ湪椤堕儴瀵艰埅鍒犻櫎瀵瑰簲鐨勯〉闈㈠氨琛?
	featurePages: {
		anime: true, // 鐣墽椤甸潰寮€鍏?		diary: true, // 鏃ヨ椤甸潰寮€鍏?		friends: true, // 鍙嬮摼椤甸潰寮€鍏?		projects: true, // 椤圭洰椤甸潰寮€鍏?		skills: true, // 鎶€鑳介〉闈㈠紑鍏?		timeline: true, // 鏃堕棿绾块〉闈㈠紑鍏?		albums: true, // 鐩稿唽椤甸潰寮€鍏?	},

	// 椤舵爮鏍囬閰嶇疆
	navbarTitle: {
		// 椤舵爮鏍囬鏂囨湰
		text: "Herd1s",
		// 椤舵爮鏍囬鍥炬爣璺緞锛岄粯璁や娇鐢?public/assets/home/home.png
		icon: "assets/home/home.png",
	},

	bangumi: {
		userId: "your-bangumi-id", // 鍦ㄦ澶勮缃綘鐨凚angumi鐢ㄦ埛ID锛屽彲浠ヨ缃负 "sai" 娴嬭瘯
	},

	anime: {
		mode: "local", // 鐣墽椤甸潰妯″紡锛?bangumi" 浣跨敤Bangumi API锛?local" 浣跨敤鏈湴閰嶇疆
	},

	// 鏂囩珷鍒楄〃甯冨眬閰嶇疆
	postListLayout: {
		// 榛樿甯冨眬妯″紡锛?list" 鍒楄〃妯″紡锛堝崟鍒楀竷灞€锛夛紝"grid" 缃戞牸妯″紡锛堝弻鍒楀竷灞€锛?		defaultMode: "grid",
		// 鏄惁鍏佽鐢ㄦ埛鍒囨崲甯冨眬
		allowSwitch: true,
	},

	// 鏍囩鏍峰紡閰嶇疆
	tagStyle: {
		// 鏄惁浣跨敤鏂版牱寮忥紙鎮仠楂樹寒鏍峰紡锛夎繕鏄棫鏍峰紡锛堝妗嗗父浜牱寮忥級
		useNewStyle: false,
	},

	banner: {
		enable: true, // 鏄惁鍚姩Banner澹佺焊妯″紡

		// 鏀寔鍗曞紶鍥剧墖鎴栧浘鐗囨暟缁勶紝褰撴暟缁勯暱搴?> 1 鏃惰嚜鍔ㄥ惎鐢ㄨ疆鎾?		src: {
			desktop: [
				"/assets/desktop-banner/d1.webp",
				"/assets/desktop-banner/d2.webp",
				"/assets/desktop-banner/d3.webp",
				"/assets/desktop-banner/d4.webp",
				"/assets/desktop-banner/d5.webp",
				"/assets/desktop-banner/d6.webp",
				"/assets/desktop-banner/d7.webp",
			], // 妗岄潰妯箙鍥剧墖
			mobile: [
				"/assets/mobile-banner/m1.webp",
				"/assets/mobile-banner/m2.webp",
				"/assets/mobile-banner/m3.webp",
				"/assets/mobile-banner/m4.webp",
				"/assets/mobile-banner/m5.webp",
				"/assets/mobile-banner/m6.webp",
				"/assets/mobile-banner/m7.webp",
			], // 绉诲姩妯箙鍥剧墖
		}, // 浣跨敤鏈湴妯箙鍥剧墖

		position: "center", // 绛夊悓浜?object-position锛屼粎鏀寔 'top', 'center', 'bottom'銆傞粯璁や负 'center'

		carousel: {
			enable: true, // 涓?true 鏃讹細涓哄寮犲浘鐗囧惎鐢ㄨ疆鎾€備负 false 鏃讹細浠庢暟缁勪腑闅忔満鏄剧ず涓€寮犲浘鐗?
			interval: 60, // 杞挱闂撮殧鏃堕棿锛堢锛?		},

		waves: {
			enable: true, // 鏄惁鍚敤姘存尝绾规晥鏋?杩欎釜鍔熻兘姣旇緝鍚冩€ц兘)
			performanceMode: false, // 鎬ц兘妯″紡锛氬噺灏戝姩鐢诲鏉傚害(鎬ц兘鎻愬崌40%)
			mobileDisable: false, // 绉诲姩绔鐢?		},

		// PicFlow API鏀寔(鏅鸿兘鍥剧墖API)
		imageApi: {
			enable: false, // 鍚敤鍥剧墖API
			url: "http://domain.com/api_v2.php?format=text&count=4", // API鍦板潃锛岃繑鍥炴瘡琛屼竴涓浘鐗囬摼鎺ョ殑鏂囨湰
		},
		// 杩欓噷闇€瑕佷娇鐢≒icFlow API鐨凾ext杩斿洖绫诲瀷,鎵€浠ユ垜浠渶瑕乫ormat=text鍙傛暟
		// 椤圭洰鍦板潃:https://github.com/matsuzaka-yuki/PicFlow-API
		// 璇疯嚜琛屾惌寤篈PI

		homeText: {
			enable: true, // 鍦ㄤ富椤垫樉绀鸿嚜瀹氫箟鏂囨湰
			title: "ZeroTwo",
			subtitle: [
				"失去的东西，其实从来未曾真正地属于你，也不必惋惜。",
				"原来爱意太明显会把人推得更远。",
				"你如果爱着生活，生活一定比谁都清澈。",
				"世间万物都别等失去了，再来睹物思人。",
				"所有的期待和失望，都是因为你把自己看得太重要了。",
				"不要陷入乱想和自我否定的死循环。",
				"喜欢你才会做一个委屈鬼。",
				"我还在原地，傻傻地等你回来。",
				"别出现在我梦里，我负担不起醒来的落空。",
			],
			typewriter: {
				enable: true, // 鍚敤鍓爣棰樻墦瀛楁満鏁堟灉

				speed: 100, // 鎵撳瓧閫熷害锛堟绉掞級
				deleteSpeed: 40, // 鍒犻櫎閫熷害锛堟绉掞級
				pauseTime: 5000, // 瀹屽叏鏄剧ず鍚庣殑鏆傚仠鏃堕棿锛堟绉掞級
			},
		},

		credit: {
			enable: false, // 鏄剧ず妯箙鍥剧墖鏉ユ簮鏂囨湰

			text: "Describe", // 瑕佹樉绀虹殑鏉ユ簮鏂囨湰
			url: "", // 锛堝彲閫夛級鍘熷鑹烘湳鍝佹垨鑹烘湳瀹堕〉闈㈢殑 URL 閾炬帴
		},

		navbar: {
			transparentMode: "semifull", // 瀵艰埅鏍忛€忔槑妯″紡锛?semi" 鍗婇€忔槑鍔犲渾瑙掞紝"full" 瀹屽叏閫忔槑锛?semifull" 鍔ㄦ€侀€忔槑
		},

		// 鏁翠綋甯冨眬鏂规鍒囨崲鎸夐挳鏄剧ず璁剧疆锛堥粯璁わ細"desktop"锛?		// "off" = 涓嶆樉绀?		// "mobile" = 浠呭湪绉诲姩绔樉绀?		// "desktop" = 浠呭湪妗岄潰绔樉绀?		// "both" = 鍦ㄦ墍鏈夎澶囦笂鏄剧ず
		showModeSwitchOnMobile: "desktop",
	},
	toc: {
		enable: true,
		depth: 3,
	},
	generateOgImages: false,
	favicon: [
		// 留空以使用默认 favicon
	],

	// 字体配置
	font: {
		zenMaruGothic: {
			enable: true,
		},
		hanalei: {
			enable: false,
		},
	},
	showLastModified: true,
};

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
	enable: true, // 鍚敤鍏ㄥ睆澹佺焊鍔熻兘,闈濨anner妯″紡涓嬬敓鏁?	src: {
		desktop: [
			"/assets/desktop-banner/d1.webp",
			"/assets/desktop-banner/d2.webp",
			"/assets/desktop-banner/d3.webp",
			"/assets/desktop-banner/d4.webp",
			"/assets/desktop-banner/d5.webp",
			"/assets/desktop-banner/d6.webp",
			"/assets/desktop-banner/d7.webp",
		], // 妗岄潰妯箙鍥剧墖
		mobile: [
			"/assets/mobile-banner/m1.webp",
			"/assets/mobile-banner/m2.webp",
			"/assets/mobile-banner/m3.webp",
			"/assets/mobile-banner/m4.webp",
			"/assets/mobile-banner/m5.webp",
			"/assets/mobile-banner/m6.webp",
			"/assets/mobile-banner/m7.webp",
		], // 绉诲姩妯箙鍥剧墖
	}, // 浣跨敤鏈湴妯箙鍥剧墖
	position: "center", // 澹佺焊浣嶇疆锛岀瓑鍚屼簬 object-position
	carousel: {
		enable: true, // 鍚敤杞挱
		interval: 1, // 杞挱闂撮殧鏃堕棿锛堢锛?	},
	zIndex: -1, // 灞傜骇锛岀‘淇濆绾稿湪鑳屾櫙灞?	opacity: 0.8, // 澹佺焊閫忔槑搴?	blur: 1, // 鑳屾櫙妯＄硦绋嬪害
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		// 鏀寔鑷畾涔夊鑸爮閾炬帴,骞朵笖鏀寔澶氱骇鑿滃崟,3.1鐗堟湰鏂板姞
		{
			name: "閾炬帴",
			url: "/links/",
			icon: "material-symbols:link",
			children: [
				{
					name: "GitHub",
					url: "https://github.com/Herd1s",
					external: true,
					icon: "fa6-brands:github",
				},
				{
					name: "Bilibili",
					url: "https://space.bilibili.com/432356869",
					external: true,
					icon: "fa6-brands:bilibili",
				},
				{
					name: "Gitee",
					url: "https://gitee.com/hjuric",
					external: true,
					icon: "mdi:git",
				},
			],
		},
		{
			name: "鎴?,
			url: "/content/",
			icon: "material-symbols:person",
			children: [
				LinkPreset.Anime,
				LinkPreset.Diary,
				{
					name: "鐩稿唽",
					url: "/albums/",
					icon: "material-symbols:photo-library",
				},
			],
		},
		{
			name: "About",
			url: "/content/",
			icon: "material-symbols:info",
			children: [LinkPreset.About, LinkPreset.Friends],
		},
		{
			name: "Others",
			url: "#",
			icon: "material-symbols:more-horiz",
			children: [
				{
					name: "Projects",
					url: "/projects/",
					icon: "material-symbols:work",
				},
				{
					name: "Skills",
					url: "/skills/",
					icon: "material-symbols:psychology",
				},
				{
					name: "Timeline",
					url: "/timeline/",
					icon: "material-symbols:timeline",
				},
			],
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/assets/home/home.png", // 鐩稿浜?/src 鐩綍銆傚鏋滀互 '/' 寮€澶达紝鍒欑浉瀵逛簬 /public 鐩綍
	name: "Herd1s",
	bio: "The world is big, you have to go and see",
	typewriter: {
		enable: true, // 鍚敤涓汉绠€浠嬫墦瀛楁満鏁堟灉
		speed: 80, // 鎵撳瓧閫熷害锛堟绉掞級
	},
	links: [
		{
			name: "Bilibli",
			icon: "fa6-brands:bilibili",
			url: "https://space.bilibili.com/432356869",
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/hjuric",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/Herd1s",
		},
		// {
		// 	name: "Codeberg",
		// 	icon: "simple-icons:codeberg",
		// 	url: "https://codeberg.org",
		// },
		// {
		// 	name: "Discord",
		// 	icon: "fa6-brands:discord",
		// 	url: "https://discord.gg/MqW6TcQtVM",
		// },
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 娉ㄦ剰锛氭煇浜涙牱寮忥紙濡傝儗鏅鑹诧級宸茶瑕嗙洊锛岃鍙傞槄 astro.config.mjs 鏂囦欢銆?	// 璇烽€夋嫨娣辫壊涓婚锛屽洜涓烘鍗氬涓婚鐩墠浠呮敮鎸佹繁鑹茶儗鏅?	theme: "github-dark",
};

export const commentConfig: CommentConfig = {
	enable: false, // 鍚敤璇勮鍔熻兘銆傚綋璁剧疆涓?false 鏃讹紝璇勮缁勪欢灏嗕笉浼氭樉绀哄湪鏂囩珷鍖哄煙銆?	twikoo: {
		envId: "https://twikoo.vercel.app",
		lang: "en", // 璁剧疆 Twikoo 璇勮绯荤粺璇█涓鸿嫳鏂?	},
};

export const announcementConfig: AnnouncementConfig = {
	title: "Announcement", // 鍏憡鏍囬
	content: "Welcome to my blog!", // 鍏憡鍐呭
	closable: true, // 鍏佽鐢ㄦ埛鍏抽棴鍏憡
	link: {
		enable: true, // 鍚敤閾炬帴
		text: "Learn More", // 閾炬帴鏂囨湰
		url: "/about/", // 閾炬帴 URL
		external: false, // 鍐呴儴閾炬帴
	},
};

export const musicPlayerConfig: MusicPlayerConfig = {
    enable: true,
    mode: "local",
};

export const footerConfig: FooterConfig = {
	enable: false, // 鏄惁鍚敤Footer HTML娉ㄥ叆鍔熻兘
};

// 鐩存帴缂栬緫 FooterConfig.html 鏂囦欢鏉ユ坊鍔犲妗堝彿绛夎嚜瀹氫箟鍐呭

/**
 * 渚ц竟鏍忓竷灞€閰嶇疆
 * 鐢ㄤ簬鎺у埗渚ц竟鏍忕粍浠剁殑鏄剧ず銆佹帓搴忋€佸姩鐢诲拰鍝嶅簲寮忚涓? */
export const sidebarLayoutConfig: SidebarLayoutConfig = {
	// 鏄惁鍚敤渚ц竟鏍忓姛鑳?	enable: true,

	// 渚ц竟鏍忎綅缃細宸︿晶鎴栧彸渚?	position: "left",

	// 渚ц竟鏍忕粍浠堕厤缃垪琛?	components: [
		{
			// 缁勪欢绫诲瀷锛氱敤鎴疯祫鏂欑粍浠?			type: "profile",
			// 鏄惁鍚敤璇ョ粍浠?			enable: true,
			// 缁勪欢鏄剧ず椤哄簭锛堟暟瀛楄秺灏忚秺闈犲墠锛?			order: 1,
			// 缁勪欢浣嶇疆锛?top" 琛ㄧず鍥哄畾鍦ㄩ《閮?			position: "top",
			// CSS 绫诲悕锛岀敤浜庡簲鐢ㄦ牱寮忓拰鍔ㄧ敾
			class: "onload-animation",
			// 鍔ㄧ敾寤惰繜鏃堕棿锛堟绉掞級锛岀敤浜庨敊寮€鍔ㄧ敾鏁堟灉
			animationDelay: 0,
		},
		{
			// 缁勪欢绫诲瀷锛氬叕鍛婄粍浠?			type: "announcement",
			// 鏄惁鍚敤璇ョ粍浠讹紙鐜板湪閫氳繃缁熶竴閰嶇疆鎺у埗锛?			enable: true,
			// 缁勪欢鏄剧ず椤哄簭
			order: 2,
			// 缁勪欢浣嶇疆锛?top" 琛ㄧず鍥哄畾鍦ㄩ《閮?			position: "top",
			// CSS 绫诲悕
			class: "onload-animation",
			// 鍔ㄧ敾寤惰繜鏃堕棿
			animationDelay: 50,
		},
		{
			// 缁勪欢绫诲瀷锛氬垎绫荤粍浠?			type: "categories",
			// 鏄惁鍚敤璇ョ粍浠?			enable: true,
			// 缁勪欢鏄剧ず椤哄簭
			order: 3,
			// 缁勪欢浣嶇疆锛?sticky" 琛ㄧず绮樻€у畾浣嶏紝鍙粴鍔?			position: "sticky",
			// CSS 绫诲悕
			class: "onload-animation",
			// 鍔ㄧ敾寤惰繜鏃堕棿
			animationDelay: 150,
			// 鍝嶅簲寮忛厤缃?			responsive: {
				// 鎶樺彔闃堝€硷細褰撳垎绫绘暟閲忚秴杩?涓椂鑷姩鎶樺彔
				collapseThreshold: 5,
			},
		},
		{
			// 缁勪欢绫诲瀷锛氭爣绛剧粍浠?			type: "tags",
			// 鏄惁鍚敤璇ョ粍浠?			enable: true,
			// 缁勪欢鏄剧ず椤哄簭
			order: 5,
			// 缁勪欢浣嶇疆锛?sticky" 琛ㄧず绮樻€у畾浣?			position: "sticky",
			// CSS 绫诲悕
			class: "onload-animation",
			// 鍔ㄧ敾寤惰繜鏃堕棿
			animationDelay: 250,
			// 鍝嶅簲寮忛厤缃?			responsive: {
				// 鎶樺彔闃堝€硷細褰撴爣绛炬暟閲忚秴杩?0涓椂鑷姩鎶樺彔
				collapseThreshold: 20,
			},
		},
	],

	// 榛樿鍔ㄧ敾閰嶇疆
	defaultAnimation: {
		// 鏄惁鍚敤榛樿鍔ㄧ敾
		enable: true,
		// 鍩虹寤惰繜鏃堕棿锛堟绉掞級
		baseDelay: 0,
		// 閫掑寤惰繜鏃堕棿锛堟绉掞級锛屾瘡涓粍浠朵緷娆″鍔犵殑寤惰繜
		increment: 50,
	},

	// 鍝嶅簲寮忓竷灞€閰嶇疆
	responsive: {
		// 鏂偣閰嶇疆锛堝儚绱犲€硷級
		breakpoints: {
			// 绉诲姩绔柇鐐癸細灞忓箷瀹藉害灏忎簬768px
			mobile: 768,
			// 骞虫澘绔柇鐐癸細灞忓箷瀹藉害灏忎簬1024px
			tablet: 1024,
			// 妗岄潰绔柇鐐癸細灞忓箷瀹藉害灏忎簬1280px
			desktop: 1280,
		},
		// 涓嶅悓璁惧鐨勫竷灞€妯″紡
		//hidden:涓嶆樉绀轰晶杈规爮(妗岄潰绔?   drawer:鎶藉眽妯″紡(绉诲姩绔笉鏄剧ず)   sidebar:鏄剧ず渚ц竟鏍?		layout: {
			// 绉诲姩绔細鎶藉眽妯″紡
			mobile: "sidebar",
			// 骞虫澘绔細鏄剧ず渚ц竟鏍?			tablet: "sidebar",
			// 妗岄潰绔細鏄剧ず渚ц竟鏍?			desktop: "sidebar",
		},
	},
};

export const sakuraConfig: SakuraConfig = {
	enable: false, // 榛樿鍏抽棴妯辫姳鐗规晥
	sakuraNum: 21, // 妯辫姳鏁伴噺
	limitTimes: -1, // 妯辫姳瓒婄晫闄愬埗娆℃暟锛?1涓烘棤闄愬惊鐜?	size: {
		min: 0.5, // 妯辫姳鏈€灏忓昂瀵稿€嶆暟
		max: 1.1, // 妯辫姳鏈€澶у昂瀵稿€嶆暟
	},
	opacity: {
		min: 0.3, // 妯辫姳鏈€灏忎笉閫忔槑搴?		max: 0.9, // 妯辫姳鏈€澶т笉閫忔槑搴?	},
	speed: {
		horizontal: {
			min: -1.7, // 姘村钩绉诲姩閫熷害鏈€灏忓€?			max: -1.2, // 姘村钩绉诲姩閫熷害鏈€澶у€?		},
		vertical: {
			min: 1.5, // 鍨傜洿绉诲姩閫熷害鏈€灏忓€?			max: 2.2, // 鍨傜洿绉诲姩閫熷害鏈€澶у€?		},
		rotation: 0.03, // 鏃嬭浆閫熷害
		fadeSpeed: 0.03, // 娑堝け閫熷害锛屼笉搴斿ぇ浜庢渶灏忎笉閫忔槑搴?	},
	zIndex: 100, // 灞傜骇锛岀‘淇濇ū鑺卞湪鍚堥€傜殑灞傜骇鏄剧ず
};

// Pio 鐪嬫澘濞橀厤缃?export const pioConfig: import("./types/config").PioConfig = {
	enable: true, // 鍚敤鐪嬫澘濞?	models: ["/pio/models/pio/model.json"], // 榛樿妯″瀷璺緞
	position: "left", // 榛樿浣嶇疆鍦ㄥ彸渚?	width: 280, // 榛樿瀹藉害
	height: 250, // 榛樿楂樺害
	mode: "draggable", // 榛樿涓哄彲鎷栨嫿妯″紡
	hiddenOnMobile: true, // 榛樿鍦ㄧЩ鍔ㄨ澶囦笂闅愯棌
	dialog: {
		welcome: "鎴戞槸02!", // 娆㈣繋璇?		touch: [
			"浣犲湪鍋氫粈涔堝憿?",
			"鍒鎴?",
			"鍙樻€佸惂!",
			"鍒偅鏍峰鎴?",
			"蹇簺浠ｇ爜鍘?,
		], // 瑙︽懜鎻愮ず
		home: "鐐规垜鍥炲埌涓婚〉", // 棣栭〉鎻愮ず
		skin: ["鎯崇湅鎴戠殑鏂拌。鏈嶅悧?", "鏂拌。鏈嶄笉閿欏憿~"], // 鎹㈣鎻愮ず
		close: "涓嬫鍐嶇湅鍚", // 鍏抽棴鎻愮ず
		link: "https://github.com/matsuzaka-yuki/Mizuki", // 鍏充簬閾炬帴
	},
};

// 瀵煎嚭鎵€鏈夐厤缃殑缁熶竴鎺ュ彛
export const widgetConfigs = {
	profile: profileConfig,
	announcement: announcementConfig,
	music: musicPlayerConfig,
	layout: sidebarLayoutConfig,
	sakura: sakuraConfig,
	fullscreenWallpaper: fullscreenWallpaperConfig,
	pio: pioConfig, // 娣诲姞 pio 閰嶇疆
} as const;

export const umamiConfig = {
	enabled: false, // 鏄惁鏄剧ずUmami缁熻
	apiKey: import.meta.env.UMAMI_API_KEY || "api_xxxxxxxx", // API瀵嗛挜浼樺厛浠庣幆澧冨彉閲忚鍙栵紝鍚﹀垯浣跨敤閰嶇疆鏂囦欢涓殑鍊?	baseUrl: "https://api.umami.is", // Umami Cloud API鍦板潃
	scripts: `
<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>
  `.trim(), // 涓婇潰濉綘瑕佹彃鍏ョ殑Script,涓嶇敤鍐嶅幓Layout涓彃鍏?} as const;








