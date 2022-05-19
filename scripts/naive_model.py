import tensorflow as tf
print(tf.version.VERSION) 


model = tf.keras.Sequential([tf.keras.layers.Dense(32, activation='relu', input_shape=(4,)),
    tf.keras.layers.Dense(1)])

print(model.summary())

model.save('./models/naive')

