# example-tensorflow-onnx

Tensorflow, and onnx are needed (see requirements.txt)

Create a simple tensorflow model using at `models/naive` with

    python scripts/naive_model.py

To transform the tensorflow model to onnx do 

    python -m tf2onnx.convert --saved-model models/naive/ --output models/model.onnx --verbose

note the input/output names, this are used in the javascript call to the model

To test the model using onnx-js

    python -m http.server 

And open http://localhost:8888/web/demo.html

You should see three floating point number (infereces) in the browser


References

- https://github.com/onnx/tensorflow-onnx
- https://onnxruntime.ai/docs/tutorials/tf-get-started.html
- https://github.com/microsoft/onnxruntime/tree/master/js/web
- https://github.com/microsoft/onnxruntime-inference-examples/tree/main/js 
- 
