from flask import Flask, jsonify

app = Flask(__name__)

# 初始化计数器
visit_count = 0

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!123123</p>"
    
@app.route("/api/test")
def hello_test():
    global visit_count
    visit_count += 1
    print(f' hahdhhdh = count {visit_count}')
    return jsonify({"message": "Hello, World!", "count": visit_count})
