<h1 align="center">UniHub</h1>



### Introduce

`Unihub` is an online document system developed based on python. It is suitable for individuals and small teams to manage documents, knowledge and notes. It is committed to become a private online document deployment solution for the whole platform (web, desktop, mobile).

Current Platform：

- Web


## Example Site

http://47.94.214.230:2024/

username:test1  
password:123456

## Feature

- **Site Manage & User Manage**
    - Support user registration, login, management, administrator and other basic user functions;
    - Support site configuration registration invitation code, advertising code, statistics code, email retrieval password, site wide close registration, site wide forced login and other management functions;
    - It supports the configuration of the permission of the Project, and provides four permission modes: public, private, visible to the specified user and visible to the access code;
    
- **Document System**
    - Document writing and reading are based on the Project, with five modules, namely **project**, **document**, **document template**, **image** and **attachment**;
    - The `markdown` editor based on `editormd` and `vditor` is used to optimize and extend, and the `markdown` syntax is used for document writing, and image management and uploading, table pasting, mind mapping, flow chart drawing and sequence diagram drawing are supported;
    - Two column **document reading** page, three-level directory level display, document reading font scaling, font type switching, page social sharing, mobile reading optimization, text collection export PDF, ePub file;
    - Support the account based `API` interface, which can use the account `token` to get the corpus, upload pictures and create documents through the 'API';
    - Supports the project collaboration function. A project can have one Creator and multiple collaborators, and can flexibly select collaboration permissions;
    - It supports the function of document historical version to view and compare the differences between the historical version and the existing version, and restore a historical version to the current version;



## Simple Installation Tutorial

### 1. install dependent modules
```
pip install -r requirements.txt
```

### 2. Initialize database

After installing the required third-party library and configuring the database information, we need to initialize the database.

Open the command line interface under the project path and run the following command to generate the database migration:

```
python manage.py makemigrations 
```

Run the following command to perform database migration:

```
python manage.py migrate
```

After execution, the database is initialized.

### 3. Create Super User

After initializing the database, you need to create an administrator account to manage the whole mrdoc. Open the command line terminal in the project path and run the following command:

```
python manage.py createsuperuser
```

Follow the prompts to enter the user name, email address and password.

### 4、Test Running

After completing the above steps, you can run and use this project.

In the test environment, you can use the server provided by Django to run mrdoc. The command is:

```
python manage.py runserver
```




## Other Tools

- [Local Document Synchronization Tool By Atyin](https://gitee.com/atyin/mrdocTools)


## Dependent



- Python
- Django


## License

<a href="./LICENSE">GPL-3.0</a>

