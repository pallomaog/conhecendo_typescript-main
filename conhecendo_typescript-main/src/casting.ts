namespace casting {
    let idade: any = 18;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).forEach(x => {
        console.log(x);
    })

    let nome: string = 35 as unknown as string;
    nome.length
};