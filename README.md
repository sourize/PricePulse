# PricePulse: Nifty 50 Stock Price Prediction Using LSTM

## Project Overview
This project focuses on predicting the stock prices of the Nifty 50 index using a Long Short-Term Memory (LSTM) neural network. Initially, a regression model was implemented to predict stock prices, achieving an accuracy of 90%. Building upon that foundation, this project leverages LSTM, a specialized type of Recurrent Neural Network (RNN), to capture temporal dependencies in the stock market data for improved predictions.

_Read my Learning [here](https://sourish.xyz/blog/predicting-nifty50-stock-prices-with-lstm)_

## Key Features
- **Data Preprocessing**: Cleaned and normalized stock price data to prepare it for the LSTM model.
- **Feature Engineering**: Used key financial metrics to enhance the model's learning capabilities.
- **LSTM Implementation**: Built and trained an LSTM model using TensorFlow/Keras.
- **Model Evaluation**: Compared LSTM's performance against the previously used regression model.

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Python 3.8+
- TensorFlow
- Pandas
- Numpy
- Matplotlib
- Scikit-learn

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/sourize/stockpredictionmodel.git
   ```
2. Navigate to the project directory:
   ```bash
   cd stockpredictionmodel
   ```
3. Install the required libraries:
   ```bash
   pip install -r requirements.txt
   ```

### Usage
1. Open the Jupyter notebook:
   ```bash
   jupyter notebook nifty50_LSTM.ipynb
   ```
2. Run the cells step-by-step to understand the workflow and execute the model.
3. Modify the parameters or input new stock data to experiment with predictions.

## Results
The LSTM model demonstrates enhanced capabilities in capturing temporal patterns and improving prediction accuracy over traditional regression models. Detailed evaluation metrics and visualizations are included in the notebook.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with improvements or new features.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Inspired by advances in deep learning and time-series forecasting.
- Thanks to online datasets and resources for enabling model development and testing.

