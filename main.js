var form = document.getElementById('inputForm');
form.addEventListener('submit',runNetwork);

function runNetwork(e){
  if (e.preventDefault) e.preventDefault();

  var input = JSON.parse('[' + document.getElementById('inputForm').input1.value.toString() + ']');

  //setup nerual net framework

  function perceptron (initialWeight, biasWeight){
    this.initialWeight = inputWeight;
    this.biasWeight = biasWeight;
    this.bias = -1;
    this.weights = [];

    function percieve(input){

      function sigmoid(t) {
        return 1/(1+Math.pow(Math.E, -t));
      }

      if (input.length === weights.length){
        var sum = 0;
        sum += bias * biasWeight;
        for (var i = 0; i < inputs.length; i++){
          sum += weights[i]*inputs[i];
        }
        return sigmoid(sum);
      }
      else{
        return null;
      }
    }

  };

  function nerualNet(perceptrons, numberInputs, learningRate){

    for(var i = 0; i < perceptrons.length; i++){
      if (i === 0){
        for (var j = 0; j < perceptrons[0].length; j++){
          for (var k = 0; k < numberInputs; k++){
            perceptrons[0][j].weights[k].push(perceptrons[0][j].initialWeight);
          }
        }
      }
      else{
        for (var k = 0; k < perceptrons[i].length; k++){
          for (var j = 0; j < perceptrons[i-1].length; j++){
            perceptrons[i][k].weights[j].push(perceptrons[i][k].initialWeight);
          }
        }
      }
    }

    function backProp(input, rounds){
      
    };

    function forwardProp(input){
      function computeLayer(input,layer){
        var output = [];
        for (var i = 0; i < layer.length; i++){
          output.push(layer[i].percieve(input));
        }
        return output;
      }

      for(var i = 0; i < perceptrons.length; i++){
        input = computeLayer(input, perceptrons[i]);
      }
      return input;
    };

  };

  var perceptron1 = new perceptron(.5,.5);
  var perceptron2 = new perceptron(.5,.5);
  var mainNet = new neuralNet([[percptron1],[perceptron2]],input.length - 1,.4);



}
