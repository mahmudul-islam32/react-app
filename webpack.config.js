
module.exports = {
  entry: './app/assets/frontend/main.jsx',
 output: {
  
    path: __dirname + "/app/assets/javascripts" , 
    filename: "bundle.js", 
 },
 
 resolve: {
     extensions: [".js", ".json", ".jsx", ".css"]
 },
 module: {
    
   rules: [
       { test: /\.jsx$/, loader: "babel-loader",
     query:
      {
        presets:['react']
      }
       }
       ]
 }
};
