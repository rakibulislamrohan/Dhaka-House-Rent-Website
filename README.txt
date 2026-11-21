DHAKA HOUSE RENT PREDICTOR WEBSITE

Files:
- index.html: website structure
- style.css: responsive design
- script.js: live Linear Regression calculation and chart

HOW TO RUN:
1. Extract this ZIP file.
2. Open the folder.
3. Double-click index.html (Chrome recommended).
4. Enter bedrooms (1 to 6), then click Calculate estimated rent.

MODEL DETAILS FROM YOUR UPLOADED NOTEBOOK:
Slope: 15403.291242428066
Intercept: -17630.388274696583
MAE: 7858.9824439989015 BDT
MSE: 340133347.4506125
RMSE: 18442.704450557474 BDT
R2: 0.18951025623060969

IMPORTANT:
- The notebook's final Linear Regression cell uses Bed as its only input feature.
- Formula: predicted rent = slope * bedrooms + intercept.
- The displayed metrics are copied from the notebook output.
- R2 is relatively low, so predictions are rough estimates only.
- The chart uses the model formula, not raw individual test records.
- Chart.js and Google Fonts are loaded from CDNs, so internet is needed for those visual elements.
- This is a static frontend. It does not load or execute the sklearn .pkl file.
