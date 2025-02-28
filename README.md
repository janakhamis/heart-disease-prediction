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

## **Models Tested & Performance Comparison**
To ensure the best predictive performance, we tested and evaluated **three different machine learning models**:

| Model | Accuracy |
|--------|----------|
| **Neural Network (Deep Learning - Keras/TensorFlow)** | **1.0000 (100%)** |
| **Random Forest Classifier** | **0.97 (97%)** |
| **Decision Tree Classifier** | **0.96 (96%)** |

### **Why We Chose the Neural Network Model**
- The **Neural Network** achieved the highest accuracy (**100%**) compared to the other models.
- It demonstrated superior learning capability and **generalization**, reducing misclassification errors.
- The model effectively captured **complex relationships** within the dataset, improving predictive power.

## **Dataset & Features**
The dataset used in this project contains various health-related parameters that may contribute to **heart disease risk**. Below are the key features:

| Feature | Description |
|---------|------------|
| **Age** | Age of the individual |
| **Gender** | Male (1) or Female (0) |
| **Chest Pain Type (CP)** | Types: Typical Angina, Atypical Angina, Non-Anginal Pain, Asymptomatic |
| **Resting Blood Pressure (trestbps)** | Blood pressure measured in mmHg |
| **Cholesterol (chol)** | Serum cholesterol level (mg/dL) |
| **Fasting Blood Sugar (fbs)** | 1 if fasting blood sugar > 120 mg/dL, otherwise 0 |
| **Resting ECG (restecg)** | Electrocardiographic results |
| **Max Heart Rate Achieved (thalach)** | Maximum recorded heart rate |
| **Exercise-Induced Angina (exang)** | 1 = Yes, 0 = No |
| **Oldpeak (ST Depression)** | ST segment depression in ECG |
| **Slope of Peak Exercise ST Segment** | Indicates heart stress test results |
| **Number of Major Vessels Colored by Fluoroscopy (ca)** | Ranges from 0 to 3 |
| **Thalassemia (thal)** | 3 = Normal, 6 = Fixed Defect, 7 = Reversible Defect |
| **Target (Risk)** | 1 = High chance of heart disease, 0 = Low chance |

---