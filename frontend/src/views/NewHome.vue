<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" @on-select="turnUrl" :active-name="$route.name">
                    <div class="layout-logo">
                        <Image src="src/assets/unihub-logo-trans.png" fit="fill" width="150px" alt="fit" />
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="/">
                        <Icon type="ios-navigate"></Icon>
                        Home
                        </MenuItem>
                        <MenuItem name="newhome">
                        <Icon type="ios-navigate"></Icon>
                        File
                        </MenuItem>
                        <MenuItem name="3">
                        <Icon type="ios-navigate"></Icon>
                        Ddl
                        </MenuItem>
                        <MenuItem name="4">
                        <Icon type="ios-analytics"></Icon>
                        User
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout :style="{ padding: '0 50px' }">
                <Content :style="{ padding: '24px 0', minHeight: '280px', background: '#fff' }">
                    <Layout>

                        <Sider hide-trigger :style="{ background: '#fff' }">
                            <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                                <TreeView :data="userFoldersAndFiles" @folderClick="toggleFolder"
                                    @documentClick="showDocument" />
                            </Menu>
                        </Sider>

                        <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">

                            <Space wrap>
                                <Button @click="saveToCurrent" type="primary" shape="circle"
                                    icon="ios-cloud-upload-outline">Save</Button>
                            </Space>

                            <Breadcrumb :style="{ margin: '16px 0' }">
                                <BreadcrumbItem>Home</BreadcrumbItem>
                                <BreadcrumbItem>Folder</BreadcrumbItem>
                                <BreadcrumbItem>File</BreadcrumbItem>
                            </Breadcrumb>

                            <div>
                                <v-md-editor :style="{ top: '150px', left: '240px' }" :placeholder="placeholder"
                                    :disabled-menus="[]" v-model="markdownContent" :height="height" @change="handleChange">
                                </v-md-editor>
                            </div>

                        </Content>
                    </Layout>
                </Content>
            </Layout>

            <Footer class="layout-footer-center">
                2023 &copy; Unihub::io
            </Footer>

        </Layout>
    </div>
</template>

<script>
import TreeView from './TreeView.vue';
import { mapState } from 'vuex';
import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3005' // 端口号和域名为后端地址
});
export default {
    components: {
        TreeView,
    },
    data() {
        return {

            markdownContent:
                //'Hello, World! \n ![Pku logo](https://vim.pku.edu.cn/images/content/2017-10/20171027165035344238.jpg)'
                'Welcome to PKU!'
            ,
        };
    },
    computed: {
        ...mapState({
            userData: state => state.userData.UserHomeData,
            userFoldersAndFiles: state => state.userData.UserHomeData.userFoldersAndFiles,
            selectedDocument: state => state.selectedDocument, // 获取选中的文档
            // 可以根据需要继续映射其他状态
        }),
    },
    methods: {
        turnUrl(name) {
            this.$router.push(name);
        },
        toggleFolder(folder) {
            this.$store.commit('TOGGLE_FOLDER_EXPANDED', folder);
        },
        showDocument(document) {
            this.$store.commit('SET_SELECTED_DOCUMENT', document); // 设置选中的文档
            this.selectedDocument = document; // 更新选中文档
            this.markdownContent = document.content; // 更新文档内容
            this.$store.commit('UPDATE_SELECTED_DOCUMENT_CONTENT', document); // 更新 Vuex 中选中文档内容

        },
        async saveToCurrent() {
            this.selectedDocument.content = this.markdownContent; // 更新文档内容
            // 提交 mutation 更新 Vuex 中的选中文档内容
            this.$store.commit('UPDATE_SELECTED_DOCUMENT_CONTENT', this.selectedDocument);
            localStorage.setItem(`markdownContent_${this.currentMdKey}`, this.markdownContent);

            try {
                // 发送保存请求给后端
                const response = await axiosInstance.post('/api/savefile', {
                    file_id: this.selectedDocument.file_id,
                    content: this.markdownContent
                });

                // 如果后端成功保存内容，更新 Vuex 中的文档内容
                if (response.status === 200) {
                    this.$store.commit('UPDATE_SELECTED_DOCUMENT_CONTENT', this.markdownContent);
                    // 或者根据需要更新其他状态
                }
            } catch (error) {
                console.error('Error while saving content:', error);
                // 处理保存失败的情况
            }
        }
    }
}
</script>

<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    /*
    top: 150px;
    left: 200px;
*/
}

.layout-logo {
    /*
    width: 100px;
    height: 30px;
*/
    width: 150px;
    height: 45px;
    /*    background: #5b6270;*/
    border-radius: 3px;
    float: left;
    position: relative;
    /*
    top: 15px;
    left: 20px;
*/
}

.layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
    top: 150px;
    left: 200px;
}

.layout-footer-center {
    text-align: center;
}
</style>