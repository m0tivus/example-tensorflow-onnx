async function main() {
    const session = await ort.InferenceSession.create("../models/model.onnx", {executionProviders: ['wasm']});
    const data = Float32Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const data_tensor = new ort.Tensor('float32', data, [3, 4]);
    const feeds = { dense_input: data_tensor};
    const result = await session.run(feeds);
    document.write(result.dense_1.data);
    
}
main();
