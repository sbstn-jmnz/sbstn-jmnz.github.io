import "/vite-dev/js/codemirror.js";
import "/vite-dev/js/editor-js.js";
import __vite__cjsImport2_plotly_jsDistMin from "/vite-dev/@fs/home/sbstn/sbstn-jmnz.github.io/node_modules/.vite/deps/plotly__js-dist-min.js?v=8012ecab"; const Plotly = __vite__cjsImport2_plotly_jsDistMin.__esModule ? __vite__cjsImport2_plotly_jsDistMin.default : __vite__cjsImport2_plotly_jsDistMin
const sqrtPoints = (num) => {
    let answer = num
    let counter = 1
    
    let x = []
    let y = []
    
    while(answer*answer != num){
        x.push(counter)
        y.push(answer)
        answer = (num/answer + answer) / 2
        counter += 1
    }
    
    return {
        x,
        y,
        mode: 'markers',
        name: `Raiz de ${num}`
    }
};
const layout = {
    title: "Convergencia de la función squareRoot "
}
const data = [sqrtPoints(4), sqrtPoints(9), sqrtPoints(25)];
Plotly.newPlot("gd", data, layout)

