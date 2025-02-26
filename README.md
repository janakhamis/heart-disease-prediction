# Heart Disease Prediction
##  Project Overview
Heart disease is one of the leading causes of death worldwide, and early detection is crucial for preventative care and treatment. This project aims to build a machine learning-powered web application that predicts a user's heart disease risk based on key health parameters.

The web app leverages a deep learning model (Neural Network) trained on a heart disease dataset, taking user inputs such as age, cholesterol, chest pain type, fasting blood sugar, and more to estimate the probability of heart disease.

##  Objectives
- Develop a **Flask web application** that allows users to input health parameters.
- Use a **trained deep learning model** to predict heart disease risk.
- Display **personalized risk percentage and a visualization**.
- Provide **user-friendly explanations** with tooltips for each input field.

## Getting Started
1. Install Python on your computer.
```
https://www.python.org/downloads/
```
2. Create a new environment.
```
conda create -n dev python=3.10 anaconda -y
```
3. Activate the environment.
```
conda activate dev
```
4. Install all the required dependencies.
```
pip install -r requirements.txt
```
5. Clone this repository to your local computer using `git clone`.
6. To run the neural network model, create a new notebook on [Google Colab](https://colab.research.google.com/), then upload the Jupyter Notebook `heart_disease.ipynb` from your local repository.
7. Run each cell sequentially to perform data cleaning, analysis, visualizations, and train the neural network model.
8. Open the repository in Visual Studio Code.
9. Open the terminal and run the `app.py` file using the following command:
```
python app.py
```
10. The terminal should generate the server link http://127.0.0.1:5000/ .
11. Press `Ctrl` + Click the link to open the app in your default browser.

## Cleaning the Data:
1. Renamed columns: `target` to `risk` and `sex` to `gender`.
2. Check to ensure no missing values.
3. Converted the cleaned DataFrame into a CSV and downloaded it.

## Data Exploration:
Generated the following graphs:
  * A bar chart showing the distribution of ages among participants.
  * A scatter plot to visualize the relationship between age and cholesterol level of participants.
  * A pie chart that shows the ratio of female and male participants in the dataset.
  * A pie chart showing a majority of participants in the dataset have Fasting blood sugar above 120 mg/dl.
  * A bar chart that plots the number of participants against the likelihood of having a heart attack.

## Data Analysis and Visualizations:
Answered the following questions:
1. Which features are the most indicative of an individual having heart disease?
![Features vs Risk](graphs/feature_correlation_with_risk.png)
2. What is the distribution of heart disease across different age groups?
![Age Distribution](graphs/Age%20Distribution%20of%20Individuals%20with%20more%20or%20less%20Heart%20Disease%20Risk.png)
3. How does oldpeak (ST depression) affect the possibility of a heart attack?
![ST depression vs possibility of heart attack](graphs/Effect%20of%20Oldpeak%20on%20Heart%20Disease%20Ris.png)
4. Are there threshold values for features like resting heart pressure or cholesterol levels that indicate a higher chance of having heart disease?
![Resting Blood Pressure Distribution](graphs/Resting%20Blood%20Pressure%20Distribution%20for%20Heart%20Disease%20Risk.png)
![Cholesterol Levels Distribution](graphs/Cholesterol%20Levels%20Distribution%20for%20Heart%20Disease%20Risk.png)

## Machine Learning Models:
1. Neural Network Model
   * Used `risk` as the target variable and everything else as feature variables.
   * Split the preprocessed data into training and testing, then scaled the data.
   * Defined the deep neural network, specifying the following:
      * Three hidden layers with 120, 60, and 30 neurons, respectively.
      * Used the `ReLU` activation function for all the hidden layers and `sigmoid` for the output layer.
   * Compiled and trained the model.
      * Achieved an accuracy of 100%.
   * Exported and saved our model as a HDF5 file and our scaler as a PKL file.
   * Evaluated our model using test data.
      * Achieved an accuracy of 96.82%.
2. Random Forest Model
   * Created a Random Forest Classifier, fitted the model, and made predictions using testing data.
   * Calculated the confusion matrix, accuracy score, and feature importance.
3. Decision Tree Model
   * Created a Decision Tree Classifier, fitted the model, and made predictions using testing data.
   * Calculated the confusion matrix and accuracy score.

## **Models Tested & Performance Comparison**
To ensure the best predictive performance, we tested and evaluated **three different machine learning models**:

| Model | Accuracy |
|--------|----------|
| **Neural Network (Deep Learning - Keras/TensorFlow)** | **1.00 (100%)** |
| **Random Forest Classifier** | **0.97 (97%)** |
| **Decision Tree Classifier** | **0.96 (96%)** |

### Why We Chose the Neural Network Model
- The **Neural Network** achieved the highest accuracy (**100%**) compared to the other models.
- It demonstrated superior learning capability and **generalization**, reducing misclassification errors.
- The model effectively captured **complex relationships** within the dataset, improving predictive power.

## **Dataset & Features**
The dataset used in this project contains various health-related parameters that may contribute to **heart disease risk**. Below are the key features:

| Feature | Description |
|---------|------------|
| **Age** | Age of the individual |
| **Gender** | Male (1) or Female (0) |
| **Chest Pain Type (cp)** | Types: Typical Angina, Atypical Angina, Non-Anginal Pain, Asymptomatic |
| **Resting Blood Pressure (trestbps)** | Blood pressure measured in mmHg |
| **Cholesterol (chol)** | Serum cholesterol level (mg/dL) |
| **Fasting Blood Sugar (fbs)** | 1 if fasting blood sugar > 120 mg/dL, otherwise 0 |
| **Resting ECG (restecg)** | Electrocardiographic results |
| **Max Heart Rate Achieved (thalach)** | Maximum recorded heart rate |
| **Exercise-Induced Angina (exang)** | 1 = Yes, 0 = No |
| **Oldpeak (ST Depression) (oldpeak)** | ST segment depression in ECG |
| **Slope of Peak Exercise ST Segment (slope)** | Indicates heart stress test results |
| **Number of Major Vessels Colored by Fluoroscopy (ca)** | Ranges from 0 to 3 |
| **Thalassemia (thal)** | 3 = Normal, 6 = Fixed Defect, 7 = Reversible Defect |
| **Target (risk)** | 1 = High chance of heart disease, 0 = Low chance |

## Building the Web App:
**HTML**:
1. Built the structure and the layout of the dashboard.
2. Imported the necessary libraries, such as Leaflet.js, Plotly.js, Bootstrap, and Google Fonts.
3. Created different sections for the state filter dropdown menu and visualizations.

**Javascript**:
1. Loaded the data from the `sample_complaints.json` using D3.js.
2. Built a function to populate the state name dropdown.
3. Created the choropleth map and bar charts, which would change based on the state selected.
4. Implemented interactive map clicking that filters the dashboard.
 
## Dashboard:
- **State Filter Dropdown Menu**:
  - The default option is set to "All".
  - Users can filter the data by state.

- **Complaints Summary**:
  - Total Complaints: Displays the total number of complaints for all states or the selected state.
  - Timely Response: Shows the total number of complaints that received timely responses for all states or the selected state.

- **US Map**:
  - Visually displays the state selected
  - Users can hover over each state to see the number of complaints and the state abbreviation.
  - Allows users to click on a state to filter the entire dashboard.
  - A colour gradient is shown based on the number of complaints each state receives when all states are selected.

- **Bar Charts**:
  - Complaints by Product: Shows the number of complaints by product for all states or the selected state.
  - Complaints by Issue: Displays the top 10 complaints by issue for all states or the selected state.

## Ethical Considerations:
We ensured the dataset was publicly available and provided by the United States government. Any sensitive information in the dataset is anonymized, and the study does not reinforce regional or demographic biases. Visualizations and insights are given honestly to ensure fairness and openness. Data is presented without bias or manipulation to alter outcomes.

## Datasets:
- complaints.csv
- state_names.csv
- logo.png

## Outputs:
- sample_complaints.csv
- sample_complaints.json
- index.html
- Number of Complaints Per Month.png

## How to Run it 
1. Open the cloned file in the Visual Studio Code:
   1. Go to file > Open Folder and navigate to the folder where you cloned the repository.
   2. Select the folder to open in VS code.
2. Run the Jupyter Notebook:
     1. Open the notebook file (complaints_notebook.ipynb) in VS code or Jupyter.
     2. Run the cells to perform the Analysis.
3. Run the HTML file:
    1. Right-click on the HTML file (index.html) and click "Open with Live Server".
    2. Alternatively, open the HTML file (index.html) and press Alt + L followed by Alt + O.

## Group Members:
- Jana Khamis
- Paul Schaefer
- King Yuet Lau (Janette)

## References:
- “Consumer Complaint Database.” Consumer Financial Protection Bureau, www.consumerfinance.gov/data-research/consumer-complaints/. Accessed 7 Jan. 2025.
- Pettini, Francesco. “US State Names Codes and Abbreviations.” Kaggle, 15 Feb. 2022, www.kaggle.com/datasets/francescopettini/us-state-names-codes-and-abbreviations.
