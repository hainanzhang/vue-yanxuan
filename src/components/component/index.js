import tabs from './tab-bar/tabs'
import tab from './tab-bar/tab'

export default {
    install(Vue){
        Vue.component(tabs.name, tabs);
        Vue.component(tab.name, tab);
        //Vue.component(Scroller.name, Scroller);
    }
}
