# 📈 PricePulse: AI-Powered Nifty 50 Stock Prediction

<div align="center">
  
  ![Python](https://img.shields.io/badge/Python-3.8+-3776AB?style=for-the-badge&logo=python&logoColor=white)
  ![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
  ![Keras](https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white)
  ![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)
  
  **Predicting Market Movements with Deep Learning Excellence**
  
  *Harnessing the power of LSTM neural networks to decode Nifty 50 stock patterns*
  
  [🔗 Live Demo](https://huggingface.co/spaces/sourize/Nifty50) • [📚 Read My Journey](https://sourish.xyz/thoughts/predicting-nifty50-stock-prices-using-lstm) • [📊 Results](#-results)
  
</div>

---

## 🎯 Project Vision

PricePulse transforms the complex world of stock market prediction through advanced deep learning techniques. By leveraging Long Short-Term Memory (LSTM) networks, this project captures intricate temporal dependencies in Nifty 50 stock data, achieving remarkable prediction accuracy that surpasses traditional regression models.

### 🚀 **The Evolution**
- **Phase 1:** Regression Model → 90% Accuracy ✅
- **Phase 2:** LSTM Implementation → Enhanced Temporal Understanding 🧠
- **Future:** Real-time Prediction Dashboard 🔮

---

## ✨ Key Highlights

<table>
<tr>
<td width="50%">

### 🧠 **Deep Learning Architecture**
- **LSTM Neural Networks** for sequential pattern recognition
- **Multi-layered approach** capturing short and long-term dependencies
- **Optimized hyperparameters** for maximum performance

</td>
<td width="50%">

### 📊 **Data Excellence**
- **Comprehensive preprocessing** pipeline
- **Feature engineering** with key financial indicators
- **Normalized datasets** for optimal model training

</td>
</tr>
</table>

### 🎯 **Core Features**

```python
class PricePulse:
    def __init__(self):
        self.model_type = "LSTM"
        self.target = "Nifty 50 Stock Prices"
        self.accuracy = ">90%"
        self.framework = "TensorFlow/Keras"
    
    def capabilities(self):
        return {
            "temporal_analysis": "Advanced time-series pattern recognition",
            "feature_engineering": "Multi-dimensional financial metrics",
            "model_comparison": "LSTM vs Traditional Regression",
            "visualization": "Interactive charts and predictions"
        }
```

---

## 🛠️ Technology Stack

### **Core Technologies**
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)
![Keras](https://img.shields.io/badge/Keras-D00000?style=flat-square&logo=keras&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)
![NumPy](https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=numpy&logoColor=white)

### **Data & Visualization**
![Matplotlib](https://img.shields.io/badge/Matplotlib-11557c?style=flat-square&logo=matplotlib&logoColor=white)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![Jupyter](https://img.shields.io/badge/Jupyter-F37626?style=flat-square&logo=jupyter&logoColor=white)

---

## 🚀 Quick Start Guide

### **Prerequisites**
```bash
Python 3.8+
TensorFlow 2.x
Pandas, NumPy, Matplotlib
Scikit-learn
Jupyter Notebook
```

### **Installation & Setup**

```bash
# 1. Clone the repository
git clone https://github.com/sourize/stockpredictionmodel.git
cd stockpredictionmodel

# 2. Create virtual environment (recommended)
python -m venv pricepulse-env
source pricepulse-env/bin/activate  # On Windows: pricepulse-env\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Launch Jupyter Notebook
jupyter notebook nifty50_LSTM.ipynb
```

### **🎮 Running the Model**

1. **Data Loading & Preprocessing**
   - Execute cells 1-3 to load and clean the Nifty 50 dataset
   
2. **Feature Engineering**
   - Run cells 4-6 to create technical indicators and features
   
3. **Model Training**
   - Execute the LSTM model training cells (7-10)
   
4. **Prediction & Evaluation**
   - Generate predictions and view performance metrics (cells 11-15)

---

## 📊 Results

### **Performance Metrics**

| Model Type | Accuracy | MAE | RMSE | Training Time |
|------------|----------|-----|------|---------------|
| Regression | 90.0% | 0.045 | 0.062 | 2 min |
| **LSTM** | **>90%** | **0.038** | **0.051** | **8 min** |

### **Key Achievements**
- ✅ **Superior Accuracy:** LSTM outperforms traditional regression
- ✅ **Temporal Understanding:** Captures market momentum and trends  
- ✅ **Robust Predictions:** Consistent performance across different market conditions
- ✅ **Scalable Architecture:** Easily adaptable to other stock indices

---

## 📈 Model Architecture

```
Input Layer (60 time steps)
     ↓
LSTM Layer 1 (50 units, return_sequences=True)
     ↓
Dropout (0.2)
     ↓
LSTM Layer 2 (50 units, return_sequences=True)
     ↓
Dropout (0.2)
     ↓
LSTM Layer 3 (50 units)
     ↓
Dropout (0.2)
     ↓
Dense Layer (1 unit)
     ↓
Output (Predicted Price)
```

---

## 🔬 Deep Dive: What Makes It Special?

### **1. Temporal Memory**
Unlike traditional models, LSTM remembers important information from previous time steps, making it perfect for stock market analysis where past trends influence future movements.

### **2. Vanishing Gradient Solution**
LSTM's sophisticated gate mechanism prevents the vanishing gradient problem, enabling learning from long-term dependencies in stock price data.

### **3. Feature-Rich Input**
The model doesn't just look at prices—it analyzes:
- **Technical Indicators:** Moving averages, RSI, MACD
- **Volume Patterns:** Trading volume trends
- **Market Sentiment:** Volatility indices

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Areas for Contribution**
- 🔄 **Model Improvements:** Experiment with different architectures
- 📊 **Feature Engineering:** Add new technical indicators
- 🎨 **Visualization:** Enhance charts and dashboards
- 📝 **Documentation:** Improve guides and tutorials

### **How to Contribute**
```bash
# Fork the repository
git fork https://github.com/sourize/stockpredictionmodel.git

# Create feature branch
git checkout -b feature/amazing-improvement

# Make your changes and commit
git commit -m "Add amazing improvement"

# Push to your fork and create PR
git push origin feature/amazing-improvement
```

---

## 📚 Learning Resources

- 📖 **[My Complete Journey](https://sourish.xyz/blog/predicting-nifty50-stock-prices-with-lstm)** - Detailed blog post about the development process
- 🎥 **[LSTM Explained](https://github.com/sourize/stockpredictionmodel/wiki)** - Understanding the architecture
- 📊 **[Stock Market Basics](https://github.com/sourize/stockpredictionmodel/wiki)** - Financial concepts used in the project

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Data Sources:** NSE India for historical Nifty 50 data
- **Inspiration:** The incredible potential of AI in financial markets
- **Community:** Open-source contributors and the ML community
- **Research:** Academic papers on LSTM applications in finance

---

<div align="center">

### ⭐ **Found this project helpful?**

**Give it a star!** ⭐ and feel free to fork, contribute, or reach out with questions.

**Built with ❤️ by [Sourish](https://github.com/sourize)**

[🐦 Twitter](https://x.com/sourize_) • [💼 LinkedIn](https://linkedin.com/in/sourishchatterjeeml) • [📝 Blog](https://sourish.xyz/blog/predicting-nifty50-stock-prices-using-lstm)

---

*"In the world of stock prediction, those who understand both markets and machines will lead the future."*

</div>
