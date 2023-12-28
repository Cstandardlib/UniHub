<template>
  <Tree :data="formattedFoldersAndFiles" @node-click="handleNodeClick" ></Tree>
</template>
<script>
export default {
  data() {
    return {
      formattedFoldersAndFiles: []
    };
  },
  computed: {
    userData() {
      return this.$store.getters.getUserData;
    }
  },
  mounted() {
    // 在组件创建时调用处理数据的方法
    this.formatFoldersAndFiles();
  },
  methods: {
    formatFoldersAndFiles() {
      const userFoldersAndFiles = this.userData.UserHomeData.userFoldersAndFiles;

      this.formattedFoldersAndFiles = userFoldersAndFiles.map(folder => {
        return this.formatFolder(folder);
      });
    },
    formatFolder(folder) {
      const formattedFolder = {
        title: folder.folder_name,
        children: [] // 初始化 children 数组
      };

      if (folder.children && folder.children.length > 0) {
        folder.children.forEach(item => {
          if (item.type === 'folder') {
            // 递归处理子文件夹
            formattedFolder.children.push(this.formatFolder(item));
          } else if (item.type === 'file') {
            // 添加文件名
            formattedFolder.children.push({
              title: item.file_name,
            });
          }
        });
      }
      return formattedFolder;
    },
    handleNodeClick(nodeData) {
      // 如果点击的节点是文件，则触发事件，将文件 ID 存储到 Vuex 中
      console.log('Node Clicked:', nodeData);
      if (nodeData.fileId) {
        this.$store.commit('SET_SELECTED_FILE_ID', nodeData.fileId);
      }
    }
  },
}
</script>
