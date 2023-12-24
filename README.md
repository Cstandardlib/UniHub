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

## 用户名和密码
### mongosh
```sh
mongosh --username unihubroot --password unihubroot --authenticationDatabase unihub
mongosh -u root -p
```

### mysql
root
root