

/*
接口功能：分类列表
method: GET
*/
const CATE_LIST_URL = '/api/catelist';


/*
接口功能：首页轮播图数据
method: GET
*/
const HOME_BANNER_LIST_URL = '/api/home/bannerlist';

// 网易严选协议
const POLICY_LIST_URL = '/api/policylist';

// 首页分类列表
const HOME_CATE_LIST_URL = '/api/home/catelist';

// 首页活动
const HOME_ACTIVITY_URL = '/api/home/activitylist';

//品牌制造商直供
const HOME_TAG_LIST_URL = '/api/home/tagList';



//类目热销榜
const HOME_CATE_HOT_SELL_URL = '/api/home/catehotsell';

// 人气推荐
const HOME_POPULAR_LIST_URL = '/api/home/popularlist';

// 限时购
const HOME_FLASH_SALE_URL = '/api/home/flashsale';



// 新品首发
const HOME_NEW_ITEM_URL = '/api/home/newitemlist';

// 购物指南
const HOME_SHOPPING_GUIDE_URL = '/api/home/shoppingguide';

// 推荐列表
const HOME_TOP_CATELIST_URL = '/api/home/top/catelist';

// 分类列表数
// 参数id
const HOME_CATE_ITEM_LIST_URL = '/api/home/catelist/itemlist';

// 商品详情 
// 参数id 
const ITEM_DETAIL_URL = '/api/item/detail';





//分类
const CATEGOEY_LIST_URL = '/api/category/listmap';

//分类数据
// 参数categoryId
const CATEGOEY_LIST_GROUP_URL = '/api/category/listmap/group';

// 分类商品列表
//参数：categoryId subCategoryId
const CATEGOEY_LIST_GROUP_ITEM_URL = '/api/category/listmap/group/item';





// 识物tab数据
const TOPIC_FIND_TABS_URL = '/api/topic/find/getTabs';

// 识物tab列表数据
// 参数：tabId (默认值为9  推荐9，达人4，上新5，home6)   size   page
const TOPIC_FIND_TAB_DATA_URL = '/api/topic/find/getTabData';

// 识物tab晒单banner数据
const TOPIC_FIND_SHOW_BANNER_URL = '/api/topic/find/getTabShowBanner';
// 识物tab晒单列表数据 
// 参数：page  size  type:1最新，2本月最热，3晒单合辑
const TOPIC_FIND_SHOW_DATA_URL = '/api/topic/find/getTabShowData';

// 热门搜索词汇
const HOT_SEARCH_WORDS_URL = '/api/search/hotwords';


//HOME_TAG_LIST_URL，HOME_CATE_HOT_SELL_URL，HOME_POPULAR_LIST_URL，HOME_FLASH_SALE_URL，HOME_NEW_ITEM_URL，HOME_SHOPPING_GUIDE_URL，HOME_TOP_CATELIST_URL，HOME_CATE_ITEM_LIST_URL，ITEM_DETAIL_URL，CATEGOEY_LIST_URL，CATEGOEY_LIST_GROUP_URL，CATEGOEY_LIST_GROUP_ITEM_URL，TOPIC_FIND_TABS_URL，TOPIC_FIND_TAB_DATA_URL，TOPIC_FIND_SHOW_BANNER_URL，TOPIC_FIND_SHOW_DATA_URL，HOT_SEARCH_WORDS_URL

export default {
   	CATE_LIST_URL,
   	HOME_BANNER_LIST_URL,
   	POLICY_LIST_URL,
   	HOME_CATE_LIST_URL,
   	HOME_ACTIVITY_URL,
	HOME_TAG_LIST_URL,
	HOME_CATE_HOT_SELL_URL,
	HOME_POPULAR_LIST_URL,
	HOME_FLASH_SALE_URL,
	HOME_NEW_ITEM_URL,
	HOME_SHOPPING_GUIDE_URL,
	HOME_TOP_CATELIST_URL,
	HOME_CATE_ITEM_LIST_URL,
	ITEM_DETAIL_URL,
	CATEGOEY_LIST_URL,
	CATEGOEY_LIST_GROUP_URL,
	CATEGOEY_LIST_GROUP_ITEM_URL,
	TOPIC_FIND_TABS_URL,
	TOPIC_FIND_TAB_DATA_URL,
	TOPIC_FIND_SHOW_BANNER_URL,
	TOPIC_FIND_SHOW_DATA_URL,
	HOT_SEARCH_WORDS_URL
}
