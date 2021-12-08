from flask import Flask
from flask import jsonify
from flask import request
from flask import  render_template
from flask_cors import CORS
from demo import Service_portfolio
app = Flask(__name__)
CORS(app, resources=r'/*')
@app.route('/')
def index():
    return  render_template('Quickchat UI Themes.html')
CORS(app, resources=r'/*')
@app.route('/buptsp',methods=['POST'])
def hello():
    sp = Service_portfolio("service_data.json", "module_data.json")
    return jsonify(sp.forward(request.values["message"]))
if __name__ == '__main__':
    app.debug = True # 设置调试模式，生产模式的时候要关掉debug
    app.run()