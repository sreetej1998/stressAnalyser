from flask import Flask
from flask import jsonify
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask_cors import CORS
from transformers import T5Tokenizer, T5ForConditionalGeneration
import GoogleT5

app = Flask(__name__)
CORS(app)
googleT5Sentiment = None

@app.route("/")
def start():
    return "server Alive"


@app.route("/score/<sentence>")
def sentimentAnalysis(sentence):
    analyser = SentimentIntensityAnalyzer()
    score = analyser.polarity_scores(sentence)
    return jsonify(score)

@app.route("/v2/score/<sentence>")
def googleT5Sentiment(sentence):
    input_ids = googleT5Sentiment.tokenizer('sst2 sentence: %s' % sentence, return_tensors='pt').input_ids
    outputs = googleT5Sentiment.model.generate(input_ids)
    print(outputs[0])
    return googleT5Sentiment.tokenizer.decode(outputs[0], skip_special_tokens=True)

# Running the server the first time may take time to run, due to the model download, the latter
# restarts should be quick as the model would be cached.
if __name__ == "__main__":
    googleT5Sentiment = GoogleT5.T5SentimentAnalyser()
    app.run()
