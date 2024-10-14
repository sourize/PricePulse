import streamlit as st
import joblib
import pandas as pd

# Load the trained model
model = joblib.load('random_forest_model.pkl')

# Title of the app
st.title("Nifty 50 Prediction Model")

# Add an image to the app
st.image('Stock.webp', caption='Stock Prediction Image')  # Update with your image path

# Get user input for the 'Close Price' in Rupees
close_price = st.number_input("Enter Close Price in Rupees", min_value=0.0, format="%.2f")

# Define a prediction function
def predict():
    # Prepare input data for prediction using close price
    input_data = pd.DataFrame([[close_price]], columns=['close_price'])  # Ensure 'close_price' matches the model's expected input
    
    # Predict the next day's open price using the loaded model
    prediction = model.predict(input_data)
    
    # Display the predicted open price in bold with Rs sign
    st.markdown(f"**Predicted Open Price for the next day: ₹{prediction[0]}**")  # Updated output format

# Trigger prediction when the button is clicked
st.button('Predict', on_click=predict, args=())  # Ensure args are passed if needed
