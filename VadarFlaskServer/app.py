from flask import Flask
from flask import jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route("/")
def start():
    return "server Alive"


@app.route("/score/<sentence>")
def hello(sentence):
    analyser = SentimentIntensityAnalyzer()
    score = analyser.polarity_scores(sentence)
    return jsonify(score)


if __name__ == "__main__":
    app.run()
