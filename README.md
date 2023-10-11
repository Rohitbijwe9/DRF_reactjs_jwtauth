Django RestFramework API with JWT Authentication Intergration with Reactjs frontend. a) DRF API Creation process steps:

Create Virtual Environment : python -m venv env_name(any name)
Activate venv : env\Scripts\activate
Loads environment variables from dotenv filesremote: Repository not found.
fatal: repository 'https://github.com/Rohitbijwe9/DRF_reactjs_JWT_auth.git/' not found      :pip install python-dotenv

Install djangorestframework : pip install djangorestframework
Loads environment variables from .env file:pip install python-dotenv
create project : djnago-admin startproject project_name
create app/module : djnago-admin startapp app_name
cd app_name
py manage.py migrate
py manage.py runserver
b) DRF integration with Reactjs

pip install django-cors-headers
setting.py : INSTALLED_APPS = [ 'corsheaders','rest-framework'] MIDDLEWARE = [ 'corsheaders.middleware.CorsMiddleware'] CORS_ORIGIN_WHITELIST = ['http://localhost:3000']
c) Frontend Reactjs creation process step

npx create-react-app app_name
cd app_name
npm install bootstrap
npm install react-router-dom
npm install react-hook-form
npm install axios
npm start
add into package.json file : "proxy":"http://localhost:8000"
