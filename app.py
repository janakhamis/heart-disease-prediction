from flask import Flask, render_template, request
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import os

# Initialize Flask app
app = Flask(__name__)

# Load the trained heart disease prediction model
model = tf.keras.models.load_model("heart_disease_model.h5")

# Define a function to preprocess input and make a prediction
def predict_risk(user_input):
    # Convert input into a NumPy array and reshape it for the model
    input_data = np.array([user_input]).reshape(1, -1)
    
    # Get prediction from the model
    prediction = model.predict(input_data)[0][0]  # Assuming model outputs a single value
    
    # Convert the prediction to a percentage
    risk_percentage = round(prediction * 100, 2)
    
    return risk_percentage

# Define route for the home page
@app.route("/", methods=["GET", "POST"])
def index():
    risk = None  # Default value for risk

    if request.method == "POST":
        try:
            # Get user inputs from the form
            age = int(request.form["age"])
            gender = int(request.form["gender"])  # 0 = Female, 1 = Male
            cp = int(request.form["cp"])  # Chest pain type
            chol = float(request.form["chol"])  # Cholesterol level
            thalach = float(request.form["thalach"])  # Max heart rate

            # Create an input list (Modify this if more features are needed)
            user_input = [age, gender, cp, chol, thalach]

            # Make a prediction
            risk = predict_risk(user_input)

            # Generate a bar chart for visualization
            plt.figure(figsize=(4, 3))
            labels = ["Low", "Medium", "High"]
            values = [max(0, 100 - risk), min(100, risk), max(0, risk - 50)]
            plt.bar(labels, values, color=["green", "orange", "red"])
            plt.xlabel("Risk Level")
            plt.ylabel("Probability (%)")
            plt.title("Heart Disease Risk Distribution")

            # Save the plot as an image
            img_path = os.path.join("static", "risk_plot.png")
            plt.savefig(img_path)
            plt.close()

        except Exception as e:
            print("Error processing input:", e)

    # Render the index.html template and pass the risk variable
    return render_template("index.html", risk=risk)

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)