const module_side_menus = {
  namespaced: true, // 需要开启命名空间 识别这个module
  state: {
    actived_index: '/home',
    items: [
      { path: '/home', component: () => import("@/components/Layout.vue"), meta: { name: '主页'} }
    ]
  },
  mutations: {
    update_actived_index() {}
  },
  actions: {},
  getters: {}
}

export default module_side_menus