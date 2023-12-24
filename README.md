## 如何运行
### mongodb(mongoose)
```sh
sudo systemctl start mongod
```
```sh
sudo systemctl status mongod
```

### backend
```sh
nodemon server.js
```

### frontend
```sh
npm run serve
```

### mysql2


## 如何导入
### mongodb
```sh
mongorestore --db unihub /path/to/unihub1224
```

### mysql
```sh
mysql -u root -p unihub < mysql_1224.sql
```

## 安装
> 安装：mysql，mongodb  
> npm安装：mysql2，mongoose  
> 设置mysql和mongodb的用户名和密码：mysql是root、root；mongodb是unihubroot、unihubroot  
