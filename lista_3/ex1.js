function planoCart(x,y){
    if(x==0 && y==0){
        return 'Origem'
    }
    else if(x==0){
        return 'Eixo Y'
    }
    else if(y==0){
        return 'Eixo X'
    }
    else if(x>0 && y>0){
        return 'Q1'
    }
    else if(x<0 && y>0){
        return 'Q2'
    }
    else if(x<0 && y<0){
        return 'Q3'
    }
    else{
        return 'Q4'
    }
}

console.log(planoCart(0,0))
const entradas = [
    [4.5, -2.2], 
    [0.1, 0.1], 
    [0.0, 0.0]
];

entradas.forEach(([x, y]) => {
    console.log(planoCart(x, y));
});