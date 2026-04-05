import type { DARK_MODE, LIGHT_MODE, WALLPAPER_BANNER, WALLPAPER_FULLSCREEN, WALLPAPER_NONE } from "../constants/constants";

export type SiteConfig = {
	title: string;
	subtitle: string;
	keywords?: string[]; // 绔欑偣鍏抽敭璇嶏紝鐢ㄤ簬鐢熸垚 <meta name="keywords">

	lang:
		| "en"
		| "zh_CN"
		| "zh_TW"
		| "ja"
		| "ko"
		| "es"
		| "th"
		| "vi"
		| "tr"
		| "id";

	themeColor: {
		hue: number;
		fixed: boolean;
	};

	// 鐗硅壊椤甸潰寮€鍏抽厤缃?	featurePages: {
		anime: boolean; // 鐣墽椤甸潰寮€鍏?		diary: boolean; // 鏃ヨ椤甸潰寮€鍏?		friends: boolean; // 鍙嬮摼椤甸潰寮€鍏?		projects: boolean; // 椤圭洰椤甸潰寮€鍏?		skills: boolean; // 鎶€鑳介〉闈㈠紑鍏?		timeline: boolean; // 鏃堕棿绾块〉闈㈠紑鍏?		albums: boolean; // 鐩稿唽椤甸潰寮€鍏?	};

	// 鏂囩珷鍒楄〃甯冨眬閰嶇疆
	postListLayout: {
		defaultMode: "list" | "grid"; // 榛樿甯冨眬妯″紡锛歭ist=鍒楄〃妯″紡锛実rid=缃戞牸妯″紡
		allowSwitch: boolean; // 鏄惁鍏佽鐢ㄦ埛鍒囨崲甯冨眬
	};

	// 椤舵爮鏍囬閰嶇疆
	navbarTitle?: {
		text: string; // 椤舵爮鏍囬鏂囨湰
		icon?: string; // 椤舵爮鏍囬鍥炬爣璺緞
	};

	// 娣诲姞瀛椾綋閰嶇疆
	font: {
		zenMaruGothic: {
			enable: boolean; // 鏄惁浣跨敤 ZenMaruGothic-Black 浣滀负鍏ㄥ眬瀛椾綋
		};
		hanalei: {
			enable: boolean; // 鏄惁浣跨敤 Hanalei 浣滀负鍏ㄥ眬瀛椾綋
		};
	};

	// 娣诲姞bangumi閰嶇疆
	bangumi?: {
		userId?: string; // Bangumi鐢ㄦ埛ID
	};

	// 娣诲姞鐣墽椤甸潰閰嶇疆
	anime?: {
		mode?: "bangumi" | "local"; // 鐣墽椤甸潰妯″紡
	};

	// 鏍囩鏍峰紡閰嶇疆
	tagStyle?: {
		useNewStyle?: boolean; // 鏄惁浣跨敤鏂版牱寮忥紙鎮仠楂樹寒鏍峰紡锛夎繕鏄棫鏍峰紡锛堝妗嗗父浜牱寮忥級
	};

	banner: {
		enable: boolean;
		src:
			| string
			| string[]
			| {
					desktop?: string | string[];
					mobile?: string | string[];
			  }; // 鏀寔鍗曚釜鍥剧墖銆佸浘鐗囨暟缁勬垨鍒嗗埆璁剧疆妗岄潰绔拰绉诲姩绔浘鐗?		position?: "top" | "center" | "bottom";
		carousel?: {
			enable: boolean; // 鏄惁鍚敤杞挱
			interval: number; // 杞挱闂撮殧鏃堕棿锛堢锛?		};
		waves?: {
			enable: boolean; // 鏄惁鍚敤姘存尝绾规晥鏋?			performanceMode?: boolean; // 鎬ц兘妯″紡锛氬噺灏戝姩鐢诲鏉傚害
			mobileDisable?: boolean; // 绉诲姩绔鐢?		};
		imageApi?: {
			enable: boolean; // 鏄惁鍚敤鍥剧墖API
			url: string; // API鍦板潃锛岃繑鍥炴瘡琛屼竴涓浘鐗囬摼鎺ョ殑鏂囨湰
		};
		homeText?: {
			enable: boolean; // 鏄惁鍦ㄩ椤垫樉绀鸿嚜瀹氫箟鏂囧瓧
			title?: string; // 涓绘爣棰?			subtitle?: string | string[]; // 鍓爣棰橈紝鏀寔鍗曚釜瀛楃涓叉垨瀛楃涓叉暟缁?			typewriter?: {
				enable: boolean; // 鏄惁鍚敤鎵撳瓧鏈烘晥鏋?				speed: number; // 鎵撳瓧閫熷害锛堟绉掞級
				deleteSpeed: number; // 鍒犻櫎閫熷害锛堟绉掞級
				pauseTime: number; // 瀹屾暣鏄剧ず鍚庣殑鏆傚仠鏃堕棿锛堟绉掞級
			};
		};
		credit: {
			enable: boolean;
			text: string;
			url?: string;
		};
		navbar?: {
			transparentMode?: "semi" | "full" | "semifull"; // 瀵艰埅鏍忛€忔槑妯″紡
		};
		showModeSwitchOnMobile?: "off" | "mobile" | "desktop" | "both"; // 鏁翠綋甯冨眬鏂规鍒囨崲鎸夐挳鏄剧ず璁剧疆锛歰ff=闅愯棌锛宮obile=浠呯Щ鍔ㄧ锛宒esktop=浠呮闈㈢锛宐oth=鍏ㄩ儴鏄剧ず
	};
	toc: {
		enable: boolean;
		depth: 1 | 2 | 3;
	};
	generateOgImages: boolean;
	favicon: Favicon[];
	showLastModified: boolean; // 鎺у埗鈥滀笂娆＄紪杈戔€濆崱鐗囨樉绀虹殑寮€鍏?};

export type Favicon = {
	src: string;
	theme?: "light" | "dark";
	sizes?: string;
};

export enum LinkPreset {
	Home = 0,
	Archive = 1,
	About = 2,
	Friends = 3,
	Anime = 4,
	Diary = 5,

	Projects = 7,
	Skills = 8,
	Timeline = 9,
}

export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
	icon?: string; // 鑿滃崟椤瑰浘鏍?	children?: (NavBarLink | LinkPreset)[]; // 鏀寔瀛愯彍鍗曪紝鍙互鏄疦avBarLink鎴朙inkPreset
};

export type NavBarConfig = {
	links: (NavBarLink | LinkPreset)[];
};

export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
	typewriter?: {
		enable: boolean; // 鏄惁鍚敤鎵撳瓧鏈烘晥鏋?		speed?: number; // 鎵撳瓧閫熷害锛堟绉掞級
	};
};

export type LicenseConfig = {
	enable: boolean;
	name: string;
	url: string;
};
// 璇勮閰嶇疆

export type CommentConfig = {
	enable: boolean; // 鏄惁鍚敤璇勮鍔熻兘
	twikoo?: TwikooConfig;
};

type TwikooConfig = {
	envId: string;
	region?: string;
	lang?: string;
};

export type LIGHT_DARK_MODE = typeof LIGHT_MODE | typeof DARK_MODE;

export type WALLPAPER_MODE = typeof WALLPAPER_BANNER | typeof WALLPAPER_FULLSCREEN | typeof WALLPAPER_NONE;

export type BlogPostData = {
	body: string;
	title: string;
	published: Date;
	description: string;
	tags: string[];
	draft?: boolean;
	image?: string;
	category?: string;
	pinned?: boolean;
	prevTitle?: string;
	prevSlug?: string;
	nextTitle?: string;
	nextSlug?: string;
};

export type ExpressiveCodeConfig = {
	theme: string;
};

export type AnnouncementConfig = {
	// enable灞炴€у凡绉婚櫎锛岀幇鍦ㄩ€氳繃sidebarLayoutConfig缁熶竴鎺у埗
	title?: string; // 鍏憡鏍忔爣棰?	content: string; // 鍏憡鏍忓唴瀹?	icon?: string; // 鍏憡鏍忓浘鏍?	type?: "info" | "warning" | "success" | "error"; // 鍏憡绫诲瀷
	closable?: boolean; // 鏄惁鍙叧闂?	link?: {
		enable: boolean; // 鏄惁鍚敤閾炬帴
		text: string; // 閾炬帴鏂囧瓧
		url: string; // 閾炬帴鍦板潃
		external?: boolean; // 鏄惁澶栭儴閾炬帴
	};
};

export type MusicPlayerConfig = {
    enable: boolean;
    mode?: "local" | "meting";
    meting_api?: string;
    id?: string;
    server?: string;
    type?: "playlist" | "song" | "album" | "search" | "artist";
};

export type FooterConfig = {
	enable: boolean; // 鏄惁鍚敤Footer HTML娉ㄥ叆鍔熻兘
	customHtml?: string; // 鑷畾涔塇TML鍐呭锛岀敤浜庢坊鍔犲妗堝彿绛変俊鎭?};

// 缁勪欢閰嶇疆绫诲瀷瀹氫箟
export type WidgetComponentType =
	| "profile"
	| "announcement"
	| "categories"
	| "tags"
	| "toc"
	| "music-player"
	| "pio" // 娣诲姞 pio 缁勪欢绫诲瀷
	| "custom";

export type WidgetComponentConfig = {
	type: WidgetComponentType; // 缁勪欢绫诲瀷
	enable: boolean; // 鏄惁鍚敤璇ョ粍浠?	order: number; // 鏄剧ず椤哄簭锛屾暟瀛楄秺灏忚秺闈犲墠
	position: "top" | "sticky"; // 缁勪欢浣嶇疆锛氶《閮ㄥ浐瀹氬尯鍩熸垨绮樻€у尯鍩?	class?: string; // 鑷畾涔塁SS绫诲悕
	style?: string; // 鑷畾涔夊唴鑱旀牱寮?	animationDelay?: number; // 鍔ㄧ敾寤惰繜鏃堕棿锛堟绉掞級
	responsive?: {
		hidden?: ("mobile" | "tablet" | "desktop")[]; // 鍦ㄦ寚瀹氳澶囦笂闅愯棌
		collapseThreshold?: number; // 鎶樺彔闃堝€?	};
	customProps?: Record<string, any>; // 鑷畾涔夊睘鎬э紝鐢ㄤ簬鎵╁睍缁勪欢鍔熻兘
};

export type SidebarLayoutConfig = {
	enable: boolean; // 鏄惁鍚敤渚ц竟鏍?	position: "left" | "right"; // 渚ц竟鏍忎綅缃細宸︿晶鎴栧彸渚?	components: WidgetComponentConfig[]; // 缁勪欢閰嶇疆鍒楄〃
	defaultAnimation: {
		enable: boolean; // 鏄惁鍚敤榛樿鍔ㄧ敾
		baseDelay: number; // 鍩虹寤惰繜鏃堕棿锛堟绉掞級
		increment: number; // 姣忎釜缁勪欢閫掑鐨勫欢杩熸椂闂达紙姣锛?	};
	responsive: {
		breakpoints: {
			mobile: number; // 绉诲姩绔柇鐐癸紙px锛?			tablet: number; // 骞虫澘绔柇鐐癸紙px锛?			desktop: number; // 妗岄潰绔柇鐐癸紙px锛?		};
		layout: {
			mobile: "hidden" | "bottom" | "drawer" | "sidebar"; // 绉诲姩绔竷灞€妯″紡
			tablet: "sidebar" | "bottom" | "drawer"; // 骞虫澘绔竷灞€妯″紡
			desktop: "sidebar"; // 妗岄潰绔竷灞€妯″紡
		};
	};
};

export type SakuraConfig = {
	enable: boolean; // 鏄惁鍚敤妯辫姳鐗规晥
	sakuraNum: number; // 妯辫姳鏁伴噺锛岄粯璁?1
	limitTimes: number; // 妯辫姳瓒婄晫闄愬埗娆℃暟锛?1涓烘棤闄愬惊鐜?	size: {
		min: number; // 妯辫姳鏈€灏忓昂瀵稿€嶆暟
		max: number; // 妯辫姳鏈€澶у昂瀵稿€嶆暟
	};
	opacity: {
		min: number; // 妯辫姳鏈€灏忎笉閫忔槑搴?		max: number; // 妯辫姳鏈€澶т笉閫忔槑搴?	};
	speed: {
		horizontal: {
			min: number; // 姘村钩绉诲姩閫熷害鏈€灏忓€?			max: number; // 姘村钩绉诲姩閫熷害鏈€澶у€?		};
		vertical: {
			min: number; // 鍨傜洿绉诲姩閫熷害鏈€灏忓€?			max: number; // 鍨傜洿绉诲姩閫熷害鏈€澶у€?		};
		rotation: number; // 鏃嬭浆閫熷害
		fadeSpeed: number; // 娑堝け閫熷害
	};
	zIndex: number; // 灞傜骇锛岀‘淇濇ū鑺卞湪鍚堥€傜殑灞傜骇鏄剧ず
};

export type FullscreenWallpaperConfig = {
	enable: boolean; // 鏄惁鍚敤鍏ㄥ睆澹佺焊鍔熻兘
	src:
		| string
		| string[]
		| {
				desktop?: string | string[];
				mobile?: string | string[];
		  }; // 鏀寔鍗曚釜鍥剧墖銆佸浘鐗囨暟缁勬垨鍒嗗埆璁剧疆妗岄潰绔拰绉诲姩绔浘鐗?	position?: "top" | "center" | "bottom"; // 澹佺焊浣嶇疆锛岀瓑鍚屼簬 object-position
	carousel?: {
		enable: boolean; // 鏄惁鍚敤杞挱
		interval: number; // 杞挱闂撮殧鏃堕棿锛堢锛?	};
	zIndex?: number; // 灞傜骇锛岀‘淇濆绾稿湪鍚堥€傜殑灞傜骇鏄剧ず
	opacity?: number; // 澹佺焊閫忔槑搴︼紝0-1涔嬮棿
	blur?: number; // 鑳屾櫙妯＄硦绋嬪害锛屽崟浣峱x
};

/**
 * Pio 鐪嬫澘濞橀厤缃? */
export type PioConfig = {
	enable: boolean; // 鏄惁鍚敤鐪嬫澘濞?	models?: string[]; // 妯″瀷鏂囦欢璺緞鏁扮粍
	position?: "left" | "right"; // 鐪嬫澘濞樹綅缃?	width?: number; // 鐪嬫澘濞樺搴?	height?: number; // 鐪嬫澘濞橀珮搴?	mode?: "static" | "fixed" | "draggable"; // 灞曠幇妯″紡
	hiddenOnMobile?: boolean; // 鏄惁鍦ㄧЩ鍔ㄨ澶囦笂闅愯棌
	dialog?: {
		welcome?: string | string[]; // 娆㈣繋璇?		touch?: string | string[]; // 瑙︽懜鎻愮ず
		home?: string; // 棣栭〉鎻愮ず
		skin?: [string, string]; // 鎹㈣鎻愮ず [鍒囨崲鍓? 鍒囨崲鍚嶿
		close?: string; // 鍏抽棴鎻愮ず
		link?: string; // 鍏充簬閾炬帴
		custom?: Array<{
			selector: string; // CSS閫夋嫨鍣?			type: "read" | "link"; // 绫诲瀷
			text?: string; // 鑷畾涔夋枃鏈?		}>;
	};
};



