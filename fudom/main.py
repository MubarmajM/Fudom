import flask

app = flask.Flask(__name__)

@app.route('/')
def index():
    return flask.render_template('templates/index.html')
@app.route('/random_number')
def random_number():
    return flask.render_template('templates/random.html')
@app.route('/photos')
def photos():
    return flask.render_template('templates/photos.html')
@app.route('/game_launcher')
def game_launcher():
    return flask.render_template('templates/game_launcher.html')  
@app.route('/game')
def game():
    return flask.render_template('templates/game.html')
@app.route('/home')
def lindex():
    return flask.render_template('templates/lindex.html')
@app.route('/score')
def score():
    return flask.render_template('templates/score.html')
@app.route('/login')
def login():
    return flask.render_template('templates/login.html')
if __name__ == '__main__':
    app.run(debug=True)