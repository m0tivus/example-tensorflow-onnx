//const ort = require('onnxruntime-web');

async function main() {
    const session = await ort.InferenceSession.create("../models/model.onnx", {executionProviders: ['wasm']});
    const input = new String(session.inputNames[0]);
    const output = new String(session.outputNames[0]);
    const data = Float32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const data_tensor = new ort.Tensor('float32', data, [3, 4]);
    //console.log(input);
    const feeds = {[input] : data_tensor};
    //console.log(feeds);
    //console.log(output);
    const result = await session.run(feeds);
    document.write(result[output].data);
    
}
main();
