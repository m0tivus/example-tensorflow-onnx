# example-tensorflow-onnx


Create a tensorflow model using:

    python scripts/naive_model.py

To transform a tensorflow model to onnx install tf2onnx (see requirements.txt) and then

    python -m tf2onnx.convert --saved-model models/naive/ --output models/model.onnx --verbose

(take note of input/output names)

To test the model using onnx-js

    python -m http.server 

And open http://localhost:8888/web/demo.html


References

- https://github.com/onnx/tensorflow-onnx
- https://onnxruntime.ai/docs/tutorials/tf-get-started.html
- https://github.com/microsoft/onnxruntime/tree/master/js/web
- https://github.com/microsoft/onnxruntime-inference-examples/tree/main/js 
- 
