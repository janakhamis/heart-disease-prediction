#  Heart Disease Risk Prediction Web App

##  Project Overview
Heart disease is one of the leading causes of death worldwide, and early detection is crucial for preventative care and treatment. This project aims to build a machine learning-powered web application that predicts a user's heart disease risk based on key health parameters.

The web app leverages a deep learning model (Neural Network) trained on a heart disease dataset, taking user inputs such as age, cholesterol, chest pain type, fasting blood sugar, and more to estimate the probability of heart disease.

---

 ##  Objectives
- Develop a **Flask web application** that allows users to input health parameters.
- Use a **trained deep learning model** to predict heart disease risk.
- Display **personalized risk percentage and a visualization**.
- Provide **user-friendly explanations** with tooltips for each input field.

##  Installation & Setup
 1. Prerequisites
 
Ensure you have the following installed:

```bash
pip install flask
pip install tensorflow
pip install scikit-learn
pip install pandas
pip install numpy
pip install matplotlib
pip install psycopg2
```

 2. Clone the Repository

```sh
git clone https://github.com/yourusername/heart-disease-predictor.git
cd heart-disease-predictor
```
3. Create a Virtual Environment
    1. Run the following in the terminal to create a virtual environment:
   ```bash
   conda create -n dev python=3.10 anaconda -y
   ```
    2. Activate the virtual environment:
     ```bash
     conda activate dev
     ```
4. Run the Web App

```bash
python app.py
```

The app will be available at: http://127.0.0.1:5000/