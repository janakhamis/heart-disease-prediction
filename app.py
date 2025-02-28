# Import our dependencies
from flask import Flask, render_template, request
import tensorflow as tf
from tensorflow.keras.models import load_model
import numpy as np
import pickle

# Initialize the Flask app
app = Flask(__name__)

# Load the trained model and scaler

model = load_model('models/heart_disease_model.h5')

with open('models/scaler.pkl', 'rb') as scaler_file:
    scaler = pickle.load(scaler_file)

# Route for the main home page
@app.route('/')
def index():
    return render_template('index.html')

# Route for handling form submission and making predictions
@app.route('/predict', methods=['POST'])
def predict():

    # Get form data
    age = int(request.form['age']) # Age input
    gender = int(request.form['gender']) # Gender input
    cp = int(request.form['cp']) # Chest pain type
    trestbps = int(request.form['trestbps']) # Resting blood pressure
    chol = int(request.form['chol']) # Serum cholesterol
    fbs = int(request.form['fbs']) # Fasting blood sugar
    restecg = int(request.form['restecg']) # Resting electrocardiographic results
    thalachh = int(request.form['thalachh']) # Maximum heart rate achieved
    exang = int(request.form['exang']) # Exercise induced angina
    oldpeak = float(request.form['oldpeak']) # ST depression induced by exercise relative to rest
    slope = int(request.form['slope']) # Slope of the peak exercise ST segment
    ca = int(request.form['ca']) # Number of major vessels colored by fluoroscopy
    thal = int(request.form['thal']) # Thalassemia (a blood disorder)

    # Prepare input data for the model
    input_data = np.array([age, gender, cp, trestbps, chol, fbs, restecg, thalachh, exang, oldpeak, slope, ca, thal]).reshape(1, -1)

    # Normalize input data using the saved scaler
    input_data_scaled = scaler.transform(input_data)

    # Use the model to make a prediction based on the scaled input data
    prediction = model.predict(input_data_scaled)

    # Show the result
    if prediction[0] == 1: # If prediction is 1, high risk
        result = "You are at high risk of heart attack."
    else:  # If prediction is 0, low risk
        result = "You are at low risk of heart attack."
        
    return render_template('result.html', result=result)

if __name__ == '__main__':
    app.run(debug=True)
