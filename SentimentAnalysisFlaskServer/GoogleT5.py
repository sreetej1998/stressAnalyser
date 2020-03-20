from transformers import T5Tokenizer, T5ForConditionalGeneration

class T5SentimentAnalyser:
    def __init__(self):
        self.tokenizer = T5Tokenizer.from_pretrained("t5-base")
        self.model = T5ForConditionalGeneration.from_pretrained("t5-base")

