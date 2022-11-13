export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}


export const levels: Level[] = [
    { title: 'Magreza', color: '#96AB', icon: 'down', imc: [0, 18.59] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.60, 24.99] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25.00, 30.99] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.10, 99.00] },];

export const calculateImc = (height: number, weight: number)  =>{
    const imc = (weight / (height * height));
    
    /*levels.forEach((value, index)=>{
        if( imc >= levels[index].imc[0] && imc <= levels[index].imc[1] ){
            levels[index].yourImc = parseFloat(imc.toFixed(2));
            return levels[index];
        }else{
            return null;
        }
    })*/
    for(let i in levels){
        if( imc > levels[i].imc[0] && imc < levels[i].imc[1] ){
            let levelCopy = {...levels[i]};
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }
    return null

    
}