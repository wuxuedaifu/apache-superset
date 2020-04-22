from flask import Flask
from flask_admin import Admin, BaseView, expose

app = Flask(__name__)

admin = Admin(app,name=u'后台管理系统')

app.run()